import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Pílula de destaque: borda tingida de acento + ponto pulsante opcional. */
export function Badge({
  children,
  dot = true,
  className,
}: {
  children: ReactNode;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1 text-[13px] text-fg/80",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm",
        className,
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </span>
  );
}
