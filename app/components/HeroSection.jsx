/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';


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
                    <h1 className="text-white mb-4 text-3xl md:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-purple-500'>{helloText[0]}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Emeric',
                                3000,
                                helloText[1],
                                3000,
                                helloText[2],
                                3000,
                                'UI/UX Designer',
                                3000
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base md:text-lg mb-6 lg:text-xl">
                        {t('Description')}
                    </p>
                    <div>
                        <a href="https://www.malt.fr/profile/emericemeric" target="_blank" rel="noopener noreferrer">
                            <button className='md:mr-2 px-5 py-3 w-80  md:w-fit rounded-full bg-purple-700 hover:bg-purple-900 text-white'>
                                {t('Hire Me')}
                            </button>
                        </a>
                        <a href='https://cvdesignr.com/p/6520128bf0657' target='blank' rel='noopener noreferrer'>
                            <button className='px-1 py-1 w-80 md:w-fit rounded-full bg-purple-500  hover:bg-purple-900 text-white mt-3' >
                                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>{t('Download CV')}</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
