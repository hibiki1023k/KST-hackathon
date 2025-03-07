"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useParams } from "next/navigation";
import { Product, dummyProducts } from "@/app/(root)/product_dummy_data";

interface TeamMember {
    userId: string;
    hackathonId: number;
    teamId: number;
}

const ProjectPage = () => {
  const params = useParams();
  const productId = Number(params.id);

  // IDに基づいてプロジェクトを検索
  const product = dummyProducts.find(p => p.id === productId) || dummyProducts[0];

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
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><Github className="mr-2" />GitHub</Button>
          </a>
        </div>
      </div>
 
      {/* メンバー情報 */}
      <div className="text-center">
        <h2 className="text-xl font-bold">チームメンバー</h2>
        <p className="text-gray-500">{new Date(product.createdAt).toLocaleDateString('ja-JP')}</p>
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
        <p className="text-gray-500 mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
