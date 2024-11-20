import { Footer } from "@/components/blocks/Footer";
import { Header } from "@/components/blocks/Header";
import { TypographyP } from "@/components/typography/TypographyP";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PolitiqueDesCookies: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto my-3 h-full pt-20">
                <Card className="bg-inherit border-none">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold mb-4">Politique des Cookies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TypographyP className="mb-4">
                            Cette politique des cookies explique ce que sont les cookies et comment je les utilise. Vous devriez lire cette politique pour comprendre quels types de cookies j&apos;utilise, ou les informations que je collecte à l&apos;aide des cookies et comment ces informations sont utilisées.
                        </TypographyP>
                        <TypographyP className="text-2xl font-semibold mb-2">Que sont les cookies ?</TypographyP>
                        <TypographyP className="mb-4">
                            Les cookies sont de petits fichiers texte qui sont stockés sur votre appareil (ordinateur, tablette ou mobile) lorsque vous visitez un site web. Ils sont largement utilisés pour faire fonctionner les sites web, ou pour les faire fonctionner plus efficacement, ainsi que pour fournir des informations aux propriétaires du site.
                        </TypographyP>
                        <TypographyP className="text-2xl font-semibold mb-2">Utilisation des cookies sur ce site</TypographyP>
                        <TypographyP className="mb-4">
                            Je n&apos;utilise actuellement aucun cookie sur ce site. Cela signifie que je ne collecte ni ne stocke aucune information personnelle via des cookies lorsque vous visitez ce site.
                        </TypographyP>
                        <TypographyP className="text-2xl font-semibold mb-2">Plus d&apos;informations</TypographyP>
                        <TypographyP className="mb-4">
                            Si vous avez des questions concernant l&apos;absence de cookies sur ce site ou si vous souhaitez plus d&apos;informations, n&apos;hésitez pas à me contacter.
                        </TypographyP>
                    </CardContent>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default PolitiqueDesCookies;