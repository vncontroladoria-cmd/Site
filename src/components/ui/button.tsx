import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  // Sólido + glow de acento + brilho interno no topo.
  // Sem o glow o botão fica "incompleto" nesta linguagem visual.
  primary: cn(
    "bg-accent text-white",
    "shadow-[0_0_0_1px_rgba(34,197,94,0.5),0_4px_12px_rgba(34,197,94,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)]",
    "hover:bg-accent-bright",
    "hover:shadow-[0_0_0_1px_rgba(34,197,94,0.6),0_6px_24px_rgba(34,197,94,0.45),inset_0_1px_0_0_rgba(255,255,255,0.25)]",
  ),
  // Vidro: sem borda real, só a hairline por inset shadow.
  secondary: cn(
    "bg-white/[0.05] text-fg",
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.06)]",
    "hover:bg-white/[0.08]",
    "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_0_0_1px_rgba(255,255,255,0.1),0_0_24px_rgba(255,255,255,0.04)]",
  ),
  ghost: "bg-transparent text-fg-muted hover:bg-white/[0.05] hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
};

interface ButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  size?: Size;
}

/**
 * CTA renderizado como <a> porque nesta landing todo botão navega.
 * O efeito de brilho varrendo é um ::before controlado por group-hover.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-lg font-medium",
        "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {/* brilho que varre da esquerda para a direita no hover */}
      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.18),transparent)] transition-transform duration-500 ease-out group-hover:translate-x-full" />
      <span className="relative flex items-center gap-2">{children}</span>
    </a>
  );
}
