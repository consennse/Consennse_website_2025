import React from 'react';
import Pg9 from "@/app/components/Pg9/Pg9"
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationProvider';

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }) {

  const locale = (await params)?.locale || 'en'; // Default to English
  const metaDataEN = {
    title: "Consennse GmbH | Privacy Policy",
    description: "The protection of your personal data is important to us. In this privacy policy, we inform you about the processing of your personal data when you visit our website.",
  };

  const metaDataDE = {
    title: "Consennse GmbH | Datenschutzerklärung",
    description: "Der Schutz Ihrer persönlichen Daten ist uns wichtig. In dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung Ihrer personenbezogenen Daten beim Besuch unserer Website.",
  };

  const selectedMetadata = locale === 'de' ? metaDataDE : metaDataEN;
  console.log("🔍 Debug: Selected Metadata:", selectedMetadata);

  return selectedMetadata;
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
  ];
}

export default async function Page({ params }: { params: Promise<{ locale?: string }> }) {
  const resolvedParams = await params; // Await the params to resolve
  console.log('Resolved Params:', resolvedParams);

  const locale = resolvedParams?.locale || 'en'; // Default to 'en' if locale is not provided
  const { resources } = await initTranslations(locale, ['landing']); // Load translations

  return (
    <div>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg9 />
      </TranslationsProvider>
    </div>
  );
}

