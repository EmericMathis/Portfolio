'use client'

import { BlurFade } from '../animation/BlurFade'
import { ProjectCard } from './ProjectCard'

interface Project {
    title: string
    description: string
    images: string[]
    siteUrl?: string
    githubUrl?: string
}

const projects: Project[] = [
    {
        title: 'Emeric Mathis - Portfolio',
        description: 'Conception et développement de mon portfolio. Ce site est mon CV en ligne, il présente mes compétences, mes services, mes réalisations, mon parcours et mes coordonnées. Il est développé avec Next.js, Tailwind CSS et TypeScript.',
        images: [
            '/images/sites/portfolio2.0/portfolio2-0.webp',
        ],
        githubUrl: 'https://github.com/EmericMathis/Portfolio',
    },
    {
        title: 'Intuitivibes - Soins énergétiques',
        description: 'Conception et développement du site vitrine de ma cliente selon ses demandes qui étaient : Un site vitrine qu\'elle puisse modifier elle même (CMS), beaucoup (vraiment beaucoup) de couleurs et de motifs, de l\'originalité, et comme fonctionnalité la prise de rdv en ligne ainsi qu\'un formulaire de Contact.',
        images: [
            '/images/sites/intuitivibes/intuitivibes.webp',
            '/images/sites/intuitivibes/intuitivibes-2.webp',
            '/images/sites/intuitivibes/intuitivibes-3.webp',
        ],
        siteUrl: 'https://intuitivibes.fr/',
    },
    {
        title: 'Mahvu - Association de malvoyants',
        description: 'Conception et développement d\'un site 100% accessible pour les malvoyants. Le site propose des articles, des événements, un formulaire de création d\'articles adapté aux aveugles. Selon la demande de l\'association, le site dispose d\'un thème sombre en contraste élevé (jaune sur noir pour améliorer la lisibilité).',
        images: [
            '/images/sites/mahvu/mahvu.webp',
            '/images/sites/mahvu/mahvu-2.webp',
        ],
        siteUrl: 'https://mahvu.org/',
        githubUrl: 'https://github.com/EmericMathis/mahvu',
    },
    {
        title: 'portfolio 1.0',
        description: '1ère version de mon portfolio, développé avec next.js et tailwind pour m\'entraîner au cours de ma première formation. Il n\'était pas très complet ^^\' le nouveau est bien mieux !',
        images: [
            '/images/sites/portfolio/portfolio-2.webp',
        ],
        siteUrl: 'https://portfolio-8jgo4db2u-emericmathis-projects.vercel.app/fr',
        githubUrl: 'https://github.com/EmericMathis/Portfolio',
    }
]

export default function PortfolioCards() {

    return (
        <div className="container mx-auto px-4 py-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <BlurFade delay={0.1 * index} key={project.title} className="w-full h-full">
                        <ProjectCard
                            project={project}
                            className="h-full"
                        />
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}