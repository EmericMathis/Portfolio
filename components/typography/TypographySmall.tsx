import clsx from "clsx";

export function TypographySmall({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <small className={clsx("text-xs font-medium leading-none", className)}>{children}</small>
    )
}
