import {NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {

    try {
        const evaluations = await prisma.product.findMany({
            select: {
                id: true,
                teamId: true,
                title: true,
                description: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        return NextResponse.json(evaluations, {status: 200});
    } catch (error) {
        console.error("Error fetching evaluations", error);

        return NextResponse.json({body: "Failed to fetch evaluations"}, {status: 500});
    }
}
