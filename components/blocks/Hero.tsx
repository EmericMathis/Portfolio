import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { TypographyH1 } from "../typography/TypographyH1";
import { TypographyLead } from "../typography/TypographyLead";
import SparklesText from "../ui/sparkles-text";

export function Hero() {
    return (
        <div className="relative flex flex-col space-y-2 h-[80vh] w-full items-center justify-center text-center rounded-lg">
            <TypographyLead>
                Emeric MATHIS
            </TypographyLead>
            <SparklesText text="Développeur web" sparklesCount={3} colors={{ first: "hsl(var(--primary))", second: "hsl(var(--primary))" }} />
            <SparklesText text="indépendant" sparklesCount={3} colors={{ first: "hsl(var(--primary))", second: "hsl(var(--primary))" }} />

            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.3}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "absolute inset-0 flex items-center justify-center",
                    "[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]",
                    "h-full w-full skew-y-12",
                )}
            />
        </div>
    );
}