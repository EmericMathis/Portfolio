import { Footer } from "@/components/blocks/Footer";
import { Header } from "@/components/blocks/Header";
import { TypographyP } from "@/components/typography/TypographyP";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PolitiqueDeConfidentialité: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto my-3 h-full pt-20">
                <Card className="bg-inherit border-none">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold mb-4">Politique de Confidentialité</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TypographyP className="mb-4">
                            Cette politique de confidentialité explique comment je collecte, utilise et protège vos informations personnelles lorsque vous utilisez ce site. Vous devriez lire cette politique pour comprendre quelles informations je collecte, comment je les utilise et comment je les protège.
                        </TypographyP>
                        <TypographyP className="text-2xl font-semibold mb-2">Informations que je collecte</TypographyP>
                        <TypographyP className="mb-4">
                            Je ne collecte actuellement aucune information personnelle via ce site. Cela signifie que je ne collecte ni ne stocke aucune donnée personnelle lorsque vous visitez ce site.
                        </TypographyP>
                        <TypographyP className="text-2xl font-semibold mb-2">Utilisation des informations</TypographyP>
                        <TypographyP className="mb-4">
                            Étant donné que je ne collecte aucune information personnelle, je n&apos;utilise ni ne partage aucune donnée personnelle avec des tiers.
                        </TypographyP>
                        <TypographyP className="text-2xl font-semibold mb-2">Protection des informations</TypographyP>
                        <TypographyP className="mb-4">
                            Je prends la sécurité de vos informations très au sérieux. Cependant, comme je ne collecte aucune information personnelle, il n&apos;y a pas de données à protéger.
                        </TypographyP>
                        <TypographyP className="text-2xl font-semibold mb-2">Modifications de cette politique</TypographyP>
                        <TypographyP className="mb-4">
                            Je peux mettre à jour cette politique de confidentialité de temps en temps. Toute modification sera publiée sur cette page. Je vous encourage à consulter cette page régulièrement pour rester informé des mises à jour.
                        </TypographyP>
                        <TypographyP className="mb-4">
                            Si vous avez des questions concernant cette politique de confidentialité ou si vous souhaitez plus d&apos;informations, n&apos;hésitez pas à me contacter.
                        </TypographyP>
                    </CardContent>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default PolitiqueDeConfidentialité;