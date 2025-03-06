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
    id: string
    title:string
}

interface Hackathon {
    id:string
    name:string
}

interface Team{
    id:string
    name:string
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
            onClick={() => handleOnClick(product.id)} 
            className="w-[250px] h-[250px]"
            >
               <CardHeader>
                   <CardTitle>{product.title}</CardTitle>
               </CardHeader>
                    <CardContent>
                   <p>チーム名{team.name}</p>
                   <p>ハッカソン名{hackathon.name}</p>
                   </CardContent>
            </Card>
        </div>
    );
}
     
export default ProductCard;

