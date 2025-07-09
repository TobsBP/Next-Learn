import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {

    const authenticated = false;
 
    if(request.nextUrl.pathname.startsWith("/posts/5") && !authenticated) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    
    return NextResponse.next();
}