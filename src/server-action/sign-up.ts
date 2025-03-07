"use server";
import { signIn } from "@/auth";

export const signUp = async (email: string) => {
  try {
    await signIn("resend", { email });
  } catch (error) {
    console.error(error);
  }
};
