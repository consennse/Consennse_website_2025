import React from 'react';
// import Nav2 from '@/app/components/Nav2/Nav2';
import Pg12 from '@/app/components/Pg12/Pg12';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationProvider';
import Style from "./page.module.css"
export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }) {

  const locale = (await params)?.locale || 'en'; // Default to English
  const metaDataEN = {
    title: "Consennse GmbH | WEBSITE for Propertybase",
    description: "Build a smarter real estate business with Propertybase. Seamlessly connect your website, CRM, listings, and workflows in one powerful digital ecosystem.",
  };

  const metaDataDE = {
    title: "Consennse GmbH | WEBSITE für Propertybase",
    description: "Immobilien digital neu gedacht mit Propertybase. Verbinden Sie Website, CRM, Immobilienangebote und Workflows nahtlos in einem leistungsstarken digitalen System.",
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
    <div className = {Style.body}>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg12 />
      </TranslationsProvider>
    </div>
  );
}

