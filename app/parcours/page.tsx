import ContactForm from "@/components/blocks/Contact";
import Divider from "@/components/blocks/Divider";
import { Footer } from "@/components/blocks/Footer";
import { Header } from "@/components/blocks/Header";
import { Hero } from "@/components/blocks/Hero";
import { Timeline } from "@/components/blocks/Timeline";
import Title from "@/components/blocks/Title";
import data from "@/data/timeline-data";


export default function Parcours() {


    return (
        <div>
            <Header />
            <main>

                {/* HERO */}
                <Hero textLead="Parcours" textSubLead="Découvrez" textSublead2="mon parcours" />

                {/* Parcours */}
                <Timeline data={data} />
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