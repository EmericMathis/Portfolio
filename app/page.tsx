"use client"

import { Hero } from "@/components/blocks/Hero";
import { MesServices } from "@/components/blocks/MesServices";
import Skills from "@/components/blocks/Skills";
import Divider from "@/components/blocks/Divider";
import Title from "@/components/blocks/Title";
import { Header } from "@/components/blocks/Header";
import { Footer } from "@/components/blocks/Footer";
import IconSection from "@/components/blocks/IconSection";
import CTA from "@/components/blocks/CTA";
import About from "@/components/blocks/Apropos";
import ContactForm from "@/components/blocks/Contact";
import HeroCards from "@/components/blocks/HeroCards";
import MarqueeLogos from "@/components/blocks/MarqueeLogos";
import { MarqueeText } from "@/components/blocks/MarqueeText";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">

        {/* HERO */}
        <Hero textLead="Emeric MATHIS" textSubLead="Développeur web" textSublead2="indépendant" />
        <HeroCards />
        <MarqueeText texts={['Développeur Web', 'Freelance', 'Indépendant', 'DevOps', 'Interface d\'administration', 'CMS', 'E-commerce', 'Site vitrine', 'Site événementiel', 'Site institutionnel', 'Site associatif', 'Site personnel', 'Site professionnel', 'Site e-commerce', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Nestjs', 'Tailwind CSS', 'Prisma', 'Docker', 'AWS', 'GitHub', 'GitLab', 'CI/CD', 'API', 'Microservices', 'Cloud', 'Serverless', 'SEO', 'Responsive Design', 'Frontend', 'Backend', 'Full Stack', 'Agile', 'Scrum', 'TDD', 'BDD', 'REST', 'Web Development', 'Software Engineer', 'Consultant', 'Tests unitaires']} />
        <Divider />

        {/* SERVICES */}
        <Title title="Mes services" subtitle="Des prestations adaptées à vos besoins" />
        <MesServices />
        <IconSection />
        <Divider />

        {/* SKILLS */}
        <Title title="Mes compétences" subtitle="Des compétences variées pour répondre à vos besoins" />
        <Skills />
        <MarqueeLogos />
        <CTA />
        <Divider />

        {/* à PROPOS */}
        <Title title="À propos" subtitle="Qui suis-je ?" />
        <About />
        <Divider />

        {/* CONTACT */}
        <Title id="contact" title="Contact" subtitle="Une question, un projet ? Contactez-moi !" />
        <ContactForm />
        <Divider />

      </main>
      <Footer />
    </>
  );
}