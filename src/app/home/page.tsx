import CustomCard from "@/components/HackathonCard/page";
import ProductCard from "@/components/ProductCard/page";
import { dummyHackathons } from "./hack_dummy";
import { dummyProducts } from "./product_dummy_data";
import { dummyTeams } from "./team_dummy";

export interface Hackathon {
    id: number
    name: string
    theme:string
    startDate: string
    endDate: string
    createdAt: string
    updatedAt: string
}

export interface Product {
    id: number
    teamId:number
    hackathonId:number
    title:string
    description:string
    createdAt:string
    updatedAt:string
}

export interface Teams{
    id:number
    hackathonId:number
    name:string
}


const Home: React.FC = () => {
    return (
        <div className="space-y-8">
            <section>
                <h2 className="text-2xl font-bold mb-4 px-8">ハッカソン一覧</h2>
                <div className="justify-content:flex-start flex flex-wrap p-8 gap-4">
                    {dummyHackathons.map((hackathon: Hackathon) => (
                        <CustomCard key={hackathon.id} hackathon={hackathon} />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 px-8">プロダクト一覧</h2>
                <div className="justify-content:flex-start flex flex-wrap p-8 gap-4">
                    {dummyProducts.map((product: Product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product}
                            team={dummyTeams[product.teamId]}
                            hackathon={dummyHackathons[product.hackathonId]}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
export default Home;