// Maps Prismic slice types to their React components.
import dynamic from "next/dynamic";

export const components = {
  hero: dynamic(() => import("./Hero")),
  about: dynamic(() => import("./About")),
  projects: dynamic(() => import("./Projects")),
  tech_stack: dynamic(() => import("./TechStack")),
  experience: dynamic(() => import("./Experience")),
  testimonials: dynamic(() => import("./Testimonials")),
  contact: dynamic(() => import("./Contact")),
  certifications: dynamic(() => import("./Certifications")),
};
