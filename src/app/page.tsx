import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteContentSlices } from "@/lib/siteContentSlices";

export const revalidate = 60;

/**
 * The homepage is a fully server-rendered document: every word of content
 * exists in the HTML sent to crawlers. The Three.js scene and GSAP timelines
 * hydrate on the client and layer on top — they never gate the content.
 */
export default async function Home() {
  const slices = await getSlices();

  return (
    <>
      <Header />
      <main id="main">
        <SliceZone slices={slices} components={components} />
      </main>
      <Footer />
    </>
  );
}

async function getSlices() {
  try {
    const client = createClient();
    const home = await client.getSingle("homepage");
    if (home.data.slices?.length) return home.data.slices;
  } catch {
    // Repository not configured yet, or homepage not published —
    // fall through to local content so the site always renders.
  }
  return siteContentSlices.filter((s) => s.slice_type !== "certifications");
}
