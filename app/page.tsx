"use client"

import { Hero } from "@/components/blocks/Hero";
import Tarifs from "@/components/blocks/Tarifs";
import Apropos from "@/components/blocks/Apropos";
import Contact from "@/components/blocks/Contact";
import { LinkPreview } from "@/components/ui/link-preview";
import { MesServices } from "@/components/blocks/MesServices";
import BackToTopBtn from "@/components/blocks/BackToTopBtn";
import Skills from "@/components/blocks/Skills";
import Divider from "@/components/blocks/Divider";
import Title from "@/components/blocks/Title";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen space-y-20">
      <Header />
      <main className="mx-auto">

        {/* HERO */}
        <Hero />
        <Divider />

        {/* SERVICES */}
        <Title title="Mes services" subtitle="Des prestations adaptées à vos besoins" />
        <MesServices />
        <Divider />

        {/* SKILLS */}
        <Title title="Mes compétences" subtitle="Des compétences variées pour répondre à vos besoins" />
        <Skills />
        <Divider />

        {/* TARIFS */}
        <Tarifs />
        <Divider />

        <div>Des solutions adaptées à votre domaine d'activité !</div>
        <Apropos />
        <div>Un interlocuteur unique pour un site internet réussi !</div>
        <Contact />
      </main>
      <div className="mx-auto">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>
      </div>
      <Footer />
      <BackToTopBtn />
    </div>
  );
}