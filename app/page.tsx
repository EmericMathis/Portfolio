"use client"
import { Footer } from "@/components/main/Footer";
import Header from "@/components/main/Header";
import Marquee from "@/components/blocks/Marquee";
import { Hero } from "@/components/blocks/Hero";
import AudioPlayer from "@/components/blocks/AudioPlayer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto pt-20">
        <Hero />
        <Marquee />
      </main>
      <Footer />
    </div>
  );
}