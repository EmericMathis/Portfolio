import ContactForm from "@/components/blocks/Contact";
import Divider from "@/components/blocks/Divider";
import { Footer } from "@/components/blocks/Footer"
import { Header } from "@/components/blocks/Header"
import { Hero } from "@/components/blocks/Hero";
import PortfolioCards from "@/components/blocks/Portfolio";
import Title from "@/components/blocks/Title";
import AngularSeparator1 from "@/components/svg/separators/AngularSeparator1";


export default function Portfolio() {


    return (
        <div>
            <Header />
            <main>

                {/* HERO */}
                <Hero textLead="Portfolio" textSubLead="Découvrez" textSublead2="mes réalisations" />
                <div className="h-[29vh] flex flex-col-reverse">
                    <AngularSeparator1 flipVertical={true} className="w-screen text-secondary" />
                </div>

                {/* PORTFOLIO */}
                <AngularSeparator1 className="w-screen text-secondary" />
                <Title title="Portfolio" subtitle="Découvrez mes réalisations" />
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