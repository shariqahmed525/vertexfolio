import { siteContent } from "@/config";

/**
 * Shapes the local fallback content exactly like Prismic slices, so the
 * same <SliceZone> renders both CMS and local content with zero branching
 * in the slice components.
 */
export const siteContentSlices = [
  {
    id: "hero$fallback",
    slice_type: "hero",
    visible: siteContent?.hero?.visible,
    slice_label: null,
    variation: "default",
    version: "initial",
    primary: {
      eyebrow: siteContent?.hero?.eyebrow,
      heading: siteContent?.hero?.heading,
      subheading: siteContent?.hero?.subheading,
      primary_cta_label: siteContent?.hero?.primaryCta?.label,
      primary_cta_link: siteContent?.hero?.primaryCta?.href,
      secondary_cta_label: siteContent?.hero?.secondaryCta?.label,
      secondary_cta_link: siteContent?.hero?.secondaryCta?.href,
    },
    items: [],
  },
  {
    id: "about$fallback",
    slice_type: "about",
    visible: siteContent?.about?.visible,
    slice_label: null,
    variation: "default",
    version: "initial",
    primary: {
      eyebrow: siteContent?.about?.eyebrow,
      heading: siteContent?.about?.heading,
      body: siteContent?.about?.body ?? [],
      image: siteContent?.about?.image,
      image_alt: siteContent?.about?.imageAlt,
    },
    items: siteContent?.about?.stats?.map?.((s) => ({
      value: s?.value,
      label: s?.label,
    })) || [],
  },
  {
    id: "projects$fallback",
    slice_type: "projects",
    visible: siteContent?.projects?.visible,
    slice_label: null,
    variation: "default",
    version: "initial",
    primary: {
      eyebrow: siteContent?.projects?.eyebrow,
      heading: siteContent?.projects?.heading,
    },
    items: siteContent?.projects?.items?.map?.((p) => ({
      title: p?.title,
      description: p?.description,
      stack: p?.stack?.join?.(", "),
      link: p?.href,
      year: p?.year,
    })) || [],
  },
  {
    id: "tech_stack$fallback",
    slice_type: "tech_stack",
    visible: siteContent?.stack?.visible,
    slice_label: null,
    variation: "default",
    version: "initial",
    primary: {
      eyebrow: siteContent?.stack?.eyebrow,
      heading: siteContent?.stack?.heading,
    },
    items: siteContent?.stack?.groups?.map?.((g) => ({
      group: g?.name,
      tools: g?.items?.join?.(", "),
    })) || [],
  },
  {
    id: "experience$fallback",
    slice_type: "experience",
    visible: siteContent?.experience?.visible,
    slice_label: null,
    variation: "default",
    version: "initial",
    primary: {
      eyebrow: siteContent?.experience?.eyebrow,
      heading: siteContent?.experience?.heading,
    },
    items: siteContent?.experience?.items?.map?.((e) => ({
      role: e?.role,
      company: e?.company,
      period: e?.period,
      summary: e?.summary,
    })) || [],
  },
  {
    id: "testimonials$fallback",
    slice_type: "testimonials",
    visible: siteContent?.testimonials?.visible,
    slice_label: null,
    variation: "default",
    version: "initial",
    primary: {
      eyebrow: siteContent?.testimonials?.eyebrow,
      heading: siteContent?.testimonials?.heading,
    },
    items: siteContent?.testimonials?.items?.map?.((t) => ({
      quote: t?.quote,
      name: t?.name,
      role: t?.role,
    })) || [],
  },
  {
    id: "contact$fallback",
    slice_type: "contact",
    visible: siteContent?.contact?.visible,
    slice_label: null,
    variation: "default",
    version: "initial",
    primary: {
      eyebrow: siteContent?.contact?.eyebrow,
      heading: siteContent?.contact?.heading,
      body: siteContent?.contact?.body,
      email: siteContent?.contact?.email,
      email_cta_kind: siteContent?.contact?.emailCtaKind,
      form_cta_label: siteContent?.contact?.formCtaLabel,
      form_cta_href: siteContent?.contact?.formCtaHref,
      form_cta_kind: siteContent?.contact?.formCtaKind,
    },
    items: siteContent?.contact?.socials?.map?.((s) => ({
      label: s?.label,
      link: s?.href,
    })) || [],
  },
  {
    id: "certifications$fallback",
    slice_type: "certifications",
    visible: siteContent?.certifications?.visible,
    slice_label: null,
    variation: "default",
    version: "initial",
    primary: {
      eyebrow: siteContent?.certifications?.eyebrow,
      heading: siteContent?.certifications?.heading,
    },
    items: siteContent?.certifications?.items?.map?.((c) => ({
      title: c?.title,
      issuer: c?.issuer,
      year: c?.year,
      description: c?.description,
      link: c?.link,
    })) || [],
  },
].filter((slice) => slice.visible !== false);
