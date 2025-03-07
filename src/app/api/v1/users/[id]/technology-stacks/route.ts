import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  try {
    const techStacks = await prisma.userTechnologyStack.findMany({
      where: {
        userId: params.id,
      },
      select: {
        userId: true,
        technologyStackId: true,
        level: true
      }
    });

    return NextResponse.json(techStacks, {status: 200});
  } catch (error) {
    console.error("Error fetching users", error);

    return NextResponse.json({body: "Failed to fetch users"}, {status: 500});
  }
}

export async function POST(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const body = await request.json();

  try {
    const techStack = await prisma.userTechnologyStack.update({
      where: {
        userId_technologyStackId: {
          userId: params.id,
          technologyStackId: body.technologyStackId
        }
      },
      data: {
        technologyStackId: body.technologyStackId,
        level: body.level
      }
    });

    return NextResponse.json(techStack, {status: 201});
  } catch (error) {
    console.error("Error creating user", error);

    return NextResponse.json({body: "Failed to create user"}, {status: 500});
  }
}
