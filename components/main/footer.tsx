import Link from "next/link";
import Logo from "../ui/logo";

const Footer = () => {
    return (
        <>
            <footer className="z-10 border-t">
                <nav className="flex text-sm justify-between w-full mx-auto container py-10 max-sm:flex-col">
                    <div className="pb-2">
                        <Logo />
                    </div>
                    <div className="flex w-2/3 justify-between max-sm:flex-col max-sm:mx-auto">
                        <div className="flex flex-col max-sm:flex-row  max-sm:gap-3">
                            <h4 className="pb-2">Social</h4>
                            <Link className="text-muted hover:text-primary" href="/">LinkedIn</Link>
                            <Link className="text-muted hover:text-primary" href="/">Youtube</Link>
                        </div>
                        <div className="flex flex-col max-sm:flex-row max-sm:gap-3  ">
                            <h4 className="pb-2">legal</h4>
                            <Link className="text-muted hover:text-primary" href="/">Privacy</Link>
                            <Link className="text-muted hover:text-primary" href="/">Terms</Link>
                        </div>
                        <div className="flex flex-col max-sm:flex-row max-sm:gap-3  ">
                            <h4 className="pb-2">About</h4>
                            <Link className="text-muted hover:text-primary" href="/">About me</Link>
                            <Link className="text-muted hover:text-primary" href="/">Contact</Link>
                        </div>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;