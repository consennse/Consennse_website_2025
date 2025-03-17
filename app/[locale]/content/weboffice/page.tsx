import React from 'react';
import sty1 from './page.module.css';
// import Nav2 from '@/app/components/Nav2/Nav2';
import Pg8 from "@/app/components/Page8/Pg8"
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
    title: "WEB OFFICE for Propertybase | Digital Services for Real Estate Professionals",
    description: "WEB OFFICE for Propertybase automates workflows, enhances efficiency, and provides 24/7 self-service for clients. Streamline your real estate business with seamless digital solutions.",
  };

  const metaDataDE = {
    title: "WEB OFFICE for Propertybase | Digitale Services für Immobilienmakler",
    description: "WEB OFFICE for Propertybase: Optimieren Sie Ihre Prozesse mit digitalen Mitarbeitern, automatisierten Workflows und Self-Service-Funktionen. Steigern Sie Effizienz, reduzieren Sie Kosten und bieten Sie erstklassigen Kundenservice - rund um die Uhr.",
  };

  const selectedMetadata = locale === 'de' ? metaDataDE : metaDataEN;
  console.log("🔍 Debug: Selected Metadata:", selectedMetadata);

  return selectedMetadata;
}
export default async function Page({ params }: { params: Promise<{ locale?: string }> }) {
  const resolvedParams = await params; // Await the params to resolve
  console.log('Resolved Params:', resolvedParams);

  const locale = resolvedParams?.locale || 'en'; // Default to 'en' if locale is not provided
  const { resources } = await initTranslations(locale, ['landing']); // Load translations

  return (
    <div className={sty1.body}>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg8 />
      </TranslationsProvider>
    </div>
  );
}
