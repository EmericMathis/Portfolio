import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { TypographyLead } from "../typography/TypographyLead";
import { TypographyH1 } from "../typography/TypographyH1";
import { BlurFade } from "../animation/BlurFade";
import { FadeX } from "../animation/FadeX";


export function Hero({
    textLead, textSubLead, textSublead2, className
}: {
    textLead: string, textSubLead: string, textSublead2: string, LinkLeftBtn?: string, textLeftBtn?: string, LinkRightBtn?: string, textRightBtn?: string, className?: string
}) {
    return (
        <>
            <div className={`relative flex flex-col space-y-2 h-[71vh] w-full items-center justify-center text-center rounded-lg ${className}`}>
                <TypographyH1><BlurFade>{textSubLead}</BlurFade><BlurFade delay={0.4}>{textSublead2}</BlurFade></TypographyH1>
                <FadeX delay={0.6}><TypographyLead className="pt-3">{textLead}</TypographyLead></FadeX>
                <AnimatedGridPattern
                    numSquares={20}
                    maxOpacity={0.2}
                    duration={2}
                    repeatDelay={1}
                    color="hsl(var(--primary))"
                    className={cn(
                        "absolute inset-0 flex items-center justify-center",
                        "[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]",
                        "h-full w-full skew-y-12",
                    )}
                />
            </div>
        </>
    );
}