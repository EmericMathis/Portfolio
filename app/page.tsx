"use client"

import { Footer } from "@/components/main/Footer";
import Header from "@/components/main/Header";
import Marquee from "@/components/blocks/Marquee";
import { Hero } from "@/components/blocks/Hero";
import Tarifs from "@/components/blocks/Tarifs";
import Apropos from "@/components/blocks/Apropos";
import Contact from "@/components/blocks/Contact";
import Skills from "@/components/blocks/Skills";
import { LinkPreview } from "@/components/ui/link-preview";
import { MesServices } from "@/components/blocks/MesServices";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen space-y-20">
      <Header />
      <main className="mx-auto">
        <Hero />
        <MesServices />
        <Skills />
        <Marquee />
        <Tarifs />
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
    </div>
  );
}