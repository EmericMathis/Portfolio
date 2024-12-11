"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export function FadeX({ children, className, delay = 0, distance = 50, isReversed = false, ...props }: { children: React.ReactNode; className?: string; delay?: number; distance?: number; isReversed?: boolean }) {
    const ref = useRef(null);

    const variants = {
        hidden: { x: !isReversed ? -distance : distance, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ margin: "-10px", amount: 0.3 }}
            transition={{ delay: 0.1 + delay, duration: 0.6, ease: "easeInOut" }}
            className={`overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
}