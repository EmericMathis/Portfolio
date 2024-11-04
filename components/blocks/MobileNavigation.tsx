import HomeSVG from "../svg/Home";
import MessageSVG from "../svg/Message";
import PortfolioSVG from "../svg/Portfolio";
import TimelineSVG from "../svg/Timeline";
import { TypographySmall } from "../typography/TypographySmall";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";

export function MobileNavigation({ className }: { className?: string }) {
    return (
        <NavigationMenu className={className}>
            <NavigationMenuList className="gap-10">

                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className="flex flex-col items-center gap-1 hover:text-primary w-14">
                        <HomeSVG className="w-6 h-6" />
                        <TypographySmall>Accueil</TypographySmall>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/portfolio" className="flex flex-col items-center gap-1 hover:text-primary w-14">
                        <PortfolioSVG className="w-6 h-6" />
                        <TypographySmall>Portfolio</TypographySmall>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/parcours" className="flex flex-col items-center gap-1 hover:text-primary w-14">
                        <TimelineSVG className="w-6 h-6" />
                        <TypographySmall className="text-nowrap">mon parcours</TypographySmall>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/#contact" className="flex flex-col items-center gap-1 hover:text-primary w-14">
                        <MessageSVG className="w-6 h-6" />
                        <TypographySmall>Contact</TypographySmall>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    );
}