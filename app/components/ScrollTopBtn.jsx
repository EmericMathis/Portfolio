"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTopButton = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            setShowScrollTopButton(currentScrollTop > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 border text-white rounded-full p-2 transition-opacity duration-500 active:scale-90 z-10 ${showScrollTopButton ? 'opacity-100' : 'opacity-0'}`}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollTopButton;