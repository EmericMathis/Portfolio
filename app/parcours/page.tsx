import Divider from "@/components/blocks/Divider";
import { Footer } from "@/components/blocks/Footer"
import { Header } from "@/components/blocks/Header"
import { Hero } from "@/components/blocks/Hero";
import { Timeline } from "@/components/ui/timeline";
import data from "@/data/timeline-data"


export default function Parcours() {


    return (
        <div>
            <Header />
            <main className="mx-auto">

                {/* HERO */}
                <Hero textLead="Parcours" textSubLead="Découvrez" textSublead2="mon parcours" />
                <Divider />

                {/* Parcours */}
                <Timeline data={data} />
                <Divider />

            </main>
            <Footer />
        </div>
    )
}