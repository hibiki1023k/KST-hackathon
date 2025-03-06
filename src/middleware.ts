import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // セッションがない場合
  if (!token) {
    if (req.nextUrl.pathname !== "/") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else {
    // セッションがある場合
    if (req.nextUrl.pathname === "/") {
      //   return NextResponse.redirect(new URL("/", req.url)); //ログイン後のリダイレクト先
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home", "/((?!api|_next|.*\\..*).*)"], // 除外するパスを設定
};
