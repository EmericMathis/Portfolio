"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"
import { TypographyP } from '@/components/typography/TypographyP';
import HyperText from '../ui/hyper-text';

export const HeroSection = () => {

    const { t } = useTranslation('home');
    const helloText = [
        t('Hello'),
        t('Web Developer'),
        t('Mobile Dev'),
    ];

    return (
        <section className='pt-2'>
            <div className='grid grid-cols-1'>
                <div className='col-span-7 place-self-center text-center md:text-left'>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-7xl font-sans py-2 md:py-10 font-bold tracking-tight">
                        <span className='text-primary bg-clip-text'>{helloText[0]}</span>
                        <br />
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                'Emeric', 3000,
                                helloText[1], 3000,
                                helloText[2], 3000,
                                'UI/UX Designer', 3000,
                                () => (
                                    <HyperText key="hypertext1" text="pipicaca" className="text-primary" />
                                ), 3000
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}
                        />
                        <span className='text-primary animate-blink ml-0'>|</span>
                    </h1>
                    <TypographyP className="text-base md:text-lg mb-10 lg:text-xl">{t('Description')}</TypographyP>
                    <div className='space-x-4'>
                        <Link className={buttonVariants({ variant: "outline" })} href="https://cvdesignr.com/p/6520128bf0657">{t('Download CV')}</Link>
                        <Link className={buttonVariants({ variant: "" })} href="https://www.malt.fr/profile/emericemeric" target='_blank'>{t('Hire Me')}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}