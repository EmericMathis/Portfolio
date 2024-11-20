import clsx from "clsx";

export function TypographyH3({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={clsx("text-xl font-extrabold text-center mb-3 text-muted-foreground", className)}>
            {children}
        </h3>
    )
}
