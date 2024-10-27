import Link from "next/link"
import HyperText from "../ui/hyper-text"
import LinkedinSVG from "../svg/LinkedIn"
import GithubSVG from "../svg/Github"

export default function Footer() {
    return (
        <footer className="bg-muted py-8 md:py-12">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-6 lg:max-w-7xl">
                <div className="flex flex-col items-start gap-4">
                    <HyperText className="font-bold text-xl text-primary" text={"Emeric Mathis"} />
                    <p className="text-muted-foreground">
                        Développeur web spécialisé en accessibilité, performance et SEO (référencement naturel).
                    </p>
                    <div className="flex space-x-2">
                        <a href="https://www.linkedin.com/in/emeric-mathis/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            <LinkedinSVG className="w-8 h-8 text-primary cursor-pointer" />
                        </a>
                        <a href="">
                            <GithubSVG className="w-8 h-8 text-primary cursor-pointer" />
                        </a>
                    </div>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-sm font-semibold">Liens rapides</h4>
                    <Link href="/" className="text-sm hover:underline" prefetch={false}>
                        Accueil
                    </Link>
                    <Link href="/projets" className="text-sm hover:underline" prefetch={false}>
                        Projets
                    </Link>
                    <Link href="/services" className="text-sm hover:underline" prefetch={false}>
                        Services
                    </Link>
                    <Link href="/contact" className="text-sm hover:underline" prefetch={false}>
                        Contact
                    </Link>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-sm font-semibold">Ressources</h4>
                    <Link href="/blog" className="text-sm hover:underline" prefetch={false}>
                        Blog
                    </Link>
                    <Link href="/support" className="text-sm hover:underline" prefetch={false}>
                        Support
                    </Link>
                    <Link href="/faq" className="text-sm hover:underline" prefetch={false}>
                        FAQ
                    </Link>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-sm font-semibold">Légal</h4>
                    <Link href="/mentions-legales" className="text-sm hover:underline" prefetch={false}>
                        Mentions légales
                    </Link>
                    <Link href="/politique-confidentialite" className="text-sm hover:underline" prefetch={false}>
                        Politique de confidentialité
                    </Link>
                    <Link href="/politique-cookies" className="text-sm hover:underline" prefetch={false}>
                        Politique des cookies
                    </Link>
                </div>
            </div>
            <div className="mt-8 border-t pt-4 text-center text-xs text-muted-foreground md:mt-12 md:pt-6">
                <p>&copy; 2024 Emeric Mathis. Tous droits réservés.</p>
            </div>
        </footer>
    )
}
