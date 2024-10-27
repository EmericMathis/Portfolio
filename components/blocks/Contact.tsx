import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">CONTACTEZ-MOI</h1>
            <p className="mb-4 text-center">Une idée ? Un projet ? N'hésitez pas à demander un devis ! <strong>[GRATUIT]</strong></p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 lg:order-2 order-1">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Formulaire de contact</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="name">Nom / Prénom *</label>
                                <Input id="name" type="text" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="email">E-mail *</label>
                                <Input id="email" type="email" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="phone">Téléphone</label>
                                <Input id="phone" type="tel" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="message">Merci de détailler le plus possible votre besoin afin de faciliter nos futurs échanges. *</label>
                                <Textarea id="message" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                    <input type="checkbox" required /> En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de contact et de la relation commerciale qui peut en découler.
                                </label>
                            </div>
                            <Button type="submit" className="w-full">Envoyer</Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="order-1 lg:order-2">
                    <h2 className="text-2xl font-bold mb-4">Adresse</h2>
                    <p>45, allée des Grives 83390 Cuers</p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">Téléphone</h2>
                    <p>(+33) 6.15.42.10.45</p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">E-mail</h2>
                    <p>contact@mcrevoulin.com</p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">Horaires</h2>
                    <p>Lundi - Vendredi</p>
                    <p>09H00 - 18H00</p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">S.I.R.E.N</h2>
                    <p>522 491 000</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;