import { siteContent } from "@/config";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex min-h-svh items-center justify-center bg-ink overflow-hidden">
      {/* Huge subtle rotating geometric background (fits the 'Vertex' theme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] max-w-250 max-h-250 opacity-[0.03] text-paper pointer-events-none animate-[spin_60s_linear_infinite]">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="49"
            stroke="currentColor"
            strokeWidth="0.25"
            strokeDasharray="2 4"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="0.25"
          />
          <polygon
            points="50,10 90,75 10,75"
            stroke="currentColor"
            strokeWidth="0.25"
          />
          <polygon
            points="50,90 10,25 90,25"
            stroke="currentColor"
            strokeWidth="0.25"
          />
        </svg>
      </div>

      <div className="flex flex-col items-center gap-12 relative z-10">
        {/* Sleek Logo with Glow */}
        <div className="relative font-display font-black text-5xl md:text-6xl tracking-tighter text-paper">
          <span className="relative z-10">
            {siteContent.meta.logo.text}
            <span className="text-signal">
              {siteContent.meta.logo.highlight}
            </span>
          </span>
          {/* Animated Glow effect behind the logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-signal/20 blur-[50px] rounded-full animate-pulse"></div>
        </div>

        {/* Premium Loading Bar & Text */}
        <div className="flex flex-col items-center gap-5 w-64 md:w-80">
          {/* Scanning Line */}
          <div className="relative h-0.5 w-full bg-brand/10 overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 h-full w-[40%] bg-linear-to-r from-transparent via-signal to-transparent"
              style={{ animation: "loading-swipe 1.5s ease-in-out infinite" }}
            />
          </div>

          {/* Typographic Status */}
          <div className="flex items-center gap-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-mist/60">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse"></span>
              Initializing
            </span>
            <span className="animate-[pulse_1s_ease-in-out_infinite]">...</span>
          </div>
        </div>
      </div>

      {/* Inject custom keyframe for the scanning bar */}
      <style>{`
        @keyframes loading-swipe {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
