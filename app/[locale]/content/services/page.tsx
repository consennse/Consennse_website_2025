import React from 'react';
import sty1 from './page.module.css';
import Pg5 from '@/app/components/Pg5/Pg5';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationProvider';

// Function to generate metadata dynamically
export async function generateMetadata({ params }: { params: { locale?: string } }) {
  console.log("🔍 Debug: generateMetadata() called with params:", params);

  const locale = params?.locale || 'en'; // Default to English
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

// Function to define static params for localization
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
  ];
}

// Main Page Component
export default async function Page({ params }: { params: { locale?: string } }) {
  console.log('🔍 Debug: Received Params:', params);

  const locale = params?.locale || 'en'; // Default to 'en' if no locale is provided
  const { resources } = await initTranslations(locale, ['landing']); // Load translations

  return (
    <div className={sty1.body}>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg5 />
      </TranslationsProvider>
    </div>
  );
}
