import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { Button } from "../ui/button";

const CTA = () => {
    return (

        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
            <div className="z-10 whitespace-pre-wrap text-center text-5xl">
                <h3 className="text-2xl font-bold mb-4">Une idée ? Un projet ?</h3>
                <p className="text-xl mb-6">N&apos;hésitez pas à demander un devis !</p>
                <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => {
                        const contactSection = document.getElementById('contact')
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}
                >
                    Devis GRATUIT
                </Button>
            </div>
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
        </div>
    );
};

export default CTA;