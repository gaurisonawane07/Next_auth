import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware" // Keep this line if you want default NextAuth.js middleware behavior for protected routes
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request }); // You might want to add 'secret: process.env.NEXTAUTH_SECRET' here in a real app
    const url = request.nextUrl;

    // Define paths that authenticated users should be redirected *from*
    const authRestrictedPaths = [
        '/sign-in',
        '/sign-up',
        '/verify',
        '/'
    ];

    if (token) {
        if (authRestrictedPaths.some(path => url.pathname.startsWith(path))) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
        return NextResponse.next();
    } 
    else {
        if (url.pathname.startsWith('/dashboard')) {
            return NextResponse.redirect(new URL('/sign-in', request.url));
        }
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        '/sign-in',
        '/sign-up',
        '/',
        '/dashboard/:path*',
        '/verify/:path*'
    ]
}