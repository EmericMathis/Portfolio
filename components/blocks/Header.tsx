"use client";

import ThemeToggle from "../blocks/ThemeToggle";
import AudioPlayer from "../blocks/AudioPlayer";
import { Navigation } from "./Navbar";
import { MobileNavigation } from "./MobileNavigation";


export function Header() {

    return (
        <header>

            {/* Barre de navigation */}
            <Navigation className={`opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto transition-opacity duration-1000 fixed max-w-fit top-0 left-0 z-50 bg-background/60 backdrop-blur-sm rounded-full ml-10 my-5 p-1 px-4 border`} />

            {/* Barre de navigation mobile */}
            <MobileNavigation className={`md:opacity-0 md:pointer-events-none fixed bottom-0 transition-opacity duration-1000 z-50 bg-primary-foreground border-t w-full h-20 pb-5`} />

            {/* Menu top right avec changement de thème et lecteur de musique */}
            <aside className={`fixed max-w-fit top-0 right-0 z-50 bg-background/60 backdrop-blur-sm transition-all duration-500 ease-in-out rounded-full mr-10 my-5 p-1 border`}>
                <div className="flex items-center">
                    <AudioPlayer />
                    <ThemeToggle />
                </div>
            </aside>

        </header>
    );
}