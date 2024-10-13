"use client"

import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import HyperText from '../ui/hyper-text'

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer className="w-full border-t backdrop-blur-sm bg-background/80  bottom-0 left-0 right-0">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">

            <Link href="/" className="flex items-center space-x-2 hover:text-secondary">
              <HyperText text='Emeric MATHIS' className='font-bold text-2xl cursor-pointer hover:text-primary' />
            </Link>

          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-sm font-medium">
            <Link href="/legal/privacy" className="hover:underline hover:text-secondary">
              {t('privacy')}
            </Link>
            <Link href="/legal/cookie" className="hover:underline hover:text-secondary">
              {t('cookie')}
            </Link>
            <Link href="/legal/termsofsale" className="hover:underline hover:text-secondary">
              {t('terms of sale')}
            </Link>
            <Link href="/legal/termsofuse" className="hover:underline hover:text-secondary">
              {t('terms of use')}
            </Link>
            <Link href="/legal/sitemap" className="hover:underline hover:text-secondary">
              {t('sitemap')}
            </Link>
          </nav>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground text-center py-10">
        © {new Date().getFullYear()} All rights reserved. Made by Emeric MATHIS
      </p>
    </footer>
  )
}