import { HeroSection } from "../../components/blocks/HeroSection";
import Navbar from "../../components/main/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import AchievementsSection from "../../components/blocks/AchievementsSection";
import dynamic from "next/dynamic";
import initTranslations from '../i18n';
import TranslationsProvider from '../components/TranslationsProvider';

const ScrollTopBtn = dynamic(
  () => {
    return import("../components/ScrollTopBtn");
  },
  { ssr: false }
);

const i18nNamespaces = ['home', 'about', 'projects', 'emailsection', 'navbar'];

export default async function Home({ params: { locale } }) {

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <ScrollTopBtn />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
