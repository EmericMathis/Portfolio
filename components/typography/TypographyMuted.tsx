import clsx from "clsx";

export function TypographyMuted({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={clsx("text-sm text-muted-foreground", className)}>{children}</p>
    )
}
