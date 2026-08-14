"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { config, siteContent } from "@/config";

const links = [
  {
    label: siteContent?.hero?.navLabel || "home",
    href: "/#top",
    visible: siteContent?.hero?.visible,
  },
  {
    label: siteContent?.about?.navLabel || "about",
    href: "/#about",
    visible: siteContent?.about?.visible,
  },
  {
    label: siteContent?.projects?.navLabel || "projects",
    href: "/#projects",
    visible: siteContent?.projects?.visible,
  },
  {
    label: siteContent?.stack?.navLabel || "stack",
    href: "/#stack",
    visible: siteContent?.stack?.visible,
  },
  {
    label: siteContent?.experience?.navLabel || "experience",
    href: "/#experience",
    visible: siteContent?.experience?.visible,
  },
  {
    label: siteContent?.certifications?.navLabel || "certifications",
    href: "/certifications",
    visible: siteContent?.certifications?.visible,
  },
  {
    label: siteContent?.contact?.navLabel || "contact",
    href: "/contact",
    visible: siteContent?.contact?.visible,
  },
].filter((link) => link.visible !== false);

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-ink/70 border-b border-brand/50">
        <nav
          className="container flex items-center justify-between py-4"
          aria-label="Primary"
        >
          <Link
            href="/#top"
            className="font-display font-extrabold text-[1.15rem] tracking-tight"
          >
            {siteContent.meta.logo.text}<span className="text-signal">{siteContent.meta.logo.highlight}</span>
          </Link>
          <ul className="hidden lg:flex gap-7 list-none items-center">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-mono text-[0.8125rem] text-mist transition-colors duration-200 hover:text-signal"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {config.resume && (
              <li>
                <a
                  title="Download Resume"
                  href={config.resume}
                  download="ShariqAhmed-Resume.pdf"
                  className="font-mono text-[0.8125rem] text-paper transition-all duration-200 hover:text-signal flex items-center gap-1.5 border border-brand px-4 py-1.5 rounded-md hover:border-signal bg-brand/10 hover:bg-brand/20 shadow-sm"
                >
                  <FiDownload size={14} /> Resume
                </a>
              </li>
            )}
          </ul>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-mist hover:text-signal transition-colors p-2 -mr-2"
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-ink/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-68 backdrop-blur-md bg-ink/70 border-l border-brand/50 z-50 flex flex-col p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/#top"
            onClick={() => setIsSidebarOpen(false)}
            className="font-display font-extrabold text-[1.15rem] tracking-tight"
          >
            {siteContent.meta.logo.text}<span className="text-signal">{siteContent.meta.logo.highlight}</span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-mist hover:text-signal transition-colors p-2 -mr-2"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-5 list-none mt-2">
          {links.map((l) => (
            <li
              key={l.href}
              className="border-b border-brand/20 pb-4 last:border-0"
            >
              <Link
                href={l.href}
                onClick={() => setIsSidebarOpen(false)}
                className="font-mono text-[1.05rem] text-paper transition-colors duration-200 hover:text-signal flex items-center justify-between w-full group"
              >
                <span>~/{l.label}</span>
                <span className="text-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:text-signal">
                  ↗
                </span>
              </Link>
            </li>
          ))}
          {config.resume && (
            <li className="pt-2">
              <a
                href={config.resume}
                download="ShariqAhmed-Resume.pdf"
                onClick={() => setIsSidebarOpen(false)}
                className="font-mono text-[1.05rem] text-paper transition-all duration-200 hover:text-signal flex items-center justify-center gap-2 w-full py-3 rounded-md border border-brand bg-brand/10 hover:bg-brand/20 hover:border-signal font-medium shadow-sm"
              >
                <FiDownload size={18} /> Resume
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
