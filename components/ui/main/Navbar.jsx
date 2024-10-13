"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import LanguageChanger from "../blocks/LanguageChanger";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { MenuIcon } from "lucide-react";
import HyperText from "../ui/hyper-text";

export default function Navbar() {
    const { t } = useTranslation('navbar');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: t('1'), path: "#about" },
        { title: t('2'), path: "#projects" },
        { title: t('3'), path: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            setIsScrolled(currentScrollTop > 100);
            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    const handleLinkClick = (e, path) => {
        e.preventDefault();
        document.querySelector(path).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/70 transition-all duration-500 ease-in-out ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <HyperText
                    className={`font-extrabold transition-all duration-500 ${isScrolled ? 'text-lg' : 'text-2xl'}`}
                    text="Emeric mathis"
                    framerProps={{}}
                    tabIndex={0}
                    aria-label="Emeric Mathis, web developer"
                />
                <NavigationMenu className="hidden md:flex ml-auto">
                    <NavigationMenuList className="flex space-x-8">
                        <NavigationMenuItem>
                            <LanguageChanger />
                        </NavigationMenuItem>
                        {navLinks.map((link, index) => (
                            <NavigationMenuItem key={index} className="mx-4">
                                <Link href={link.path} onClick={(e) => handleLinkClick(e, link.path)}>
                                    {link.title}
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center space-x-4 ml-4">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <MenuIcon onClick={() => setIsOpen(!isOpen)} />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4">
                                <LanguageChanger />
                                {navLinks.map((link, index) => (
                                    <Link key={index} href={link.path} className="text-lg font-medium hover:text-purple-600 transition-colors" onClick={(e) => handleLinkClick(e, link.path)}>
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}