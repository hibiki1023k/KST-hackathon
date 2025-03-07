import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  try {
    const teams = await prisma.team.findMany({
      where: {
        hackathonId: Number(params.id),
      },
      select: {
        id: true,
        hackathonId: true,
        name: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return NextResponse.json(teams, {status: 200});
  } catch (error) {
    console.error("Error fetching teams", error);

    return NextResponse.json({body: "Failed to fetch teams"}, {status: 500});
  }
}

export async function POST(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const body = await request.json();

  try {
    const team = await prisma.team.create({
      data: {
        hackathonId: Number(params.id),
        name: body.name,
      }
    });

    return NextResponse.json(team, {status: 201});
  } catch (error) {
    console.error("Error creating team", error);

    return NextResponse.json({body: "Failed to create team"}, {status: 500});
  }
}
