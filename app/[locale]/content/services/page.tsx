import React from 'react';
import sty1 from './page.module.css';
import Pg5 from '@/app/components/Pg5/Pg5';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationProvider';

// ✅ Keep `params` as a plain object (not async)
export async function generateMetadata({ params }: { params: { locale?: string } }) {
  console.log("🔍 Debug: generateMetadata() called with params:", params);

  const locale = params?.locale ?? 'en'; // Default to English

  const metaData = {
    en: {
      title: "Welcome to Our Website | Best Services for You",
      description: "Discover the best services tailored to your needs. We provide top-notch solutions to enhance your experience.",
    },
    de: {
      title: "Willkommen auf unserer Website | Beste Dienstleistungen für Sie",
      description: "Entdecken Sie die besten Dienstleistungen, die auf Ihre Bedürfnisse zugeschnitten sind. Wir bieten erstklassige Lösungen.",
    },
  };

  console.log("🔍 Debug: Selected Metadata:", metaData[locale]);

  return metaData[locale];
}

// ✅ Ensure correct static params (Next.js expects an array of objects)
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

// ✅ Page component remains a server component (no useEffect needed)
export default async function Page({ params }: { params: { locale?: string } }) {
  console.log('🔍 Debug: Received Params:', params);

  const locale = params?.locale ?? 'en'; // Default to 'en'
  const { resources } = await initTranslations(locale, ['landing']); // Load translations

  return (
    <div className={sty1.body}>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg5 />
      </TranslationsProvider>
    </div>
  );
}
