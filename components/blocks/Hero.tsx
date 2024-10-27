import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { TypographyH1 } from "../typography/TypographyH1";
import { TypographyLead } from "../typography/TypographyLead";

export function Hero() {
    return (
        <div className="relative flex flex-col space-y-2 h-[60vh] w-full items-center justify-center text-center rounded-lg">
            <TypographyLead>
                Emeric MATHIS
            </TypographyLead>
            <TypographyH1 >
                Développeur web <br /> indépendant
            </TypographyH1>

            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.2}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
        </div>
    );
}
