import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Apropos = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">À PROPOS</h1>
            <p className="mb-4">Je suis développeur web freelance et j'aime ça !</p>
            <h2 className="text-2xl font-bold mb-4">Un développeur web passionné !</h2>
            <p className="mb-4">
                Ma passion pour le développement web commence en 2003 et m'a demandé un changement radical de cursus afin de pouvoir pleinement l'exploiter.
            </p>
            <p className="mb-4">
                Dès lors, je mis tout en oeuvre pour percer dans cette voie, tout en prenant du plaisir sur les divers projets développés.
            </p>
            <p className="mb-4">
                En Mai 2009, je décide de devenir développeur web indépendant après plusieurs postes en tant que développeur web « full-stack » réussis, qui me conforteront dans cette idée afin de toucher un plus large panel de domaines d'activités, voir du pays et conquérir le monde !
            </p>
            <p className="mb-4 font-bold">Développeur Web Freelance - Mathieu CRÉVOULIN</p>

            <h2 className="text-2xl font-bold mb-4">Expérience en développement</h2>
            <p className="mb-4">
                Mon expérience acquise au fil des projets me permet de mieux comprendre les attentes d'un client et de répondre précisement au besoin demandé en fonction du domaine d'activité.
            </p>
            <p className="mb-4">
                Du site vitrine au projet plus complexe, je vous propose une expertise et un développement web qui correspond à vos attentes & à vos besoins.
            </p>

            <h2 className="text-2xl font-bold mb-4">Un tarif adapté à votre projet</h2>
            <p className="mb-4">
                Travaillant régulièrement avec des PME, associations ou particuliers, je vous propose des solutions à votre portée & adaptée à votre budget.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold">17</CardTitle>
                    </CardHeader>
                    <CardContent>Années d'expérience</CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold">91</CardTitle>
                    </CardHeader>
                    <CardContent>Projets Web Terminés</CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold">75</CardTitle>
                    </CardHeader>
                    <CardContent>Clients satisfaits</CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Apropos;