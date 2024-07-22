import { ThemeToggle } from "../ui/ModeToggle";
import Logo from "../ui/logo";
import { FadeIn } from "@/lib/motion";

const Header = () => {
    return (
        <>
            <header className="sticky top-0 z-50">
                <FadeIn delay={0.2}>
                    <div className="flex justify-between max-w-5xl mx-auto p-5 max-sm:p-4">
                        <nav>
                            <Logo />
                        </nav>
                        <ThemeToggle />
                    </div>
                </FadeIn>
            </header>
        </>
    );
};

export default Header;