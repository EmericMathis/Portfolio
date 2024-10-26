import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-muted py-8 md:py-12">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-6 lg:max-w-7xl">
                <div className="flex flex-col items-start gap-4">
                    <Link href="/" className="flex items-center gap-2" prefetch={false}>
                        <span className="text-lg font-semibold">Emeric Mathis</span>
                    </Link>
                    <p className="text-muted-foreground">
                        Développeur web spécialisé en accessibilité, performance et SEO (référencement naturel).
                    </p>
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
