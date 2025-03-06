import React from "react";
import { Button } from "@/components/ui/button";
import { Github} from "lucide-react";

interface Product {
    id: string;
    teamId: string;
    hackathonId: string;
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

interface ProductPageProps {
    product: Product;
    teamMembers: TeamMember[];
}


const ProjectPage = ({product,teamMembers}:ProductPageProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* ヘッダー */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">AAAAAA</h1>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><Github className="mr-2" />GitHub</Button>
          </a>
        </div>
      </div>
 
      {/* メンバー情報 */}
      <div className="text-center">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-500">2025.03.06</p>
        <div className="flex justify-center space-x-4 mt-2">
          {[].map((member) => (
            <span key={member} className="px-4 py-2 bg-gray-100 rounded-lg">{member.}</span>
          ))}
        </div>
      </div>

      {/* プロジェクト概要 */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* <Card>
          <CardContent className="p-4">
            <h3 className="font-bold">推しアイデア</h3>
            <p className="text-sm mt-2">大工大と東京理科大学が一緒に使える掲示板を作り、大学間のつながりを強化しました。</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold">作った背景</h3>
            <p className="text-sm mt-2">大学間のコミュニケーションをよりリアルタイムで活性化させるために開発しました。</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold">推し技術</h3>
            <p className="text-sm mt-2">Next.js, Go, Google Cloud, Terraform, WebRTC, LayerDアーキテクチャ</p>
          </CardContent>
        </Card>
      </div> */} 

      {/* プロジェクト詳細 */}
      <div className="border-t pt-4">
        <h2 className="text-lg font-bold">プロジェクト詳細</h2>
        <p className="text-gray-500 mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProjectPage;