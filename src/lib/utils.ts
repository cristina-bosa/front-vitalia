import { NextAuthOptions, User } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import { baseUrl } from "@/constants";
import profile from "@/pages/patient/ProfilePatient";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const response = await fetch(`${baseUrl}/auth/login/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const token = await response.json();

        const profileUser = await fetch(`${baseUrl}/auth/user/profile`, {
          headers: {
            Authorization: `Token ${token.access_token}`,
          },
        });
        const user = await profileUser.json();
        if (!response.ok) {
          throw new Error(user.message);
        }

        return { ...token, ...user };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }) {
      session.user = token.user;
      session.medical_history = token.medical_history;
      session.access_token = token.access_token;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};
