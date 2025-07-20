'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import style from "./LanguageChanger.module.css";

export default function LanguageChanger() {
  const {t} = useTranslation();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  const handleChange = (e) => {
    setSelectedLocale(e.target.value);
  };

  const applyChange = () => {
    if (selectedLocale === currentLocale) return;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${selectedLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + selectedLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${selectedLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div>
      <select onChange={handleChange} value={selectedLocale} className={style.but}>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
      <button onClick={applyChange} className={style.but2}>
        {t('623')}
      </button>
    </div>
  );
}
