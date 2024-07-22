import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";


function svgToDataUri(svg: string) {
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Cette fonction génère un SVG à pois avec la couleur spécifiée
function generateDotPattern(color: string) {
    return `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none">
    <circle fill="${color}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
    )}")`;
}

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const [secondaryColor, setSecondaryColor] = useState("#cccccc"); // valeur par défaut
    const [mutedColor, setMutedColor] = useState("#cccccc"); // valeur par défaut
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) {
            return;
        }

        const updateColors = () => {
            const secondaryHSL = getComputedStyle(document.documentElement)
                .getPropertyValue('--secondary')
                .trim();
            const secondaryColor = `hsl(${secondaryHSL})`;
            setSecondaryColor(secondaryColor);

            const mutedHSL = getComputedStyle(document.documentElement)
                .getPropertyValue('--muted')
                .trim();
            const mutedColor = `hsl(${mutedHSL})`;
            setMutedColor(mutedColor);
        };

        // Ajoutez un délai avant de mettre à jour les couleurs
        const timeoutId = setTimeout(updateColors, 100);

        // Supprimez le délai lors du nettoyage
        return () => clearTimeout(timeoutId);
    }, [theme, isMounted]);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        if (!currentTarget) return;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Utilisez la fonction generateDotPattern pour générer les images d'arrière-plan à pois
    let lightDotPattern = generateDotPattern(mutedColor);
    let darkDotPattern = generateDotPattern(secondaryColor);

    return (
        <div
            className={cn(
                "relative h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{ backgroundImage: lightDotPattern }}
            />
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    backgroundImage: darkDotPattern,
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }}
            />

            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};