export interface Team {
    id: number;
    hackathonId: number;
    name: string;
}

export const dummyTeams: Team[] = [
    {
        id: 1,
        hackathonId: 1,
        name: "チームA"
    },
    {
        id: 2,
        hackathonId: 1,
        name: "チームB"
    },
    {
        id: 3,
        hackathonId: 2,
        name: "チームC"
    },
    {
        id: 4,
        hackathonId: 2,
        name: "チームD"
    },
    {
        id: 5,
        hackathonId: 3,
        name: "チームE"
    },
    {
        id: 6,
        hackathonId: 4,
        name: "チームF"
    },
    {
        id: 7,
        hackathonId: 4,
        name: "チームG"
    }
];
