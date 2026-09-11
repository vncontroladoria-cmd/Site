/**
 * TODO O TEXTO DA LANDING PAGE MORA AQUI.
 * Conteúdo real da VN — Visão do Negócio.
 */

export const site = {
  name: "Visão do Negócio",
  fullName: "VN — Visão do Negócio",
  tagline: "Controladoria financeira para salões, barbearias e clínicas",
  whatsapp: "(13) 98110-1850",

  nav: [
    { label: "A Empresa", href: "#empresa" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "eBooks", href: "#ebooks" },
    { label: "Dúvidas", href: "#duvidas" },
  ],

  hero: {
    badge: "Atendendo salões, barbearias, clínicas e empresas em todo o Brasil",
    headline: "O financeiro que falta para o seu negócio prosperar.",
    highlight: "prosperar",
    subhead:
      "Controladoria financeira especializada em salões de beleza, barbearias, clínicas estéticas e empresas que querem crescer com método. Trazemos a visão que falta para você parar de trabalhar no escuro — e começar a decidir com clareza, lucro e tranquilidade.",
    primaryCta: "Fazer diagnóstico gratuito",
    secondaryCta: "Falar com especialista",
    note: "+8 anos transformando o financeiro de empresários da beleza",
  },

  /** Painel de exemplo no hero. Números ilustrativos — troque pelos reais se preferir. */
  panel: {
    title: "Fechamento · Março",
    rows: [
      { label: "Faturamento bruto", value: "R$ 148.320", tone: "neutral" },
      { label: "Comissões da equipe", value: "− R$ 52.910", tone: "down" },
      { label: "Taxas de cartão", value: "− R$ 4.176", tone: "down" },
      { label: "Custos fixos", value: "− R$ 31.400", tone: "down" },
      { label: "Lucro do mês", value: "R$ 59.834", tone: "up" },
    ],
    footnote: "Margem de 40,3% — 6,1 p.p. acima de fevereiro",
  },

  /** ATENÇÃO: esta seção eu escrevi. Não existia no seu site — ajuste se não bater. */
  steps: {
    title: "Como a VN entra no seu negócio",
    subtitle:
      "Não entregamos relatório e sumimos. Acompanhamento próximo pra você entender, aplicar e crescer.",
    items: [
      {
        title: "Diagnóstico",
        body: "Olhamos os números reais do seu negócio e mostramos onde o lucro está vazando. Gratuito e sem compromisso.",
      },
      {
        title: "Estruturação",
        body: "Aplicamos os métodos CDB e DCAE: plano de contas, separação PJ + PF, comissões e indicadores no seu modelo.",
      },
      {
        title: "Acompanhamento",
        body: "DRE, fluxo de caixa e metas revisados com você todo mês — decisão com base em dados, não em achismo.",
      },
    ],
  },

  features: {
    title: "A controladoria criada para quem vive do faturamento diário",
    subtitle:
      "A maioria dos donos de salões, barbearias e clínicas não trata o financeiro com a seriedade que ele merece — e por isso fecha as portas sem entender o motivo.",
    items: [
      {
        icon: "ChartSpline",
        title: "Controladoria completa",
        body: "DRE, fluxo de caixa, indicadores e tomada de decisão baseada em dados — não em achismo.",
        span: "hero",
      },
      {
        icon: "Compass",
        title: "Mentoria estratégica",
        body: "Acompanhamento próximo pra você entender, aplicar e crescer — não só receber relatório.",
        span: "wide",
      },
      {
        icon: "Target",
        title: "Suporte comercial",
        body: "Metas, comissões e performance da equipe. Financeiro que conversa com o comercial.",
        span: "normal",
      },
      {
        icon: "Wallet",
        title: "Organização PJ + PF",
        body: "Separamos o que é seu do que é da empresa — e organizamos a vida financeira do empresário também.",
        span: "normal",
      },
      {
        icon: "BookOpen",
        title: "Método CDB",
        body: "Curso completo para organizar a vida financeira pessoal do empresário e construir patrimônio com método.",
        span: "wide",
      },
      {
        icon: "Layers",
        title: "Método DCAE",
        body: "Nosso método interno de controle empresarial: diagnóstico, análise, controle e expansão.",
        span: "normal",
      },
    ],
  },

  proof: {
    quote: "Salão lotado não é salão lucrativo. Visão muda tudo.",
    author: "Nicollas Bueno & Carol Calixto",
    role: "Fundadores · VN — Visão do Negócio",
    stats: [
      { value: "+8", label: "anos no mercado financeiro" },
      { value: "Brasil", label: "atendimento em todo o território nacional" },
      { value: "2", label: "métodos próprios: CDB e DCAE" },
      { value: "4", label: "eBooks publicados na área de gestão" },
    ],
  },

  ebooks: {
    title: "Coleção Diagnóstico do Salão",
    subtitle:
      "4 volumes para identificar, entender e transformar os problemas reais que travam o seu negócio — escritos por quem vive os bastidores do salão todos os dias.",
    price: "R$ 29,90",
    priceNote: "por volume · acesso imediato · plataforma Kiwify",
    cta: "Quero este volume",
    volumes: [
      {
        number: "01",
        title: "O Profissional que Trava o Salão",
        body: "25 sintomas individuais que sabotam o seu negócio — e como resolver cada um.",
      },
      {
        number: "02",
        title: "Quando a Equipe Trava o Salão",
        body: "21 sintomas coletivos que paralisam o negócio — e como criar uma equipe saudável de verdade.",
      },
      {
        number: "03",
        title: "O Dono é o Espelho do Salão",
        body: "21 sintomas de liderança que estão sabotando o seu próprio negócio. A verdade que ninguém te conta.",
      },
      {
        number: "04",
        title: "Salão Cheio, Caixa Vazio",
        body: "22 sintomas de gestão que fazem você trabalhar muito e ganhar pouco — e como virar essa página.",
      },
    ],
  },

  /** ATENÇÃO: perguntas escritas por mim a partir do seu site. Revise as respostas. */
  faq: {
    title: "Dúvidas",
    items: [
      {
        q: "Vocês atendem fora de São Paulo?",
        a: "Sim. Atendemos negócios em todo o território nacional, de forma remota e com acompanhamento próximo.",
      },
      {
        q: "Preciso trocar meu sistema de agenda?",
        a: "Não. Trabalhamos em cima do que você já usa. A integração é feita na implantação.",
      },
      {
        q: "Isso substitui meu contador?",
        a: "Não. Contabilidade olha para o fisco, controladoria olha para a decisão. Os dois convivem — enviamos os dados prontos para ele.",
      },
      {
        q: "O que é a organização PJ + PF?",
        a: "Separamos o dinheiro da empresa do dinheiro de casa, e organizamos as duas frentes. É o ponto onde a maioria dos donos se perde.",
      },
      {
        q: "Atende barbearia e clínica de estética também?",
        a: "Sim. Salões, barbearias, clínicas estéticas e outras empresas que vivem de faturamento diário.",
      },
    ],
  },

  finalCta: {
    title: "Vamos conversar sobre o seu negócio?",
    body: "Atendimento humano, direto com a equipe VN. Sem robô, sem promessa vazia. Chame no WhatsApp e descubra como podemos destravar o seu financeiro.",
    cta: "Chamar no WhatsApp · (13) 98110-1850",
  },

  footer: {
    columns: [
      {
        title: "Navegação",
        links: [
          { label: "A Empresa", href: "#empresa" },
          { label: "Como funciona", href: "#como-funciona" },
          { label: "eBooks", href: "#ebooks" },
          { label: "Dúvidas", href: "#duvidas" },
        ],
      },
      {
        title: "Contato",
        links: [
          { label: "WhatsApp (13) 98110-1850", href: "#" },
          { label: "Comprar eBooks", href: "#ebooks" },
          { label: "@nicollas.financeiro", href: "#" },
        ],
      },
      {
        title: "Métodos",
        links: [
          { label: "Método CDB", href: "#empresa" },
          { label: "Método DCAE", href: "#empresa" },
          { label: "Diagnóstico do Salão", href: "#ebooks" },
        ],
      },
    ],
    legal:
      "© 2026 VN — Visão do Negócio · Controladoria Financeira. Feito com método. Entregue com cuidado.",
  },
} as const;

export type Site = typeof site;
