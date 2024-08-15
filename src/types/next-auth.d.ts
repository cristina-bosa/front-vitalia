import "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    first_name: string;
    last_name: string;
    email: string;
    access_token: string;
    groups: any;
    medical_history: any;
  }
}
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      first_name: string;
      last_name: string;
      email: string;
      access_token: string;
      groups: any;
      medical_history: any
    };
    access_token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string
      first_name: string;
      last_name: string;
      email: string;
      access_token: string;
      groups: any;
      medical_history: any
    };
    access_token: string;
  }
}
