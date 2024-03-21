"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';





export const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m{" "}</span>
                    <br />
                    <TypeAnimation
                    sequence={[
                        'Emeric',
                        2000, 
                        'Web Developer',
                        2000,
                        'Mobile Developer',
                        2000,
                        'UI/UX Designer',
                        2000
                    ]}
                    wrapper="span"
                    speed={40}
                    repeat={Infinity}
                    />
                    </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Amet cillum elit ut cillum ex tempor sunt cillum. Ut dolore ea ullamco anim nulla sint. 
                    </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                        Hire Me
                        </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3' >
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                      src="/Ermic.png"
                      alt="emeric image"
                      className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                      width={300}
                      height={300}
                    />
                </div>
            </div>
      </div>
    </section>
  )
}
