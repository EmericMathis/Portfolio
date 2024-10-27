import { TypographyIT } from "@/interfaces/typographyIT";
import clsx from "clsx";

export function TypographyH2({ children, className }: TypographyIT) {
    return (
        <h2 className={clsx("scroll-m-20 border pb-2 text-2xl lg:text-3xl font-extrabold tracking-tight first:mt-0", className)}>
            {children}
        </h2>
    )
}
