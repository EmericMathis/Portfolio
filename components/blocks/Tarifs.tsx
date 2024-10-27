const Tarifs = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">TARIFS</h1>
            <p className="mb-4">Un tarif adapté à un site internet de qualité !</p>
            <p className="mb-4">Une idée ? Un projet ? N'hésitez pas à demander un devis ! <strong>[GRATUIT]</strong></p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Site vitrine standard</h2>
                    <p className="text-xl mb-2">À partir de <strong>1299€ *</strong></p>
                    <ul className="list-disc pl-5">
                        <li>Développé sous WORDPRESS (Outil de gestion de contenu)</li>
                        <li>Charte graphique à partir d'une maquette pré-définie</li>
                        <li>Sélection d'une palette de couleur</li>
                        <li>Domaine + hébergement + e-mail pendant 12 mois</li>
                        <li>Interface administrateur STANDARD</li>
                        <li>Site responsive (adapté tous supports)</li>
                        <li>Mise en place du contenu (textes & images)</li>
                        <li>Formulaire de contact</li>
                        <li>Liens de partage sur les réseaux sociaux</li>
                        <li>Optimisation du référencement</li>
                        <li>Statistiques de visite</li>
                        <li>Mise en ligne du site</li>
                        <li>Formation utilisation du site</li>
                    </ul>
                </div>

                <div className="p-6 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Site vitrine personnalisé</h2>
                    <p className="text-xl mb-2">À partir de <strong>1800€ *</strong></p>
                    <ul className="list-disc pl-5">
                        <li>Développé SUR-MESURE (Codage à la main)</li>
                        <li>Création charte graphique personnalisée</li>
                        <li>Proposition de logo</li>
                        <li>Domaine + hébergement + e-mail pendant 12 mois</li>
                        <li>Interface administrateur SUR-MESURE</li>
                        <li>Site responsive (adapté tous supports)</li>
                        <li>Mise en place du contenu (textes & images)</li>
                        <li>Formulaire de contact & Map</li>
                        <li>Liens de partage sur les réseaux sociaux</li>
                        <li>Optimisation du référencement et des performances</li>
                        <li>Statistiques de visite</li>
                        <li>Mise en ligne du site</li>
                        <li>Formation utilisation du site</li>
                    </ul>
                </div>

                <div className="p-6 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Plateforme e-commerce</h2>
                    <p className="text-xl mb-2">À partir de <strong>3000€ *</strong></p>
                    <ul className="list-disc pl-5">
                        <li>PRESTASHOP ou WORDPRESS (Outil de gestion de contenu)</li>
                        <li>Création charte graphique personnalisée</li>
                        <li>Proposition de logo</li>
                        <li>Domaine + hébergement + e-mail pendant 12 mois</li>
                        <li>Installation & configuration des plugins choisis</li>
                        <li>Site responsive (adapté tous supports)</li>
                        <li>Mise en place du contenu (textes & images)</li>
                        <li>Formulaire de contact & Map</li>
                        <li>Liens de partage sur les réseaux sociaux</li>
                        <li>Optimisation du référencement et des performances</li>
                        <li>Statistiques de visite</li>
                        <li>Mise en ligne du site</li>
                        <li>Formation utilisation du site</li>
                    </ul>
                </div>

                <div className="p-6 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Forfait Maintenance</h2>
                    <p className="text-xl mb-2">50€/HEURE ** ou 400€/AN ***</p>
                    <ul className="list-disc pl-5">
                        <li>Mises à jour site internet & plugins</li>
                        <li>Petites modifications graphiques ou de contenu</li>
                        <li>Sauvegardes externalisées mensuelles</li>
                        <li>Optimisation performances</li>
                        <li>Restauration en cas de piratage</li>
                    </ul>
                </div>

                <div className="p-6 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Développements spécifiques</h2>
                    <p className="text-xl mb-2">Taux journalier moyen <strong>400€/JOUR</strong></p>
                </div>
            </div>

            <p className="mt-6 text-sm">
                L'ensemble des tarifs indiqués sont H.T. * Prix à titre informatif : Changement possible selon les demandes et les choix du client. ** Estimation du temps de travail appuyé par un devis. *** Maintenance annuelle (engagement 12 mois). Droit d'auteur & propriété intellectuelle : Vous êtes à la fin du projet, propriétaire de l'ensemble des sources (fichiers) composant celui-ci. Paiement possible en plusieurs fois.
            </p>
        </div>
    );
};

export default Tarifs;