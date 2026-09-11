/**
 * TODO O TEXTO DA LANDING PAGE MORA AQUI.
 * Trocar de produto = editar só este arquivo. Nenhum componente tem copy fixa.
 */

export const site = {
  name: "VN Controladoria",
  tagline: "Controladoria financeira para salões de beleza",

  nav: [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Recursos", href: "#recursos" },
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#duvidas" },
  ],

  hero: {
    badge: "Fechamento de dezembro já disponível",
    headline: "O caixa do salão para de ser um mistério.",
    highlight: "para de ser um mistério",
    subhead:
      "Comissões, taxas de cartão, custo por atendimento e retirada dos sócios em um só lugar. Você abre o mês sabendo exatamente quanto sobrou e por quê.",
    primaryCta: "Ver um diagnóstico do meu salão",
    secondaryCta: "Falar com um consultor",
    note: "Sem cartão. Diagnóstico em 15 minutos.",
  },

  /** Números do painel que aparece abaixo do hero */
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

  steps: {
    title: "Três semanas até o primeiro fechamento confiável",
    subtitle:
      "Não é software para você preencher sozinho. A implantação é feita com você.",
    items: [
      {
        title: "Levantamento",
        body: "Puxamos extratos, maquininhas e a agenda dos últimos 6 meses. Você não digita nada.",
      },
      {
        title: "Estrutura",
        body: "Plano de contas, centros de custo por profissional e regras de comissão configurados no seu modelo.",
      },
      {
        title: "Fechamento",
        body: "Primeiro DRE fechado e revisado junto com você. A partir daí, todo dia 5.",
      },
    ],
  },

  features: {
    title: "O que você passa a enxergar",
    subtitle: "Cada número com origem rastreável até o lançamento.",
    items: [
      {
        icon: "ChartSpline",
        title: "DRE que fecha",
        body: "Demonstrativo mensal reconciliado com banco e maquininha. Diferença de centavos é apontada, não escondida.",
        span: "hero",
      },
      {
        icon: "Users",
        title: "Lucro por profissional",
        body: "Quanto cada cadeira gera depois da comissão e do custo do produto.",
        span: "wide",
      },
      {
        icon: "CreditCard",
        title: "Taxas de cartão",
        body: "Antecipação, MDR e prazo de recebimento por bandeira.",
        span: "normal",
      },
      {
        icon: "Scissors",
        title: "Custo por atendimento",
        body: "Produto, tempo de cadeira e rateio do fixo em cada serviço da tabela.",
        span: "normal",
      },
      {
        icon: "Wallet",
        title: "Pró-labore separado",
        body: "A retirada dos sócios deixa de se misturar com o caixa da operação.",
        span: "wide",
      },
      {
        icon: "CalendarClock",
        title: "Fluxo projetado",
        body: "Saldo dos próximos 90 dias com recebíveis já agendados.",
        span: "normal",
      },
    ],
  },

  proof: {
    quote:
      "Eu achava que o problema era faturamento. Era comissão mal calculada em quatro serviços. Achamos isso no primeiro mês.",
    author: "Camila Reis",
    role: "Sócia, Studio Reis · 14 profissionais",
    stats: [
      { value: "40h", label: "por mês devolvidas ao gestor" },
      { value: "R$ 9,2 mil", label: "de erro médio achado na implantação" },
      { value: "dia 5", label: "fechamento na sua mesa" },
    ],
  },

  pricing: {
    title: "Planos",
    subtitle: "Preço por porte do salão. Sem taxa de implantação.",
    plans: [
      {
        name: "Essencial",
        price: "R$ 690",
        period: "/mês",
        description: "Até 6 profissionais.",
        features: [
          "DRE mensal fechado",
          "Conciliação de banco e maquininha",
          "Painel de lucro por profissional",
          "Suporte por WhatsApp",
        ],
        cta: "Começar",
        featured: false,
      },
      {
        name: "Controladoria",
        price: "R$ 1.290",
        period: "/mês",
        description: "Até 20 profissionais.",
        features: [
          "Tudo do Essencial",
          "Custo por atendimento e por serviço",
          "Fluxo de caixa projetado (90 dias)",
          "Reunião mensal de leitura do resultado",
          "Precificação da tabela revisada",
        ],
        cta: "Falar com um consultor",
        featured: true,
      },
      {
        name: "Rede",
        price: "Sob medida",
        period: "",
        description: "Duas ou mais unidades.",
        features: [
          "Tudo da Controladoria",
          "Consolidado multiunidade",
          "Comparativo entre lojas",
          "Consultor dedicado",
        ],
        cta: "Pedir proposta",
        featured: false,
      },
    ],
  },

  faq: {
    title: "Dúvidas",
    items: [
      {
        q: "Preciso trocar meu sistema de agenda?",
        a: "Não. Trabalhamos em cima do que você já usa — Belle, Avec, Trinks, planilha. A integração é feita na implantação.",
      },
      {
        q: "Quem lança as informações?",
        a: "Nós. Você envia extratos e acessos uma vez; a rotina de lançamento e conciliação é nossa.",
      },
      {
        q: "E se meu contador já faz isso?",
        a: "Contabilidade olha para o fisco, controladoria olha para a decisão. Os dois convivem — enviamos os dados prontos para ele.",
      },
      {
        q: "Tem fidelidade?",
        a: "Contrato de 12 meses no Essencial e na Controladoria, com saída sem multa nos primeiros 60 dias.",
      },
      {
        q: "Funciona para salão pequeno?",
        a: "A partir de 3 profissionais o ganho já paga o plano. Abaixo disso, indicamos começar pelo diagnóstico avulso.",
      },
    ],
  },

  finalCta: {
    title: "Descubra onde seu lucro está vazando",
    body: "O diagnóstico usa os últimos 3 meses do seu salão e aponta os pontos de perda. Leva 15 minutos e é gratuito.",
    cta: "Agendar diagnóstico",
  },

  footer: {
    columns: [
      {
        title: "Produto",
        links: [
          { label: "Como funciona", href: "#como-funciona" },
          { label: "Recursos", href: "#recursos" },
          { label: "Planos", href: "#planos" },
        ],
      },
      {
        title: "Conteúdo",
        links: [
          { label: "Blog", href: "#" },
          { label: "Coleção Diagnóstico do Salão", href: "#" },
          { label: "Calculadora de comissão", href: "#" },
        ],
      },
      {
        title: "Contato",
        links: [
          { label: "WhatsApp", href: "#" },
          { label: "Instagram", href: "#" },
          { label: "E-mail", href: "#" },
        ],
      },
    ],
    legal: "© 2026 VN Controladoria Financeira. Todos os direitos reservados.",
  },
} as const;

export type Site = typeof site;
