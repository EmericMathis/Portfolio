'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import clsx from 'clsx'
import { Button } from '../ui/button'
import Link from 'next/link'

export function MesServices() {
    const services = [
        {
            title: "Gestion de projets web",
            description: "Site vitrine, corporate, évènementiel, e-commerce, intranet, application mobile."
        },
        {
            title: "Intégration Web",
            description: "Des intégrations (X)HTML / CSS respectueuses des standards du Web."
        },
        {
            title: "Développements spécifiques",
            description: "Des outils adaptés à votre coeur de métier, applications & solutions personnalisées."
        },
        {
            title: "Référencement naturel",
            description: "Affichage sémantique des informations, des pages propres pour un référencement optimal."
        },
        {
            title: "Conception graphique et développement",
            description: "Blog, Site vitrine, Template"
        },
        {
            title: "Dynamisme des pages",
            description: "Des animations de contenu non intrusives pour embellir votre projet."
        },
        {
            title: "Interface d'administration",
            description: "Outils spécifiques au bon fonctionnement de votre entreprise."
        },
        {
            title: "Responsive design",
            description: "Compatible tous supports, tablette & application mobile."
        }
    ]

    return (
        <section className="py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-center mt-8">
                    <div className="space-y-6 flex flex-col items-center justify-center">
                        {services.slice(0, 4).map((service, index) => (
                            <ServiceCard key={index} {...service} className="w-full md:h-28 lg:h-36" />
                        ))}
                    </div>

                    <div className="hidden xl:flex xl:items-center xl:justify-center">
                        <div className="sticky top-8">
                            <Image
                                src="https://picsum.photos/400/700"
                                alt="Services illustration"
                                width={500}
                                height={700}
                                className="rounded-lg object-cover w-full h-64 shadow-xl"
                            />
                        </div>
                    </div>

                    <div className="space-y-6 flex flex-col items-center justify-center">
                        {services.slice(4).map((service, index) => (
                            <ServiceCard key={index + 4} {...service} className="w-full md:h-28 lg:h-36" />
                        ))}
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <Button size="lg" asChild className="">
                        <Link href="#contact">Demander un devis 100% gratuit</Link>
                    </Button>
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
        <Card className={clsx(`group hover:shadow-lg transition-shadow duration-300 overflow-hidde`, className)}>
            <CardContent className="p-6 h-36">
                <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full p-3 group-hover:bg-primary/20 transition-colors duration-300 my-auto">
                        <ChevronRight className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">{title}</h3>
                        <p className="text-muted-foreground">{description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}