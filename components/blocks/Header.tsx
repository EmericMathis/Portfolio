"use client";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import ThemeToggle from "../blocks/ThemeToggle";
import AudioPlayer from "../blocks/AudioPlayer";


export function Header() {

    return (
        <>
            <NavigationMenu className={`fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-sm transition-all duration-500 ease-in-out rounded-full ml-auto mr-10 my-5 p-1 border`}>
                <NavigationMenu className="flex ml-auto">
                </NavigationMenu>

                <div className="flex items-center">
                    <AudioPlayer />
                    <ThemeToggle />
                </div>
            </NavigationMenu>

        </>
    );
}