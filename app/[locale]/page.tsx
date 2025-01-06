import Page from "./users/LandingPage/page";
import initTranslations from "../i18n";
import TranslationProvider from "../components/TranslationProvider";

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "de" },
  ];
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
