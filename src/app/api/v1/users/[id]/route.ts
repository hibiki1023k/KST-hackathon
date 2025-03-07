import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
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

    if (!user) {
      return NextResponse.json({body: "User not found"}, {status: 404});
    }

    return NextResponse.json(user, {status: 200});
  } catch (error) {
    console.error("Error fetching users", error);

    return NextResponse.json({body: "Failed to fetch users"}, {status: 500});
  }
}

export async function PUT(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const body = await request.json();

  // ユーザーの存在判定
  try {
    const user = await prisma.user.findUnique({
        where: {
            id: params.id,
        },
        select: {
            id: true,
        }
    })

    if (!user) {
      return NextResponse.json({body: "User not found"}, {status: 404});
    }
  } catch (error) {
    console.error("Error fetching user", error);

    return NextResponse.json({body: "Failed to fetch user"}, {status: 500});
  }

  try {
    const user = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        name: body.name,
        email: body.email,
        image: body.image,
      },
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

    return NextResponse.json(user, {status: 200});
  } catch (error) {
    console.error("Error updating user", error);

    return NextResponse.json({body: "Failed to update user"}, {status: 500});
  }
}
