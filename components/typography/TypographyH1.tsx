import { TypographyIT } from '@/interfaces/typographyIT';
import clsx from 'clsx';

export function TypographyH1({ children, className }: TypographyIT) {
    return (
        <h1 className={clsx("scroll-m-20 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight", className)}>
            {children}
        </h1>
    );
}