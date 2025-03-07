import {NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return NextResponse.json(users, {status: 200});
  } catch (error) {
    console.error("Error fetching users", error);

    return NextResponse.json({body: "Failed to fetch users"}, {status: 500});
  }
}

// TODO: ユーザー作成は必要に応じて実装
