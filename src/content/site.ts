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
   * DIAGNÓSTICO EM MÓDULOS.
   *
   * Cada módulo recebe nota própria: soma dos pesos / (nº de perguntas × 2).
   * Perguntas com "scored: false" são apenas informativas e não entram na nota.
   * O módulo com a pior nota vira a prioridade apontada no resultado.
   *
   * As respostas vão por e-mail via Web3Forms (sem banco de dados).
   */
  diagnostico: {
    accessKey: "68a29601-894f-4644-b0c8-1e8c04720307",
    intro: {
      badge: "6 módulos · cerca de 5 minutos",
      title: "Salão sem números é como dirigir no escuro.",
      body: "Este diagnóstico olha seis frentes do seu negócio: caixa, preço, equipe, estoque, disciplina financeira e perfil. No fim você vê a nota de cada uma e onde está o problema real.",
      cta: "Começar diagnóstico",
    },
    modulos: [
      {
        id: "perfil",
        nome: "Perfil do negócio",
        descricao: "Para entendermos o porte e o tipo de operação.",
        perguntas: [
          { id: "nome", q: "Qual o seu nome completo?", type: "text", scored: false, required: true, placeholder: "Nome e sobrenome" },
          { id: "telefone", q: "Telefone para contato", type: "tel", scored: false, required: true, placeholder: "(00) 00000-0000" },
          { id: "tipo", q: "Que tipo de negócio você tem?", type: "single", scored: false, required: true,
            options: [{ label: "Salão de beleza" }, { label: "Barbearia" }, { label: "Clínica de estética" }, { label: "Studio individual" }, { label: "Outro" }] },
          { id: "profissionais", q: "Quantos profissionais trabalham no seu negócio?", type: "single", scored: false, required: true,
            options: [{ label: "Até 3" }, { label: "De 4 a 8" }, { label: "De 9 a 15" }, { label: "Mais de 15" }] },
          { id: "clientes", q: "Quantos clientes o negócio atende por mês, em média?", type: "single", scored: false, required: true,
            options: [{ label: "Até 150" }, { label: "De 150 a 400" }, { label: "De 400 a 800" }, { label: "Mais de 800" }, { label: "Não sei dizer" }] },
          { id: "faturamento", q: "Qual a média de faturamento mensal?", type: "single", scored: false, required: true,
            options: [{ label: "Até R$ 20 mil" }, { label: "R$ 20 mil a R$ 50 mil" }, { label: "R$ 50 mil a R$ 100 mil" }, { label: "R$ 100 mil a R$ 200 mil" }, { label: "Acima de R$ 200 mil" }] },
        ],
      },
      {
        id: "caixa",
        nome: "Caixa e controle",
        descricao: "Se o dinheiro que entra e sai é conferido de verdade.",
        perguntas: [
          { id: "confere_caixa", q: "Você confere as entradas e saídas do caixa todos os dias?", type: "single", required: true,
            options: [{ label: "Sim, fecho o caixa todo dia", weight: 2 }, { label: "Às vezes, quando sobra tempo", weight: 1 }, { label: "Não confiro", weight: 0 }] },
          { id: "lucro_mes", q: "Você sabe quanto o negócio lucrou no último mês?", type: "single", required: true,
            options: [{ label: "Sim, sei o valor exato", weight: 2 }, { label: "Tenho uma noção aproximada", weight: 1 }, { label: "Não sei dizer", weight: 0 }] },
          { id: "maquininha", q: "As vendas na maquininha batem com o que cai na conta do banco?", type: "single", required: true,
            options: [{ label: "Confiro sempre e bate", weight: 2 }, { label: "Já confiri algumas vezes", weight: 1 }, { label: "Nunca confiri", weight: 0 }] },
          { id: "relatorio", q: "Você tem um relatório mensal que mostra o resultado do negócio?", type: "single", required: true,
            options: [{ label: "Sim, recebo todo mês", weight: 2 }, { label: "Faço de vez em quando", weight: 1 }, { label: "Não tenho nada disso", weight: 0 }] },
        ],
      },
      {
        id: "preco",
        nome: "Custos e preço",
        descricao: "Se a tabela de preços cobre o custo real de atender.",
        perguntas: [
          { id: "custo_servico", q: "Você sabe quanto custa executar cada serviço, contando produto e tempo de cadeira?", type: "single", required: true,
            options: [{ label: "Sim, sei serviço por serviço", weight: 2 }, { label: "Sei de alguns, não de todos", weight: 1 }, { label: "Nunca calculei", weight: 0 }] },
          { id: "tabela", q: "Como a sua tabela de preços foi definida?", type: "single", required: true,
            options: [{ label: "Com base em custo e margem", weight: 2 }, { label: "Olhando o que a concorrência cobra", weight: 1 }, { label: "No feeling, foi surgindo", weight: 0 }] },
          { id: "despesa_fixa", q: "Você sabe quanto gasta de despesa fixa por mês?", type: "single", required: true,
            options: [{ label: "Sei o valor exato", weight: 2 }, { label: "Sei mais ou menos", weight: 1 }, { label: "Não faço ideia", weight: 0 }] },
          { id: "equilibrio", q: "Você sabe quanto precisa faturar para não ter prejuízo no mês?", type: "single", required: true,
            options: [{ label: "Sim, sei o valor", weight: 2 }, { label: "Tenho uma ideia vaga", weight: 1 }, { label: "Nunca calculei", weight: 0 }] },
        ],
      },
      {
        id: "equipe",
        nome: "Equipe e comissão",
        descricao: "Se a cadeira que mais fatura é também a que mais dá lucro.",
        perguntas: [
          { id: "comissao", q: "Como a comissão da equipe é calculada hoje?", type: "single", required: true,
            options: [{ label: "Regra clara, calculada por sistema", weight: 2 }, { label: "Planilha feita à mão todo mês", weight: 1 }, { label: "Na hora, de cabeça", weight: 0 }] },
          { id: "lucro_profissional", q: "Você sabe quanto cada profissional gera de lucro, não só de faturamento?", type: "single", required: true,
            options: [{ label: "Sim, acompanho por pessoa", weight: 2 }, { label: "Só o faturamento", weight: 1 }, { label: "Não acompanho", weight: 0 }] },
          { id: "metas", q: "A equipe tem metas claras de faturamento?", type: "single", required: true,
            options: [{ label: "Sim, e acompanhamos juntos", weight: 2 }, { label: "Existem, mas ninguém acompanha", weight: 1 }, { label: "Não temos metas", weight: 0 }] },
          { id: "conflito", q: "Já teve conflito com profissional por erro no cálculo de comissão?", type: "single", required: true,
            options: [{ label: "Nunca aconteceu", weight: 2 }, { label: "Uma ou outra vez", weight: 1 }, { label: "Acontece com frequência", weight: 0 }] },
        ],
      },
      {
        id: "estoque",
        nome: "Estoque e produtos",
        descricao: "Produto parado e perda invisível saem direto do lucro.",
        perguntas: [
          { id: "controle_estoque", q: "Você tem controle de estoque dos produtos?", type: "single", required: true,
            options: [{ label: "Sim, em sistema atualizado", weight: 2 }, { label: "Planilha ou caderno", weight: 1 }, { label: "Não tenho controle", weight: 0 }] },
          { id: "valor_estoque", q: "Você sabe quanto tem parado em produto neste momento?", type: "single", required: true,
            options: [{ label: "Sei o valor", weight: 2 }, { label: "Sei mais ou menos", weight: 1 }, { label: "Não faço ideia", weight: 0 }] },
          { id: "perda", q: "Já perdeu produto por validade vencida ou sumiço?", type: "single", required: true,
            options: [{ label: "Nunca", weight: 2 }, { label: "Raramente", weight: 1 }, { label: "Acontece com frequência", weight: 0 }] },
          { id: "compra", q: "Como você decide a hora de comprar produto?", type: "single", required: true,
            options: [{ label: "Compra planejada pelo consumo", weight: 2 }, { label: "Quando lembro de olhar", weight: 1 }, { label: "Quando acaba", weight: 0 }] },
        ],
      },
      {
        id: "disciplina",
        nome: "Disciplina financeira",
        descricao: "A fronteira entre o dinheiro da empresa e o seu.",
        perguntas: [
          { id: "pf_pj", q: "O dinheiro da empresa está separado do seu dinheiro pessoal?", type: "single", required: true,
            options: [{ label: "Totalmente separado", weight: 2 }, { label: "Mais ou menos", weight: 1 }, { label: "É tudo a mesma conta", weight: 0 }] },
          { id: "prolabore", q: "Você tem um pró-labore definido?", type: "single", required: true,
            options: [{ label: "Sim, valor fixo todo mês", weight: 2 }, { label: "Retiro conforme a necessidade", weight: 1 }, { label: "Não tenho pró-labore", weight: 0 }] },
          { id: "boleto", q: "Já pagou boleto atrasado por esquecimento ou correria?", type: "single", required: true,
            options: [{ label: "Nunca", weight: 2 }, { label: "Raramente", weight: 1 }, { label: "Acontece direto", weight: 0 }] },
          { id: "previsao", q: "Você consegue prever o caixa dos próximos 60 dias?", type: "single", required: true,
            options: [{ label: "Sim, tenho projeção", weight: 2 }, { label: "Só do mês atual", weight: 1 }, { label: "Vou vendo no dia a dia", weight: 0 }] },
        ],
      },
    ],
    /** Classificação de cada módulo pela porcentagem. */
    faixas: [
      { min: 75, rotulo: "Saudável", descricao: "Essa frente está sob controle." },
      { min: 40, rotulo: "Atenção", descricao: "Funciona, mas depende de você lembrar." },
      { min: 0, rotulo: "Crítico", descricao: "Aqui o dinheiro vaza sem ninguém ver." },
    ],
    resultado: {
      title: "Seu diagnóstico está pronto.",
      prioridadeLabel: "Prioridade número 1",
      body: "Estes são os seis eixos do seu negócio. A VN começa sempre pelo mais frágil — é onde o resultado aparece mais rápido.",
      cta: "Falar com a equipe VN",
      nota: "Uma cópia deste diagnóstico foi enviada para a equipe VN. Entramos em contato pelo telefone que você informou.",
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
