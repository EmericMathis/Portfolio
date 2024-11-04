"use client"

import { Hero } from "@/components/blocks/Hero";
import Contact from "@/components/blocks/Contact";
import { MesServices } from "@/components/blocks/MesServices";
import Skills from "@/components/blocks/Skills";
import Divider from "@/components/blocks/Divider";
import Title from "@/components/blocks/Title";
import { Header } from "@/components/blocks/Header";
import { Footer } from "@/components/blocks/Footer";
import { Pricing } from "@/components/blocks/Pricing";
import IconSection from "@/components/blocks/IconSection";
import TechMarquee from "@/components/blocks/Marquee";
import CTA from "@/components/blocks/CTA";
import About from "@/components/blocks/Apropos";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto">

        {/* HERO */}
        <Hero textLead="Emeric MATHIS" textSubLead="Développeur web" textSublead2="indépendant" />
        <Divider />

        {/* SERVICES */}
        <Title title="Mes services" subtitle="Des prestations adaptées à vos besoins" />
        <MesServices />
        <IconSection />
        <Divider />

        {/* SKILLS */}
        <Title title="Mes compétences" subtitle="Des compétences variées pour répondre à vos besoins" />
        <Skills />
        <TechMarquee />
        <CTA />
        <Divider />

        {/* TARIFS */}
        <Title title="Tarifs" subtitle="Des tarifs adaptés à votre budget et à vos idées" />
        <Pricing />
        <Divider />

        {/* à PROPOS */}
        <Title title="À propos" subtitle="Qui suis-je ?" />
        <About />
        <Divider />

        {/* CONTACT */}
        <Title id="contact" title="Contact" subtitle="Une question, un projet ? Contactez-moi !" />
        <Contact />
        <Divider />

      </main>
      <Footer />
    </>
  );
}