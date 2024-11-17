import Link from "next/link";
import HomeSVG from "../svg/Home";
import MessageSVG from "../svg/Message";
import PortfolioSVG from "../svg/Portfolio";
import TimelineSVG from "../svg/Timeline";
import { TypographySmall } from "../typography/TypographySmall";
import { NavigationMenu, NavigationMenuItem } from "../ui/navigation-menu";

export function MobileNavigation({ className, currentPath }: { className?: string, currentPath: string }) {

    return (
        <NavigationMenu className={className} >
            <div className="flex justify-around w-full list-none">
                <NavigationMenuItem>
                    <Link
                        href="/"
                        className={`flex flex-col items-center gap-1 hover:text-primary w-14 ${currentPath === "/" ? "text-primary/80" : ""}`}
                        tabIndex={-1}
                    >
                        <HomeSVG className="w-6 h-6" />
                        <TypographySmall>Accueil</TypographySmall>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link
                        href="/portfolio"
                        className={`flex flex-col items-center gap-1 hover:text-primary w-14 ${currentPath === "/portfolio" ? "text-primary/80" : ""}`}
                        tabIndex={-1}
                    >
                        <PortfolioSVG className="w-6 h-6" />
                        <TypographySmall>Portfolio</TypographySmall>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link
                        href="/parcours"
                        className={`flex flex-col items-center gap-1 hover:text-primary w-14 ${currentPath === "/parcours" ? "text-primary/80" : ""}`}
                        tabIndex={-1}
                    >
                        <TimelineSVG className="w-6 h-6" />
                        <TypographySmall className="whitespace-nowrap">mon parcours</TypographySmall>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link
                        href="/#contact"
                        className={`flex flex-col items-center gap-1 hover:text-primary w-14 ${currentPath === "/#contact" ? "text-primary/80" : ""}`}
                        tabIndex={-1}
                    >
                        <MessageSVG className="w-6 h-6" />
                        <TypographySmall>Contact</TypographySmall>
                    </Link>
                </NavigationMenuItem>
            </div>
        </NavigationMenu>
    );
}