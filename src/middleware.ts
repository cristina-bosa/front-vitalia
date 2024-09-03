import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";

import { Roles } from "@/types/enum";

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getToken({ req: request });

  const role = user?.user.groups[0];

  if (role === Roles.DOCTOR && pathname.startsWith("/patient")) {
    return NextResponse.redirect(new URL("/doctor/dashboard", request.url));
  }
  if (role === Roles.ADMIN && pathname.startsWith("/patient")) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}
