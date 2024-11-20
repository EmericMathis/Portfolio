import { AccessibilityIcon } from "@radix-ui/react-icons";
import {
    BookOpenIcon,
    Settings2Icon,
    TabletSmartphoneIcon,
} from "lucide-react";

export default function IconSection() {
    return (
        <>
            {/* Icon Blocks */}
            <div className="container  mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
                    {/* Icon Block */}
                    <div className="text-center">
                        <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                            <TabletSmartphoneIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-lg font-semibold ">Responsive</h3>
                            <p className="mt-1 text-muted-foreground">
                                Affichage optimisé sur tous les appareils
                            </p>
                        </div>
                    </div>
                    {/* End Icon Block */}
                    {/* Icon Block */}
                    <div className="text-center">
                        <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                            <Settings2Icon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-lg font-semibold ">SEO</h3>
                            <p className="mt-1 text-muted-foreground">
                                Référencement naturel optimisé
                            </p>
                        </div>
                    </div>
                    {/* End Icon Block */}
                    {/* Icon Block */}
                    <div className="text-center">
                        <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                            <BookOpenIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-lg font-semibold ">Conseils</h3>
                            <p className="mt-1 text-muted-foreground">
                                Je vous conseille pour les choix techniques
                            </p>
                        </div>
                    </div>
                    {/* End Icon Block */}
                    {/* Icon Block */}
                    <div className="text-center">
                        <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                            <AccessibilityIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-lg font-semibold ">Accessibilité</h3>
                            <p className="mt-1 text-muted-foreground">
                                naviguable par tous les utilisateurs (handicaps)
                            </p>
                        </div>
                    </div>
                    {/* End Icon Block */}
                </div>
            </div>
            {/* End Icon Blocks */}
        </>
    );
}
