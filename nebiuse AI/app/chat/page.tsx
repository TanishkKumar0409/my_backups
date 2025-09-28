"use client";

import { useState } from "react";
import Link from "next/link";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: number;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content, history: messages }),
      });

      const data = await response.json();

      if (data.success) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response,
          role: "assistant",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        setError(data.error || "Failed to get response");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="text-blue-600 hover:underline">
            &larr; Back
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col h-[calc(100vh-12rem)]">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4">
          {messages.length === 0 && !isLoading ? (
            <div className="bg-white bg-opacity-80 backdrop-blur-sm shadow rounded-lg p-12 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">write a prompt</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, qui.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="bg-blue-800 text-white p-2 rounded-full flex-shrink-0 text-xs font-semibold">
                      Bot
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-md shadow-sm p-4 ${
                      message.role === "user"
                        ? "bg-blue-400 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs mt-2 text-white/80">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>

                  {message.role === "user" && (
                    <div className="bg-blue-400 p-2 rounded-full flex-shrink-0 text-xs font-semibold">
                      User
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start space-x-3 justify-start">
                  <div className="bg-blue-900 text-white p-2 rounded-full flex-shrink-0 text-xs font-semibold">
                    Bot
                  </div>

                  <div className="max-w-[80%] bg-white bg-opacity-90 backdrop-blur-sm rounded-md shadow-sm p-4">
                    <div className="flex items-center space-x-2 text-gray-700 font-medium">
                      AI is thinking...
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-white bg-opacity-80 rounded-md shadow p-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 mb-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="flex space-x-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              rows={1}
              disabled={isLoading}
              autoFocus
              className="flex-1 resize-none border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-gray-500 text-white px-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "loading..." : "send"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
