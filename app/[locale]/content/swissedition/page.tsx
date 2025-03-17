import React from 'react';
import sty1 from './page.module.css';
// import Nav2 from '@/app/components/Nav2/Nav2';
import Pg6 from '@/app/components/Pg6/Pg6';
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
    title: "Propertybase SWISS EDITION | Efficient CRM for Swiss Real Estate Agents",
    description: "Propertybase Swiss Edition is a pre-configured CRM tailored for Swiss real estate professionals. Automate marketing, streamline workflows, and optimize customer interactions with Swiss precision and reliability.",
  };

  const metaDataDE = {
    title: "Propertybase Swiss Edition | Effizientes CRM für Schweizer Immobilienmakler",
    description: "Die Propertybase SWISS EDITION ist eine vorkonfigurierte CRM-Lösung für Schweizer Immobilienmakler. Automatisierte Prozesse, präzise Datenverwaltung und effiziente Immobilienvermarktung - optimieren Sie Ihr Geschäft mit Schweizer Qualität.",
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
        <Pg6 />
      </TranslationsProvider>
    </div>
  );
}
