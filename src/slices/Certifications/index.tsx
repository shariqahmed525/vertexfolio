import Tilt from "@/components/gsap/Tilt";
import Reveal from "@/components/gsap/Reveal";
import HeroCanvas from "@/components/three/HeroCanvas";

import { CertificationsSlice } from "@/types/slices";

export default function Certifications({
  slice,
}: {
  slice: CertificationsSlice;
}) {
  return (
    <section className="section container" id="certifications">
      <HeroCanvas fadeOnScroll={false} />
      <Reveal className="mt-10">
        <p className="eyebrow">{slice.primary.eyebrow}</p>
        <h2 className="heading-lg">{slice.primary.heading}</h2>
      </Reveal>

      <Reveal
        stagger
        as="ul"
        className="list-none mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
      >
        {slice?.items
          ?.filter((cert) => cert?.title)
          ?.map((cert, index) => (
            <Tilt
              as="li"
              key={index}
              className="bg-white/5 border border-white/5 p-8 rounded-xl transition-all duration-200 hover:border-brand"
            >
              <h3 className="font-display text-xl font-bold mb-2">
                {cert.title}
              </h3>
              {(cert.issuer || cert.year) && (
                <p className="mono text-signal">
                  {cert.issuer && cert.year
                    ? `${cert.issuer} • ${cert.year}`
                    : cert.issuer || cert.year}
                </p>
              )}
              {cert.description && (
                <p className="text-mist mt-4 text-[0.95rem] leading-[1.6]">
                  {cert.description}
                </p>
              )}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono inline-block mt-6 text-[0.85rem] text-signal no-underline transition-colors duration-200 hover:text-white"
                >
                  Verify ↗
                </a>
              )}
            </Tilt>
          ))}
      </Reveal>
    </section>
  );
}
