import Tilt from "@/components/gsap/Tilt";
import Reveal from "@/components/gsap/Reveal";
import TechIcon from "@/components/icons/TechIcon";

import { TechStackSlice } from "@/types/slices";

export default function TechStack({ slice }: { slice: TechStackSlice }) {
  return (
    <section className="section container" id="stack">
      {(slice.primary?.eyebrow || slice.primary?.heading) && (
        <Reveal>
          {slice.primary?.eyebrow && (
            <p className="eyebrow">{slice.primary.eyebrow}</p>
          )}
          {slice.primary?.heading && (
            <h2 className="heading-lg">{slice.primary.heading}</h2>
          )}
        </Reveal>
      )}
      {slice?.items && slice?.items?.length > 0 && (
        <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {slice?.items?.map?.((g, idx) => (
            <Tilt key={g?.group || idx} className="card">
              {g?.group && (
                <h3 className="mono text-signal mb-4 font-normal">{g.group}</h3>
              )}
              {g?.tools && (
                <ul className="list-none flex flex-wrap gap-2.5">
                  {g?.tools?.split?.(",")?.map?.((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center gap-2 border border-brand rounded-(--radius) h-10 px-3 font-mono text-[0.8125rem] text-paper bg-[color-mix(in_srgb,var(--ink)_55%,transparent)] transition-all duration-300 hover:transform-[translateZ(28px)] hover:border-[color-mix(in_srgb,var(--signal)_55%,var(--brand))]"
                    >
                      <TechIcon name={t} size={20} className="shrink-0" />
                      <span className="leading-none">{t?.trim?.()}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Tilt>
          ))}
        </Reveal>
      )}
    </section>
  );
}
