"use client"

import Divider from "@/components/ui/Divider";
import { FadeIn } from "@/lib/motion";
import ContactForm from "@/components/ContactForm"

export default function Home() {

  return (
    <>
      <Divider />
      <FadeIn delay={0.2}> <ContactForm /> </FadeIn>
    </>
  );
}
