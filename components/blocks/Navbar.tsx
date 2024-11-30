"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import clsx from "clsx"
import HomeSVG from "../svg/Home"

export function Navigation({ className, currentPath }: { className?: string, currentPath: string }) {
    return (
        <nav aria-label="Main Navigation" className={clsx(className)}>
            <NavigationMenu>
                <NavigationMenuList>
                    <li>
                        <Link href="/" className={cn(navigationMenuTriggerStyle(), "focus:ring focus:ring-inset focus:ring-primary px-2", { "text-primary": currentPath === "/" })}>
                            <HomeSVG className="w-5 h-5" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className={cn(navigationMenuTriggerStyle(), "focus:ring focus:ring-inset focus:ring-primary", { "text-primary": currentPath === "/portfolio" })}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/parcours" className={cn(navigationMenuTriggerStyle(), "focus:ring focus:ring-inset focus:ring-primary", { "text-primary": currentPath === "/parcours" })}>
                            Mon parcours
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className={cn(navigationMenuTriggerStyle(), "focus:ring focus:ring-inset focus:ring-primary", { "text-primary": currentPath === "/#contact" })}>
                            Contact
                        </Link>
                    </li>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

const ListItem: React.FC<{
    className?: string;
    title: string;
    children: React.ReactNode;
    href: string;
}> = ({ className, title, children, href }) => {
    if (!href) {
        return null; // ou vous pouvez gérer ce cas différemment
    }
    return (
        <li>
            <Link href={href} passHref>
                <div
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:ring focus:ring-inset focus:ring-primary",
                        className
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </div>
            </Link>
        </li>
    );
};
ListItem.displayName = "ListItem"