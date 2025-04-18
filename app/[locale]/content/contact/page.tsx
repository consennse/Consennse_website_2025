import React from 'react';
import sty1 from './page.module.css';
// import Nav2 from '@/app/components/Nav2/Nav2';
import Pg2 from '@/app/components/Pg2/Pg2';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationProvider';

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }) {

  const locale = (await params)?.locale || 'en'; // Default to English
  const metaDataEN = {
    title: "Consennse GmbH | Contact us",
    description: "Get in touch with us quickly and easily - use our contact form for your inquiries, requests, or feedback",
  };

  const metaDataDE = {
    title: "Consennse GmbH | Kontaktaufnahme",
    description: "Nehmen Sie schnell und unkompliziert Kontakt mit uns auf - nutzen Sie unser Kontaktformular für Ihre Anfragen, Wünsche oder Feedback.",
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
        <Pg2 />
      </TranslationsProvider>
    </div>
  );
}

