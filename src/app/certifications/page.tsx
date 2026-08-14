import { notFound } from "next/navigation";

import { components } from "@/slices";
import { siteContent } from "@/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { siteContentSlices } from "@/lib/siteContentSlices";

export const revalidate = 60;

export const metadata = {
  title: siteContent.certifications.meta.title,
  description: siteContent.certifications.meta.description,
};

export default async function CertificationsPage() {
  if (!siteContent.certifications.visible) {
    notFound();
  }

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
    const page = await client.getSingle("certifications");
    if (page.data.slices?.length) return page.data.slices;
  } catch {
    // Fallback if not published
  }
  return siteContentSlices.filter((s) => s.slice_type === "certifications");
}
