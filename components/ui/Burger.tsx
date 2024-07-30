"use client"

import { Cross as Hamburger } from 'hamburger-react'

interface BurgerProps {
    onToggle: (toggled: boolean) => void;
    className?: string;
}

const Burger: React.FC<BurgerProps> = ({ onToggle, className }) => {
    return (
        <div className={className}>
            <Hamburger
                size={25}
                onToggle={onToggle}

            />
        </div>
    );
};

export default Burger;