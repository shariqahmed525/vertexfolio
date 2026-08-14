/* eslint-disable @next/next/no-img-element */


import { config } from "@/config";

type TechIconProps = {
  /** Technology name as written in content, e.g. "Next.js", "React Native". */
  name: string;
  size?: number;
  className?: string;
  /** Set when there's no adjacent visible text label, so the name reaches screen readers. */
  label?: boolean;
};

/**
 * Renders the brand mark for a technology name by loading a static SVG from the public directory.
 * Icons should be downloaded from https://techicons.dev/ and placed in public/assets/tech-icons/
 * 
 * Image paths are defined in config.ts under the techIcons array.
 */
export default function TechIcon({
  name,
  size = 20,
  className,
  label = false,
}: TechIconProps) {
  // Find the technology in the config array
  const tech = config.techIcons.find(
    (t) => t.name.toLowerCase() === name.toLowerCase().trim()
  );

  // Use the image path from config, or fallback to a computed default
  const fallbackFileName = name.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  const imagePath = tech?.imagePath || `/assets/tech-icons/${fallbackFileName}.svg`;

  return (
    <div
      className={className}
      style={{ width: size, height: size, position: "relative" }}
      aria-hidden={label ? undefined : "true"}
      role={label ? "img" : undefined}
      aria-label={label ? name : undefined}
    >
      {label && <span className="sr-only">{name}</span>}
      <img
        src={imagePath}
        alt={name}
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </div>
  );
}
