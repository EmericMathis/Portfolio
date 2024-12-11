import {
    PenBoxIcon,
    BrushIcon,
    CodeIcon,
    BugIcon
} from "lucide-react";
import { FadeX } from "../animation/FadeX";

export default function IconSection() {
    return (
        <div className="container mx-auto mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">

                {/* Icon Block */}
                <FadeX className="text-center h-32">
                    <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                        <PenBoxIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold ">Analyse</h3>
                        <p className="mt-1 text-muted-foreground">
                            Analyse du projet et des besoins
                        </p>
                    </div>
                </FadeX>

                {/* Icon Block */}
                <FadeX className="text-center h-32">
                    <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                        <BrushIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold ">Design</h3>
                        <p className="mt-1 text-muted-foreground">
                            Conception de maquette visuelle et de la base de données
                        </p>
                    </div>
                </FadeX>

                {/* Icon Block */}
                <FadeX className="text-center h-32">
                    <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                        <CodeIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold ">Code</h3>
                        <p className="mt-1 text-muted-foreground">
                            Développement du site web
                        </p>
                    </div>
                </FadeX>

                {/* Icon Block */}
                <FadeX className="text-center h-32">
                    <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                        <BugIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold ">Tests</h3>
                        <p className="mt-1 text-muted-foreground">
                            Tests unitaires et fonctionnels, tests d&apos;accessibilité
                        </p>
                    </div>
                </FadeX>

            </div>
        </div>
    );
}
