'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';


export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = e => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (

        <form className="max-w-sm mx-auto">
            <select onChange={handleChange} value={currentLocale} id="countries" className=" border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:outline-none">
                <option value="en">english</option>
                <option value="fr">français</option>
            </select>
        </form>
    );
}