import React from 'react';
import sty1 from './page.module.css';
// import Nav2 from '@/app/components/Nav2/Nav2';
import Pg3 from '@/app/components/PG3/Pg3';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationProvider';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
  ];
}
export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }) {

  const locale = (await params)?.locale || 'en'; // Default to English
  const metaDataEN = {
    title: "Consennse GmbH | Inquiry CRM Support",
    description: "Submit your request for our CRM support contracts - our team will assist you quickly and reliably.",
  };

  const metaDataDE = {
    title: "Propertybase CRM Support | Flexible Service-Modelle & schnelle Hilfe",
    description: "Individueller Propertybase CRM-Support: Wählen Sie das passende Service-Level mit garantierten Reaktionszeiten und massgeschneiderter Betreuung. Unser Expertenteam unterstützt Sie zuverlässig und effizient.",
  };

  const selectedMetadata = locale === 'de' ? metaDataDE : metaDataEN;
  console.log("🔍 Debug: Selected Metadata:", selectedMetadata);

  return selectedMetadata;
}
export default async function Page({ params }: { params: Promise<{ locale?: string }> }) {
  const resolvedParams = await params; // Await the params
  console.log('Resolved Params:', resolvedParams);

  const locale = resolvedParams?.locale || 'en'; // Fallback to 'en' if locale is undefined
  const { resources } = await initTranslations(locale, ['landing']); // Fetch translations

  return (
    <div className={sty1.body}>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg3 />
      </TranslationsProvider>
    </div>
  );
}
