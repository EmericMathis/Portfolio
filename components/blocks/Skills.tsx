'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Code, Palette, Globe, Database, Layout } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { TypographyMuted } from '../typography/TypographyMuted'
import { BlurFade } from '../animation/BlurFade'

const domainesCompetences = [
    {
        categorie: "Développement Web",
        icon: <Globe className="h-6 w-6" />,
        description: "Développement de sites web modernes, e-commerce, plateformes interactives et applications mobiles.",
        sousCompetences: ["Site vitrine", "E-commerce", "Application Next.js", "Application mobile"]
    },
    {
        categorie: "UX Design",
        icon: <Palette className="h-6 w-6" />,
        description: "Création de designs modernes et responsives, accessibles et optimisés pour l'expérience utilisateur.",
        sousCompetences: ["Designs modernes", "Accessibilité", "Responsive", "Optimisation UX"]
    },
    {
        categorie: "CMS & Intégration Web",
        icon: <Layout className="h-6 w-6" />,
        description: "Intégration sur Wordpress et autres CMS, développement sur mesure, intégration HTML/CSS/React.",
        sousCompetences: ["Wordpress", "CMS sur mesure", "Intégration HTML/CSS", "Intégration React"]
    },
    {
        categorie: "DevOps & Bases de données",
        icon: <Database className="h-6 w-6" />,
        description: "Déploiement et gestion de docker et docker-compose sur serveur, bases de données, déploiement continu (CI/CD).",
        sousCompetences: ["Docker", "BDD SQL & MongoDB", "CI/CD", "Versionning Git"]
    }
];


const competencesDeveloppement = [
    { nom: "Accessibilité web", niveau: 70 },
    { nom: "Javascript", niveau: 70 },
    { nom: "React - jsx", niveau: 85 },
    { nom: "Next.js - fullstack app", niveau: 70 },
    { nom: "CSS - SASS - Tailwind", niveau: 80 },
    { nom: "Node.js - Express", niveau: 60 },
    { nom: "MongoDB - Mongoose", niveau: 50 },
    { nom: "SEO - Performance", niveau: 70 },
    { nom: "Wordpress &/ou Divi", niveau: 70 },
]

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false)
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('competences-dev')
            if (element) {
                const rect = element.getBoundingClientRect()
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
                setIsVisible(isVisible)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check visibility on mount

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isVisible) {
            competencesDeveloppement.forEach(() => {
                controls.start(i => ({
                    width: `${competencesDeveloppement[i].niveau}%`,
                    transition: { delay: i * 0.1, duration: 2, ease: "easeInOut" }
                }))
            })
        }
    }, [isVisible, controls])

    return (
        <div className="pt-16 px-4 md:px-6 space-y-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3 flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                        {domainesCompetences.map((competence, index) => (
                            <BlurFade key={competence.categorie} delay={0.2 * index}>
                                <Card className="h-full bg-inherit lg:bg-card border-none lg:border-solid hover:border-primary transition-colors duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="mr-4 p-3 bg-primary/10 rounded-full">
                                                {competence.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold text-primary">{competence.categorie}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-4">{competence.description}</p>
                                        <ul className="text-sm">
                                            {competence.sousCompetences.map((sousComp, idx) => (
                                                <li key={idx} className="mb-1 text-foreground">
                                                    • {sousComp}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </BlurFade>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/3 lg:flex lg:flex-col">
                    <BlurFade delay={0.8}>
                        <Card className="bg-inherit lg:bg-card border-none lg:border-solid hover:border-primary h-full">
                            <CardContent className="p-6 flex flex-col h-full">
                                <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                                    <Code className="h-6 w-6 mr-2" />
                                    Compétences en développement
                                </h2>
                                <div id="competences-dev" className="space-y-4 flex-grow">
                                    {competencesDeveloppement.map((comp, index) => (
                                        <div key={comp.nom}>
                                            <div className="mb-2">
                                                <TypographyMuted className="">{comp.nom}</TypographyMuted>
                                            </div>
                                            <div className="h-3 bg-secondary rounded overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-primary/80"
                                                    initial={{ width: 0 }}
                                                    animate={controls}
                                                    custom={index}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </BlurFade>
                </div>
            </div>
        </div>
    )
}