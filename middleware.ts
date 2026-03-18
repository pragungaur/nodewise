import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Cloudflare challenge verification POSTs to the original page URL.
  // Returning null/200 causes Safari/iOS to download the empty response as a file,
  // which breaks the challenge and creates a CAPTCHA loop.
  // A 303 redirect converts the POST to a GET, loading the page normally.
  // API routes are excluded so they continue to function as intended.
  if (
    request.method === "POST" &&
    !request.nextUrl.pathname.startsWith("/api/")
  ) {
    return NextResponse.redirect(request.nextUrl, { status: 303 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/(.*)",
};
