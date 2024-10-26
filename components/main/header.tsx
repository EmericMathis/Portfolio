"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import ThemeToggle from "../blocks/ThemeToggle";
import AudioPlayer from "../blocks/AudioPlayer";

export default function Navbar() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            setIsScrolled(currentScrollTop > 100);
            setLastScrollTop(currentScrollTop);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    const tracks = [
        { title: 'backyard-by-lofium', url: '/music/lofi-song-backyard-by-lofium.mp3' },
        { title: 'toybox-by-lofium', url: '/music/lofi-song-toybox-by-lofium-242708.mp3' },
        { title: 'satisfying-lofi', url: '/music/satisfying-lofi-for-focus-study-amp-working-242103.mp3' },
    ];

    return (
        <>
            <NavigationMenu className={`fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-sm transition-all duration-500 ease-in-out rounded-3xl ml-auto mr-10 md:mx-auto my-5 pl-8 pr-6 border ${isScrolled ? 'py-2' : 'py-4'}`}>
                <NavigationMenu className="hidden md:flex ml-auto">
                    <NavigationMenuList className="flex space-x-8">
                        <NavigationMenuItem>
                            <Link href="#services">Services</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="mx-4">
                            <Link href="#skills">Compétences</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="mx-4">
                            <Link href="#portfolio">Portfolio</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="mx-4">
                            <Link href="#princing">Tarifs</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="mx-4">
                            <Link href="#contact">Contact</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center md:ml-3">
                    <AudioPlayer />
                    <ThemeToggle />
                </div>
            </NavigationMenu>

        </>
    );
}