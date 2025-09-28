import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Chat from '@/models/Chat';

export async function GET() {
  try {
    await connectDB();

    const chats = await Chat.find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .lean();

    // Reverse to show oldest first
    const history = chats.reverse().map(chat => ({
      id: chat._id.toString(),
      userMessage: chat.userMessage,
      aiResponse: chat.aiResponse,
      fileName: chat.fileName,
      fileType: chat.fileType,
      createdAt: chat.createdAt,
    }));

    return NextResponse.json({ history });
  } catch (error) {
    console.error('History API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chat history' },
      { status: 500 }
    );
  }
}