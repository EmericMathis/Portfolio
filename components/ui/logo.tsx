"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LogoSvg } from '../svg/logo';
import { useRef } from 'react';

const Logo = () => {

    return (
        <Link href="/">
            <div className='flex items-center gap-2 font-extrabold'>
                <LogoSvg width={100} height={30} />
                Emeric MATHIS
            </div>
        </Link>
    );
};

export default Logo;