'use client'

import AwsSVG from "../svg/Aws"
import DockerSVG from "../svg/Docker"
import DockerComposeSVG from "../svg/DockerCompose"
import GithubSVG from "../svg/Github"
import GithubCopilotSVG from "../svg/GithubCopilot"
import GitlabSVG from "../svg/Gitlab"
import HostingerSVG from "../svg/Hostinger"
import NestjsSVG from "../svg/Nest"
import NextjsSVG from "../svg/Nextjs"
import OpenaiSVG from "../svg/OpenAI"
import PrismaSVG from "../svg/Prisma"
import ReactSVG from "../svg/React"
import TailwindSVG from "../svg/Tailwind"
import WordpressSVG from "../svg/Wordpress"

export default function TechMarquee() {
    const technologies = [
        { name: 'Next.js', icon: <NextjsSVG className="w-12 h-12" /> },
        { name: 'React', icon: <ReactSVG className="w-12 h-12" /> },
        { name: 'Nestjs', icon: <NestjsSVG className="w-12 h-12" /> },
        { name: 'Tailwind CSS', icon: <TailwindSVG className="w-12 h-12" /> },
        { name: 'Prisma', icon: <PrismaSVG className="w-12 h-12" /> },
        { name: 'Docker', icon: <DockerSVG className="w-12 h-12" /> },
        { name: 'Docker-compose', icon: <DockerComposeSVG className="w-12 h-12" /> },
        { name: 'AWS', icon: <AwsSVG className="w-12 h-12" /> },
        { name: 'Hostinger', icon: <HostingerSVG className="w-12 h-12" /> },
        { name: 'OpenAI', icon: <OpenaiSVG className="w-12 h-12" /> },
        { name: 'WordPress', icon: <WordpressSVG className="w-12 h-12" /> },
        { name: 'Github', icon: <GithubSVG className="w-12 h-12" /> },
        { name: 'Gitlab', icon: <GitlabSVG className="w-12 h-12" /> },
        { name: 'Copilot', icon: <GithubCopilotSVG className="w-12 h-12" /> },


    ]

    return (
        <div className="w-full py-12 bg-background">
            <div className="marquee" role="marquee">
                <div className="marquee-content">
                    {technologies.concat(technologies).map((tech, index) => (
                        <div key={index} className="inline-block mx-8">
                            <div className="flex flex-col items-center justify-center">
                                {tech.icon}
                                <span className="mt-2 text-sm font-medium text-foreground">{tech.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}