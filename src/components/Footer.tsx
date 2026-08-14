import { siteContent } from "@/config";

export default function Footer() {
  const f = siteContent?.footer;

  return (
    <footer className="container flex flex-col md:flex-row items-center justify-between gap-6 pt-10 pb-12 border-t border-brand text-center md:text-left">
      <div className="flex flex-col gap-1.5 items-center md:items-start">
        {f?.copyrightName && (
          <p className="mono">© {new Date().getFullYear()} {f.copyrightName}</p>
        )}
        {f?.creatorName && (
          <p className="mono text-[0.8rem] text-mist/70">
            {f?.templateName ? `${f.templateName} template by ` : "Template by "}
            {f?.creatorLink ? (
              <a href={f.creatorLink} target="_blank" rel="noopener noreferrer" className="hover:text-signal transition-colors underline decoration-mist/30 underline-offset-4">
                {f.creatorName}
              </a>
            ) : (
              f.creatorName
            )}
          </p>
        )}
      </div>
      {f?.techList && (
        <p className="mono text-[0.85rem] text-mist">{f.techList}</p>
      )}
    </footer>
  );
}
