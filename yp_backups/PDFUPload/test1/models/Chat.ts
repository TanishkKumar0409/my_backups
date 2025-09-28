import mongoose from 'mongoose';

export interface IChat {
  _id?: string;
  userMessage: string;
  aiResponse: string;
  fileName?: string;
  fileType?: string;
  createdAt: Date;
}

const ChatSchema = new mongoose.Schema<IChat>({
  userMessage: {
    type: String,
    required: true,
  },
  aiResponse: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: false,
  },
  fileType: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Chat = mongoose.models.Chat || mongoose.model<IChat>('Chat', ChatSchema);