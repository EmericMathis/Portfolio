"use client"

import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroHighlight >
        <h1 className="text-4xl font-bold text-center">
          Web developer, designer, and creator.
        </h1>
      </HeroHighlight>

    </main>
  );
}
