"use client";

import ThemeToggle from "../blocks/ThemeToggle";
// import AudioPlayer from "../blocks/AudioPlayer";
import { Navigation } from "./Navbar";
import { MobileNavigation } from "./MobileNavigation";
import { useState, useEffect } from "react";


export function Header() {

    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <header>

            {/* Barre de navigation */}
            <Navigation
                currentPath={currentPath}
                className={`opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto transition-opacity duration-1000 fixed max-w-fit top-0 left-0 z-50 bg-background/60 backdrop-blur-sm rounded-full ml-10 my-5 p-1 px-4 border`} />

            {/* Barre de navigation mobile */}
            <MobileNavigation
                currentPath={currentPath}
                className={`
                    md:opacity-0 md:pointer-events-none transition-opacity duration-1000
                    fixed bottom-1 left-1/2 transform -translate-x-1/2 
                    z-50 py-3 px-5 rounded-3xl
                    border bg-card/90 backdrop-blur
                    `}
            />

            {/* Menu top right avec changement de thème et lecteur de musique */}
            <aside className={`fixed max-w-fit top-0 right-0 z-50 bg-background/60 backdrop-blur-sm transition-all duration-500 ease-in-out rounded-full mr-5 my-5 p-1 border`}>
                <div className="flex items-center">
                    {/* <AudioPlayer /> */}
                    <ThemeToggle />
                </div>
            </aside>

        </header>
    );
}