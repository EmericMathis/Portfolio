'use client'

import { Card, CardContent } from "@/components/ui/card";
import { ArrowBigRightDashIcon } from "lucide-react";
import clsx from 'clsx';
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
            description: "Création de designs modernes et épurés, autrement je vous suggère de me donner une maquette préparée par un UI/UX designer afin que je la reproduise."
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
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-6 items-center mt-8">

                    {/* première colonne */}
                    <div className="lg:space-y-6 flex flex-col items-center justify-center">
                        {services.slice(0, 4).map((service, index) => (
                            <FadeX delay={0.2 * index} key={index}>
                                <ServiceCard {...service} className="w-full md:h-28 lg:h-36" />
                            </FadeX>
                        ))}
                    </div>

                    {/* illustration */}
                    <div className="hidden xl:flex xl:items-center xl:justify-center">
                        <div className="sticky top-8">

                        </div>
                    </div>

                    {/* seconde colonne */}
                    <div className="lg:space-y-6 flex flex-col items-center justify-center">
                        {services.slice(4).map((service, index) => (
                            <FadeX isReversed delay={0.2 * index} key={index}>
                                <ServiceCard {...service} className="w-full md:h-28 lg:h-36" />
                            </FadeX>
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
    className?: string;
}

function ServiceCard({ title, description, className }: ServiceCardProps) {
    return (
        <Card className={clsx(`group hover:bg-primary flex justify-center bg-inherit lg:bg-card border-none lg:border-solid shadow-none`, className)}>
            <CardContent className="p-4 w-full flex items-center">
                <div className="flex items-center space-x-4">
                    <div className="my-auto">
                        <ArrowBigRightDashIcon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-foreground">{title}</h3>
                        <p className="text-muted-foreground group-hover:text-primary-foreground">{description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}