"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type FadeDirection = "up" | "down" | "left" | "right";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: FadeDirection;
}

export function BlurFade({
  children,
  className,
  delay = 0.2,
  direction = "up",
  ...props
}: BlurFadeProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10px" });

  const getVariants = (direction: FadeDirection) => {
    switch (direction) {
      case "up":
        return { hidden: { y: 10, opacity: 0, filter: "blur(4px)" }, visible: { y: 0, opacity: 1, filter: "blur(0px)" } };
      case "down":
        return { hidden: { y: -10, opacity: 0, filter: "blur(4px)" }, visible: { y: 0, opacity: 1, filter: "blur(0px)" } };
      case "left":
        return { hidden: { x: 10, opacity: 0, filter: "blur(4px)" }, visible: { x: 0, opacity: 1, filter: "blur(0px)" } };
      case "right":
        return { hidden: { x: -10, opacity: 0, filter: "blur(4px)" }, visible: { x: 0, opacity: 1, filter: "blur(0px)" } };
      default:
        return { hidden: { y: 10, opacity: 0, filter: "blur(4px)" }, visible: { y: 0, opacity: 1, filter: "blur(0px)" } };
    }
  };

  const variants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay: 0 + delay, duration: 0.6, ease: "easeOut" }}
      className={className}
      {...props} // Passe toutes les props restantes au motion.div
    >
      {children}
    </motion.div>
  );
}