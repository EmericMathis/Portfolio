'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import Image from 'next/image';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (newLocale) => {
        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) router.push('/' + newLocale + currentPathname);
        else router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        router.refresh();
    };

    return (
        <div className="flex space-x-2">
            <Image
                src="/images/en.svg"
                alt="English"
                width={24}
                height={24}
                className={`object-cover h-5 border border-primary rounded ${currentLocale === 'en' ? 'border-2 border-primary' : 'brightness-50'}`}

                onClick={() => handleChange('en')}
            />
            <Image
                src="/images/fr.svg"
                alt="Français"
                width={24}
                height={10}
                className={`object-cover h-5 border border-primary rounded ${currentLocale === 'fr' ? 'border-2 border-primary' : 'brightness-50'}`}
                onClick={() => handleChange('fr')}
            />
        </div>
    );
}