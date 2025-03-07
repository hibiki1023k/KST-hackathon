import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;

    try {
        const questions = await prisma.question.findMany({
            where: {
                productId: Number(params.id),
            },
            select: {
                id: true,
                productId: true,
                text: true,
                createdAt: true,
                updatedAt: true,
                replyId: true,
            }
        });

        return NextResponse.json(questions, {status: 200});
    } catch (error) {
        console.error("Error fetching questions", error);

        return NextResponse.json({body: "Failed to fetch questions"}, {status: 500});
    }
}

export async function POST(request: NextRequest, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const body = await request.json();

    try {
        const question = await prisma.question.create({
            data: {
                productId: Number(params.id),
                text: body.text,
            },
            select: {
                id: true,
                productId: true,
                text: true,
                createdAt: true,
                updatedAt: true,
                replyId: true,
            }
        });

        return NextResponse.json(question, {status: 201});
    } catch (error) {
        console.error("Error creating question", error);

        return NextResponse.json({body: "Failed to create question"}, {status: 500});
    }
}
