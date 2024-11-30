"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Code2, Briefcase, Scissors, Rocket } from 'lucide-react'
import { TypographyH4 } from '../typography/TypographyH4'
import { TypographyP } from '../typography/TypographyP'
import { BlurFade } from '../animation/BlurFade'

export default function About() {
    const [yearsExperience, setYearsExperience] = useState(0)
    const [projectsCompleted, setProjectsCompleted] = useState(0)

    useEffect(() => {
        // Calculer les années d'expérience depuis janvier 2022
        const startYear = 2022
        const currentYear = new Date().getFullYear()
        const experienceYears = currentYear - startYear
        setYearsExperience(experienceYears)

        // Animation pour le nombre de projets réalisés
        const interval = setInterval(() => {
            setProjectsCompleted(prev => (prev < 6 ? prev + 1 : 6))
        }, 100)

        return () => clearInterval(interval)
    }, [])

    return (
        <Card className="w-screen max-w-7xl mx-auto mt-10 border-none bg-inherit">
            <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <BlurFade>
                        <div>
                            <TypographyH4>Ma passion</TypographyH4>
                            <TypographyP>
                                Ma passion pour le développement web est née lorsque j&apos;ai créé un site à l&apos;aide de shopify pour un ami. <br /> Limité par les fonctionnalités proposées par la plateforme, j&apos;ai décidé de me former pour coder moi-même mes propres fonctionnalités et designs.
                            </TypographyP>
                            <TypographyP>
                                Depuis, j&apos;ai tout mis en œuvre pour progresser et m&apos;épanouir dans ce domaine, en prenant plaisir à chaque projet sur lequel je travaille.
                            </TypographyP>
                            <Badge className="text-sm font-mono mt-8 pointer-events-none select-none">Développeur web passionné</Badge>
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.5}>
                        <div>
                            <TypographyH4>Pourquoi le web?</TypographyH4>
                            <TypographyP>
                                J&apos;ai commencé par créer un jeu mobile pour m&apos;amuser le weekend, puis le web m&apos;a paru plus varié et intéressant.
                            </TypographyP>
                            <TypographyP>
                                Le web permet de faire énormément de choses, de la simple page statique à la plateforme e-commerce complexe, en passant par des applications web et mobiles.
                            </TypographyP>
                            <TypographyP>
                                J&apos;ai également un projet personnel (colossal) en cours, dont je garde le secret 😎
                            </TypographyP>
                        </div>
                    </BlurFade>
                </div>
                <Separator className="my-20" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <BlurFade>
                        <StatCard icon={<Code2 className="w-6 h-6" />} value={yearsExperience} label="Années d'expérience" />
                    </BlurFade>
                    <BlurFade delay={0.2}>
                        <StatCard icon={<Briefcase className="w-6 h-6" />} value={projectsCompleted} label="Projets menés" />
                    </BlurFade>
                    <BlurFade delay={0.4}>
                        <StatCard icon={<Scissors className="w-6 h-6" />} value={0} label="Cheveux" />
                    </BlurFade>
                    <BlurFade delay={0.6}>
                        <StatCard icon={<Rocket className="w-6 h-6" />} value="∞" label="Passion" />
                    </BlurFade>
                </div>
            </CardContent>
        </Card>

    )
}

interface StatCardProps {
    icon: React.ReactNode;
    value: number | string;
    label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
    return (
        <Card className="flex flex-col items-center justify-center p-4 border-none">
            <div className="text-primary mb-2">{icon}</div>
            <motion.div
                className="text-3xl font-bold mb-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                {value}
            </motion.div>
            <div className="text-sm text-muted-foreground text-center">{label}</div>
        </Card>
    )
}
