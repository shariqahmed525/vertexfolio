import Tilt from "@/components/gsap/Tilt";
import Reveal from "@/components/gsap/Reveal";
import TechIcon from "@/components/icons/TechIcon";

import { ProjectsSlice } from "@/types/slices";

export default function Projects({ slice }: { slice: ProjectsSlice }) {
  return (
    <section className="section container" id="projects">
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
        <Reveal
          stagger
          as="ul"
          className="list-none grid grid-cols-1 md:grid-cols-2 gap-5 mt-10"
        >
          {slice?.items?.map?.((p, idx) => (
            <Tilt as="li" key={p?.title || idx} className="card p-0">
              <a
                target="_blank"
                href={p?.link || "#"}
                rel="noopener noreferrer"
                className="grid gap-4 p-[clamp(1.5rem,3vw,2.25rem)] h-full group"
              >
                <div className="flex justify-between items-baseline gap-4">
                  {p?.title && (
                    <h3 className="font-display text-[1.4rem] font-bold transition-colors group-hover:text-signal">
                      {p.title}
                    </h3>
                  )}
                  {p?.year && <span className="mono">{p.year}</span>}
                </div>
                {p?.description && (
                  <p className="text-mist text-[0.98rem]">{p.description}</p>
                )}
                {p?.stack && (
                  <ul
                    className="list-none flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {p?.stack?.split?.(",")?.map?.((t) => (
                      <li
                        key={t}
                        className="mono inline-flex items-center gap-[0.4rem] border border-brand rounded-full h-8 px-[0.7rem] transition-all duration-300 hover:transform-[translateZ(20px)] hover:border-[color-mix(in_srgb,var(--signal)_55%,var(--brand))]"
                      >
                        <TechIcon name={t} size={14} className="shrink-0" />
                        <span className="leading-none mt-[0.15rem]">
                          {t?.trim?.()}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            </Tilt>
          ))}
        </Reveal>
      )}
    </section>
  );
}
