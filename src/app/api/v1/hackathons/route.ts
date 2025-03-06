import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest,) {
  const body = await request.json();

  try {
    const hackathon = await prisma.hackathon.create({
      data: {
        name: body.name,
        theme: body.theme,
        startDate: body.startDate,
        endDate: body.endDate,
      }
    });

    return NextResponse.json(hackathon, {status: 201});
  } catch (error) {
    console.error("Error creating hackathon", error);

    return NextResponse.json({body: "Failed to create hackathon"}, {status: 500});
  }
}

export async function GET() {
  try {
    const hackathons = await prisma.hackathon.findMany({
      select: {
        id: true,
        name: true,
        theme: true,
        startDate: true,
        endDate: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return NextResponse.json(hackathons, {status: 200});
  } catch (error) {
    console.error("Error fetching hackathons", error);

    return NextResponse.json({body: "Failed to fetch hackathons"}, {status: 500});
  }
}
