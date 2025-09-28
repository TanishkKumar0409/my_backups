import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Link from '@/lib/models/Link';
import { verifyToken } from '@/lib/auth';

export async function PUT(
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

    const { title, url, description, tags } = await req.json();

    const link = await Link.findOneAndUpdate(
      { _id: params.id, userId: payload.userId },
      {
        title,
        url,
        description,
        tags: Array.isArray(tags) ? tags : [],
      },
      { new: true }
    );

    if (!link) {
      return NextResponse.json({ error: 'Link not found' }, { status: 404 });
    }

    return NextResponse.json({ link });
  } catch (error: any) {
    console.error('Update link error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

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

    const link = await Link.findOneAndDelete({
      _id: params.id,
      userId: payload.userId,
    });

    if (!link) {
      return NextResponse.json({ error: 'Link not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Link deleted successfully' });
  } catch (error: any) {
    console.error('Delete link error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}