import ContactForm from "@/components/blocks/Contact";
import Divider from "@/components/blocks/Divider";
import { Footer } from "@/components/blocks/Footer"
import { Header } from "@/components/blocks/Header"
import { Hero } from "@/components/blocks/Hero";
import Title from "@/components/blocks/Title";
import AngularSeparator1 from "@/components/svg/separators/AngularSeparator1";
import { Timeline } from "@/components/ui/timeline";
import data from "@/data/timeline-data"


export default function Parcours() {


    return (
        <div>
            <Header />
            <main>

                {/* HERO */}
                <Hero textLead="Parcours" textSubLead="Découvrez" textSublead2="mon parcours" />
                <div className="h-[29vh] flex flex-col-reverse">
                    <AngularSeparator1 flipVertical={true} className="w-screen text-secondary" />
                </div>

                {/* Parcours */}
                <AngularSeparator1 className="w-screen text-secondary" />
                <Title title="Timeline" subtitle="Mon parcours professionnel" />
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