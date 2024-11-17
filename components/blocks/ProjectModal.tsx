'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Globe, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'

interface ProjectModalProps {
    project: {
        title: string
        description: string
        images: string[]
        siteUrl: string
        githubUrl?: string
    }
    onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length)
    }

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[90vw] md:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader className="relative">
                    <DialogTitle className="text-2xl font-bold pr-8">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="relative">
                        <Image
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} image ${currentImageIndex + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="h-6 w-6" />
                            <span className="sr-only">Image précédente</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            onClick={nextImage}
                        >
                            <ChevronRight className="h-6 w-6" />
                            <span className="sr-only">Image suivante</span>
                        </Button>
                    </div>
                    <div className="flex justify-center gap-2 overflow-x-auto py-2">
                        {project.images.map((image, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                size="icon"
                                className={`p-1 ${index === currentImageIndex ? 'ring-2 ring-primary' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} thumbnail ${index + 1}`}
                                    width={60}
                                    height={40}
                                    className="w-[60px] h-[40px] object-cover rounded-sm"
                                />
                            </Button>
                        ))}
                    </div>
                    <p className="text-lg">{project.description}</p>
                    <div className="flex gap-4">
                        <Button asChild size="lg">
                            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                                <Globe className="mr-2 h-5 w-5" /> Visiter le site
                            </a>
                        </Button>
                        {project.githubUrl && (
                            <Button asChild variant="outline" size="lg">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-5 w-5" /> Voir sur GitHub
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}