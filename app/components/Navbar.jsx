"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Squeeze as Hamburger } from 'hamburger-react'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            setIsScrollingUp(currentScrollTop < lastScrollTop);
            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return (
        <nav className={`flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 bg-[#121212] fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${isScrollingUp ? '' : '-translate-y-full'}`}>
            <div className="w-0 h-0 
   border-l-[20px] border-l-transparent
   border-b-[35px] border-b-purple-600
   border-r-[20px] border-r-transparent
   transition-transform duration-500 ease-in-out
   transform hover:scale-105 hover:translate-y-1 hover:rotate-180">
            </div>
            <div className="mobile-menu block md:hidden">
                <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} size={30} />
            </div>
            <div className={`menu w-full transform origin-top text-center overflow-hidden transition-all duration-300 ease-in-out ${navbarOpen ? 'max-h-[100vh]' : 'max-h-0'} md:max-h-none md:flex md:w-auto`} id="navbar">
                <ul className={`flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 mt-0 md:flex md:items-center transition-opacity duration-300 ease-in-out ${navbarOpen ? 'opacity-100' : 'opacity-0'} md:opacity-100`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;