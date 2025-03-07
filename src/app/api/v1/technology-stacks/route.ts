import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {

    try {
        const techStack = await prisma.technologyStack.findMany({
            select: {
                id: true,
                name: true
            }
        });

        return NextResponse.json(techStack, {status: 200});
    } catch (error) {
        console.error("Error fetching technology stacks", error);

        return NextResponse.json({body: "Failed to fetch technology stacks"}, {status: 500});
    }
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    try {
        const techStack = await prisma.technologyStack.create({
            data: {
                name: body.name
            },
            select: {
                id: true,
                name: true
            }
        });

        return NextResponse.json(techStack, {status: 201});
    } catch (error) {
        console.error("Error creating question", error);

        return NextResponse.json({body: "Failed to create question"}, {status: 500});
    }
}
