import { TypographyIT } from '@/interfaces/typographyIT';
import clsx from 'clsx';

export function TypographyLead({ children, className }: TypographyIT) {
    return (
        <p className={clsx("text-xl sm:text-2xl lg:text-3xl text-primary font-extrabold tracking-tight", className)}>
            {children}
        </p>
    );
}