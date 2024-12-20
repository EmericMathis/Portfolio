"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FadeY({
    children,
    className,
    delay = 0,
    distance = 50,
    isReversed = false,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    distance?: number;
    isReversed?: boolean;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-10px" });

    const variants = {
        hidden: { y: isReversed ? -distance : distance, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay: 0 + delay, duration: 0.6, ease: "easeInOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
} 