'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Code, Palette, Globe, Database, Layout } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const domainesCompetences = [
    {
        categorie: "Gestion de projets web",
        icon: <Globe className="h-6 w-6" />,
        description: "Site vitrine, corporate, évènementiel, e-commerce, intranet, application mobile.",
        sousCompetences: ["Site vitrine", "Corporate", "Évènementiel", "E-commerce", "Intranet", "Application mobile"]
    },
    {
        categorie: "Conception graphique & Webdesign",
        icon: <Palette className="h-6 w-6" />,
        description: "Logos, templates Web, plaquettes publicitaires, cartes de visite, newsletters...",
        sousCompetences: ["Logos", "Templates Web", "Plaquettes publicitaires", "Cartes de visite", "Newsletters"]
    },
    {
        categorie: "CMS & Intégration",
        icon: <Layout className="h-6 w-6" />,
        description: "Wordpress, Joomla, Prestashop, phpBB, IPBoard, Intégration (X)HTML / CSS",
        sousCompetences: ["Wordpress", "Joomla", "Prestashop", "phpBB", "IPBoard", "Intégration (X)HTML / CSS"]
    },
    {
        categorie: "Conception graphique",
        icon: <Database className="h-6 w-6" />,
        description: "Photoshop, Illustrator, InDesign, After Effects",
        sousCompetences: ["Photoshop", "Illustrator", "InDesign", "After Effects"]
    }
]

const competencesDeveloppement = [
    { nom: "(X)HTML - CSS", niveau: 90 },
    { nom: "Accessibilité web", niveau: 70 },
    { nom: "Javascript", niveau: 70 },
    { nom: "React - jsx", niveau: 80 },
    { nom: "Next.js - fullstack app", niveau: 70 },
    { nom: "CSS - SASS - Tailwind", niveau: 80 },
    { nom: "Node.js - Express", niveau: 60 },
    { nom: "MongoDB - Mongoose", niveau: 50 },
    { nom: "SEO - Performance", niveau: 70 },
    { nom: "Wordpress - Joomla", niveau: 70 },
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
        <div className="py-16 px-4 md:px-6 space-y-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3 flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                        {domainesCompetences.map((competence) => (
                            <Card key={competence.categorie} className="h-full bg-card hover:bg-accent transition-colors duration-300">
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
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/3 lg:flex lg:flex-col">
                    <Card className="bg-card h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                            <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                                <Code className="h-6 w-6 mr-2" />
                                Compétences en développement
                            </h2>
                            <div id="competences-dev" className="space-y-6 flex-grow">
                                {competencesDeveloppement.map((comp, index) => (
                                    <div key={comp.nom}>
                                        <div className="mb-2">
                                            <span className="text-sm font-medium text-foreground">{comp.nom}</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-primary"
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
                </div>
            </div>
            <div className="max-w-7xl mx-auto w-full bg-primary text-primary-foreground p-8 rounded-lg shadow-lg">
                <div className="container mx-auto text-center">
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
            </div>
        </div>
    )
}