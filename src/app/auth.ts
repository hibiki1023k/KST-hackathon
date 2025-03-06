import NextAuth from "next-auth";
import ForwardEmail from "next-auth/providers/forwardemail";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

const AUTH_FORWARDEMAIL_KEY = process.env.AUTH_FORWARDEMAIL_KEY;

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    ForwardEmail({
      // If your environment variable is named differently than default
      apiKey: AUTH_FORWARDEMAIL_KEY,
      from: "no-reply@company.com",
    }),
  ],
});
