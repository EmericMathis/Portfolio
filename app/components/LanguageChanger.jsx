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
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <select onChange={handleChange} value={currentLocale} id="countries" className="border text-sm rounded-lg block w-full p-2.5 bg-zinc-900 border-zinc-600 placeholder-zinc-400 text-white focus:outline-none appearance-none pr-6" style={{ width: '100%', boxSizing: 'border-box' }}>
                    <option value="en">english</option>
                    <option value="fr">français</option>
                </select>
                <div style={{ position: 'absolute', top: '50%', right: '8px', pointerEvents: 'none', transform: 'translateY(-50%)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down w-4 h-4">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>
        </form>
    );
}