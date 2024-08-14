import "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    first_name: string;
    last_name: string;
    email: string;
    access_token: string;
    groups: any;
  }
}
declare module "next-auth" {
  interface Session {
    user: JWT;
    access_token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      first_name: string;
      last_name: string;
      email: string;
      access_token: string;
      groups: any;
    };
    access_token: string;
  }
}
