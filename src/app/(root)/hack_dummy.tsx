export interface Hackathon {
    id: number
    name: string
    theme:string
    startDate: string
    endDate: string
    createdAt: string
    updatedAt: string
}


export const dummyHackathons: Hackathon[] = [
    {
        id: 1,
        name: "AI革新ハッカソン2025",
        theme: "人工知能と持続可能な未来",
        startDate: "2025-04-01",
        endDate: "2025-04-03",
        createdAt: "2025-03-01T09:00:00Z",
        updatedAt: "2025-03-01T09:00:00Z"
    },
    {
        id: 2,
        name: "グリーンテックハッカソン",
        theme: "環境技術とサステナビリティ",
        startDate: "2025-05-15",
        endDate: "2025-05-17",
        createdAt: "2025-04-01T10:00:00Z",
        updatedAt: "2025-04-01T10:00:00Z"
    },
    {
        id: 3,
        name: "ヘルスケアイノベーション2025",
        theme: "次世代医療とデジタルヘルス",
        startDate: "2025-01-01",
        endDate: "2025-01-31",
        createdAt: "2025-05-01T11:00:00Z",
        updatedAt: "2025-05-01T11:00:00Z"
    },
    {
        id: 4,
        name: "スマートシティハッカソン2025",
        theme: "都市のデジタル化と生活革新",
        startDate: "2024-12-24",
        endDate: "2024-12-25",
        createdAt: "2024-12-01T12:00:00Z",
        updatedAt: "2023-12-01T12:00:00Z"
    }
];
