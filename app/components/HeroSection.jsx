/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
    return (
        <section className='pt-2'>
            <div className='grid grid-cols-1 md:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center md:text-left '>
                    <h1 className="text-white mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-purple-500'>Hello, I&apos;m{" "}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Emeric',
                                3000,
                                'Web Developer',
                                3000,
                                'Mobile Dev',
                                3000,
                                'UI/UX Designer',
                                3000
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base md:text-lg mb-6 lg:text-xl">
                        I bring your ideas to life and improve them with my creativity and expertise. I'm using the latest technologies to build your website or mobile app.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full md:w-fit rounded-full mr-4 bg-purple-700 hover:bg-purple-900 text-white'>
                            Hire Me
                        </button>
                        <button className='px-1 py-1 w-full md:w-fit rounded-full bg-purple-500  hover:bg-purple-900 text-white mt-3' >
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 lg:justify-self-end mt-4 lg:mt-0 mx-auto">
                    <div className='rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative flex items-center justify-center'>
                        <img
                            src="/images/Ermic.png"
                            alt="emeric image"
                            className='w-full h-full object-cover mx-auto'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
