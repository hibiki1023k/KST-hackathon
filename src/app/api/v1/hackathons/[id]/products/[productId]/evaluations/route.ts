import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, props: { params: Promise<{ id: string, productId: string}> }) {
  const params = await props.params;

  try {
    const evaluations = await prisma.evaluation.findMany({
      where: {
        hackathonId: Number(params.id),
        productId: Number(params.productId),
      },
      select: {
        userId: true,
        hackathonId: true,
        productId: true,
      }
    });

    return NextResponse.json(evaluations, {status: 200});
  } catch (error) {
    console.error("Error fetching evaluations", error);

    return NextResponse.json({body: "Failed to fetch evaluations"}, {status: 500});
  }
}

export async function POST(request: NextRequest, props: { params: Promise<{ id: string, productId: string }> }) {
  const params = await props.params;
  const body = await request.json();

  try {
    const evaluations = await prisma.evaluation.create({
      data: {
        hackathonId: Number(params.id),
        productId: Number(params.productId),
        userId: body.userId,
      },
      select: {
        userId: true,
        hackathonId: true,
        productId: true,
      }
    });

    return NextResponse.json(evaluations, {status: 201});
  } catch (error) {
    console.error("Error creating evaluation", error);

    return NextResponse.json({body: "Failed to create evaluation"}, {status: 500});
  }
}
