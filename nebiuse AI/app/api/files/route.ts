import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import File from '@/lib/models/File';
import { verifyToken } from '@/lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const token = req.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const files = await File.find({ userId: payload.userId }).sort({ uploadedAt: -1 });

    return NextResponse.json({ files });
  } catch (error: any) {
    console.error('Get files error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const token = req.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const description = formData.get('description') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds 10MB limit' },
        { status: 400 }
      );
    }

    // Create unique filename
    const timestamp = Date.now();
    const filename = `${timestamp}_${file.name}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    
    // Ensure upload directory exists
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    const filePath = path.join(uploadDir, filename);
    
    // Convert file to buffer and write to disk
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Save file record to database
    const fileRecord = await File.create({
      userId: payload.userId,
      filename,
      originalName: file.name,
      fileUrl: `/uploads/${filename}`,
      description,
      fileSize: file.size,
      mimeType: file.type,
    });

    return NextResponse.json({ file: fileRecord }, { status: 201 });
  } catch (error: any) {
    console.error('Upload file error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}