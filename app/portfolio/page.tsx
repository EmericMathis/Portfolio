import Divider from "@/components/blocks/Divider";
import { Footer } from "@/components/blocks/Footer"
import { Header } from "@/components/blocks/Header"
import { Hero } from "@/components/blocks/Hero";
import PortfolioCards from "@/components/blocks/Portfolio";


export default function Portfolio() {


    return (
        <div>
            <Header />
            <main>

                {/* HERO */}
                <Hero textLead="Portfolio" textSubLead="Découvrez" textSublead2="mes réalisations" />
                <Divider />

                {/* PORTFOLIO */}
                <PortfolioCards />
            </main>
            <Footer />
        </div>
    )
}