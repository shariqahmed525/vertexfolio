import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { cn } from "@/utils/helpers";
import Reveal from "@/components/gsap/Reveal";

import { ContactSlice } from "@/types/slices";

export default function Contact({ slice }: { slice: ContactSlice }) {
  const p = slice.primary;
  const email = p?.email;
  const emailCtaKind = p?.email_cta_kind || "primary";
  const formCtaKind = p?.form_cta_kind || "secondary";

  return (
    <section className="section container" id="contact">
      <Reveal className="text-center grid justify-items-center py-[clamp(2rem,6vh,4rem)]">
        {p?.eyebrow && <p className="eyebrow">{p.eyebrow}</p>}
        {p?.heading && <h2 className="heading-lg">{p.heading}</h2>}
        {p?.body && <p className="lede mx-auto mt-5 mb-8">{p.body}</p>}

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {email && (
            <a
              href={`mailto:${email}`}
              className={cn("btn", {
                "btn--primary": emailCtaKind === "primary",
                "btn--secondary": emailCtaKind === "secondary",
              })}
            >
              {email}
            </a>
          )}
          {p?.form_cta_label && (
            <Link
              href={p?.form_cta_href || "/contact"}
              className={cn("btn", {
                "btn--primary": formCtaKind === "primary",
                "btn--secondary": formCtaKind === "secondary",
              })}
            >
              <span>{p.form_cta_label}</span>
              <FiArrowRight size={16} />
            </Link>
          )}
        </div>

        {slice?.items && slice?.items?.length > 0 && (
          <ul className="list-none flex flex-wrap justify-center gap-7 mt-10">
            {slice?.items?.map?.((s, idx) => (
              <li key={s?.label || idx}>
                {s?.label && (
                  <a
                    target="_blank"
                    href={s?.link || "#"}
                    rel="noopener noreferrer"
                    className="mono transition-colors hover:text-signal"
                  >
                    {s?.label} ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </Reveal>
    </section>
  );
}
