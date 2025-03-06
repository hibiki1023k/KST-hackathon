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
      }
    });

    if (!user) {
      return NextResponse.json({body: "User not found"}, {status: 404});
    }

    const userData = await prisma.userData.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        userId: true,
        affiliation: true,
        profile: true,
      }
    });

    if (!userData) {
      return NextResponse.json({body: "User data not found"}, {status: 404});
    }

    return NextResponse.json({
      userId: user.id,
      userName: user.name,
      affiliation: userData.affiliation,
      email: user.email,
      profile: userData.profile
    }, {status: 200});
  } catch
      (error) {
    console.error("Error fetching users", error);

    return NextResponse.json({body: "Failed to fetch users"}, {status: 500});
  }
}

export async function PUT(request: NextRequest, props: {
  params: Promise<{ id: string }>,
  body: Promise<{ affiliation: string, profile: string, userName: string, email: string }>
}) {
  const params = await props.params;
  const body = await request.json();

  try {
    const userCheck = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
      select: {
        id: true,
      }
    });

    if (!userCheck) {
      return NextResponse.json({body: "User not found"}, {status: 404});
    }

    const user = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        name: body.userName,
        email: body.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    });

    const userData = await prisma.userData.update({
      where: {
        userId: user.id,
      },
      data: {
        affiliation: body.affiliation,
        profile: body.profile,
      },
      select: {
        userId: true,
        affiliation: true,
        profile: true
      }
    });

    return NextResponse.json({
      userId: user.id,
      userName: user.name,
      affiliation: userData.affiliation,
      email: user.email,
      profile: userData.profile
    }, {status: 200});
  } catch (error) {
    console.error("Error updating user data", error);

    return NextResponse.json({body: "Failed to update user data"}, {status: 500});
  }
}
