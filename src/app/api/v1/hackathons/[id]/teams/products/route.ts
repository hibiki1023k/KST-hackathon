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
                id: true
            }
        });

        const products = await prisma.product.findMany({
            where: {
                teamId: {
                    in: teams.map(team => team.id)
                },
            },
            select: {
                id: true,
                teamId: true,
                title: true,
                description: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return NextResponse.json(products, {status: 200});
    } catch (error) {
        console.error("Error fetching products", error);

        return NextResponse.json({body: "Failed to fetch products"}, {status: 500});
    }
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    try {
        const product = await prisma.product.create({
            data: {
                teamId: body.teamId,
                title: body.title,
                description: body.description,
            },
            select: {
                id: true,
                teamId: true,
                title: true,
                description: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return NextResponse.json(product, {status: 201});
    } catch (error) {
        console.error("Error creating product", error);

        return NextResponse.json({body: "Failed to create product"}, {status: 500});
    }
}
