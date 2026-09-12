import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-deep px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white">
                <img src={site.logo} alt="" className="h-full w-full object-contain" />
              </span>
              <span className="text-[15px] font-medium tracking-tight text-fg">
                {site.fullName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              {site.tagline}
            </p>
          </div>

          {site.footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium text-fg">{column.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule-fade mt-12" />
        <p className="mt-6 text-[13px] text-white/35">{site.footer.legal}</p>
      </div>
    </footer>
  );
}
