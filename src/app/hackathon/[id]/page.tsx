'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { dummyHackathonsdetails } from "./hackathon_dummy";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const HackathonPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const params = useParams();
  const hackathon = dummyHackathonsdetails.find(h => h.id === params.id);
  const handleOnclick = () => {
    setIsOpen(true);
  }

  const handleJoin = () => {
    setIsJoined(true);
    setIsOpen(false);
  }


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
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Card className="mb-4 p-4 text-center">
          <Button 
            onClick={handleOnclick} 
            className="bg-blue-500 text-white w-full"
            disabled={isJoined}  // 参加済みの場合は無効化
          >
            {isJoined ? "参加済み" : "申し込む"}
          </Button>
        </Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ハッカソンへの参加</DialogTitle>
            <DialogDescription>
              {hackathon.name}への参加を申し込みますか？
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-4 mt-4">
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
            >
              キャンセル
            </Button>
            <Button 
              className="bg-blue-500 text-white"
              onClick={handleJoin}  // 参加処理を実行
            >
              参加する
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HackathonPage;