import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <HomeMenu />
            <section className="text-center my-16">
                <SectionHeaders subHeader={"Out Story"} mainHeader={"About Us"} />
                <div className="text-gray-500 max-w-2xl mx-auto mt-4 ">
                    <p > 
                        An About Us page can include a wide array of information, but the most
                        common sections to include are: Who you serve and what you do for them. Your
                        brand story/history, including how you got started. Your mission and vision
                        for the company
                    </p>
                </div>
            </section>
        </>
    );
}
