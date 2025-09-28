"use client";

import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  userMessage: string;
  aiResponse: string;
  fileName?: string;
  fileType?: string;
  createdAt: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chat history on component mount
  useEffect(() => {
    loadChatHistory();
  }, []);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const loadChatHistory = async () => {
    try {
      const response = await fetch("/api/history");
      const data = await response.json();
      if (data.history) {
        setMessages(data.history);
      }
    } catch (error) {
      console.error("Error loading chat history:", error);
    } finally {
      setIsLoadingHistory(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (limit to 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        return;
      }
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim() && !selectedFile) return;

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("message", currentMessage || "Please analyze this file.");
      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      // Add user message to UI immediately
      const tempMessage: Message = {
        id: Date.now().toString(),
        userMessage: currentMessage || "File uploaded",
        aiResponse: "",
        fileName: selectedFile?.name,
        fileType: selectedFile?.type,
        createdAt: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, tempMessage]);

      const response = await fetch("/api/chat", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // Update the message with AI response
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === tempMessage.id
              ? { ...msg, aiResponse: data.response }
              : msg
          )
        );
      } else {
        // Handle error
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === tempMessage.id
              ? { ...msg, aiResponse: data.error || "An error occurred" }
              : msg
          )
        );
      }

      // Reset form
      setCurrentMessage("");
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Update last message with error
      setMessages((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? {
                ...msg,
                aiResponse: "Network error occurred. Please try again.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  if (isLoadingHistory) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black">Loading chat history...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="border-b border-black p-4">
        <h1 className="text-2xl font-bold text-black">Chat with Gemini AI</h1>
        <p className="text-black text-sm">
          Send messages and upload files (images, PDFs, documents)
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-black text-sm">
            No messages yet. Start a conversation!
          </div>
        )}

        {messages.map((message) => (
          <div key={message.id} className="space-y-2">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-[70%] border border-black p-3 bg-white">
                <div className="text-black whitespace-pre-wrap">
                  {message.userMessage}
                </div>
                {message.fileName && (
                  <div className="text-xs text-black mt-1 border-t border-gray-300 pt-1">
                    📎 {message.fileName}
                  </div>
                )}
              </div>
            </div>

            {/* AI Response */}
            <div className="flex justify-start">
              <div className="max-w-[70%] border border-black p-3 bg-white">
                {message.aiResponse ? (
                  <div className="text-black whitespace-pre-wrap">
                    {message.aiResponse}
                  </div>
                ) : (
                  <div className="text-black">AI is thinking...</div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-black p-4 bg-white">
        {/* File Preview */}
        {selectedFile && (
          <div className="mb-3 p-2 border border-black bg-white">
            <div className="flex items-center justify-between">
              <div className="text-black text-sm">
                📎 {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)}{" "}
                KB)
              </div>
              <button
                onClick={removeFile}
                className="text-black hover:bg-gray-100 px-2 py-1 border border-black"
                type="button"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="flex gap-2">
          <div className="flex-1">
            <textarea
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full p-3 border border-black resize-none bg-white text-black placeholder-gray-500"
              rows={3}
              disabled={isLoading}
            />
          </div>

          <div className="flex flex-col gap-2">
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              accept="image/*,.pdf,.txt,.csv,.docx,.xlsx"
              className="hidden"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 border border-black bg-white text-black hover:bg-gray-100 disabled:opacity-50"
              disabled={isLoading}
              type="button"
            >
              📎 File
            </button>

            <button
              onClick={sendMessage}
              disabled={isLoading || (!currentMessage.trim() && !selectedFile)}
              className="px-4 py-2 border border-black bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:bg-gray-300"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>

        <div className="text-xs text-black mt-2">
          Supported files: Images (PNG, JPEG, GIF, WebP), PDF, Text, CSV, DOCX,
          XLSX (max 10MB)
          <br />
          Note: DOCX and XLSX files will be automatically converted to text/CSV
          for AI analysis
        </div>
      </div>
    </div>
  );
}
