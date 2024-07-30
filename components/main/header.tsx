"use client"

import { useState } from "react";
import Burger from "../ui/Burger";
import Logo from "../ui/logo";
import { FadeIn } from "@/lib/motion";

const Header = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const handleToggle = (toggled: boolean) => {
        setIsToggled(toggled);
    };

    return (
        <>
            <header className="sticky top-0 z-50">
                <FadeIn delay={0.2}>
                    <div className="flex justify-between max-w-5xl mx-auto p-5 max-sm:p-4 relative">
                        <Logo />
                        <Burger
                            onToggle={handleToggle}
                            className={`transition-transform duration-700 delay-200 z-50 ${isToggled ? "hover:rotate-180" : ""}`}
                        />
                        <div className={`absolute top-full right-0 transition-all duration-700 text-nowrap ${isToggled ? "w-full" : "w-0"} overflow-hidden bg-primary text-primary-foreground z-40`}>
                            <div className="p-5">
                                <ul className="flex justify-end">
                                    <li className="py-2 px-4"><a href="#section1">Section 1</a></li>
                                    <li className="py-2 px-4"><a href="#section2">Section 2</a></li>
                                    <li className="py-2 px-4"><a href="#section3">Section 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </header>
        </>
    );
};

export default Header;