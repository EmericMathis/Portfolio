'use client'

import { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

interface Project {
    id: string
    title: string
    description: string
    thumbnail: string
    images: string[]
    siteUrl: string
    githubUrl?: string
}

const projects: Project[] = [
    {
        id: '1',
        title: 'E-commerce Deluxe',
        description: 'Une plateforme e-commerce moderne avec un design épuré',
        thumbnail: 'https://picsum.photos/200',
        images: [
            'https://picsum.photos/200',
            'https://picsum.photos/200',
            'https://picsum.photos/200',
        ],
        siteUrl: 'https://example-ecommerce.com',
        githubUrl: 'https://github.com/example/ecommerce-deluxe',
    },
    {
        id: '2',
        title: 'Blog Créatif',
        description: 'Un blog élégant pour les créateurs de contenu',
        thumbnail: 'https://picsum.photos/200',
        images: [
            'https://picsum.photos/200',
            'https://picsum.photos/200',
        ],
        siteUrl: 'https://example-blog.com',
    },
    {
        id: '3',
        title: 'App Météo',
        description: 'Application météo avec des prévisions précises',
        thumbnail: 'https://picsum.photos/200',
        images: [
            'https://picsum.photos/200',
            'https://picsum.photos/400',
            'https://picsum.photos/200',
        ],
        siteUrl: 'https://example-weather.com',
        githubUrl: 'https://github.com/example/weather-app',
    },
    {
        id: '4',
        title: 'Réseau Social Local',
        description: 'Plateforme de réseau social pour les communautés locales',
        thumbnail: 'https://picsum.photos/200',
        images: [
            'https://picsum.photos/200',
            'https://picsum.photos/200',
        ],
        siteUrl: 'https://example-social.com',
    },
    {
        id: '5',
        title: 'Gestionnaire de Tâches',
        description: 'Application de gestion de tâches simple et efficace',
        thumbnail: 'https://picsum.photos/200',
        images: [
            'https://picsum.photos/200',
            'https://picsum.photos/200',
            'https://picsum.photos/200',
        ],
        siteUrl: 'https://example-tasks.com',
        githubUrl: 'https://github.com/example/task-manager',
    },
]

export default function PortfolioCards() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <div className="container mx-auto px-4 py-12 overflow-hidden">
            <h1 className="text-4xl font-bold mb-8 text-center">Mon Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                        className="w-full"
                    />
                ))}
            </div>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )
}