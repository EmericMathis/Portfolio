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

export function Navigation({ className }: { className?: string, currentPath: string }) {

    return (
        <NavigationMenu className={clsx(className)}>
            <NavigationMenuList>
                <Link href="/" className={"hover:text-primary"} ><HomeSVG className="w-5 h-5 hover:text-primary mr-1" /></Link>
                <Link href="/portfolio" tabIndex={-1} className={navigationMenuTriggerStyle()}>Portfolio</Link>
                <Link href="parcours" tabIndex={-1} className={navigationMenuTriggerStyle()}>Mon parcours</Link>
                <Link href="/#contact" tabIndex={-1} className={navigationMenuTriggerStyle()}>Contact</Link>
            </NavigationMenuList>
        </NavigationMenu>
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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
