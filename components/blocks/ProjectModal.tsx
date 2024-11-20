'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Globe, Github } from "lucide-react"
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

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
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl">
                <DialogHeader className="relative">
                    <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <Carousel className="w-full max-w-lg mx-auto">
                        <CarouselContent>
                            {project.images.map((image, index) => (
                                <CarouselItem key={index} className={index === currentIndex ? 'block' : 'hidden'}>
                                    <div className="p-0">
                                        <Card className="border-none">
                                            <CardContent className="flex aspect-square items-center justify-center p-0">
                                                <Image
                                                    src={image}
                                                    alt={`${project.title} image ${index + 1}`}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-auto object-cover rounded-md"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious onClick={() => setCurrentIndex((currentIndex - 1 + project.images.length) % project.images.length)} />
                        <CarouselNext onClick={() => setCurrentIndex((currentIndex + 1) % project.images.length)} />
                    </Carousel>
                    <div className="flex justify-center gap-2 mt-4">
                        {project.images.map((image, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer ${index === currentIndex ? 'border-2 border-primary rounded-md' : ''}`}
                                onClick={() => handleImageClick(index)}
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} thumbnail ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                            </div>
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