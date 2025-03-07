export interface Product {
    id: number;
    teamId: number;
    hackathonId: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export const dummyProducts: Product[] = [
    {
        id: 5,
        teamId: 5,
        hackathonId: 3,
        title: "遠隔医療プラットフォーム",
        description: "オンライン診療を支援する統合プラットフォーム",
        createdAt: "2025-06-20T08:45:00Z",
        updatedAt: "2025-06-20T08:45:00Z"
    },
    {
        id: 6,
        teamId: 6,
        hackathonId: 4,
        title: "スマート交通システム",
        description: "都市の交通流をAIで最適化するシステム",
        createdAt: "2024-12-24T07:30:00Z",
        updatedAt: "2024-12-24T07:30:00Z"
    },
    {
        id: 7,
        teamId: 7,
        hackathonId: 4,
        title: "IoT防災ネットワーク",
        description: "災害時の通信インフラをIoTデバイスで構築",
        createdAt: "2024-12-24T08:00:00Z",
        updatedAt: "2024-12-24T08:00:00Z"
    },
    {
        "id": 11,
        "teamId": 5,
        "hackathonId": 3,
        "title": "スマート農業システム",
        "description": "IoTとAIを活用した作物の生育管理プラットフォーム",
        "createdAt": "2025-06-22T09:00:00Z",
        "updatedAt": "2025-06-22T09:00:00Z"
    },
    {
        "id": 12,
        "teamId": 1,
        "hackathonId": 3,
        "title": "観光ガイドAI",
        "description": "AIが観光客に最適なプランを提案するアプリ",
        "createdAt": "2025-06-22T10:30:00Z",
        "updatedAt": "2025-06-22T10:30:00Z"
    },
    {
        "id": 13,
        "teamId": 2,
        "hackathonId": 4,
        "title": "デジタル美術館",
        "description": "VR技術を活用したバーチャルアート鑑賞プラットフォーム",
        "createdAt": "2025-07-05T08:45:00Z",
        "updatedAt": "2025-07-05T08:45:00Z"
    },
    {
        "id": 14,
        "teamId": 3,
        "hackathonId": 4,
        "title": "スマートヘルスケア",
        "description": "ウェアラブルデバイスを活用した健康モニタリングシステム",
        "createdAt": "2025-07-06T12:15:00Z",
        "updatedAt": "2025-07-06T12:15:00Z"
    },
    {
        "id": 15,
        "teamId": 4,
        "hackathonId": 4,
        "title": "AIニュース要約システム",
        "description": "AIが最新ニュースを短く要約し、分かりやすく提供するアプリ",
        "createdAt": "2025-07-07T14:00:00Z",
        "updatedAt": "2025-07-07T14:00:00Z"
    }
];
