import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Cloudflare challenge verification sends a POST to the original URL.
  // Next.js page routes only handle GET, so return 200 to let CF complete the handshake.
  if (request.method === "POST") {
    return new NextResponse(null, { status: 200 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/(.*)",
};
