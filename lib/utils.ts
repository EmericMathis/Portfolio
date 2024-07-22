import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Variants, Transition } from 'framer-motion';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


//* animation framer-motion pour le texte
// Définir les propriétés d'animation
const animationVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// Créer une fonction pour réutiliser l'animation
export function useSlideInAnimation(delay = 0): { initial: string; animate: string; variants: Variants; transition: Transition } {
  return {
    initial: 'hidden',
    animate: 'visible',
    variants: animationVariants,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: delay, // Utiliser le délai passé en argument
    },
  };
}

