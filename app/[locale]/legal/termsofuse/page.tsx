import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TermsOfUse = () => {
    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Conditions Générales d'Utilisation</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs accèdent et utilisent le site web.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">1. Acceptation des CGU</h2>
                    <p className="mb-4">
                        L'accès et l'utilisation du Site impliquent l'acceptation sans réserve des présentes CGU. Tout Utilisateur s'engage à respecter les CGU et reconnaît en avoir pris connaissance avant toute utilisation du Site.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">2. Description des services</h2>
                    <p className="mb-4">
                        Le Site permet aux Utilisateurs d'accéder à des informations sur les services de développement web proposés par **Emeric Mathis**, ainsi que de contacter le Prestataire pour des prestations via des plateformes partenaires telles que Malt.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">3. Accès au site</h2>
                    <p className="mb-4">
                        Le Site est accessible gratuitement à tout Utilisateur disposant d’un accès à internet. Le Prestataire s’efforce de permettre un accès au Site 24 heures sur 24, 7 jours sur 7, sauf en cas de force majeure ou d’événements hors de son contrôle, et sous réserve des éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement du Site.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">4. Propriété intellectuelle</h2>
                    <p className="mb-4">
                        Tous les éléments du Site (textes, images, logos, graphismes, etc.) sont protégés par des droits de propriété intellectuelle et sont la propriété exclusive de **Emeric Mathis Dev Web Freelance**, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du Site est strictement interdite sans l'autorisation préalable du Prestataire.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">5. Responsabilité</h2>
                    <p className="mb-4">
                        Le Prestataire met tout en œuvre pour assurer la disponibilité et la sécurité du Site. Cependant, le Prestataire ne saurait être tenu responsable des interruptions, pannes, erreurs ou incidents liés à l’utilisation du Site, ni des dommages directs ou indirects pouvant résulter de l’utilisation du Site ou de l’impossibilité d’y accéder.
                    </p>
                    <p className="mb-4">
                        Le Site peut contenir des liens vers des sites web tiers. Le Prestataire n'exerce aucun contrôle sur ces sites et ne saurait être tenu responsable de leur contenu ou de leur utilisation par l'Utilisateur.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">6. Utilisation des services</h2>
                    <p className="mb-4">
                        Les Utilisateurs s’engagent à utiliser le Site et les services proposés de manière légale et respectueuse. Toute tentative d'utilisation frauduleuse ou non autorisée du Site peut entraîner la suspension de l'accès aux services, sans préjudice des poursuites judiciaires pouvant être engagées.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">7. Protection des données personnelles</h2>
                    <p className="mb-4">
                        Les données personnelles des Utilisateurs sont traitées conformément à la <a href="/privacy-policy" className="underline">Politique de confidentialité</a> disponible sur le Site. Le Prestataire s'engage à respecter la confidentialité des informations fournies par les Utilisateurs et à ne pas les partager avec des tiers sans leur consentement.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">8. Modifications des CGU</h2>
                    <p className="mb-4">
                        Le Prestataire se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entreront en vigueur dès leur mise en ligne sur le Site. Les Utilisateurs sont invités à consulter régulièrement les CGU pour prendre connaissance des éventuelles modifications.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">9. Loi applicable et juridiction compétente</h2>
                    <p className="mb-4">
                        Les présentes CGU sont régies par le droit français. Tout litige relatif à leur exécution ou à leur interprétation sera soumis à la compétence exclusive des tribunaux français.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">10. Contact</h2>
                    <p className="mb-4">
                        Pour toute question relative aux présentes CGU ou à l'utilisation du Site, les Utilisateurs peuvent contacter le Prestataire via la page <a href="/contact" className="underline">Contact</a> du Site.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default TermsOfUse;
