import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface ProjectCardProps {
    project: {
        title: string
        description: string
        thumbnail: string
    }
    onClick: () => void
    className?: string
}

export function ProjectCard({ project, onClick, className }: ProjectCardProps) {
    return (
        <Card
            className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg md:shadow-none lg:shadow-md ${className}`}
            onClick={onClick}
        >
            <CardContent className="p-0">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                />
                <CardHeader className="p-4">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
            </CardContent>
        </Card>
    )
}