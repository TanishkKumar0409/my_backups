import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './auth';

export function authMiddleware(handler: Function) {
  return async (req: NextRequest) => {
    try {
      const token = req.headers.get('Authorization')?.replace('Bearer ', '');
      
      if (!token) {
        return NextResponse.json({ error: 'No token provided' }, { status: 401 });
      }

      const payload = verifyToken(token);
      if (!payload) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
      }

      // Add user info to request
      const requestWithUser = Object.assign(req, { user: payload });
      return await handler(requestWithUser);
    } catch (error) {
      return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
    }
  };
}