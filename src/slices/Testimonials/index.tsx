import Reveal from "@/components/gsap/Reveal";
import Tilt from "@/components/gsap/Tilt";

import { TestimonialsSlice } from "@/types/slices";

export default function Testimonials({ slice }: { slice: TestimonialsSlice }) {
  return (
    <section className="section container" id="testimonials">
      {(slice?.primary?.eyebrow || slice?.primary?.heading) && (
        <Reveal>
          {slice?.primary?.eyebrow && (
            <p className="eyebrow">{slice.primary.eyebrow}</p>
          )}
          {slice?.primary?.heading && (
            <h2 className="heading-lg">{slice.primary.heading}</h2>
          )}
        </Reveal>
      )}
      {slice?.items && slice?.items?.length > 0 && (
        <Reveal stagger as="ul" className="list-none grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {slice?.items?.map?.((t, i) => (
            <Tilt as="li" key={`${t?.name}-${t?.role}-${i}`} className="card grid gap-5 content-start">
              {t?.quote && (
                <p className="text-paper text-[1.05rem] leading-[1.6]">&ldquo;{t.quote}&rdquo;</p>
              )}
              <div className="grid gap-1">
                {t?.name && <span className="font-display font-bold">{t.name}</span>}
                {t?.role && <span className="mono text-signal">{t.role}</span>}
              </div>
            </Tilt>
          ))}
        </Reveal>
      )}
    </section>
  );
}
