import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const nextResponse = NextResponse.next();
  const token = 'token-value';
  nextResponse.headers.set('X-CSRF-Token', token);
  console.log(`1. middleware: ${token}`);
  return nextResponse;
}