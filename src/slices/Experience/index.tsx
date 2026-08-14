import Reveal from "@/components/gsap/Reveal";

import { ExperienceSlice } from "@/types/slices";

export default function Experience({ slice }: { slice: ExperienceSlice }) {
  return (
    <section className="section container" id="experience">
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
        <Reveal stagger as="ul" className="list-none mt-10 grid">
          {slice?.items?.map?.((e, idx) => (
            <li
              key={`${e?.role}-${e?.period}` || idx}
              className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 py-7 border-t border-brand"
            >
              {e?.period && <span className="mono">{e.period}</span>}
              <div>
                {e?.role && (
                  <h3 className="font-display text-xl font-bold">{e.role}</h3>
                )}
                {e?.company && (
                  <p className="mono text-signal mt-1 mb-2.5">{e.company}</p>
                )}
                {e?.summary && (
                  <p className="text-mist max-w-[60ch]">{e.summary}</p>
                )}
              </div>
            </li>
          ))}
        </Reveal>
      )}
    </section>
  );
}
