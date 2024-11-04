'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { TypographyP } from '../typography/TypographyP'

export default function Contact() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Handle form submission here
        console.log('Form submitted')
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Formulaire de contact</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="name">Nom / Prénom *</Label>
                                <Input id="name" required />
                            </div>
                            <div>
                                <Label htmlFor="email">E-mail *</Label>
                                <Input id="email" type="email" required />
                            </div>
                            <div>
                                <Label htmlFor="phone">Téléphone</Label>
                                <Input id="phone" type="tel" />
                            </div>
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" required />
                            </div>
                            <div>
                                <Label htmlFor="file">Pièce jointe</Label>
                            </div>
                            <Button type="submit" className="w-full">Envoyer</Button>
                        </form>
                    </CardContent>
                </Card>

                <Card className='bg-inherit border-none'>
                    <CardHeader>
                        <CardTitle>Coordonnées</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5 flex-shrink-0" />
                            <p>43330 Pont-Salomon FRANCE, Auvergne-Rhône-Alpes, Haute-loire</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="h-5 w-5 flex-shrink-0" />
                            <p>(+33) 6.09.13.82.79</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-5 w-5 flex-shrink-0" />
                            <p>contact@emericmathis.com</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 flex-shrink-0" />
                            <div>
                                <p>Lundi - Vendredi</p>
                                <p>12H00 - 18H00</p>
                            </div>
                        </div>
                        <TypographyP className='text-sm' >(De préférence, premier contact par mail c&apos;est plus pratique pour mon organisation)</TypographyP>
                        <div>
                            <p>S.I.R.E.N</p>
                            <p>932 467 939</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}