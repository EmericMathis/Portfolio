import { Footer } from "@/components/blocks/Footer";
import { Header } from "@/components/blocks/Header";
import { TypographyP } from "@/components/typography/TypographyP";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const MentionsLegales: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto my-3 h-full pt-20">
                <Card className="bg-inherit border-none">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold mb-4">Mentions Légales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TypographyP className="mb-4">
                            Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs du site les présentes mentions légales.
                        </TypographyP>
                        <TypographyP className="text-2xl font-semibold mb-2">Éditeur du site</TypographyP>
                        <TypographyP className="mb-4">
                            Le site est édité par : Emeric MATHIS <br />
                            SIREN : 932467939
                        </TypographyP>
                        <TypographyP className="text-2xl font-semibold mb-2">Hébergement</TypographyP>
                        <TypographyP className="mb-4">
                            Le site est hébergé par : Vercel
                        </TypographyP>
                        <TypographyP className="text-2xl font-semibold mb-2">Propriété intellectuelle</TypographyP>
                        <TypographyP className="mb-4">
                            Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site, sans autorisation de l’éditeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
                        </TypographyP>
                        <TypographyP className="mb-4">
                            Pour toute question ou information, vous pouvez me contacter à l&apos;adresse suivante : contact@emericmathis.com
                        </TypographyP>
                    </CardContent>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default MentionsLegales;