import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { TypographyLead } from "../typography/TypographyLead";
import SparklesText from "../ui/sparkles-text";

export function Hero({ textLead, textSubLead, textSublead2 }: { textLead: string, textSubLead: string, textSublead2: string }) {
    return (
        <div className="relative flex flex-col space-y-2 h-[70vh] w-full items-center justify-center text-center rounded-lg">
            <TypographyLead>
                {textLead}
            </TypographyLead>
            <SparklesText text={textSubLead} sparklesCount={3} colors={{ first: "hsl(var(--primary))", second: "hsl(var(--primary))" }} />
            <SparklesText text={textSublead2} sparklesCount={3} colors={{ first: "hsl(var(--primary))", second: "hsl(var(--primary))" }} />

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