"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import clsx from "clsx"
import HomeSVG from "../svg/Home"

const portfolio: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
]

export function Navigation({ className, currentPath }: { className?: string, currentPath: string }) {

    return (
        <NavigationMenu className={clsx(className)}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={currentPath === "/" ? "text-primary/80" : ""}>
                        <Link href="/" className={"hover:text-primary"} tabIndex={-1} >
                            <HomeSVG className="w-5 h-5 hover:text-primary mr-1" />
                        </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem href="/portfolio" title="Portfolio">
                                Découvrez mes projets et réalisations.
                            </ListItem>
                            <ListItem
                                title="Mes services"
                                href="/#services"
                            >
                                Découvrez mes services et prestations
                            </ListItem>
                            <ListItem
                                title="Mes compétences"
                                href="/#skills"
                            >
                                Découvrez mes compétences et technologies
                            </ListItem>
                            <ListItem
                                title="Tarifs"
                                href="/#pricing"
                            >
                                Découvrez mes tarifs et prestations
                            </ListItem>
                            <ListItem
                                title="À propos"
                                href="/#about"
                            >
                                Découvrez qui je suis et mon parcours
                            </ListItem>
                            <ListItem
                                title="Contact"
                                href="/#contact"
                            >
                                Contactez-moi pour toute demande
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>

                    {/* Portfolio */}
                    <NavigationMenuTrigger className={currentPath === "/portfolio" ? "text-primary/80" : ""}><Link href="/portfolio" tabIndex={-1}>Portfolio</Link></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem href="/portfolio" title="Portfolio">
                                Découvrez mes projets et réalisations.
                            </ListItem>
                            {portfolio.map((project) => (
                                <ListItem
                                    key={project.title}
                                    title={project.title}
                                    href={project.href}
                                >
                                    {project.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>

                    {/* Mon parcours */}
                    <NavigationMenuTrigger className={currentPath === "/parcours" ? "text-primary/80" : ""}><Link href="parcours" tabIndex={-1}>Mon parcours</Link></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem href="/parcours" title="Mon parcours">
                                Découvrez mes parcours et mes expériences.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem >
                    <Link href="/#contact" tabIndex={-1} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
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
