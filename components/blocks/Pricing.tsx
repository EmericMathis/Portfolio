"use client"

import { useState, useEffect, useMemo, useCallback } from 'react'
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { TypographyMuted } from '../typography/TypographyMuted'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { TypographyP } from '../typography/TypographyP'

type Technology = 'wordpress' | 'custom';
type SiteType = 'vitrine' | 'ecommerce' | 'portfolio';
type Design = 'template' | 'mockup' | 'custom';

interface Options {
    technology: Technology;
    type: SiteType;
    pages: number;
    design: Design;
    responsive: boolean;
    seo: boolean;
    accessibility: boolean;
    multilingual: boolean;
    ecommerce: boolean;
    blog: boolean;
}

const TARIFS = {
    base: 400,
    technologie: { wordpress: 0, custom: 300 },
    type: { vitrine: 300, ecommerce: 1000, portfolio: 300 },
    page: 100,
    design: { template: 0, mockup: 200, custom: 500 },
    options: { responsive: 200, seo: 300, accessibility: 300, multilingual: 400, ecommerce: 1000, blog: 200 }
};

const DEFAULT_OPTIONS: Options = {
    technology: 'wordpress',
    type: 'vitrine',
    pages: 1,
    design: 'template',
    responsive: true,
    seo: false,
    accessibility: false,
    multilingual: false,
    ecommerce: false,
    blog: false
};

export function Pricing() {
    const [calculatedPrice, setCalculatedPrice] = useState<number>(TARIFS.base)
    const [options, setOptions] = useState<Options>(DEFAULT_OPTIONS)

    const calculatePrice = useCallback((): number => {
        const { technology, type, pages, design, responsive, seo, accessibility, multilingual, ecommerce, blog } = options;
        return (
            TARIFS.base +
            TARIFS.technologie[technology] +
            TARIFS.type[type] +
            pages * TARIFS.page +
            TARIFS.design[design] +
            (responsive ? TARIFS.options.responsive : 0) +
            (seo ? TARIFS.options.seo : 0) +
            (accessibility ? TARIFS.options.accessibility : 0) +
            (multilingual ? TARIFS.options.multilingual : 0) +
            (ecommerce ? TARIFS.options.ecommerce : 0) +
            (blog ? TARIFS.options.blog : 0)
        );
    }, [options]);

    useEffect(() => {
        setCalculatedPrice(calculatePrice());
    }, [calculatePrice]);

    const handleRequestQuote = useCallback(() => {
        localStorage.setItem('quoteOptions', JSON.stringify(options));
        localStorage.setItem('quotePrice', calculatedPrice.toString());
        window.location.href = '#contact';
    }, [options, calculatedPrice]);

    const handleOptionChange = (key: keyof Options, value: any) => {
        setOptions((prevOptions) => ({ ...prevOptions, [key]: value }));
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <Card className="bg-inherit border-none lg:border-solid lg:bg-card">
                <CardHeader><h3 className='mx-auto text-xl font-extrabold'>Estimez votre projet rapidement</h3></CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="technology">Technologie</Label>
                            <Select value={options.technology} onValueChange={(value) => handleOptionChange('technology', value)}>
                                <SelectTrigger><SelectValue placeholder="Choisissez une technologie" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="wordpress">WordPress</SelectItem>
                                    <SelectItem value="custom">Sur-mesure (codé manuellement)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="type">Type de site</Label>
                            <Select value={options.type} onValueChange={(value) => handleOptionChange('type', value)}>
                                <SelectTrigger><SelectValue placeholder="Choisissez un type de site" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="vitrine">Site vitrine</SelectItem>
                                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                                    <SelectItem value="portfolio">Portfolio</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="pages">Nombre de pages: {options.pages}</Label>
                            <Slider value={[options.pages]} onValueChange={(value) => handleOptionChange('pages', value[0])} min={1} max={20} step={1} />
                        </div>
                        <div>
                            <Label htmlFor="design">Design</Label>
                            <Select value={options.design} onValueChange={(value) => handleOptionChange('design', value)}>
                                <SelectTrigger><SelectValue placeholder="Choisissez un type de design" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="template">Template</SelectItem>
                                    <SelectItem value="mockup">Reproduction de votre maquette</SelectItem>
                                    <SelectItem value="custom">Sur-mesure</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-4 my-auto">
                        {['responsive', 'seo', 'accessibility', 'multilingual', 'ecommerce', 'blog'].map((feature) => (
                            <div key={feature} className="flex items-center justify-between">
                                <Label htmlFor={feature}>{feature.charAt(0).toUpperCase() + feature.slice(1)}</Label>
                                <Switch checked={!!options[feature as keyof Options]} onCheckedChange={(checked) => handleOptionChange(feature as keyof Options, checked)} />
                            </div>
                        ))}
                    </div>
                </CardContent>
                <div className="mt-8 text-center">
                    <p className="text-3xl font-bold">Prix estimé : {calculatedPrice}€</p>
                    <TypographyP className='text-primary'>Domaine + hébergement + e-mail compris pendant 12 mois pour tout projet supérieur à 1299€</TypographyP>
                    <Button className="mt-4" onClick={handleRequestQuote}>Demander un devis avec ces options</Button>
                </div>
                <CardFooter>
                    <TypographyMuted className="pt-9">
                        Tous les tarifs sont H.T. * Prix indicatif, sujet à modification selon les demandes. ** Temps de travail estimé, confirmé par devis. *** Maintenance annuelle (engagement de 12 mois). Vous êtes propriétaire des sources à la fin du projet. Paiement en plusieurs fois possible.
                    </TypographyMuted>
                </CardFooter>
            </Card>
        </div >
    );
}