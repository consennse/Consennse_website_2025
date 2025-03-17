import React from 'react';
import sty1 from './page.module.css';
// import Nav2 from '@/app/components/Nav2/Nav2';
import Pg10 from '@/app/components/Pg10/Pg10';
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
    title: "Meet Our Team | Experts in Propertybase & Real Estate CRM Solutions",
    description: "Get to know our dedicated team and explore our successful projects. We specialize in Propertybase implementation, CRM integration, and digital solutions for the real estate industry.",
  };

  const metaDataDE = {
    title: "Unser Team & Projekte | Experten für Propertybase & digitale Immobilienlösungen",
    description: "Lernen Sie unser erfahrenes Team und unsere erfolgreichen Projekte kennen. Wir bieten massgeschneiderte Propertybase-Implementierungen, CRM-Integrationen und digitale Lösungen für die Immobilienbranche.",
  };

  const selectedMetadata = locale === 'de' ? metaDataDE : metaDataEN;
  console.log("🔍 Debug: Selected Metadata:", selectedMetadata);

  return selectedMetadata;
}
export default async function Page({ params }: { params: Promise<{ locale?: string }> }) {
  const resolvedParams = await params; // Await the params to resolve
  console.log('Resolved Params:', resolvedParams);

  const locale = resolvedParams?.locale || 'en'; // Fallback to 'en' if locale is undefined
  const { resources } = await initTranslations(locale, ['landing']); // Load translations

  return (
    <div className={sty1.body}>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg10 />
      </TranslationsProvider>
    </div>
  );
}
