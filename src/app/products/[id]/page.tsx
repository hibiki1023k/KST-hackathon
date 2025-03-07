"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
// import { useParams } from "next/navigation";

interface Product {
    id: number;
    teamId: number;
    hackathonId: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

interface TeamMember {
    userId: string;
    hackathonId: number;
    teamId: number;
}

const ProjectPage = () => {
  // const params = useParams();

  // ダミーのプロダクトデータ
  const dummyProduct: Product = {
    id: 1,
    teamId: 1,
    hackathonId: 1,
    title: "AIチャットボット",
    description: "最新の自然言語処理技術を活用した対話型アシスタント",
    createdAt: "2025-03-01T09:00:00Z",
    updatedAt: "2025-03-01T09:00:00Z"
  };

  // ダミーのチームメンバーデータ
  const dummyTeamMembers: TeamMember[] = [
    { userId: "田中太郎", hackathonId: 1, teamId: 1 },
    { userId: "鈴木花子", hackathonId: 1, teamId: 1 },
    { userId: "佐藤次郎", hackathonId: 1, teamId: 1 }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* ヘッダー */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">{dummyProduct.title}</h1>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><Github className="mr-2" />GitHub</Button>
          </a>
        </div>
      </div>
 
      {/* メンバー情報 */}
      <div className="text-center">
        <h2 className="text-xl font-bold">チームメンバー</h2>
        <p className="text-gray-500">{new Date(dummyProduct.createdAt).toLocaleDateString('ja-JP')}</p>
        <div className="flex justify-center space-x-4 mt-2">
          {dummyTeamMembers.map((member) => (
            <span key={member.userId} className="px-4 py-2 bg-gray-100 rounded-lg">
              {member.userId}
            </span>
          ))}
        </div>
      </div>

      {/* プロジェクト詳細 */}
      <div className="border-t pt-4">
        <h2 className="text-lg font-bold">プロジェクト詳細</h2>
        <p className="text-gray-500 mt-2">{dummyProduct.description}</p>
      </div>
    </div>
  );
};

export default ProjectPage;