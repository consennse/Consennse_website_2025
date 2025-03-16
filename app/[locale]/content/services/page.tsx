import React from 'react';
import sty1 from './page.module.css';
import Pg5 from '@/app/components/Pg5/Pg5';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationProvider';

/**
 * Generates metadata dynamically based on the locale.
 * This function is used by Next.js to set the page title and description.
 */
export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }) {
  console.log("🔍 Debug: generateMetadata() called with params:", params);

  const resolvedParams = await params; // ✅ Await params before using it
  const locale = resolvedParams?.locale || 'en'; // ✅ Now safely access locale

  const metaDataEN = {
    title: "Welcome to Our Website | Best Services for You",
    description: "Discover the best services tailored to your needs. We provide top-notch solutions to enhance your experience.",
  };

  const metaDataDE = {
    title: "Willkommen auf unserer Website | Beste Dienstleistungen für Sie",
    description: "Entdecken Sie die besten Dienstleistungen, die auf Ihre Bedürfnisse zugeschnitten sind. Wir bieten erstklassige Lösungen.",
  };

  const selectedMetadata = locale === 'de' ? metaDataDE : metaDataEN;
  console.log("🔍 Debug: Selected Metadata:", selectedMetadata);

  return selectedMetadata;
}


/**
 * Generates static parameters for Next.js dynamic routes.
 * This tells Next.js to pre-render pages for these locales at build time.
 */
export async function generateStaticParams() {
  return [
    { locale: 'en' }, // English version of the page
    { locale: 'de' }, // German version of the page
  ];
}

/**
 * Main page component for the "/[locale]/content/services" route.
 * This component loads localized translations and renders the page.
 */
export default async function Page({ params }: { params: { locale?: string } }) {
  console.log('🔍 Debug: Received Params:', params);

  // Extract locale from params; default to 'en' if not provided
  const locale = params?.locale || 'en';

  // Load translations for the given locale and "landing" namespace
  const { resources } = await initTranslations(locale, ['landing']);

  return (
    <div className={sty1.body}>
      {/* Provide translations and locale context to child components */}
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg5 />
      </TranslationsProvider>
    </div>
  );
}
