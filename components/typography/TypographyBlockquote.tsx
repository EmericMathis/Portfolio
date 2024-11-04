import clsx from "clsx";

export function TypographyBlockquote({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <blockquote className={clsx("mt-1 border-l pl-3 italic text-muted-foreground", className)}>
            {children}
        </blockquote>
    )
}
