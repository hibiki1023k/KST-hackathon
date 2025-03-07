'use client';

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { dummyHackathons } from "@/app/(root)/hack_dummy";
import { dummyProducts } from "@/app/(root)/product_dummy_data";
import { useParams } from "next/navigation";
// import Image from "next/image";
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
	const [votedProductId, setVotedProductId] = useState<number | null>(null);
	const [isVoteDialogOpen, setIsVoteDialogOpen] = useState(false);
	const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
	const params = useParams();
	const hackathon = dummyHackathons.find(h => h.id === Number(params.id));

	if (!hackathon) {
		return <div className="text-center p-4">ハッカソンが見つかりません</div>;
	}

	// hackathon終了判定とプロダクト抽出
	const isFinished = new Date(hackathon.endDate) < new Date();
	const hackProducts = dummyProducts.filter(p => p.hackathonId === hackathon.id);

	const handleOnclick = () => {
		setIsOpen(true);
	}

	const handleJoin = () => {
		setIsJoined(true);
		setIsOpen(false);
	}

	const handleVoteClick = (productId: number) => {
		if (votedProductId === null) {
			// 初めての投票
			setSelectedProductId(productId);
			setIsVoteDialogOpen(true);
		} else {
			// 投票変更
			setSelectedProductId(productId);
			setIsVoteDialogOpen(true);
		}
	};

	const handleVote = () => {
		if (selectedProductId !== null) {
			setVotedProductId(selectedProductId);
			setIsVoteDialogOpen(false);
		}
	};

	return (
		<div>
			<div className="max-w-2xl mx-auto p-4">
				<div className="mb-4 p-4 text-center">
					{/* <Image
						width={608}
						height={200}
						src=""
						alt={hackathon.name}
						className="flex justify-center object-cover rounded-lg"
					/> */}
					<h1 className="text-2xl font-bold">{hackathon.name}</h1>
				</div>
			</div>
			<h1 className="flex justify-center text-2xl font-bold">テーマ</h1>
			<h1 className="flex justify-center text-4xl font-bold">{hackathon.theme}</h1>
			<div className="max-w-2xl mx-auto p-4">
				<Dialog open={isOpen} onOpenChange={setIsOpen}>
					<Card className="mb-4 p-4 text-center">
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
						<Button 
							onClick={handleOnclick} 
							className="bg-blue-500 text-white w-full"
							disabled={isJoined || isFinished} // 参加済みまたは終了済みの場合は無効化
						>
							{isFinished ? "終了済み" : (isJoined ? "参加済み" : "申し込む")}
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
								onClick={handleJoin}
							>
								参加する
							</Button>
						</div>
					</DialogContent>
				</Dialog>
			</div>
			<div className="max-w-2xl mx-auto p-4">
				<h2 className="text-xl font-bold mb-4">プロダクト一覧</h2>
				{ hackProducts.length > 0 ? (
					<>
						<table className="w-full border-collapse">
							<thead>
								<tr>
									<th className="border p-2 text-left">タイトル</th>
									<th className="border p-2 text-left">説明</th>
									<th className="border p-2 text-left">作成日</th>
									<th className="border p-2 text-left">投票</th>
								</tr>
							</thead>
							<tbody>
								{hackProducts.map(product => (
									<tr key={product.id}>
										<td className="border p-2">{product.title}</td>
										<td className="border p-2">{product.description}</td>
										<td className="border p-2">{product.createdAt}</td>
										<td className="border p-2">
											<Button
												onClick={() => handleVoteClick(product.id)}
												className={`w-full ${
													votedProductId === product.id 
														? "bg-green-500" 
														: "bg-blue-500"
												} text-white`}
											>
												{votedProductId === product.id ? "投票済み" : "投票する"}
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<Dialog open={isVoteDialogOpen} onOpenChange={setIsVoteDialogOpen}>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>投票の確認</DialogTitle>
									<DialogDescription>
										{votedProductId === null 
											? "このプロダクトに投票しますか？" 
											: "投票を変更しますか？"}
									</DialogDescription>
								</DialogHeader>
								<div className="flex justify-end space-x-4 mt-4">
									<Button 
										variant="outline" 
										onClick={() => setIsVoteDialogOpen(false)}
									>
										キャンセル
									</Button>
									<Button 
										className="bg-blue-500 text-white"
										onClick={handleVote}
									>
										{votedProductId === null ? "投票する" : "投票を変更する"}
									</Button>
								</div>
							</DialogContent>
						</Dialog>
					</>
				) : (
					<p>プロダクトは登録されていません</p>
				)}
			</div>
		</div>
	);
};

export default HackathonPage;
