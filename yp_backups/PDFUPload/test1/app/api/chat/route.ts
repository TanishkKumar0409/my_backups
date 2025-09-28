import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { connectToDatabase } from '@/lib/mongodb';
import { Chat } from '@/models/Chat';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let response;
    let fileName: string | undefined;
    let fileType: string | undefined;

    if (file) {
      // Convert file to base64
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = buffer.toString('base64');

      fileName = file.name;
      fileType = file.type;

      // Create the file part for Gemini
      const filePart = {
        inlineData: {
          data: base64,
          mimeType: file.type,
        },
      };

      // Generate content with both text and file
      const result = await model.generateContent([
        message + " Please analyze this file and provide a helpful response.",
        filePart,
      ]);

      response = result.response;
    } else {
      // Generate content with just text
      const result = await model.generateContent(message);
      response = result.response;
    }

    const aiResponse = response.text();

    // Connect to database and save the chat
    await connectToDatabase();
    
    const chatEntry = new Chat({
      userMessage: message,
      aiResponse,
      fileName,
      fileType,
    });

    await chatEntry.save();

    return NextResponse.json({
      message: aiResponse,
      chatId: chatEntry._id,
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}