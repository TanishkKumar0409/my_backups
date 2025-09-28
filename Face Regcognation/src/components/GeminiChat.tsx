import React from 'react';
import { Bot, Loader2, MessageCircle } from 'lucide-react';
import type { GeminiResponse } from '../types/face-analysis';

interface GeminiChatProps {
  responses: GeminiResponse[];
  isLoading: boolean;
}

const GeminiChat: React.FC<GeminiChatProps> = ({ responses, isLoading }) => {
  const getResponseIcon = (type: GeminiResponse['type']) => {
    switch (type) {
      case 'error':
        return '❌';
      case 'greeting':
        return '👋';
      case 'emotion':
        return '🎭';
      default:
        return '🤖';
    }
  };

  return (
    <div className="bg-white p-4">

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {responses.length === 0 && !isLoading && (
          <div className="text-center py-4 font-bold text-gray-500">
            <p>Start analysis</p>
          </div>
        )}

        {responses.map((response, index) => (
          <div
            key={`${response.timestamp}-${index}`}
            className="p-3 bg-gray-50 rounded-lg border"
          >
            <div className="flex items-start gap-2">
              <span className="text-lg">{getResponseIcon(response.type)}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                  {response.text}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(response.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeminiChat;