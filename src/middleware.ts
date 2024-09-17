import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";

import { routes } from "./constants";

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getToken({ req: request });
  const role = user?.user.groups[0];
  const route = routes.find((route) => route.path === pathname);

  if (route && (!user || !route.roles.includes(role))) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}
