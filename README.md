# VN Landing

Landing page em Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4,
com o design system Linear/Modern.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

## Deploy na Vercel

```bash
npm i -g vercel
vercel
```

Ou: suba o repositório no GitHub e importe em vercel.com/new.
A Vercel detecta Next.js sozinha — não precisa configurar build command
nem output directory. Não há variáveis de ambiente neste projeto.

## Onde mexer

| Quero mudar… | Arquivo |
|:---|:---|
| Qualquer texto da página | `src/content/site.ts` |
| Cores, sombras, fonte, easing | `src/app/globals.css` (bloco `@theme`) |
| Ordem das seções | `src/app/page.tsx` |
| Fundo (blobs, ruído, grid) | `src/components/ambient-background.tsx` |

Nenhum componente tem texto fixo dentro: todo o conteúdo vem de `site.ts`.
Trocar de produto é editar um arquivo só.

## Estrutura

```
src/
  app/
    globals.css      tokens do design system (@theme) + base + acessibilidade
    layout.tsx       fonte Inter, metadata, fundo ambiente
    page.tsx         composição das seções
  components/
    ambient-background.tsx   4 camadas de fundo (fixo, z -10)
    ui/
      button.tsx             primary / secondary / ghost + brilho no hover
      spotlight-card.tsx     card de vidro com spotlight que segue o mouse
      badge.tsx              pílula de destaque
      reveal.tsx             entrada ao entrar na viewport
    sections/
      site-nav.tsx  hero.tsx  steps.tsx  features.tsx
      proof.tsx  pricing.tsx  faq.tsx  final-cta.tsx  site-footer.tsx
  content/site.ts    todo o texto
  lib/cn.ts          merge de classes
```

## Decisões que valem saber

- **Tokens no CSS, não em `tailwind.config`.** Tailwind v4 gera os utilitários
  a partir do bloco `@theme`. `--color-accent` vira `bg-accent`, `text-accent`,
  `border-accent` automaticamente. Fonte única de verdade, zero duplicação.
- **Spotlight sem re-render.** A posição do mouse é escrita em variáveis CSS
  (`--mx` / `--my`) direto no DOM. O React não re-renderiza a cada movimento.
- **`<details>` no FAQ.** Funciona sem JavaScript e já é acessível por teclado,
  em vez de controlar abertura com estado do React.
- **`prefers-reduced-motion` respeitado.** Parallax do hero, blobs e entradas
  caem para estado estático — a página continua inteira e legível.
- **Foco visível em tudo.** Anel de 2px na cor de acento com offset na cor do
  fundo, definido uma vez em `:focus-visible`.
