"use client";

import Reveal from "@/components/gsap/Reveal";
import { FiMail, FiPhone } from "react-icons/fi";

import { config } from "@/config";

export default function ContactInfo() {
  const p = {
    email: config.email,
    heading: "Let's build something.",
    body: "Open to full-time roles, contracts and interesting collaborations.",
  };

  const iconBoxClass =
    "flex items-center justify-center w-12 h-12 bg-deep border border-brand rounded-xl text-signal shrink-0 transition-colors duration-200 hover:border-signal";

  return (
    <div className="contents md:flex md:flex-col md:gap-10 md:h-full md:justify-start">
      <Reveal className="flex flex-col items-start text-left py-2 order-1 md:order-0">
        <div>
          {p.email && (
            <div className="mono inline-flex items-center gap-2 py-1.5 px-3 bg-deep border border-brand rounded-full text-sm text-signal mb-6">
              <FiMail size={16} />
              Contact
            </div>
          )}
          <h2 className="heading-lg">{p.heading}</h2>
          <p className="lede mt-5 max-w-full">{p.body}</p>
        </div>
      </Reveal>

      <Reveal
        className="flex flex-col gap-6 w-full order-3 md:order-0"
        delay={0.1}
      >
        {p.email && (
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-12 h-12 bg-deep border border-brand rounded-xl text-signal shrink-0">
              <FiMail size={20} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-mist">Email:</span>
              <a
                href={`mailto:${p.email}`}
                className="font-medium text-paper no-underline text-[1.05rem] transition-colors duration-200 hover:text-signal"
              >
                {p.email}
              </a>
            </div>
          </div>
        )}

        {config.phone && (
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-12 h-12 bg-deep border border-brand rounded-xl text-signal shrink-0">
              <FiPhone size={20} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-mist">Phone:</span>
              <a
                href={`tel:${config.phone.replace(/\s+/g, "")}`}
                className="font-medium text-paper no-underline text-[1.05rem] transition-colors duration-200 hover:text-signal"
              >
                {config.phone}
              </a>
            </div>
          </div>
        )}

        {config.socials && config.socials.length > 0 && (
          <div className="flex gap-4 mt-2">
            {config.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={iconBoxClass}
                aria-label={social.label}
              >
                <social.icon width="20" height="20" size={20} />
              </a>
            ))}
          </div>
        )}
      </Reveal>
    </div>
  );
}
