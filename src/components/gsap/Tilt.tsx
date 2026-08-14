"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
  /** Max rotation in degrees. */
  max?: number;
};

/**
 * Pointer-tracked 3D card tilt: the element rotates toward the cursor,
 * lifts on the z-axis, and a glare highlight follows the pointer.
 * Children live in a preserve-3d space, so they can pop with translateZ.
 * Mouse-only — for touch and reduced-motion users this renders as a
 * plain wrapper and the content stays fully static.
 */
export default function Tilt({
  children,
  className = "",
  as: Tag = "div",
  max = 8,
}: TiltProps) {
  const ref = useRef<HTMLElement>(null);
  const glareRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      const glare = glareRef.current;
      if (!el || !glare) return;
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !window.matchMedia("(pointer: fine)").matches
      )
        return;

      // Writing the perspective inline up front also hands GSAP ownership
      // of `transform`, so the .card hover translate can't fight the tilt.
      gsap.set(el, { transformPerspective: 850, rotationX: 0.01, rotationY: 0.01 });

      const rotX = gsap.quickTo(el, "rotationX", { duration: 0.55, ease: "power3.out" });
      const rotY = gsap.quickTo(el, "rotationY", { duration: 0.55, ease: "power3.out" });
      const liftZ = gsap.quickTo(el, "z", { duration: 0.55, ease: "power3.out" });
      const glareIn = gsap.quickTo(glare, "opacity", { duration: 0.4, ease: "power2.out" });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        rotX(py * -2 * max);
        rotY(px * 2 * max);
        el.style.setProperty("--glare-x", `${(px + 0.5) * 100}%`);
        el.style.setProperty("--glare-y", `${(py + 0.5) * 100}%`);
      };

      const onEnter = () => {
        liftZ(22);
        glareIn(1);
      };

      const onLeave = () => {
        rotX(0);
        rotY(0);
        liftZ(0);
        glareIn(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: ref }
  );

  return (
    <Tag
      // @ts-expect-error dynamic tag
      ref={ref}
      className={`relative [transform-style:preserve-3d] will-change-transform ${className}`}
    >
      {children}
      <span
        ref={glareRef}
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 z-[2]"
        style={{
          background: `radial-gradient(
            420px circle at var(--glare-x, 50%) var(--glare-y, 50%),
            rgba(236, 244, 246, 0.13),
            rgba(236, 244, 246, 0.04) 40%,
            transparent 65%
          )`,
        }}
        aria-hidden="true"
      />
    </Tag>
  );
}
