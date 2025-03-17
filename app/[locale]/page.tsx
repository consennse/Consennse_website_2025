import Page from "./content/LandingPage/page"
import initTranslations from "../i18n";
import TranslationProvider from "../components/TranslationProvider";

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "de" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }) {

  const locale = (await params)?.locale || 'en'; // Default to English
  const metaDataEN = {
    title: "Propertybase CRM for Real Estate | Consulting, Implementation & Support",
    description: "We are your full-service provider for Propertybase: consulting, implementation, integration, customization, training, and support. Leverage the power of a native cloud solution for your digital transformation in real estate.",
  };

  const metaDataDE = {
    title: "Propertybase CRM für Immobilien | Beratung, Implementierung & Support",
    description: "Ihr Full-Service-Anbieter für Propertybase: Beratung, Implementierung, Integration und Support. Nutzen Sie die Leistungsfähigkeit einer nativen Cloud-Lösung für Ihre digitale Transformation in der Immobilienbranche.",
  };

  const selectedMetadata = locale === 'de' ? metaDataDE : metaDataEN;
  console.log("🔍 Debug: Selected Metadata:", selectedMetadata);

  return selectedMetadata;
}
export default async function Home({ params }: { params: Promise<{ locale?: string }> }) {
  const resolvedParams = await params; // Await the params
  console.log("Resolved Params:", resolvedParams);

  const locale = resolvedParams?.locale || "en"; // Use the resolved locale
  const { resources } = await initTranslations(locale, ["landing"]); // Fetch translations based on locale

  return (
    <div>
      <TranslationProvider
        resources={resources}
        locale={locale}
        namespaces={["landing"]}
      >
        <Page/>
      </TranslationProvider>
    </div>
  );
}
