"use client"
import React, { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next'
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu"
import LanguageChanger from "../components/LanguageChanger"
import { Sling as Hamburger } from 'hamburger-react'
import ThemeToggle from "@/components/ui/ThemeToggle"

export default function Navbar() {
    const { t } = useTranslation('navbar')
    const [lastScrollTop, setLastScrollTop] = useState(0)
    const [isScrollingUp, setIsScrollingUp] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { title: t('1'), path: "#about" },
        { title: t('2'), path: "#projects" },
        { title: t('3'), path: "#contact" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY
            if (currentScrollTop > 100) {
                setIsScrollingUp(currentScrollTop < lastScrollTop)
            }
            setLastScrollTop(currentScrollTop)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollTop])

    const handleLinkClick = (e, path) => {
        e.preventDefault()
        document.querySelector(path).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-background transition-transform duration-500 ease-in-out ${isScrollingUp ? '' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 py-2 lg:py-4 flex items-center justify-between">
                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-purple-600 border-r-[20px] border-r-transparent transition-transform duration-500 ease-in-out transform hover:scale-105 hover:translate-y-1 hover:rotate-180"></div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <LanguageChanger />
                        </NavigationMenuItem>
                        {navLinks.map((link, index) => (
                            <NavigationMenuItem key={index}>
                                <Link href={link.path} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={(e) => handleLinkClick(e, link.path)}>
                                        {link.title}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Hamburger toggled={isOpen} toggle={setIsOpen} />
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
    )
}