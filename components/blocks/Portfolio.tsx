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
        title: 'MCD-maker | Side Project',
        description: "Mon side project, un outil en ligne pour créer des MCD (Modèle Conceptuel de Données) pour des projets de développement web. Il est développé avec Next.js, Tailwind CSS et TypeScript. Je n'ai pas trouvé de solution de modélisation graphique en ligne, alors j'ai commencé à développer mon propre outil. Il me reste pas mal de travail !",
        images: [
            '/images/sites/MCD-maker/MCD-maker-dark.webp',
            '/images/sites/MCD-maker/MCD-maker.webp',
        ],
        githubUrl: 'https://github.com/EmericMathis/Portfolio',
    },
    {
        title: 'Emeric Mathis - Portfolio 2.0',
        description: 'Refonte de mon site web. Il est développé avec Next.js, ShadcnUI, Tailwind CSS et TypeScript. Il est responsive, accesible, et fonctionnel. Je l\'ai créé dans le but de montrer mes vraies compétences en webdesign et en développement frontend, lorsque je choisis moi même le design et les technologies.',
        images: [
            '/images/sites/portfolio2.0/portfolio-2.0.webp',
            '/images/sites/portfolio2.0/portfolio-2.0-light.webp',
        ],
        githubUrl: 'https://github.com/EmericMathis/Portfolio',
    },
    {
        title: 'Intuitivibes - Soins énergétiques',
        description: 'Site vitrine de ma cliente, avec comme demandé, beaucoup (vraiment beaucoup) de couleurs, dégradés et motifs, de l\'originalité, et comme fonctionnalité la prise de rdv en ligne ainsi qu\'un formulaire de Contact.',
        images: [
            '/images/sites/intuitivibes/intuitivibes.webp',
        ],
        siteUrl: 'https://intuitivibes.fr/',
    },
    {
        title: 'portfolio 1.0',
        description: '1ère version de mon portfolio, développé avec next.js et tailwind pour m\'entraîner au cours de ma première formation. Il n\'était pas très complet ^^\' le nouveau est bien mieux !',
        images: [
            '/images/sites/portfolio/portfolio.webp',
            '/images/sites/portfolio/portfolio-2.webp',
        ],
    },
    {
        title: 'Mahvu - Association de malvoyants',
        description: 'Conçu pendant mon stage de fin d\'études, vu aujourd\hui ce n\est plus du tout représentatif de mon niveau et pourtant j\'en suis très fier car c\est mon premier vrai projet, il est en ligne, et l\'objectif est atteint, un site 100% accessible aux aveugles, responsive, fonctionnel. J\'ai pris beaucoup de plaisir en le créant, j\'ai dû passer une journée complète sur l\'animation de l\'oeil, par envie.',
        images: [
            '/images/sites/mahvu/mahvu.webp',
            '/images/sites/mahvu/mahvu-2.webp',
        ],
        siteUrl: 'https://mahvu.org/',
        githubUrl: 'https://github.com/EmericMathis/mahvu',
    },

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