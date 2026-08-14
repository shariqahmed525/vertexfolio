"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

/**
 * Smooth scrolling via Lenis, driven by GSAP's ticker so ScrollTrigger
 * and Lenis stay perfectly in sync. Disabled automatically for users
 * who prefer reduced motion.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.05, // Lower value (default is 0.1) creates a smoother, more fluid momentum effect
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.includes("#")) {
        // If the anchor is going to another page, let Next.js handle it
        if (anchor.pathname !== window.location.pathname && anchor.hash !== "#top") {
          return;
        }

        const hash = anchor.hash || href.substring(href.indexOf("#"));
        
        if (hash === "#top") {
          e.preventDefault();
          
          if (window.location.pathname !== "/") {
            router.push("/");
          } else {
            lenis.scrollTo(0, { duration: 1.5 });
            window.history.pushState(null, "", "/");
          }
          return;
        }

        const targetElement = document.querySelector<HTMLElement>(hash);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, { offset: -80, duration: 1.5 });
        }
      }
    };

    document.documentElement.addEventListener("click", handleAnchorClick);

    return () => {
      document.documentElement.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
