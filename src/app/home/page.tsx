import CustomCard from "@/components/HackathonCard/page";
import ProductCard from "@/components/ProductCard/page";
import { dummyHackathons } from "./home_dummy";
import { dummyProducts } from "./product_dummy_data";
import { dummyTeams } from "./team_dummy";

export interface Hackathon {
    id: string
    name: string
    startDate: string
    endDate: string
}

export interface Product {
    id: string
    title:string
}

export interface Team{
    id:string
    name:string
}


const Home: React.FC = () => {

    return (
        <div className="justify-content:flex-start flex flex-wrap  p-8 gap-4">
            {dummyHackathons.map((hackathon: Hackathon) => (
            <CustomCard key={hackathon.id} hackathon={hackathon} />
            ))}
            {dummyProducts.map((product: Product) => (
            <ProductCard 
                key={product.id} 
                product={product}
                team={dummyTeams[0]} // Using first team as example
                hackathon={dummyHackathons[0]} // Using first hackathon as example
            />
            ))}
        </div>

    );
}
export default Home;