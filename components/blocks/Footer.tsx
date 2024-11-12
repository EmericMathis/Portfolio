"use client"

import Link from "next/link"
import HyperText from "../ui/hyper-text"
import LinkedinSVG from "../svg/LinkedIn"
import GithubSVG from "../svg/Github"
import BackToTopBtn from "./BackToTopBtn"

export function Footer() {
    return (
        <footer className="bg-primary-foreground border-t py-12 px-3 mt-auto">
            <div className="container flex flex-col gap-16 lg:flex-row mx-auto md:px-6 lg:max-w-7xl">
                <div className="flex flex-col items-start gap-4 max-w-96">
                    <HyperText className="font-bold text-xl text-primary" text={"Emeric Mathis"} />
                    <p className="text-muted-foreground">
                        Développeur web spécialisé en accessibilité, performance et SEO (référencement naturel).
                    </p>
                    <div className="flex space-x-2">
                        <a href="https://www.linkedin.com/in/emeric-mathis/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary-foreground">
                            <LinkedinSVG className="w-8 h-8 cursor-pointer" />
                        </a>
                        <a href="https://github.com/EmericMathis" target="blank" rel="noopener noreferrer" className="text-primary hover:text-secondary-foreground">
                            <GithubSVG className="w-8 h-8 cursor-pointer" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 justify-end w-full">
                    <Link href="/legal/mentions-legales" className="text-sm hover:underline hover:text-current text-muted-foreground text-nowrap" prefetch={false}>
                        Mentions légales
                    </Link>
                    <Link href="/legal/politique-de-confidentialite" className="text-sm hover:underline hover:text-current text-muted-foreground text-nowrap" prefetch={false}>
                        Politique de confidentialité
                    </Link>
                    <Link href="/legal/politique-des-cookies" className="text-sm hover:underline hover:text-current text-muted-foreground text-nowrap" prefetch={false}>
                        Politique des cookies
                    </Link>
                </div>
            </div>
            <div className="mt-8 pt-4 text-center text-xs text-muted-foreground md:mt-12 md:pt-6">
                <p>&copy; 2024 Emeric Mathis. Tous droits réservés.</p>
            </div>
            <BackToTopBtn />
        </footer>
    )
}