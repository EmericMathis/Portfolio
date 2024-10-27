import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Skills = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">MES COMPÉTENCES</h1>
            <p className="mb-4 text-center">Des compétences à votre service</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Domaines de compétences</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5">
                            <li>Gestion de projets web</li>
                            <li>Site vitrine, corporate, évènementiel, e-commerce, intranet, application mobile.</li>
                            <li>Conception graphique & Webdesign</li>
                            <li>Logos, templates Web, plaquettes publicitaires, cartes de visite, newsletters...</li>
                            <li>Applications spécifiques et Interface d'administration</li>
                            <li>PHP - MySQL - AJAX / ASP.NET - C# - SQL</li>
                            <li>Mise en place / Modification / Gestion de CMS</li>
                            <li>Wordpress, Joomla, Prestashop, phpBB, IPBoard</li>
                            <li>Intégration (X)HTML / CSS</li>
                            <li>Codage à la main respectueux des standards du Web</li>
                            <li>Dynamise des pages par JavaScript / AJAX</li>
                            <li>jQuery, Prototype, Mootools, Scriptaculous</li>
                            <li>Validation W3C, WAI & référencement naturel SEO</li>
                            <li>Accessibilité & ergonomie des pages web</li>
                            <li>Conception multi-plateformes</li>
                            <li>Compatible tous supports, tablette & application mobile</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="p-6">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Compétences en développement</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5">
                            <li>(X)HTML - CSS</li>
                            <li>PHP</li>
                            <li>MySQL - SQL</li>
                            <li>JavaScript - AJAX</li>
                            <li>ASP.NET - C#</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="p-6">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Compétences en conception graphique</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5">
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>In Design</li>
                            <li>After Effects</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Skills;