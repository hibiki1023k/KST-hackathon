import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;

    try {
        const users = await prisma.teamMember.findMany({
            where: {
                hackathonId: Number(params.id),
            },
            select: {
                userId: true
            }
        });

        return NextResponse.json(users, {status: 200});
    } catch (error) {
        console.error("Error fetching teams", error);

        return NextResponse.json({body: "Failed to fetch teams"}, {status: 500});
    }
}
