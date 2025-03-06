import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  try {
    const teamMember = await prisma.teamMember.findMany({
      where: {
        hackathonId: Number(params.id),
      },
      select: {
        userId: true,
        hackathonId: true,
        teamId: true,
      }
    });

    return NextResponse.json(teamMember, {status: 200});
  } catch (error) {
    console.error("Error fetching team members", error);

    return NextResponse.json({body: "Failed to fetch team members"}, {status: 500});
  }
}

export async function POST(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const body = await request.json();

  try {
    const teamMember = await prisma.teamMember.create({
      data: {
        teamId: Number(params.id),
        userId: body.userId,
        hackathonId: Number(params.id),
      }
    });

    return NextResponse.json(teamMember, {status: 201});
  } catch (error) {
    console.error("Error creating team", error);

    return NextResponse.json({body: "Failed to create team"}, {status: 500});
  }
}
