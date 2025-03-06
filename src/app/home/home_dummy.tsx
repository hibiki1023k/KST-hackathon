

interface Hackathon {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
}


export const dummyHackathons: Hackathon[] = [
    {
        id: "1",
        name: "AIハッカソン",
        startDate: "2025-04-01",
        endDate: "2025-04-03",
     
    },
    {
        id: "2",
        name: "ブロックチェーンチャレンジ",
        startDate: "2025-05-10",
        endDate: "2025-05-12",
 
    },
    {
        id: "3",
        name: "グリーンテックハッカソン",
        startDate: "2025-06-15",
        endDate: "2025-06-17",

    }
];