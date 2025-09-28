import { IChat } from '@/models/Chat';
import { Bot, User, FileText, Image, FileSpreadsheet } from 'lucide-react';

interface ChatMessageProps {
  message: IChat;
  isUser?: boolean;
}

const getFileIcon = (fileType: string | undefined) => {
  if (!fileType) return null;
  
  if (fileType.startsWith('image/')) {
    return <Image className="w-4 h-4" />;
  } else if (fileType === 'application/pdf') {
    return <FileText className="w-4 h-4" />;
  } else if (fileType.includes('sheet') || fileType.includes('csv')) {
    return <FileSpreadsheet className="w-4 h-4" />;
  }
  return <FileText className="w-4 h-4" />;
};

export default function ChatMessage({ message, isUser = false }: ChatMessageProps) {
  const content = isUser ? message.userMessage : message.aiResponse;
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}>
      <div className={`flex max-w-3xl ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-blue-500' : 'bg-gray-500'
        }`}>
          {isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-white" />
          )}
        </div>

        {/* Message Content */}
        <div className={`rounded-lg p-4 ${
          isUser 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-900'
        }`}>
          {/* File attachment indicator */}
          {isUser && message.fileName && (
            <div className="flex items-center gap-2 mb-2 text-blue-100 text-sm">
              {getFileIcon(message.fileType)}
              <span className="truncate">{message.fileName}</span>
            </div>
          )}
          
          {/* Message text */}
          <div className="whitespace-pre-wrap">{content}</div>
          
          {/* Timestamp */}
          <div className={`text-xs mt-2 ${
            isUser ? 'text-blue-100' : 'text-gray-500'
          }`}>
            {new Date(message.createdAt).toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}