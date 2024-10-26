"use client"
import Marquee from "@/components/others/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Marquee />
    </main>
  );
}
