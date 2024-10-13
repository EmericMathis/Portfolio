
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import CareerTimeline from "@/components/blocks/Timeline";


export default async function Career({ params: { locale } }) {

    return (
        <>
            <Navbar />
            <CareerTimeline />
            <Footer />
        </>
    );
}