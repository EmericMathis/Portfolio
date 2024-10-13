import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Assure-toi que ces composants proviennent bien de ton setup Shadcn

const CookiesPolicy = () => {
    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Politique des Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        Cette politique des cookies explique comment mon site web utilise des cookies et des technologies similaires pour améliorer votre expérience utilisateur et analyser notre trafic.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">1. Qu'est-ce qu'un cookie ?</h2>
                    <p className="mb-4">
                        Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Les cookies sont largement utilisés pour permettre aux sites web de fonctionner efficacement et pour fournir des informations aux propriétaires de sites.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">2. Types de cookies utilisés</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Cookies essentiels :</strong> Ces cookies sont nécessaires pour vous permettre de naviguer sur notre site et d'utiliser ses fonctionnalités, comme l'accès à des zones sécurisées.
                        </li>
                        <li>
                            <strong>Cookies de performance :</strong> Ces cookies collectent des informations sur la façon dont les visiteurs utilisent un site web, par exemple les pages les plus visitées.
                        </li>
                        <li>
                            <strong>Cookies de fonctionnalité :</strong> Ces cookies permettent au site de mémoriser les choix que vous faites et de fournir des fonctionnalités améliorées et plus personnelles.
                        </li>
                        <li>
                            <strong>Cookies de ciblage ou publicitaires :</strong> Ces cookies sont utilisés pour vous présenter des publicités pertinentes pour vous en fonction de vos intérêts.
                        </li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-2">3. Comment gérer vos cookies</h2>
                    <p className="mb-4">
                        Vous pouvez configurer votre navigateur pour refuser les cookies ou pour vous avertir lorsqu'un cookie est envoyé. Cependant, si vous désactivez certains cookies, certaines parties de notre site peuvent ne pas fonctionner correctement.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">4. Modifications de la politique des cookies</h2>
                    <p className="mb-4">
                        Nous nous réservons le droit de modifier cette politique des cookies à tout moment. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">5. Contact</h2>
                    <p>
                        Si vous avez des questions sur cette politique des cookies, veuillez nous contacter à <a href="mailto:votreemail@example.com" className="underline">votreemail@example.com</a>.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default CookiesPolicy;
