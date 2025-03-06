import CustomCard from "@/components/customcard/page";
// import { Hackathon } from "@/types/hackathon";
import { dummyHackathons } from "./home_dummy";

export interface Hackathon {
    id: string
    name: string
    startDate: string
    endDate: string
}


const Home: React.FC = () => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px] p-4">
            {dummyHackathons.map((hackathon) => (
                <CustomCard key={hackathon.id} hackathon={hackathon} />
            ))}
        </div>
    );
}
export default Home;