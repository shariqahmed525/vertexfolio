"use client";

import { useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-99 flex h-10 w-10 items-center justify-center rounded-md bg-deep border border-brand text-signal shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-signal hover:text-white hover:-translate-y-1 focus:outline-none focus:ring-offset-2 focus:ring-offset-deep ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <BsChevronUp size={24} />
    </button>
  );
}
