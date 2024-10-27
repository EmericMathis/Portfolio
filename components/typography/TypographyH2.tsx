import { TypographyIT } from "@/interfaces/typographyIT";
import clsx from "clsx";

export function TypographyH2({ children, className }: TypographyIT) {
    return (
        <h2 className={clsx("scroll-m-20 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-3 text-primary first:mt-0", className)}>
            {children}
        </h2>
    )
}
