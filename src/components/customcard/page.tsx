'use client';

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"

// import { dummyHackathons } from "@/app/home/home_dummy"
import { useRouter } from "next/navigation"
import React from "react"

interface Hackathon {
    id: string
    name: string
    startDate: string
    endDate: string
}

interface HackathonCardProps {
    hackathon: Hackathon
}


const CustomCard: React.FC<HackathonCardProps> = ({hackathon}) => {

    const router = useRouter();

    const handleOnClick = (id: string) => {
        router.push(`/hackathons/${id}`);
    };

    return (
        <div>
            <Card
            onClick={() => handleOnClick(hackathon.id)} 
            className="w-[250px] h-[250px]"
            >
               <CardHeader>
                   <CardTitle>{hackathon.name}</CardTitle>
               </CardHeader>
                    <CardContent>
                   <p>開始日：{hackathon.startDate}</p>
                   <p>終了日：{hackathon.endDate}</p>
                   </CardContent>
            </Card>
        </div>
    );
}
     

export default CustomCard;

