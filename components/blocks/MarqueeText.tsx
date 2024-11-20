import React from 'react';
import Marquee from 'react-fast-marquee';

interface TextMarqueeProps {
    texts: string[];
}

export function MarqueeText({ texts }: TextMarqueeProps) {
    return (
        <section className="w-screen text-center overflow-hidden py-16 border-y" aria-label="Important Keywords">
            <Marquee gradient={true} gradientColor='background' className='h-full'>
                {texts.map((text, index) => (
                    <div key={index} className="flex items-center">
                        <p className="mx-4 text-4xl font-bold opacity-40 whitespace-nowrap">
                            {text.toUpperCase()}
                        </p>
                        {index < texts.length - 1 && (
                            <span className="mx-2 text-4xl font-bold opacity-40" aria-hidden="true">-</span>
                        )}
                    </div>
                ))}
            </Marquee>
        </section>
    );
}