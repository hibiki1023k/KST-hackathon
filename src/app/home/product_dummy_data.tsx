export interface Product {
    id: string;
    teamId: string;
    hackathonId: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export const dummyProducts: Product[] = [
    {
        id: "1",
        teamId: "1",
        hackathonId: "1",
        title: "AIチャットボット",
        description: "自然言語処理を用いた次世代チャットボット",
        createdAt: "2025-04-01T10:00:00Z",
        updatedAt: "2025-04-01T10:00:00Z"
    },
    {
        id: "2",
        teamId: "2",
        hackathonId: "1",
        title: "スマート家電制御システム",
        description: "IoTを活用した省エネ家電管理アプリ",
        createdAt: "2025-04-01T11:00:00Z",
        updatedAt: "2025-04-01T11:00:00Z"
    },
    {
        id: "3",
        teamId: "3",
        hackathonId: "2",
        title: "健康管理アプリ",
        description: "AIによる生活習慣改善サポート",
        createdAt: "2025-05-15T09:00:00Z",
        updatedAt: "2025-05-15T09:00:00Z"
    }
];