"use client";
import { useState } from "react";
import { signUp } from "@/server-action/sign-up";
import { useSession } from "next-auth/react";

export default function Home() {
  const [email, setEmail] = useState("");

  const { data: session } = useSession();

  const handlesignUp = async () => {
    signUp(email);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h1>{session?.user?.id}</h1>
      <button onClick={handlesignUp}>サインアップ</button>
    </div>
  );
}
