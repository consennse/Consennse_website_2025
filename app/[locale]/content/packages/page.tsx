import React from 'react';
import Pg11 from '@/app/components/Pg11/Pg11' ;
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
    title: "EXPOSE for Propertybase | Automated Exposés & Direct Mail Creation",
    description: "EXPOSE for Propertybase automates the creation of sales documents, PDFs, and direct mail,saving time and reducing costs. Create stunning brochures and print products effortlessly.",
  };

  const metaDataDE = {
    title: "EXPOSE for Propertybase | Automatisierte Exposés & Direktmailings",
    description: "EXPOSE for Propertybase automatisiert die Erstellung von Verkaufsunterlagen, PDFs und Direktmailings. Sparen Sie Zeit und Kosten mit individuell gestalteten Templates und einer nahtlosen Integration in Propertybase.",
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
    <div>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg11 />
      </TranslationsProvider>
    </div>
  );
}
