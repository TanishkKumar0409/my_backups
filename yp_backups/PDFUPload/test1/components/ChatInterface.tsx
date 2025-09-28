'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, Loader2 } from 'lucide-react';
import ChatMessage from './ChatMessage';
import FileUpload from './FileUpload';
import { IChat } from '@/models/Chat';

export default function ChatInterface() {
  const [messages, setMessages] = useState<IChat[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load chat history on component mount
  useEffect(() => {
    loadChatHistory();
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [inputMessage]);

  const loadChatHistory = async () => {
    try {
      const response = await fetch('/api/history');
      if (response.ok) {
        const history = await response.json();
        setMessages(history);
      }
    } catch (error) {
      console.error('Failed to load chat history:', error);
    } finally {
      setIsLoadingHistory(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() && !selectedFile) return;

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('message', inputMessage);
      
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      // Add user message to UI immediately
      const userMessage: IChat = {
        userMessage: inputMessage,
        aiResponse: '',
        fileName: selectedFile?.name,
        fileType: selectedFile?.type,
        createdAt: new Date(),
      };

      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setSelectedFile(null);

      const response = await fetch('/api/chat', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      // Update the last message with AI response
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1].aiResponse = data.message;
        return updated;
      });

    } catch (error) {
      console.error('Error sending message:', error);
      // Remove the user message if there was an error
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (isLoadingHistory) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen max-w-6xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 p-4 bg-white">
        <h1 className="text-2xl font-bold text-gray-900">AI Chat Assistant</h1>
        <p className="text-sm text-gray-600">Send messages and upload files for AI analysis</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <p className="text-lg mb-2">Welcome to AI Chat!</p>
              <p>Send a message or upload a file to get started.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            {messages.map((message, index) => (
              <div key={`${message._id || index}`}>
                <ChatMessage message={message} isUser={true} />
                {message.aiResponse && (
                  <ChatMessage 
                    message={{...message, userMessage: message.aiResponse}} 
                    isUser={false} 
                  />
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 text-white animate-spin" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-gray-600">AI is thinking...</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <form onSubmit={handleSubmit} className="space-y-3">
          <FileUpload 
            onFileSelect={setSelectedFile}
            selectedFile={selectedFile}
          />
          
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none min-h-[50px] max-h-32"
                disabled={isLoading}
                rows={1}
              />
            </div>
            
            <button
              type="submit"
              disabled={(!inputMessage.trim() && !selectedFile) || isLoading}
              className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}