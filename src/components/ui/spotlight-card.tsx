"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

interface SpotlightCardProps extends React.ComponentPropsWithoutRef<"div"> {
  /** desliga o spotlight em cards puramente decorativos */
  spotlight?: boolean;
}

/**
 * Card base do sistema: vidro + hairline + sombra multicamada.
 *
 * O spotlight escreve a posição do mouse em CSS custom properties
 * (--mx / --my) via style inline. Isso evita re-render do React a cada
 * movimento do mouse — o gradiente é atualizado só pelo CSS.
 */
export function SpotlightCard({
  spotlight = true,
  className,
  children,
  ...props
}: SpotlightCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!spotlight || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
    },
    [spotlight],
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "border border-white/[0.06]",
        "bg-gradient-to-b from-white/[0.08] to-white/[0.02]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_20px_rgba(0,0,0,0.4),0_0_40px_rgba(0,0,0,0.2)]",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-1 hover:border-white/[0.1]",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(94,106,210,0.1)]",
        className,
      )}
      {...props}
    >
      {/* fio de luz no topo do card */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.15),transparent)]" />

      {spotlight && (
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(94,106,210,0.15), transparent 70%)",
          }}
        />
      )}

      <div className="relative h-full">{children}</div>
    </div>
  );
}
