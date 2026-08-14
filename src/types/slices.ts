export type AboutSlice = {
  primary: {
    eyebrow: string;
    heading: string;
    body?: string[] | unknown;
    image?:
      string | { url?: string; alt?: string; [key: string]: unknown } | null;
    image_alt?: string;
    [key: string]: unknown;
  };
  items: { value: string; label: string }[];
};

export type CertificationsSlice = {
  primary: { eyebrow: string; heading: string };
  items: {
    year: string;
    link?: string;
    title: string;
    issuer: string;
    description?: string;
  }[];
};

export type ContactSlice = {
  primary: {
    body: string;
    email: string;
    eyebrow: string;
    heading: string;
    form_cta_href?: string;
    form_cta_label?: string;
    form_cta_kind?: "primary" | "secondary";
    email_cta_kind?: "primary" | "secondary";
  };
  items: { label: string; link: string }[];
};

export type ExperienceSlice = {
  primary: { eyebrow: string; heading: string };
  items: { role: string; company: string; period: string; summary: string }[];
};

export type HeroSlice = {
  primary: {
    eyebrow: string;
    heading: string;
    subheading: string;
    primary_cta_link: string;
    primary_cta_label: string;
    secondary_cta_link: string;
    secondary_cta_label: string;
  };
};

export type ProjectsSlice = {
  primary: { eyebrow: string; heading: string };
  items: {
    title: string;
    description: string;
    stack: string;
    link: string;
    year: string;
  }[];
};

export type TechStackSlice = {
  primary: { eyebrow: string; heading: string };
  items: { group: string; tools: string }[];
};

export type TestimonialsSlice = {
  primary: { eyebrow: string; heading: string };
  items: { quote: string; name: string; role: string }[];
};
