import Image from "next/image";
import { siteContent } from "@/config";
import Reveal from "@/components/gsap/Reveal";

import { AboutSlice } from "@/types/slices";

export default function About({ slice }: { slice: AboutSlice }) {
  const p = slice.primary;

  const imageUrl =
    typeof p?.image === "string"
      ? p.image.trim() !== ""
        ? p.image
        : undefined
      : p?.image?.url;

  const imageAlt =
    p?.image_alt ||
    (typeof p.image !== "string" ? p?.image?.alt : undefined) ||
    siteContent.meta.author;

  // Dynamically support infinite paragraphs (array from config or dynamic keys from Prismic)
  const paragraphs: string[] =
    p?.body && Array.isArray(p?.body)
      ? p?.body
      : Object.keys(p)
          .filter((k) => k.startsWith("body_") && p[k])
          .sort()
          .map((k) => p[k]);

  return (
    <section className="section container" id="about">
      {(p?.eyebrow || p?.heading) && (
        <Reveal>
          {p?.eyebrow && <p className="eyebrow">{p.eyebrow}</p>}
          {p?.heading && <h2 className="heading-lg">{p.heading}</h2>}
        </Reveal>
      )}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] lg:grid-cols-[1fr_1.4fr_1fr] gap-[clamp(2rem,5vw,4rem)] mt-10 items-start">
        <Reveal className="relative w-full max-w-100 md:max-w-none rounded-(--radius) overflow-hidden border border-brand bg-[color-mix(in_srgb,var(--deep)_72%,transparent)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--signal)_60%,var(--brand))] hover:-translate-y-0.75 group">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={600}
              className="object-cover w-full h-auto block brightness-80 contrast-110 transition-all duration-500 group-hover:scale-105 group-hover:brightness-100 group-hover:contrast-100"
              priority
            />
          ) : (
            <div className="w-full aspect-square flex flex-col items-center justify-center bg-[color-mix(in_srgb,var(--ink)_80%,transparent)]">
              <svg
                className="w-1/3 h-1/3 text-mist opacity-30 transition-all duration-500 group-hover:scale-110 group-hover:text-signal group-hover:opacity-80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
          )}
        </Reveal>
        {paragraphs.length > 0 && (
          <Reveal className="grid gap-5 text-mist max-w-[60ch]">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </Reveal>
        )}
        {slice?.items && slice?.items?.length > 0 && (
          <Reveal
            stagger
            as="ul"
            className="list-none grid gap-4 md:col-span-full md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:col-span-1 lg:grid-cols-1"
          >
            {slice.items.map((s, idx) => (
              <li
                key={s.label || s.value || idx}
                className="card flex flex-col gap-[0.35rem]"
              >
                {s.value && (
                  <strong className="font-display text-[2rem] text-signal">
                    {s.value}
                  </strong>
                )}
                {s.label && <span className="mono">{s.label}</span>}
              </li>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
