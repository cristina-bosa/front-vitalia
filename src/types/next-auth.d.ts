import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    first_name: string;
    last_name: string;
    email: string;
    access_token: string;
    groups: number[];
  }
}
declare module "next-auth" {
  interface Session {
    user: User;
    access_token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
    access_token: string;
  }
}
