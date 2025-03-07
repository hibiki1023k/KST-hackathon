'use client';

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"

// import { dummyHackathons } from "@/app/home/home_dummy"
import { useRouter } from "next/navigation";
import React from "react"

interface Product {
    id: number
    teamId: number
    hackathonId: number
    title:string
    description:string
    createdAt: string
    updatedAt: string
}

interface Hackathon {
    id:number
    name:string
    theme:string
    startDate:string
    endDate:string
    createdAt:string
    updatedAt:string
}

interface Team{
    id:string
    hackathonId:number
    name:string
    createdAt:string
    updatedAt:string
}

interface ProductCardProps {
    product: Product
    hackathon: Hackathon
    team: Team
}


const ProductCard: React.FC<ProductCardProps> = ({product,hackathon,team}: ProductCardProps) => {

    const router = useRouter();

    const handleOnClick = (id: string) => {
        router.push(`/products/${id}`);
     };

    return (
        <div>
            <Card
            onClick={() => handleOnClick(product.id.toString())} 
            className="w-[250px] h-[250px]"
            >
               <CardHeader>
                   <CardTitle>{product.title}</CardTitle>
               </CardHeader>
                    <CardContent>
                   <p>チーム名:{team.name}</p>
                   <p>ハッカソン名:{hackathon.name}</p>
                   </CardContent>
            </Card>
        </div>
    );
}
     
export default ProductCard;

