import clsx from "clsx";

export function TypographyP({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={clsx("leading-7 [&:not(:first-child)]:mt-6 dark:text-gray-300", className)}>
            {children}
        </p>
    )
}
