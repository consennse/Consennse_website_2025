import React from 'react';
import sty1 from './page.module.css';
// import Nav2 from '@/app/components/Nav2/Nav2';
import Pg4 from '@/app/components/Pg4/Pg4';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationProvider';



export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }) {

  const locale = (await params)?.locale || 'en'; // Default to English
  const metaDataEN = {
    title: "Propertybase CRM Services | Consulting, Implementation & Support",
    description: "We guide you from consultation to implementation and ongoing support for Propertybase CRM. Optimize your real estate business with tailored solutions, seamless integrations, and expert support.",
  };

  const metaDataDE = {
    title: "Propertybase CRM Support | Flexible Service-Modelle & schnelle Hilfe",
    description: "Individueller Propertybase CRM-Support: Wählen Sie das passende Service-Level mit garantierten Reaktionszeiten und massgeschneiderter Betreuung. Unser Expertenteam unterstützt Sie zuverlässig und effizient.",
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
    <div className={sty1.body}>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg4 />
      </TranslationsProvider>
    </div>
  );
}

