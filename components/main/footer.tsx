import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../ui/ModeToggle";
import Logo from "../ui/logo";


const Footer = () => {
    return (
        <>
            <footer className="flex z-10 w-full justify-between p-10 max-sm:p-5 border-t">
                <nav className="flex text-sm justify-between w-full max-w-5xl mx-auto">
                    <div>
                        <Logo />
                    </div>
                    <div className="flex flex-col ">
                        <h4 className="pb-2">Social</h4>
                        <Link className="text-muted hover:text-primary" href="/">Twitter</Link>
                        <Link className="text-muted hover:text-primary" href="/">Facebook</Link>
                    </div>
                    <div className="flex flex-col ">
                        <h4 className="pb-2">legal</h4>
                        <Link className="text-muted hover:text-primary" href="/">Privacy</Link>
                        <Link className="text-muted hover:text-primary" href="/">Terms</Link>
                    </div>
                    <div className="flex flex-col ">
                        <h4 className="pb-2">About</h4>
                        <Link className="text-muted hover:text-primary" href="/">About us</Link>
                        <Link className="text-muted hover:text-primary" href="/">Contact</Link>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;