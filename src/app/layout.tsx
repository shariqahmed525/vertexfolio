import { repositoryName } from "@/prismicio";
import type { Metadata, Viewport } from "next";
import { PrismicPreview } from "@prismicio/next";
import { Syne, Instrument_Sans, JetBrains_Mono } from "next/font/google";

import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import { siteContent, config, SITE_URL } from "@/config";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--syne",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: siteContent.meta.themeColor,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteContent.meta.title,
    template: `%s | ${siteContent.meta.author}`,
  },
  description: siteContent.meta.description,
  keywords: siteContent.meta.keywords,
  authors: [{ name: siteContent.meta.author, url: SITE_URL }],
  creator: siteContent.meta.creator,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: siteContent.meta.siteName,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    ...(siteContent.about?.image && {
      images: [
        {
          url: siteContent.about.image,
          width: 1200,
          height: 630,
          alt: siteContent.about?.imageAlt || siteContent.meta.author,
        },
      ],
    }),
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    ...(siteContent.about?.image && {
      images: [siteContent.about.image],
    }),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/** Structured data: Person + WebSite (rendered server-side for crawlers). */
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: siteContent.meta.author,
        url: SITE_URL,
        jobTitle: "Full Stack Developer",
        description: siteContent.meta.description,
        knowsAbout: siteContent.meta.keywords,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: siteContent.meta.siteName,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrument.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
        {config.showScrollToTop && <ScrollToTop />}
        <JsonLd />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
