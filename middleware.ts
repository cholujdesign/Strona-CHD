import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/Instructions') {
    const url = request.nextUrl.clone()
    url.pathname = '/instructions'
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: '/Instructions',
}
