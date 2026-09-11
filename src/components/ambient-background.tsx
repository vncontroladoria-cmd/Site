/**
 * Sistema de fundo em 4 camadas. Fica fixo atrás de tudo (z -10),
 * com pointer-events-none para nunca atrapalhar cliques.
 *
 * 1. gradiente radial base   -> profundidade vertical
 * 2. ruído SVG (1.5%)        -> textura, evita banding nos gradientes
 * 3. blobs desfocados        -> "poças de luz" que flutuam
 * 4. grid 64px (2%)          -> precisão técnica
 *
 * Nenhuma camada domina sozinha — é a soma que cria a atmosfera.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* 1 — base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0a0a0f_0%,#050506_50%,#020203_100%)]" />

      {/* 3 — blobs (antes do ruído para o grão cair por cima) */}
      <div className="absolute -top-[28rem] left-1/2 h-[1400px] w-[900px] -translate-x-1/2 animate-[float_9s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.22)_0%,transparent_70%)] blur-[150px]" />
      <div className="absolute top-[20%] -left-40 h-[800px] w-[600px] animate-[float_13s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.14)_0%,rgba(5,150,105,0.08)_45%,transparent_70%)] blur-[120px]" />
      <div className="absolute top-[45%] -right-32 h-[700px] w-[500px] animate-[float_11s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.10)_0%,transparent_70%)] blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-[600px] w-[700px] animate-[pulse-soft_7s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.1)_0%,transparent_70%)] blur-[130px]" />

      {/* 2 — ruído */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* 4 — grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundSize: "64px 64px",
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, #000 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, #000 20%, transparent 75%)",
        }}
      />
    </div>
  );
}
