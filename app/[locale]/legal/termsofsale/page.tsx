import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TermsOfSale = () => {
    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Conditions Générales de Vente</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        Les présentes conditions générales de vente (ci-après "CGV") régissent les relations entre Emeric Mathis Dev Web Freelance (ci-après "le Prestataire") et tout client (ci-après "le Client") dans le cadre de la vente de services de développement web, effectuée principalement via la plateforme Malt.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">1. Objet</h2>
                    <p className="mb-4">
                        Le Prestataire propose des services de développement web sur mesure, notamment la création de sites web, applications web et autres services liés à l'optimisation et à la maintenance de projets web. Les présentes CGV définissent les droits et obligations des parties dans le cadre de la prestation de ces services.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">2. Commande des services</h2>
                    <p className="mb-4">
                        Toute commande de services se fait exclusivement via la plateforme Malt, où le Client sélectionne le Prestataire pour une mission spécifique. La commande est validée après acceptation du devis proposé par le Prestataire, conformément aux conditions de la plateforme Malt.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">3. Prix et modalités de paiement</h2>
                    <p className="mb-4">
                        Les prix des services sont indiqués sur la plateforme Malt et sont établis en fonction du type de mission et de la durée estimée du travail. Les paiements sont effectués directement via Malt, conformément à leurs conditions générales.
                    </p>
                    <p className="mb-4">
                        Le paiement est exigible à la fin de la mission ou selon un calendrier préalablement défini entre le Prestataire et le Client. Aucune prestation ne débutera sans la validation du devis et la garantie du paiement via Malt.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">4. Livraison des services</h2>
                    <p className="mb-4">
                        Les délais de livraison des services sont déterminés d'un commun accord entre le Prestataire et le Client, en fonction de la mission. Le Prestataire s'engage à fournir les services dans les délais prévus, sauf en cas de force majeure ou de circonstances imprévues empêchant le bon déroulement de la mission.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">5. Obligations du Prestataire</h2>
                    <p className="mb-4">
                        Le Prestataire s'engage à :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Fournir des services conformes aux attentes du Client, dans le respect des termes du devis accepté.</li>
                        <li>Respecter la confidentialité des informations transmises par le Client dans le cadre de la mission.</li>
                        <li>Informer le Client de toute difficulté ou imprévu pouvant affecter le bon déroulement de la mission.</li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-2">6. Obligations du Client</h2>
                    <p className="mb-4">
                        Le Client s'engage à :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Fournir toutes les informations nécessaires au bon déroulement de la mission.</li>
                        <li>Valider les livrables dans les délais convenus.</li>
                        <li>Régler les sommes dues via la plateforme Malt, conformément aux conditions de paiement indiquées dans le devis.</li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-2">7. Rétractation et annulation</h2>
                    <p className="mb-4">
                        Le Client peut annuler une mission avant son démarrage sous réserve d'en informer le Prestataire par écrit via la plateforme Malt. Une fois la mission commencée, toute annulation pourra entraîner des frais proportionnels au travail déjà effectué, conformément aux conditions définies sur Malt.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">8. Responsabilité</h2>
                    <p className="mb-4">
                        Le Prestataire est tenu à une obligation de moyens dans la réalisation de ses services. Il ne pourra être tenu responsable des dommages indirects ou imprévus résultant de l’utilisation des livrables. En cas de litige, la responsabilité du Prestataire sera limitée au montant total de la mission facturée.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">9. Propriété intellectuelle</h2>
                    <p className="mb-4">
                        Les livrables produits dans le cadre de la mission demeurent la propriété du Prestataire jusqu’au paiement intégral des sommes dues par le Client. Après paiement, le Client devient propriétaire des livrables sauf mention contraire dans le devis.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">10. Confidentialité</h2>
                    <p className="mb-4">
                        Le Prestataire s’engage à respecter la confidentialité des informations échangées avec le Client dans le cadre de la mission. Cette obligation de confidentialité persiste même après la fin de la mission.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">11. Litiges</h2>
                    <p className="mb-4">
                        En cas de litige entre le Prestataire et le Client concernant l'exécution des présentes CGV, les parties s'efforceront de résoudre le litige à l'amiable. À défaut d'accord amiable, le litige sera soumis aux juridictions compétentes.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">12. Droit applicable</h2>
                    <p>
                        Les présentes conditions générales de vente sont régies par le droit français. Toute contestation relative à leur exécution ou à leur interprétation sera soumise aux tribunaux compétents dans le ressort de la Cour d'appel de Paris.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default TermsOfSale;
