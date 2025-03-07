import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const hackathon = await prisma.hackathon.findUnique({
      where: {
        id: Number(params.id),
      },
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

    if (!hackathon) {
      return NextResponse.json({body: "Hackathon not found"}, {status: 404});
    }

    return NextResponse.json(hackathon, {status: 200});
  } catch (error) {
    console.error("Error fetching hackathons", error);

    return NextResponse.json({body: "Failed to fetch hackathons"}, {status: 500});
  }
}

export async function PUT(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const body = await request.json();

  try {
    // 存在判定
    const hackathonCheck = await prisma.hackathon.findUnique({
      where: {
        id: Number(params.id),
      },
    });

    if (!hackathonCheck) {
      return NextResponse.json({body: "Hackathon not found"}, {status: 404});
    }

    const hackathon = await prisma.hackathon.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name: body.name,
        theme: body.theme,
        startDate: body.startDate,
        endDate: body.endDate,
      }
    });

    return NextResponse.json(hackathon, {status: 200});
  } catch (error) {
    console.error("Error updating hackathon", error);

    return NextResponse.json({body: "Failed to update hackathon"}, {status: 500});
  }
}
