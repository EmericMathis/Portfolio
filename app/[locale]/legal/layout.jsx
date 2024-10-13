import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import Divider from "@/components/blocks/Divider";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Divider />
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}