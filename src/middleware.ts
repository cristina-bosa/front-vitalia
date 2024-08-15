import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";

enum Role {
  ADMIN = 1,
  DOCTOR = 2,
  PATIENT = 3,
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getToken({ req: request });
  
  const role = user?.user.groups[0];

  if (role === Role.DOCTOR && pathname.startsWith("/patient")) {
    return NextResponse.redirect(new URL("/doctor/dashboard", request.url));
  }
  if (role === Role.ADMIN && pathname.startsWith("/patient")) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/",
    "/patient/:path*",
    "/doctor/:path*",
    "/admin/:path*",
    "/api/auth/:path*",
  ],
};
