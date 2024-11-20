import { useEffect, useState } from 'react';
import ArrowUpSVG from '../svg/ArrowUp';
import { Button } from '../ui/button';

const BackToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Button
            onClick={scrollToTop}
            className={`fixed bottom-24 md:bottom-4 right-4 p-2 border rounded-full transition-opacity duration-1000 z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="remonter en haut de page"
        >
            <ArrowUpSVG />
        </Button>
    );
};

export default BackToTopBtn;