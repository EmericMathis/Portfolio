'use client'

import { BlurFade } from '../animation/BlurFade'
import { ProjectCard } from './ProjectCard'
import portfolioData from '@/data/portfolio-data.json'

export default function PortfolioCards() {
    return (
        <div className="container mx-auto px-4 py-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {portfolioData.map((project, index) => (
                    <BlurFade delay={0.1 * index} key={project.title} className="w-full h-full">
                        <ProjectCard project={project} className="h-full" />
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}