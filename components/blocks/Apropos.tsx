"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Code2, Briefcase, Scissors, Rocket } from 'lucide-react'
import { TypographyH4 } from '../typography/TypographyH4'
import { TypographyP } from '../typography/TypographyP'

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
        <Card className="w-full max-w-7xl mx-auto overflow-hidden mt-10 bg-inhérit border-none lg:border-solid lg:bg-card">
            <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <TypographyH4 >Je suis développeur web freelance et j&apos;aime ça !</TypographyH4>
                        <TypographyP >
                            Ma passion pour le développement web commence en 2003 et m&apos;a demandé un changement radical de cursus afin de pouvoir pleinement l&apos;exploiter.
                        </TypographyP>
                        <TypographyP>
                            Dès lors, je mis tout en oeuvre pour percer dans cette voie, tout en prenant du plaisir sur les divers projets développés.
                        </TypographyP>
                        <Badge className="text-sm font-mono mt-8">Un développeur web passionné</Badge>
                    </div>
                    <div>
                        <TypographyH4 >Expérience en développement</TypographyH4>
                        <TypographyP>
                            Mon expérience acquise au fil des projets me permet de mieux comprendre les attentes d&apos;un client et de répondre précisement au besoin demandé en fonction du domaine d&apos;activité.
                        </TypographyP>
                        <TypographyP>
                            Du site vitrine au projet plus complexe, je vous propose une expertise et un développement web qui correspond à vos attentes.
                        </TypographyP>
                    </div>
                </div>
                <Separator className="my-8" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard icon={<Code2 className="w-6 h-6" />} value={yearsExperience} label="Années d'expérience" />
                    <StatCard icon={<Briefcase className="w-6 h-6" />} value={projectsCompleted} label="Projets réalisés" />
                    <StatCard icon={<Scissors className="w-6 h-6" />} value={0} label="Cheveux" />
                    <StatCard icon={<Rocket className="w-6 h-6" />} value="∞" label="Passion" />
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
