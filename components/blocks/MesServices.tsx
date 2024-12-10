'use client'

import { Card, CardContent } from "@/components/ui/card";
import { ArrowBigRightDashIcon } from "lucide-react";
import { FadeX } from "../animation/FadeX";

export function MesServices() {
    const services = [
        {
            title: "Création de sites web",
            description: "Développement de sites vitrine, d’e-commerce, et de plateformes interactives sur mesure."
        },
        {
            title: "Accessibilité",
            description: "Adapter le site pour les personnes en situation de handicap, pour lecteurs d'écran, navigation clavier."
        },
        {
            title: "Responsive design",
            description: "Optimisation pour tous les supports, téléphone tablette pc."
        },
        {
            title: "Dernières technologies",
            description: "Conception de solutions personnalisées basées sur Next.js, la techno la plus performante et sécurisée du moment."
        },
        {
            title: "Optimisation SEO",
            description: "Optimisation de la structure sémantique et des performances pour un meilleur positionnement dans les moteurs de recherche."
        },
        {
            title: "Conception et design de sites",
            description: "Je crée des designs modernes et épurés. Si vous avez déjà une maquette préparée par un UI/UX designer, je peux également la reproduire fidèlement."
        },
        {
            title: "Expérience utilisateur animée",
            description: "Animations subtiles pour améliorer l’interaction utilisateur sans compromettre la performance."
        },
        {
            title: "Interface d'administration",
            description: "Développement de panneaux d’administration faciles à utiliser pour une gestion simplifiée du contenu."
        },
    ];

    return (
        <section className="py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 items-start mt-8">
                    <div className="grid grid-cols-1 gap-6">
                        {services.slice(0, 4).map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>

                    <div className="hidden xl:block">
                        <div className="sticky top-8">
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {services.slice(4).map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

interface ServiceCardProps {
    title: string;
    description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <FadeX delay={0.2}>
            <Card className="group hover:bg-primary bg-inherit lg:bg-card border-none lg:border-solid shadow-none lg:h-32 xl:h-40 flex items-center">
                <CardContent className="p-4 w-full">
                    <div className="flex items-center space-x-4">
                        <div>
                            <ArrowBigRightDashIcon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-foreground">{title}</h3>
                            <p className="text-muted-foreground group-hover:text-primary-foreground">{description}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </FadeX>
    )
}