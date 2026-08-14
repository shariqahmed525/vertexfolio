import Link from "next/link";

import Reveal from "@/components/gsap/Reveal";
import HeroCanvas from "@/components/three/HeroCanvas";

import { HeroSlice } from "@/types/slices";

export default function Hero({ slice }: { slice: HeroSlice }) {
  const p = slice.primary;
  return (
    <section className="min-h-svh flex items-center relative pt-16">
      <HeroCanvas />
      <div className="container relative z-10">
        <Reveal stagger>
          {p?.eyebrow && <p className="eyebrow">{p.eyebrow}</p>}
          {p?.heading && <h1 className="heading-xl">{p.heading}</h1>}
          {p?.subheading && <p className="lede mt-6">{p.subheading}</p>}
          {(p?.primary_cta_label || p?.secondary_cta_label) && (
            <div className="flex flex-wrap gap-4 mt-10">
              {p?.primary_cta_label && (
                <Link
                  className="btn btn--primary"
                  href={p.primary_cta_link || "#"}
                >
                  {p.primary_cta_label} →
                </Link>
              )}
              {p?.secondary_cta_label && (
                <Link className="btn" href={p.secondary_cta_link || "#"}>
                  {p.secondary_cta_label}
                </Link>
              )}
            </div>
          )}
        </Reveal>
      </div>
      <p
        className="mono absolute bottom-8 left-1/2 -translate-x-1/2 z-1 animate-bob"
        aria-hidden="true"
      >
        scroll ↓
      </p>
    </section>
  );
}
