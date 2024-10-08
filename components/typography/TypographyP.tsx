interface TypographyPProps {
    children: React.ReactNode;
    className?: string;
}

export function TypographyP({ children, className }: TypographyPProps) {
    return (
        <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className || ''}`}
            tabIndex={0}>
            {children}
        </p>
    );
}