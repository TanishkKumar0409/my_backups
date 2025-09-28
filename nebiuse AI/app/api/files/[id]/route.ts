import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import File from '@/lib/models/File';
import { verifyToken } from '@/lib/auth';
import { unlink } from 'fs/promises';
import path from 'path';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const file = await File.findOneAndDelete({
      _id: params.id,
      userId: payload.userId,
    });

    if (!file) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Delete physical file
    try {
      const filePath = path.join(process.cwd(), 'public', 'uploads', file.filename);
      await unlink(filePath);
    } catch (error) {
      console.error('Error deleting physical file:', error);
      // Continue even if file deletion fails
    }

    return NextResponse.json({ message: 'File deleted successfully' });
  } catch (error: any) {
    console.error('Delete file error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}