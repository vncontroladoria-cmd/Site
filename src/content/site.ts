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
    { label: "Métodos", href: "#metodos" },
    { label: "Equipe", href: "#equipe" },
    { label: "eBooks", href: "#ebooks" },
    { label: "Diagnóstico", href: "#diagnostico" },
  ],

  hero: {
    badge: "Atendendo salões, barbearias, clínicas e empresas em todo o Brasil",
    headline: "O financeiro que falta para o seu salão prosperar.",
    highlight: "prosperar",
    subhead:
      "Controladoria financeira especializada em salões de beleza, barbearias, clínicas estéticas e empresas que querem crescer com método. Trazemos a visão que falta para você parar de trabalhar no escuro — e começar a decidir com clareza, lucro e tranquilidade.",
    primaryCta: "Falar com especialista",
    primaryHref: "https://wa.me/5513981101850",
    secondaryCta: "Conhecer a VN",
    secondaryHref: "#empresa",
    image: "/img/equipe-vn.jpg",
    note: "+8 anos transformando o financeiro de empresários da beleza",
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
        body: "Fluxo de caixa completo com indicadores para tomada de decisão baseada em dados reais — não achismo.",
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
    image: "/img/colecao-diagnostico.jpg",
    price: "R$ 29,90",
    priceNote: "por volume · acesso imediato · plataforma Kiwify",
    cta: "Acessar os eBooks",
    url: "https://pay.kiwify.com.br/VZdSts5",
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
        body: "21 sintomas de liderança que estão sabotando o seu próprio negócio.",
      },
      {
        number: "04",
        title: "Salão Cheio, Caixa Vazio",
        body: "22 sintomas de gestão que fazem você trabalhar muito e ganhar pouco.",
      },
    ],
  },

  equipe: {
    title: "A dupla que cuida do seu negócio com olhar de dono",
    subtitle:
      "Mais de 8 anos no mercado financeiro, especializados em transformar a realidade de empresários da beleza em todo o Brasil.",
    photo: "/img/equipe-vn.jpg",
    people: [
      {
        name: "Nicollas Bueno",
        role: "Fundador · Mentor Financeiro",
        photo: "/img/nicollas-bueno.jpg",
        body: "Administrador empresarial, consultor e mentor financeiro com mais de 8 anos de atuação. Criador dos métodos CDB e DCAE e autor da coleção Diagnóstico do Salão.",
        tags: [
          "Administrador Empresarial",
          "Mentor Financeiro",
          "Educador Financeiro",
        ],
      },
      {
        name: "Carol Calixto",
        role: "Controladoria · Sucesso do Cliente",
        photo: "/img/carol-calixto.jpg",
        body: "Responsável pela controladoria, suporte e acompanhamento comercial dos clientes VN. É quem garante que o que foi planejado seja executado e gere resultado no dia a dia.",
        tags: ["Controladoria", "Sucesso do Cliente", "Acompanhamento Comercial"],
      },
    ],
  },

  /** Canais oficiais de contato. */
  logo: "/img/logo-vn.jpg",

  chamadaDiagnostico: {
    badge: "Gratuito · sem compromisso",
    title: "Será que o seu salão precisa da VN?",
    body: "Responda o diagnóstico e descubra em que estágio o financeiro do seu negócio está. A equipe VN analisa suas respostas e entra em contato.",
    cta: "Fazer diagnóstico gratuito",
  },

  contato: {
    email: "vncontroladoria@gmail.com",
    telefone: "(13) 98110-1850",
    whatsapp: "https://wa.me/5513981101850",
    instagram: {
      empresa: "https://www.instagram.com/vncontroladoriafinanceira/",
      nicollas: "https://www.instagram.com/nicollas.financeiro/",
      carol: "https://www.instagram.com/carol.calixtto/",
    },
  },

  metodos: {
    title: "Dois métodos. Resultado previsível.",
    subtitle:
      "Não trabalhamos com fórmula mágica. Trabalhamos com método testado, validado e aplicável tanto na vida pessoal do empresário quanto dentro da empresa.",
    items: [
      {
        tag: "Pessoa Física",
        number: "01",
        name: "CDB",
        body: "Um curso completo para organizar a vida financeira pessoal do empresário. Estrutura, controle e clareza pra quem precisa parar de misturar o dinheiro da empresa com o dinheiro de casa — e finalmente construir patrimônio com método.",
        focus: "Foco: organização da vida financeira pessoal",
      },
      {
        tag: "Pessoa Jurídica",
        number: "02",
        name: "DCAE",
        body: "Nosso método interno de controle empresarial, aplicado em todas as empresas que cuidamos. Estrutura estratégica para diagnóstico, análise, controle e expansão — colocando o dono à frente das decisões, com base em dados e cenários reais.",
        focus: "Foco: controladoria e gestão da empresa",
      },
    ],
  },

  /**
   * DIAGNÓSTICO — formulário completo.
   *
   * As respostas são enviadas por e-mail via Web3Forms (sem banco de dados).
   * Pegue sua chave gratuita em web3forms.com e cole em accessKey abaixo.
   *
   * Tipos de pergunta: "text" | "tel" | "textarea" | "single" | "multi"
   */
  diagnostico: {
    accessKey: "68a29601-894f-4644-b0c8-1e8c04720307",
    intro: {
      badge: "Diagnóstico gratuito · leva 5 minutos",
      title: "Salão sem números é como dirigir no escuro.",
      body: "Gestão financeira não é custo. É o que separa empresas que crescem das que apenas sobrevivem. Responda com sinceridade — a equipe VN analisa e entra em contato.",
      cta: "Começar diagnóstico",
    },
    questions: [
      { id: "nome", q: "Qual o seu nome completo?", type: "text", required: true, placeholder: "Nome e sobrenome" },
      { id: "telefone", q: "Telefone para contato", type: "tel", required: true, placeholder: "(00) 00000-0000" },
      { id: "cnpj", q: "Qual o CNPJ da empresa?", type: "text", required: true, placeholder: "00.000.000/0000-00" },
      { id: "area", q: "Qual a área de atuação do negócio?", type: "single", required: true,
        options: ["Salão de beleza", "Barbearia", "Clínica de estética", "Studio individual", "Outro"] },
      { id: "sistema", q: "Qual sistema você usa no salão atualmente?", type: "text", required: true, placeholder: "Belle, Avec, Trinks, planilha, nenhum…" },
      { id: "recepcao", q: "Possui recepção? Se sim, quantas pessoas?", type: "text", required: true, placeholder: "Ex: sim, 2 / não" },
      { id: "cabeleireiro", q: "Possui cabeleireiro? Quantos?", type: "text", required: true, placeholder: "Ex: sim, 4 / não" },
      { id: "manicure", q: "Possui manicure? Quantas?", type: "text", required: true, placeholder: "Ex: sim, 3 / não" },
      { id: "esteticista", q: "Possui esteticista? Quantas?", type: "text", required: true, placeholder: "Ex: sim, 1 / não" },
      { id: "auxiliar", q: "Possui auxiliar? Quantos?", type: "text", required: true, placeholder: "Ex: sim, 2 / não" },
      { id: "estoquista", q: "Possui estoquista?", type: "single", required: true, options: ["Sim", "Não"] },
      { id: "locacao", q: "Faz locação de sala?", type: "single", required: true, options: ["Sim", "Não"] },
      { id: "faturamento", q: "Qual a média de faturamento mensal?", type: "single", required: true,
        options: ["Até R$ 20 mil", "R$ 20 mil a R$ 50 mil", "R$ 50 mil a R$ 100 mil", "R$ 100 mil a R$ 200 mil", "Acima de R$ 200 mil"] },
      { id: "lucro", q: "Você sabe exatamente quanto lucro o seu salão teve no último mês?", type: "single", required: true,
        options: ["Sim, com clareza", "Tenho uma noção", "Não sei direito"] },
      { id: "acompanha", q: "Você acompanha diariamente o faturamento do salão?", type: "single", required: true,
        options: ["Sim, todo dia", "De vez em quando", "Não acompanho"] },
      { id: "clientes", q: "Você sabe quantos clientes o salão atende por mês? Se sim, quantos em média?", type: "text", required: true, placeholder: "Ex: cerca de 400 / não sei" },
      { id: "equilibrio", q: "Você sabe qual é o ponto de equilíbrio do seu salão? Quanto precisa faturar para não ficar no prejuízo? Se sim, qual o valor?", type: "text", required: true, placeholder: "Ex: R$ 60 mil / não sei" },
      { id: "pfpj", q: "Você tem o hábito de misturar Pessoa Física com Pessoa Jurídica?", type: "single", required: true,
        options: ["Sim, com frequência", "Às vezes", "Não, é tudo separado"] },
      { id: "juros", q: "Já pagou conta atrasada e gerou juros por esquecimento ou correria do dia a dia?", type: "single", required: true,
        options: ["Sim, já aconteceu várias vezes", "Sim, uma ou outra vez", "Não"] },
      { id: "crescendo", q: "Se eu perguntasse agora: seu salão está crescendo ou apenas sobrevivendo? Você conseguiria responder com certeza?", type: "single", required: true,
        options: ["Sim, com certeza", "Mais ou menos", "Não saberia responder"] },
      { id: "beneficio", q: "Por que você acredita que terceirizar o financeiro traria benefício? Pode marcar mais de uma.", type: "multi", required: true,
        options: [
          "Ter um time completo sem encargos de contratação",
          "Sobrar tempo para cuidar do atendimento e da equipe",
          "Enxergar o lucro real do negócio",
          "Ter clareza de metas e decisões",
          "Parar de misturar PF com PJ",
          "Reduzir erros e pagamentos atrasados",
        ] },
      { id: "expectativa", q: "Com suas palavras: o que você acha que uma terceirizada financeira faz e o que espera encontrar?", type: "textarea", required: true, placeholder: "Escreva do seu jeito, sem formalidade." },
      { id: "duvidas", q: "Quais dúvidas você tem sobre esse tipo de serviço?", type: "textarea", required: false, placeholder: "Pode deixar em branco se não tiver nenhuma." },
      { id: "concorrente", q: "Você acredita que um concorrente com time financeiro pode sair na frente do seu salão por ter clareza das metas?", type: "single", required: true,
        options: ["Sim, com certeza", "Talvez", "Não acredito nisso"] },
    ],
    sucesso: {
      title: "Diagnóstico enviado.",
      body: "Recebemos suas respostas. A equipe VN vai analisar e entrar em contato pelo telefone que você informou. Se preferir adiantar, chame no WhatsApp.",
      cta: "Chamar no WhatsApp",
    },
    erro: "Não conseguimos enviar agora. Tente de novo ou chame no WhatsApp.",
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
    title: "Vamos conversar sobre o seu salão?",
    body: "Atendimento humano, direto com a equipe VN. Sem robô, sem promessa vazia. Chame no WhatsApp e descubra como podemos destravar o seu financeiro.",
    cta: "Chamar no WhatsApp",
  },

  footer: {
    columns: [
      {
        title: "Navegação",
        links: [
          { label: "A Empresa", href: "#empresa" },
          { label: "Métodos", href: "#metodos" },
          { label: "Equipe", href: "#equipe" },
          { label: "eBooks", href: "#ebooks" },
        ],
      },
      {
        title: "Contato",
        links: [
          { label: "WhatsApp (13) 98110-1850", href: "https://wa.me/5513981101850" },
          { label: "vncontroladoria@gmail.com", href: "mailto:vncontroladoria@gmail.com" },
          { label: "@vncontroladoriafinanceira", href: "https://www.instagram.com/vncontroladoriafinanceira/" },
        ],
      },
      {
        title: "Métodos",
        links: [
          { label: "Método CDB", href: "#metodos" },
          { label: "Método DCAE", href: "#metodos" },
          { label: "Diagnóstico do Salão", href: "#ebooks" },
        ],
      },
    ],
    legal:
      "© 2026 VN — Visão do Negócio · Controladoria Financeira. Feito com método. Entregue com cuidado.",
  },
} as const;

export type Site = typeof site;
