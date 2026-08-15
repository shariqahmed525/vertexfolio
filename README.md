# Vertex Folio ⚡️ [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 👋 Welcome! A sleek, beautiful portfolio template featuring smooth minimal animations and an interactive 3D background to help your work stand out. 🚀

<p align="center">
  <kbd>
    <img src="public/assets/demo.gif" alt="Vertex Folio Demo" width="800" />
  </kbd>
</p>

Just configure `src/config.ts` to get your personal portfolio up and running. Vertex Folio is an SEO-first portfolio landing page built with **Next.js (App Router)**, **Three.js** (via React Three Fiber), **GSAP + ScrollTrigger**, **Lenis** smooth scrolling and **Prismic** as the headless CMS. Feel free to use it as-is or personalize it as much as you want.

## Table of Contents

- [Portfolio Sections](#portfolio-sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Configuration & Customization](#configuration--customization)
- [Managing Tech Icons](#managing-tech-icons)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Portfolio Sections

✔️ 3D Interactive Hero Canvas\
✔️ About Me & Statistics\
✔️ Skills & Tech Stack\
✔️ Work Experience\
✔️ Projects Showcase\
✔️ Testimonials\
✔️ Certifications & Credentials 🏆\
✔️ Contact Form

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

## How To Use

From your command line, clone and run Vertex Folio:

```bash
# Clone this repository (or your fork)
git clone https://github.com/your-username/vertex-folio.git

# Go into the repository
cd vertex-folio

# Install dependencies
npm install

# Setup default environment variables
cp .env.example .env

# Start a local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The site renders immediately with the built-in local content—**you do not need a CMS connected to preview it**.

## Configuration & Customization

All local content for every section of the portfolio is managed centrally in **`src/config.ts`**. This is extremely useful if you are using the template without a CMS, or as a fallback before connecting Prismic.

### 1. `config` (Site-wide Settings & Icons)

Here you configure your global information:

- **`email` and `phone`**: Your primary contact details.
- **`resume`**: Link to your resume. First, place your PDF file in the `public/pdf/` directory.
- **`socials`**: Your social media profiles mapped to React Icons.
- **`techIcons`**: Map your tech stack names to their SVG files.

### 2. `siteContent` (Section Content)

This object manages all textual content, images, and section visibility across your portfolio.

#### Global Meta & Branding (`meta`)

Controls your global SEO and site branding. Note that **Contact** and **Certifications** pages have their own nested `meta` objects for page-specific SEO.

| Property                      | Description                                                                               |
| :---------------------------- | :---------------------------------------------------------------------------------------- |
| **`logo`**                    | Text-based logo displayed in the header. Example: `{ text: "shariq", highlight: ".dev" }` |
| **`title`**                   | The global `<title>` for your site.                                                       |
| **`description`**             | SEO and Open Graph description.                                                           |
| **`keywords`** / **`author`** | Used in meta tags and JSON-LD schema for search engines.                                  |
| **`themeColor`**              | Browser tab color on mobile devices.                                                      |

#### Common Section Properties

Almost every section (e.g., `hero`, `about`) shares these generalized configuration properties:

| Property       | Example      | Description                                                     |
| :------------- | :----------- | :-------------------------------------------------------------- |
| **`visible`**  | `true`       | Set to `false` to completely hide the section from the website. |
| **`navLabel`** | `"~/about"`  | The text that appears in the navigation menu.                   |
| **`eyebrow`**  | `"~/about"`  | The small, mono-spaced text just above the main heading.        |
| **`heading`**  | `"About Me"` | The main `<h2>` title of the section.                           |

#### Section-Specific Content

Below the common properties, each section requires its own unique data.

| Section            | Key              | What to update                                                                                   |
| :----------------- | :--------------- | :----------------------------------------------------------------------------------------------- |
| **Hero**           | `hero`           | Main headline, subheading, and Call-to-Action buttons.                                           |
| **About**          | `about`          | Profile image, bio paragraphs, and statistics.                                                   |
| **Projects**       | `projects`       | Portfolio pieces, descriptions, tech stack arrays, and links.                                    |
| **Stack**          | `stack`          | Technologies organized into groups (Frontend, Backend, etc.).                                    |
| **Experience**     | `experience`     | Work history, companies, and roles.                                                              |
| **Testimonials**   | `testimonials`   | Quotes from clients or colleagues.                                                               |
| **Certifications** | `certifications` | Degrees and certificates with image links. _(Note: Opens on a separate `/certifications` page)._ |
| **Contact**        | `contact`        | Customize the contact form text.                                                                 |

_Note: If you eventually connect Prismic CMS, its data will automatically override this local content!_

## Managing Tech Icons

The portfolio displays tech stack icons across various sections (like Projects and Tech Stack). To keep performance high and images crisp, we use local SVG files.

1. **Download the SVG icon:** We recommend downloading high-quality SVGs from [techicons.dev](https://techicons.dev) or [vectorlogo.zone](https://www.vectorlogo.zone).
2. **Place it in the public folder:** Save the downloaded `.svg` file into the `public/assets/tech-icons/` directory.
3. **Link it in `config.ts`:** Add a new entry to the `techIcons` array.

**Pro Tip (Auto-mapping):**
If you name your SVG file correctly, you don't even need to add it to the `techIcons` array! The `<TechIcon />` component will automatically try to find an SVG by removing spaces and special characters from the name and converting it to lowercase.

- **Example 1 (React):** If you list `"React"`, the component will look for `react.svg`.
- **Example 2 (React Native):** If you list `"React Native"`, it will look for `reactnative.svg`.

## Deployment

Vertex Folio is built with Next.js (App Router) and can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Deploying to Vercel (Recommended)

The easiest way to deploy a Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Add your environment variables (like your Prismic endpoint, if configured).
4. Vercel will automatically build and deploy your site.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

### Deploying to GitHub Pages

Since Next.js requires a specific setup for GitHub Pages, you must use GitHub Actions to build and export your site as static HTML.

1. In `next.config.mjs` (or `.ts`), add `output: 'export'`.
2. **Note:** If you are using the Next.js `<Image />` component, you also need to set `images: { unoptimized: true }` in your config.
3. Navigate to your repository settings on GitHub, go to **Pages**, and select **GitHub Actions** as the source.
4. A pre-configured workflow file is already included in this project at `.github/workflows/nextjs.yml`. You do not need to create one manually.
5. Push your changes, and GitHub Actions will automatically build and deploy your portfolio.

## Technologies Used

- [Next.js (App Router)](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [GSAP](https://gsap.com/) & ScrollTrigger
- [Lenis](https://lenis.darkroom.engineering/) (Smooth Scrolling)
- [Prismic CMS](https://prismic.io/)

## Contributing

If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/shariqahmed525/vertexfolio/pulls).

- Connect with LinkedIn to get Summary, Skills, Blogs and Talks
- Add More Sections
