import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  try {
    const prizes = await prisma.prize.findMany({
      where: {
        hackathonId: Number(params.id),
      },
      select: {
        id: true,
        hackathonId: true,
        name: true,
        description: true,
      }
    });

    return NextResponse.json(prizes, {status: 200});
  } catch (error) {
    console.error("Error fetching prizes", error);

    return NextResponse.json({body: "Failed to fetch prizes"}, {status: 500});
  }
}

export async function POST(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const body = await request.json();

  try {
    const prize = await prisma.prize.create({
      data: {
        hackathonId: Number(params.id),
        name: body.name,
        description: body.description,
      }
    });

    return NextResponse.json(prize, {status: 201});
  } catch (error) {
    console.error("Error creating prize", error);

    return NextResponse.json({body: "Failed to create prize"}, {status: 500});
  }
}