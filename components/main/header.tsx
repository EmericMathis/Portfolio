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
            <header className="sticky top-0 z-50 border-b bg-background">
                <FadeIn delay={0.1}>
                    <div className="flex justify-between container mx-auto py-2 max-sm:py-1 relative">
                        <Logo />
                        <Burger
                            onToggle={handleToggle}
                            className={`transition-transform duration-700 z-50 ${isToggled ? "hover:rotate-90" : ""}`}
                        />
                        <div className={`absolute top-full right-0 transition-all duration-700 text-nowrap ${isToggled ? "w-full" : "w-0"} overflow-hidden bg-primary text-primary-foreground z-40`}>
                            <div className="p-2">
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