import { HeroSection } from "../../components/blocks/HeroSection";
import Navbar from "../../components/main/Navbar";
import AboutSection from "../../components/blocks/AboutSection";
import ProjectsSection from "../../components/blocks/ProjectsSection";
import EmailSection from "../../components/blocks/EmailSection";
import AchievementsSection from "../../components/blocks/AchievementsSection";
import dynamic from "next/dynamic";
import initTranslations from '../i18n';
import TranslationsProvider from '../../components/blocks/TranslationsProvider';
import Footer from "@/components/main/Footer";

const ScrollTopBtn = dynamic(
  () => {
    return import("../../components/blocks/ScrollTopBtn");
  },
  { ssr: false }
);

const i18nNamespaces = ['home', 'about', 'projects', 'emailsection', 'navbar', 'footer'];

export default async function Home({ params: { locale } }) {

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className="relative flex min-h-screen flex-col bg-background overflow-hidden">
        <div className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-primary to-transparent opacity-25 blur-[200px] top-40 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-secondary to-transparent opacity-30 blur-[200px] top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-ring to-transparent opacity-30 blur-[200px] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div>
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