import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shariqahmed.dev";

export const config = {
  showScrollToTop: true,
  email: "shariq.ahmed525@gmail.com",
  phone: "+92-3032139848",
  resume: getAssetPath("/pdf/ShariqAhmed-Resume.pdf"),
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shariqahmed525/",
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/shariqahmed525",
      icon: FaGithub,
    },
    {
      label: "Medium",
      href: "https://medium.com/@shariq.ahmed525",
      icon: FaMedium,
    },
  ],
  techIcons: [
    {
      name: "React",
      imagePath: getAssetPath("/assets/tech-icons/react.svg"),
    },
    {
      name: "Next.js",
      imagePath: getAssetPath("/assets/tech-icons/next.js.svg"),
    },
    {
      name: "TypeScript",
      imagePath: getAssetPath("/assets/tech-icons/typescript.svg"),
    },
    {
      name: "Angular",
      imagePath: getAssetPath("/assets/tech-icons/angular.svg"),
    },
    {
      name: "GSAP",
      imagePath: getAssetPath("/assets/tech-icons/gsap.svg"),
    },
    {
      name: "React Native",
      imagePath: getAssetPath("/assets/tech-icons/react.svg"),
    },
    {
      name: "Expo",
      imagePath: getAssetPath("/assets/tech-icons/expo.svg"),
    },
    {
      name: "Node.js",
      imagePath: getAssetPath("/assets/tech-icons/node.js.svg"),
    },
    {
      name: "Nest.js",
      imagePath: getAssetPath("/assets/tech-icons/nest.js.svg"),
    },
    {
      name: "Express.js",
      imagePath: getAssetPath("/assets/tech-icons/express.svg"),
    },
    {
      name: "REST",
      imagePath: getAssetPath("/assets/tech-icons/rest.svg"),
    },
    {
      name: "GraphQL",
      imagePath: getAssetPath("/assets/tech-icons/graphql.svg"),
    },
    {
      name: "PostgreSQL",
      imagePath: getAssetPath("/assets/tech-icons/postgressql.svg"),
    },
    {
      name: "Neon",
      imagePath: getAssetPath("/assets/tech-icons/neon.svg"),
    },
    {
      name: "Supabase",
      imagePath: getAssetPath("/assets/tech-icons/supabase.svg"),
    },
    {
      name: "Mongo DB",
      imagePath: getAssetPath("/assets/tech-icons/mongodb.svg"),
    },
    {
      name: "Prisma",
      imagePath: getAssetPath("/assets/tech-icons/prisma.svg"),
    },
    {
      name: "Redis",
      imagePath: getAssetPath("/assets/tech-icons/redis.svg"),
    },
    {
      name: "Docker",
      imagePath: getAssetPath("/assets/tech-icons/docker.svg"),
    },
    {
      name: "Vercel",
      imagePath: getAssetPath("/assets/tech-icons/vercel.svg"),
    },
    {
      name: "AWS",
      imagePath: getAssetPath("/assets/tech-icons/aws.svg"),
    },
    {
      name: "Nginx",
      imagePath: getAssetPath("/assets/tech-icons/nginx.svg"),
    },
    {
      name: "Adonis.js",
      imagePath: getAssetPath("/assets/tech-icons/adonisjs.svg"),
    },
    {
      name: "Material UI",
      imagePath: getAssetPath("/assets/tech-icons/material-ui.svg"),
    },
    {
      name: "MySQL",
      imagePath: getAssetPath("/assets/tech-icons/mysql.svg"),
    },
  ],
};


/**
 * Fallback content used when the Prismic repository is not yet connected
 * or the homepage document has not been published. Mirrors the shape the
 * slices expect, so the site runs out of the box and progressively picks
 * up CMS content once Prismic is configured.
 *
 * Edit freely — or better, publish the "homepage" document in Prismic and
 * this file stops being used.
 */


export type Project = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  year: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// const getFullUrl = (path: string) => {
//   const baseUrl =
//     typeof window !== "undefined"
//       ? (window?.location?.origin ?? SITE_URL)
//       : SITE_URL;
//   return `${baseUrl}${path}`;
// };

function getAssetPath(path: string) {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${isProd ? basePath : ""}${path}`;
};

export const siteContent = {
  meta: {
    siteName: "Shariq Ahmed — Full Stack Developer",
    title: "Shariq Ahmed | Senior Full Stack Developer & React Specialist",
    description:
      "Portfolio of Shariq Ahmed, a Senior Full Stack Developer specializing in React.js, Next.js, Nest.js, and PostgreSQL. Explore 8+ years of experience in building scalable web and mobile applications.",
    themeColor: "#06141c",
    logo: {
      text: "shariq",
      highlight: ".dev",
    },
    keywords: [
      "Shariq Ahmed",
      "Full Stack Developer",
      "React.js",
      "Next.js",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "React Native",
      "Web Developer",
      "JavaScript",
      "TypeScript",
      "API Development",
    ],
    creator: "Shariq Ahmed",
    author: "Shariq Ahmed",
  },
  hero: {
    navLabel: "~/home",
    visible: true,
    eyebrow: "~/shariq-ahmed",
    heading: "Full stack developer building fast, scalable products.",
    subheading:
      "8+ years shipping web and mobile applications with React, Next.js, Node.js, Nest.js and Supabase — from database schema to the last pixel.",
    primaryCta: { label: "View work", href: "#projects" },
    secondaryCta: { label: "Get in touch", href: "/contact" },
  },
  about: {
    navLabel: "~/about",
    visible: true,
    eyebrow: "~/about",
    heading: "From schema to screen.",
    image: getAssetPath("/assets/images/profile.png"),
    imageAlt: "Professional portrait of Shariq Ahmed, a Senior Full Stack Developer with 8+ years of experience specializing in React, Next.js, Node.js, and scalable web architectures.",
    body: [
      "I am a Senior Full Stack Developer dedicated to architecting and building robust digital products from the ground up. My approach bridges the gap between intricate backend data models and seamless frontend user experiences.",
      "I specialize in designing resilient architectures and high-performance APIs using Node.js, PostgreSQL, and Supabase. On the client side, I leverage the power of the React ecosystem including Next.js and React Native to create dynamic, highly interactive, and accessible interfaces.",
      "Over the past 8+ years, I have successfully delivered SaaS platforms, mobile applications, and enterprise solutions for teams across the globe, bringing a strong bias for clean architecture, measurable performance, and shipping tangible business value."
    ],
    stats: [
      { value: "8+", label: "Years of experience" },
      { value: "30+", label: "Projects shipped" },
      { value: "Full stack", label: "Database to pixel" },
    ],
  },
  projects: {
    navLabel: "~/projects",
    visible: true,
    eyebrow: "~/projects",
    heading: "Selected work",
    items: [
      {
        title: "Lineage CRM",
        description:
          "Lineage CRM is a simple and powerful tool for senior market insurance agents. I developed the mobile application using Expo, seamlessly adding the website's features to the app and ensuring a smooth user experience by optimizing functionality for mobile users.",
        stack: ["Next.js", "React Native", "Expo", "Supabase", "Prisma"],
        href: "https://www.lineagecrm.com/",
        year: "2023 — 2024",
      },
      {
        title: "Bioinsights",
        description:
          "Bioinsights is a complete platform to help users start and scale functional medicine effortlessly. I developed APIs and middleware with Adonis.js and PostgreSQL, improving speed by 30% and reducing errors by 15%. I also designed the front-end with Next.js and Material UI, and ensured smooth deployments using Docker.",
        stack: ["Next.js", "Adonis.js", "PostgreSQL", "Material UI", "Docker"],
        href: "https://bioinsights.com/",
        year: "2024",
      },
      {
        title: "Relay Automotive",
        description:
          "Relay Automotive is a unique software built for retail auto experts. I developed and managed the backend with Node.js, Express.js, and MySQL. I also built a responsive website using React.js with Vite and a mobile app using React Native CLI, integrating Persona for identity verification and CometChat for cross-platform messaging.",
        stack: ["React", "React Native", "Node.js", "Express.js", "MySQL", "AWS"],
        href: "https://relayautomotive.com/",
        year: "2023 — 2024",
      },
      {
        title: "iAgility",
        description:
          "iAgility is an online consulting platform that helps businesses adapt to the future of work. With the best talent moving to independent work, iAgility connects businesses and consultants to stay ahead, offering a platform that supports growth and innovation.",
        stack: ["Angular"],
        href: "https://iagility.com/",
        year: "2024",
      },
      {
        title: "Floey",
        description:
          "Floey is an app that simplifies finding and booking gyms in Kuwait. Users can easily search for gyms, compare prices, view class schedules, and book classes in one place. Floey also allows users to manage memberships, purchase packages, and make quick payments. It's the easiest way to start and maintain your fitness journey.",
        stack: ["React Native"],
        href: "https://apps.apple.com/us/app/floey/id1665622409",
        year: "2022",
      },
      {
        title: "Safety Squirrel",
        description:
          "Safety Squirrel Co. is a mobile-first health and safety operations platform for frontline teams in construction, facilities, logistics and manufacturing. It streamlines inspections, training and compliance reporting, with AI-assisted generation of safety documents like JSAs and Lockout/Tagout plans.",
        stack: ["React Native"],
        href: "https://apps.apple.com/us/app/safety-squirrel-co/id6751820641",
        year: "2026",
      },
    ] satisfies Project[],
  },
  stack: {
    navLabel: "~/stack",
    visible: true,
    eyebrow: "~/stack",
    heading: "Tools I ship with",
    groups: [
      {
        name: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Angular", "GSAP"],
      },
      { name: "Mobile", items: ["React Native", "Expo"] },
      { name: "Backend", items: ["Node.js", "Nest.js", "Express.js", "Adonis.js", "GraphQL"] },
      {
        name: "Data & Infra",
        items: [
          "PostgreSQL",
          "Neon",
          "Supabase",
          "Mongo DB",
          "Prisma",
          "Redis",
          "Docker",
          "Vercel",
          "AWS",
          "Nginx",
        ],
      },
    ],
  },
  experience: {
    navLabel: "~/experience",
    visible: true,
    eyebrow: "~/experience",
    heading: "Where I've worked",
    items: [
      {
        role: "Frontend Engineer",
        company: "Creative Softwares",
        period: "Sep 2025 — Present",
        summary:
          "Working as a Frontend Engineer on multiple enterprise-level products using Next.js, Syncfusion, and Bold Reporting.",
      },
      {
        role: "Freelance",
        company: "Upwork, Fiverr, Independent",
        period: "Dec 2024 — Aug 2025",
        summary:
          "Worked on multiple projects based on AI, including mobile and web apps, and personal side projects. Focused on advanced learning towards AI.",
      },
      {
        role: "Backend Engineer → Full Stack Developer",
        company: "Bio Insights",
        period: "May 2024 — Nov 2024",
        summary:
          "Developed APIs and middleware with Adonis.js and PostgreSQL, improving speed by 30% and reducing errors by 15% through automation. Designed front-end with Next.js and Material UI, managed back-end systems, and ensured smooth deployments using Docker.",
      },
      {
        role: "Frontend Developer",
        company: "Lineage CRM",
        period: "Mar 2023 — May 2024",
        summary:
          "Developed a mobile application using Expo, adding the website's features to the app. Ensured a seamless user experience by replicating and optimizing the website's functionality for mobile users.",
      },
      {
        role: "Full Stack Developer",
        company: "Relay Automotive",
        period: "Jul 2023 — Feb 2024",
        summary:
          "Developed and managed the backend with Node.js, Express.js, and MySQL. Built a responsive website using React.js with Vite and a mobile app using React Native CLI. Integrated Persona for identity verification and CometChat for messaging. Refactored codebase for better scalability.",
      },
      {
        role: "Senior Software Developer",
        company: "DiriDeal",
        period: "Jul 2021 — May 2023",
        summary:
          "Led backend development using Nest.js with MongoDB on AWS. Built a multilingual mobile app (English, French, Arabic) using React Native CLI and React Native Paper. Provided technical leadership and guided teams to ensure all components worked harmoniously together.",
      },
      {
        role: "Full Stack Developer",
        company: "Moertsch",
        period: "Dec 2020 — Apr 2021",
        summary:
          "Developed a mobile app using React Native CLI and Firebase for authentication, storage, cloud functions, and database management. Focused on map and calendar features for the event management app. Created an admin panel with React.js.",
      },
      {
        role: "Frontend Developer",
        company: "Plai",
        period: "Mar 2019 — Nov 2019",
        summary:
          "Developed a mobile app using React Native CLI and Firebase for authentication, storage, notifications, database, Crashlytics, dynamic links, and in-app messaging. Integrated third-party APIs and backend APIs to enhance app functionality.",
      },
      {
        role: "Freelancing",
        company: "Upwork, Fiverr, Freelancer",
        period: "On and off since 2018",
        summary:
          "Freelance specializing in mobile app development with React Native and Expo, as well as full-stack development. Developed websites using Next.js and Vite, providing backend solutions, API integration, and custom services for clients.",
      },
    ] satisfies Experience[],
  },
  testimonials: {
    visible: true,
    eyebrow: "~/testimonials",
    heading: "What clients say",
    items: [
      {
        quote:
          "I enjoyed working with Shariq and was thoroughly pleased with his work. I wouldn't hesitate to recommend him to anyone seeking a skilled React and Next.js developer. Shariq consistently met deadlines, communicated effectively, and adeptly solved any challenges.",
        name: "Francisco Gomez",
        role: "LinkedIn",
      },
      {
        quote:
          "Shariq was great to work with and very fast. The project was restructured by our management and I had to end the contract early before seeing much work, but I would happily hire again.",
        name: "Sudipta Swarnaker",
        role: "Upwork",
      },
      {
        quote:
          "Shariq did a great job building my mobile app and solving complex use-cases with Twilio and Google Cloud. He's a talented mobile app developer with a great specialty on Apple IOS. Thank you Shariq!",
        name: "Atif",
        role: "Upwork",
      },
      {
        quote:
          "Quality price guaranteed! Shariq used for this project: Functional Components, async/await pattern, try/catch pattern, connection to MongoDB database, Stripe Integration. He delivered in record time and he asked when he had road-block. Definitely hiring him again for the next bit!",
        name: "Alberto Cubeddu",
        role: "Fiverr",
      },
      {
        quote:
          "Awesome Work. Delivery was fast and indeed, he is a react native beast! Will work with him in the future even more close and highly recommend him to anyone who wants do get his project done fast and efficient along with good communication through the whole process.",
        name: "Jan Kasper",
        role: "Fiverr",
      },
      {
        quote:
          "Amazing work. A true professional service. I really enjoyed working with Shariq as a professional and a person. Always available to discuss and share his experience.\n\nI really liked working with him and will continue for the future.\n\nI worked with a lot of developers and service providers, now I have found someone to work with for a long time.\n\nI recommend to anyone who is looking to build a solid app.\n\nThank you very much Shariq for your time and your much appreciated expertise and attention to details.",
        name: "Salim Ammara",
        role: "Fiverr",
      },
    ] satisfies Testimonial[],
  },
  contact: {
    navLabel: "~/contact",
    visible: true,
    meta: {
      title: "Contact | Shariq Ahmed - Full Stack Developer",
      description: "Get in touch with Shariq Ahmed for full-time roles, contracts, and interesting collaborations.",
    },
    eyebrow: "~/contact",
    heading: "Let's build something.",
    body: "Open to full-time roles, contracts and interesting collaborations.",
    email: config.email,
    emailCtaKind: "primary",
    formCtaLabel: "Open Contact Form",
    formCtaHref: "/contact",
    formCtaKind: "secondary",
    socials: config.socials,
  },
  footer: {
    copyrightName: "Shariq Ahmed",
    techList: "Built with Next.js · Three.js · GSAP · Prismic",
    templateName: "VertexFolio", // Unique name combining 'Vertex' (Three.js) and 'Folio'
    creatorName: "Shariq Ahmed",
    creatorLink: "https://shariqahmed.dev", // Or your github profile/LinkedIn
  },
  certifications: {
    navLabel: "~/certifications",
    visible: true,
    meta: {
      title: "Certifications & Credentials | Shariq Ahmed - Full Stack Developer",
      description: "View the professional certifications and technical credentials of Shariq Ahmed, including achievements in React, Nest.js, AWS DevOps, and Mobile Application Development.",
    },
    eyebrow: "~/certifications",
    heading: "Certifications",
    items: [
      {
        title: "Bachelors",
        issuer: "FUUAST",
        year: "Oct 2024 - Present",
        description: "Bachelors in Computer Science (BSCS)",
        link: "",
      },
      // {
      //   title: "JavaScript Foundations Professional Certificate by Mozilla",
      //   issuer: "Mozilla & LinkedIn Learning",
      //   year: "Aug 2026",
      //   description: "A comprehensive certification program demonstrating strong foundational knowledge in JavaScript. It covers essential web development concepts including ES6+ syntax, asynchronous programming, DOM manipulation, and modern web application best practices.",
      //   link: "https://www.linkedin.com/learning/certificates/16f1b068fad63e990eb1713e82af1dd28b0ce36362fcd6d648eb93a920ae6531?trk=share_certificate",
      // },
      // {
      //   title: "Docker Foundations Professional Certificate",
      //   issuer: "Docker & LinkedIn Learning",
      //   year: "2026",
      //   description: "A comprehensive certification officially recommended by the Docker community. It covers core containerization concepts, building and managing Docker images, orchestrating multi-container applications with Docker Compose, and deploying scalable environments to streamline modern development workflows.",
      //   link: "https://www.linkedin.com/learning/certificates/199d1ed823e36e139dcb383ce8d70034aace0b67664c8785cd24f11dd81cef37",
      // },
      {
        title: "NestJS Fundamentals",
        issuer: "NestJS",
        year: "Apr 2026",
        description: "The official NestJS Fundamentals course provides a comprehensive overview of building scalable, enterprise-grade backend applications. It covers core architectural concepts, dependency injection, routing, and database integration using TypeScript.",
        link: getAssetPath("/assets/certificates/NestJS-Fundamental.jpeg"),
      },
      {
        title: "Meta React Native",
        issuer: "Meta",
        year: "Dec 2025",
        description: "This Meta professional certificate focuses on developing cross-platform mobile applications using React Native. The curriculum includes advanced state management, UI/UX design principles, and publishing mobile apps using Expo.",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/D229E0WYOH7K",
      },
      {
        title: "Meta Front-End Developer Specialization",
        issuer: "Meta",
        year: "Dec 2025",
        description: "A comprehensive program by Meta teaching advanced front-end development. It covers building dynamic user interfaces with React.js, mastering modern JavaScript/TypeScript, and implementing responsive, accessible web designs.",
        link: "https://www.credly.com/badges/95a5f324-5536-4d0d-9f2a-ca9494c1bba9/print",
      },
      {
        title: "DevOps on AWS",
        issuer: "COURSERA",
        year: "Aug 2024 - Oct 2024",
        description: "DevOps on AWS specialization teaches me how to use the combination of DevOps philosophies, practices and tools to develop, deploy, and maintain applications in the AWS Cloud. Benefits of adopting DevOps include: rapid delivery, reliability, scalability, security and improved collaboration.",
        link: getAssetPath("/assets/certificates/DevOps-on-AWS%20Specialization-Coursera-P4H18ETM02V8.jpeg"),
      },
      {
        title: "React Nano Degree",
        issuer: "UDACITY",
        year: "Jun 2020 - Jul 2020",
        description: "Udacity's React Nanodegree program teaches how to build web and mobile apps using React, Redux, and React Native. It provides hands-on projects to help learners gain real-world experience. The course is ideal for those with JavaScript knowledge looking to master React development.",
        link: "https://www.udacity.com/certificate/e/b1ed6154-a654-11ea-a3e3-3bba7d933dd0",
      },
      {
        title: "Certified Web & Mobile Application Developer",
        issuer: "SMIT",
        year: "Jan 2018 - Feb 2019",
        description: "The Certified Web & Mobile Application Developer program at Saylani Mass IT Training covers essential technologies for modern app development. It React, React Native, Node.js, Express.js, MongoDB, and Expo. This training equips learners with the skills to build dynamic web and mobile applications.",
        link: getAssetPath("/assets/certificates/saylani-web-and-mobile-app-development.png"),
      },
      {
        title: "Progressive Web App Developer",
        issuer: "SMIT",
        year: "Jul 2018",
        description: "The Progressive Web App (PWA) Program at Saylani Mass IT Training teaches the skills needed to build fast and reliable web applications. It covers HTML, CSS, JavaScript, ECMAScript, Firebase, and PWA technologies. This training helps learners create web apps that work offline, load quickly, and provide a smooth user experience.",
        link: getAssetPath("/assets/certificates/progressive-web-app-development.png"),
      },
      {
        title: "ACCP PRO",
        issuer: "APTECH",
        year: "Feb 2016 - Feb 2019",
        description: "ACCP PRO (Aptech Certified Computer Program Professional) is a complete career-oriented program to prepare students for todays I.T. Industry. The course gives a strong foundation to students on various concepts related to software development and global technology insights.",
        link: getAssetPath("/assets/certificates/accp-pro-certificate.png"),
      },
    ],
  },
};

export type SiteContent = typeof siteContent;
