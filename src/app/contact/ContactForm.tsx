"use client";

import ContactInfo from "./ContactInfo";
import ContactFormElement from "./ContactFormElement";
import HeroCanvas from "@/components/three/HeroCanvas";

export default function ContactForm() {
  return (
    <section
      className="section relative min-h-screen flex flex-col justify-center items-center py-0"
      id="contact"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroCanvas fadeOnScroll={false} />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-[clamp(8rem,15vh,12rem)] relative z-10 md:items-stretch">
        <ContactInfo />
        <ContactFormElement />
      </div>
    </section>
  );
}
