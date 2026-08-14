"use client";

import dynamic from "next/dynamic";

/**
 * Client-only, lazy-loaded WebGL layer. Keeps Three.js out of the
 * server bundle and out of the critical path — the HTML content
 * paints first, the scene fades in when ready.
 */
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function HeroCanvas({ fadeOnScroll = true }: { fadeOnScroll?: boolean }) {
  return <HeroScene fadeOnScroll={fadeOnScroll} />;
}
