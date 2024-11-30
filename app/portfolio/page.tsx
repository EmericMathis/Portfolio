import ContactForm from "@/components/blocks/Contact";
import Divider from "@/components/blocks/Divider";
import { Footer } from "@/components/blocks/Footer";
import { Header } from "@/components/blocks/Header";
import { Hero } from "@/components/blocks/Hero";
import PortfolioCards from "@/components/blocks/Portfolio";
import Title from "@/components/blocks/Title";


export default function Portfolio() {


    return (
        <div>
            <Header />
            <main>

                {/* HERO */}
                <Hero textLead="Portfolio" textSubLead="Découvrez" textSublead2="mes réalisations" />

                {/* PORTFOLIO */}
                <Title title="Projets web" subtitle="" />
                <PortfolioCards />
                <Divider />

                {/* CONTACT */}
                <Title id="contact" title="Contact" subtitle="Une question, un projet ? Contactez-moi !" />
                <ContactForm />
                <Divider />
            </main>
            <Footer />
        </div>
    )
}