"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import LanguageChanger from "../blocks/LanguageChanger";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
    const { t } = useTranslation('navbar');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
        <>
            <NavigationMenu className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-500 ease-in-out rounded-full ml-auto md:mx-auto my-5 px-4 border ${isScrolled ? 'py-2' : 'py-4'}`}>
                <NavigationMenu className="hidden md:flex ml-auto">
                    <NavigationMenuList className="flex space-x-8">
                        <NavigationMenuItem>
                            <LanguageChanger />
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/">{t('0')}</Link>

                        </NavigationMenuItem>
                        <NavigationMenuItem className="mx-4">
                            <Link href="career">{t('1')}</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="mx-4">
                            <Link href="projects" onClick={(e) => handleLinkClick(e, "#projects")}>{t('2')}</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="mx-4">
                            <Link href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>{t('3')}</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center space-x-4 md:ml-4">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                                <MenuIcon />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4">
                                <LanguageChanger />
                                <Link href="career" className="text-lg font-medium hover:text-purple-600 transition-colors" onClick={(e) => handleLinkClick(e, "career")}>
                                    {t('1')}
                                </Link>
                                <Link href="#projects" className="text-lg font-medium hover:text-purple-600 transition-colors" onClick={(e) => handleLinkClick(e, "#projects")}>
                                    {t('2')}
                                </Link>
                                <Link href="#contact" className="text-lg font-medium hover:text-purple-600 transition-colors" onClick={(e) => handleLinkClick(e, "#contact")}>
                                    {t('3')}
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </NavigationMenu>

        </>
    );
}