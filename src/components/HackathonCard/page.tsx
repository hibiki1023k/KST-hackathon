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

export interface Hackathon {
    id: number
    name: string
    startDate: string
    endDate: string
    createdAt: string
    updatedAt: string
}

interface HackathonCardProps {
    hackathon: Hackathon
}


const HackathonCard: React.FC<HackathonCardProps> = ({hackathon}) => {

    const router = useRouter();

    const handleOnClick = (id: string) => {
        router.push(`/hackathons/${id}`);
    };

    return (
        <div>
            <Card
            onClick={() => handleOnClick(hackathon.id.toString())} 
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
     

export default HackathonCard;

