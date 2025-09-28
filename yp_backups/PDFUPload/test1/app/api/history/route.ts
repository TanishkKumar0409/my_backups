import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Chat } from '@/models/Chat';

export async function GET() {
  try {
    await connectToDatabase();
    
    const history = await Chat.find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .exec();

    // Reverse to show oldest first
    const reversedHistory = history.reverse();

    return NextResponse.json(reversedHistory);
  } catch (error) {
    console.error('History API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chat history' },
      { status: 500 }
    );
  }
}