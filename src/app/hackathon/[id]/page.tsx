"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { dummyHackathonsdetails } from "./hackathon_dummy";
import { useParams } from "next/navigation";

const HackathonPage = () => {
  const params = useParams();
  const hackathon = dummyHackathonsdetails.find(h => h.id === params.id);

  if (!hackathon) {
    return <div className="text-center p-4">ハッカソンが見つかりません</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4 p-4 text-center">
        <h1 className="text-2xl font-bold">{hackathon.name}</h1>
        <p className="text-blue-600 font-semibold">{hackathon.theme}</p>
      </div>

      <Card className="mb-4 p-4">
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5" />
              <p>開始日: {hackathon.startDate}</p>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5" />
              <p>終了日: {hackathon.endDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4 p-4 text-center">
        <Button className="bg-blue-500 text-white w-full">申し込む</Button>
      </Card>
    </div>
  );
};

export default HackathonPage;