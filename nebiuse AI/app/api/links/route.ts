import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Link from '@/lib/models/Link';
import { verifyToken } from '@/lib/auth';

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

    const { searchParams } = new URL(req.url);
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');

    let query: any = { userId: payload.userId };

    if (tag) {
      query.tags = { $in: [tag] };
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { url: { $regex: search, $options: 'i' } },
      ];
    }

    const links = await Link.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ links });
  } catch (error: any) {
    console.error('Get links error:', error);
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

    const { title, url, description, tags } = await req.json();

    // Validate input
    if (!title || !url) {
      return NextResponse.json(
        { error: 'Title and URL are required' },
        { status: 400 }
      );
    }

    const link = await Link.create({
      userId: payload.userId,
      title,
      url,
      description,
      tags: Array.isArray(tags) ? tags : [],
    });

    return NextResponse.json({ link }, { status: 201 });
  } catch (error: any) {
    console.error('Create link error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}