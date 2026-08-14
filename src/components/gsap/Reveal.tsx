"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: React.ReactNode;
  /** Stagger direct children instead of animating the wrapper as one block. */
  stagger?: boolean;
  delay?: number;
  as?: "div" | "section" | "ul" | "header" | "li";
  className?: string;
};

/**
 * Scroll-triggered entrance. Content is fully visible in server HTML
 * (and for reduced-motion users) — GSAP only *adds* the animation from
 * the `.gsap-reveal` pre-state on capable clients.
 */
export default function Reveal({
  children,
  stagger = false,
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const targets = stagger
        ? Array.from(ref.current.children)
        : [ref.current];

      targets.forEach((el) => el.classList.add("gsap-reveal"));

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.12 : 0,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    // @ts-expect-error — polymorphic ref
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
