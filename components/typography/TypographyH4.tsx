import clsx from "clsx";

export function TypographyH4({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h4 className={clsx("text-xl font-extrabold mb-3", className)}>
            {children}
        </h4>
    )
}
