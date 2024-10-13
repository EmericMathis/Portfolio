import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Politique de Confidentialité</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        Cette politique de confidentialité explique comment nous collectons, utilisons, et protégeons vos données personnelles lorsque vous utilisez notre site web. Nous nous engageons à respecter votre vie privée et à protéger vos informations personnelles.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">1. Données collectées</h2>
                    <p className="mb-4">
                        Nous collectons plusieurs types d'informations, y compris :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Données fournies directement :</strong> Lorsque vous remplissez un formulaire de contact, vous nous fournissez des informations comme votre nom, votre adresse email, et tout autre détail que vous décidez de partager.</li>
                        <li><strong>Données collectées automatiquement :</strong> Lorsque vous visitez notre site, certaines données sont collectées automatiquement telles que votre adresse IP, le type de navigateur, et les pages visitées via des outils comme Google Analytics.</li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-2">2. Utilisation des données</h2>
                    <p className="mb-4">
                        Nous utilisons vos données personnelles pour :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Répondre à vos demandes via le formulaire de contact.</li>
                        <li>Améliorer notre site et offrir une meilleure expérience utilisateur.</li>
                        <li>Analyser notre trafic web via des outils d'analyse comme Google Analytics.</li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-2">3. Partage des données</h2>
                    <p className="mb-4">
                        Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Lorsque c'est nécessaire pour répondre à vos demandes (par exemple, en vous envoyant un email).</li>
                        <li>Lorsque la loi nous oblige à partager ces informations.</li>
                        <li>Avec des prestataires de services tiers (comme Google Analytics) qui nous aident à analyser le trafic sur notre site.</li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-2">4. Durée de conservation des données</h2>
                    <p className="mb-4">
                        Nous conservons vos données personnelles uniquement le temps nécessaire pour accomplir les objectifs décrits dans cette politique de confidentialité. Après cela, elles sont supprimées ou anonymisées.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">5. Sécurité des données</h2>
                    <p className="mb-4">
                        Nous mettons en place des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute divulgation ou destruction.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">6. Vos droits</h2>
                    <p className="mb-4">
                        Conformément à la loi applicable, vous avez le droit de :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Accéder à vos données personnelles que nous détenons.</li>
                        <li>Demander la rectification ou la suppression de vos données.</li>
                        <li>Limiter ou vous opposer au traitement de vos données.</li>
                        <li>Retirer votre consentement à tout moment (par exemple, pour l'envoi d'emails marketing).</li>
                        <li>Déposer une plainte auprès d'une autorité de protection des données.</li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-2">7. Modifications de cette politique</h2>
                    <p className="mb-4">
                        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page. Nous vous encourageons à consulter régulièrement cette politique pour rester informé des mises à jour.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">8. Contact</h2>
                    <p className="mb-4">
                        Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à l'adresse suivante : <a href="mailto:votreemail@example.com" className="underline">votreemail@example.com</a>.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default PrivacyPolicy;
