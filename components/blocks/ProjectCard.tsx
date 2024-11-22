import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '../ui/button'
import Link from 'next/link'
import { TypographyP } from '../typography/TypographyP'

interface ProjectCardProps {
    project: {
        title: string
        description: string // Change to string to hold markdown content
        images: string[]
        siteUrl?: string
        githubUrl?: string
    }
    className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    const [selectedImage, setSelectedImage] = useState(project.images[0])

    return (
        <Card
            className={`overflow-hidden relative pb-20 ${className}`}
            role="region"
            aria-labelledby={`titre-projet${project.title}`}
        >
            <Image
                src={selectedImage}
                alt={project.title}
                width={1920}
                height={1080}
                className="w-full h-72 object-cover"
            />

            <CardHeader className="p-6 pt-2">
                <div className="flex gap-2 mb-4 mx-auto">
                    {project.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`${project.title} image ${index + 1}`}
                            width={1920}
                            height={1080}
                            className={`object-cover cursor-pointer h-16 w-20 rounded-xl ${selectedImage === image ? 'border-2 border-primary' : ''}`}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>

            <CardContent >
                <TypographyP>{project.description}</TypographyP>
            </CardContent>

            <div className="flex flex-row-reverse justify-end space-x-2 absolute bottom-5 right-5">
                {project.siteUrl && (<Button asChild>
                    <Link href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="text-primary rounded-xl hover:underline">
                        Voir le site
                    </Link>
                </Button>)}
                {project.githubUrl && (
                    <Button variant={"ghost"} asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary rounded-xl hover:underline">
                            Voir sur GitHub
                        </Link>
                    </Button>
                )}
            </div>
        </Card>
    )
}