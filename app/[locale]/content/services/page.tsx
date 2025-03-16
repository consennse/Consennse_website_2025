import React from 'react';
import sty1 from './page.module.css';
// import Nav2 from '@/app/components/Nav2/Nav2';
import Pg5 from '@/app/components/Pg5/Pg5';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationProvider';


export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }) {

  const locale = (await params)?.locale || 'en'; // Default to English
  const metaDataEN = {
    title: "Propertybase CRM Services | Consulting, Implementation & Support",
    description: "We guide you from consultation to implementation and ongoing support for Propertybase CRM. Optimize your real estate business with tailored solutions, seamless integrations, and expert support.",
  };

  const metaDataDE = {
    title: "Propertybase CRM Services | Beratung, Implementierung & Support",
    description: "Wir begleiten Sie auf dem Weg zu einer massgeschneiderten Propertybase CRM-Lösung - von der Analyse über die Implementierung bis zum laufenden Support. Profitieren Sie von unserer Erfahrung für eine erfolgreiche digitale Transformation.",
  };

  const selectedMetadata = locale === 'de' ? metaDataDE : metaDataEN;
  console.log("🔍 Debug: Selected Metadata:", selectedMetadata);

  return selectedMetadata;
}

// Function to define static params for localization
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
  ];
}

// Main Page Component
export default async function Page({ params }: { params: Promise<{ locale?: string }> }) {
  const locale = (await params)?.locale || 'en'; // Default to 'en' if no locale is provided
  const { resources } = await initTranslations(locale, ['landing']); // Load translations

  return (
    <div className={sty1.body}>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg5 />
      </TranslationsProvider>
    </div>
  );
}
