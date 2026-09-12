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
   * DIAGNÓSTICO 360º — 8 blocos.
   *
   * Blocos com "scored: false" nas perguntas não entram na nota:
   * o primeiro (identificação e perfil) e o último (perguntas abertas).
   * Os seis do meio recebem nota: soma dos pesos / (nº perguntas × 2).
   * O bloco com a pior nota vira a prioridade apontada no resultado.
   */
  diagnostico: {
    accessKey: "68a29601-894f-4644-b0c8-1e8c04720307",
    intro: {
      badge: "Diagnóstico 360º · cerca de 8 minutos",
      title: "Salão sem números é como dirigir no escuro.",
      body: "São 8 blocos: financeiro, caixa, clientes, serviços, estoque e gestão. No fim você vê a nota de cada frente e onde está o problema real do seu negócio.",
      cta: "Começar diagnóstico",
    },
    modulos: [
      {
        id: "identificacao",
        nome: "Sobre o negócio",
        descricao: "Primeiro, para sabermos com quem estamos falando.",
        perguntas: [
          { id: "nome", q: "Qual o seu nome completo?", type: "text", scored: false, required: true, placeholder: "Nome e sobrenome" },
          { id: "telefone", q: "Telefone para contato", type: "tel", scored: false, required: true, placeholder: "(00) 00000-0000" },
          { id: "empresa", q: "Qual o nome da sua empresa?", type: "text", scored: false, required: true, placeholder: "Nome fantasia" },
          { id: "tipo", q: "Qual é o tipo do seu negócio?", type: "single", scored: false, required: true,
            options: [{ label: "Salão" }, { label: "Barbearia" }, { label: "Clínica" }, { label: "Estética" }, { label: "Outro" }] },
          { id: "tempo", q: "Há quanto tempo sua empresa está funcionando?", type: "text", scored: false, required: true, placeholder: "Ex: 3 anos e meio" },
          { id: "profissionais", q: "Quantos profissionais trabalham atualmente?", type: "text", scored: false, required: true, placeholder: "Ex: 8" },
          { id: "faturamento", q: "Qual foi aproximadamente o faturamento do último mês?", type: "text", scored: false, required: true, placeholder: "Ex: R$ 65.000" },
          { id: "clientes", q: "Quantos clientes você atendeu aproximadamente no último mês?", type: "text", scored: false, required: true, placeholder: "Ex: 380" },
        ],
      },
      {
        id: "financeiro",
        nome: "Controle financeiro",
        descricao: "O básico: saber o que entra, o que sai e o que sobra.",
        perguntas: [
          { id: "entrou", q: "Você sabe exatamente quanto entrou na empresa no último mês?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Mais ou menos", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "saiu", q: "Você sabe exatamente quanto saiu?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Mais ou menos", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "pagar", q: "Você possui controle de contas a pagar?", type: "single", required: true,
            options: [{ label: "Sim, atualizado", weight: 2 }, { label: "Parcialmente", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "receber", q: "Você possui controle de contas a receber?", type: "single", required: true,
            options: [{ label: "Sim, atualizado", weight: 2 }, { label: "Parcialmente", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "disponivel", q: "Você sabe quanto dinheiro sua empresa tem disponível hoje?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Tenho uma ideia", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "equilibrio", q: "Você sabe quanto sua empresa precisa faturar para pagar todas as despesas do mês?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Mais ou menos", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "lucro", q: "Você sabe quanto sua empresa realmente lucrou no último mês?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Mais ou menos", weight: 1 }, { label: "Não", weight: 0 }] },
        ],
      },
      {
        id: "caixa",
        nome: "Caixa e organização",
        descricao: "Conferência, recebíveis e a fronteira entre empresa e vida pessoal.",
        perguntas: [
          { id: "fechamento", q: "Você faz fechamento e conferência do caixa diariamente?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Às vezes", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "maquininha", q: "Você confere se os recebimentos das maquininhas e cartões estão corretos?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Às vezes", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "recebiveis", q: "Você sabe quanto tem para receber de cartões nos próximos 30 dias?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Mais ou menos", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "projecao", q: "Você possui uma projeção financeira para os próximos meses?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Parcial", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "reserva", q: "Você possui uma reserva financeira para a empresa?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Pouca", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "mistura", q: "Você mistura dinheiro da empresa com dinheiro pessoal?", type: "single", required: true,
            options: [{ label: "Nunca", weight: 2 }, { label: "Às vezes", weight: 1 }, { label: "Frequentemente", weight: 0 }] },
        ],
      },
      {
        id: "clientes",
        nome: "Clientes",
        descricao: "Quem volta, quem sumiu e quanto cada um deixa no caixa.",
        perguntas: [
          { id: "novos_retorno", q: "Você sabe quantos clientes são novos e quantos retornam todos os meses?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Mais ou menos", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "taxa_retorno", q: "Você acompanha a taxa de retorno dos clientes?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Não", weight: 0 }] },
          { id: "inativos", q: "Você sabe quantos clientes estão há mais de 30 ou 60 dias sem voltar?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Não", weight: 0 }] },
          { id: "recuperacao", q: "Você possui alguma estratégia para recuperar clientes inativos?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Às vezes", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "ticket", q: "Você sabe qual é o seu ticket médio?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Mais ou menos", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "satisfacao", q: "Você acompanha a satisfação dos clientes?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Às vezes", weight: 1 }, { label: "Não", weight: 0 }] },
        ],
      },
      {
        id: "servicos",
        nome: "Serviços e faturamento",
        descricao: "O que vende, o que dá lucro e quem produz.",
        perguntas: [
          { id: "mais_vendidos", q: "Você sabe quais são os 5 serviços mais vendidos?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Não", weight: 0 }] },
          { id: "menos_vendidos", q: "Você sabe quais são os serviços que menos vendem?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Não", weight: 0 }] },
          { id: "margem", q: "Você sabe quais serviços possuem maior margem de lucro?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Não", weight: 0 }] },
          { id: "fat_profissional", q: "Você acompanha o faturamento realizado por cada profissional?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Não", weight: 0 }] },
          { id: "produtividade", q: "Você sabe quais profissionais têm maior produtividade?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Não", weight: 0 }] },
          { id: "ociosidade", q: "Você acompanha horários vazios, cancelamentos e faltas?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Às vezes", weight: 1 }, { label: "Não", weight: 0 }] },
        ],
      },
      {
        id: "estoque",
        nome: "Produtos e estoque",
        descricao: "Produto parado e perda invisível saem direto do lucro.",
        perguntas: [
          { id: "controle_estoque", q: "Você possui controle atualizado do estoque?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Parcial", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "produtos_vendem", q: "Você sabe quais produtos mais vendem?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Não", weight: 0 }] },
          { id: "produtos_parados", q: "Você sabe quais produtos estão parados no estoque?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Não", weight: 0 }] },
          { id: "perda", q: "Você já perdeu dinheiro com produtos vencidos, danificados ou comprados em excesso?", type: "single", required: true,
            options: [{ label: "Não", weight: 2 }, { label: "Sim", weight: 0 }] },
          { id: "valor_estoque", q: "Você sabe quanto dinheiro está investido atualmente no seu estoque?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Mais ou menos", weight: 1 }, { label: "Não", weight: 0 }] },
        ],
      },
      {
        id: "gestao",
        nome: "Gestão e liderança",
        descricao: "Se o negócio depende de você para existir.",
        perguntas: [
          { id: "ausencia", q: "Você consegue ficar alguns dias longe da empresa sem que a operação pare?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Com dificuldade", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "tempo_gestao", q: "Quanto do seu tempo é dedicado à gestão e análise do negócio?", type: "single", required: true,
            options: [{ label: "Mais de 50%", weight: 2 }, { label: "Entre 20% e 50%", weight: 1 }, { label: "Menos de 20%", weight: 0 }] },
          { id: "decisao", q: "Você toma decisões importantes com base em números?", type: "single", required: true,
            options: [{ label: "Sempre", weight: 2 }, { label: "Às vezes", weight: 1 }, { label: "Quase nunca", weight: 0 }] },
          { id: "metas", q: "Sua equipe possui metas e indicadores claros?", type: "single", required: true,
            options: [{ label: "Sim", weight: 2 }, { label: "Parcialmente", weight: 1 }, { label: "Não", weight: 0 }] },
          { id: "papel", q: "Hoje você se considera mais profissional da beleza ou empresário/gestor?", type: "single", required: true,
            options: [{ label: "Empresário/Gestor", weight: 2 }, { label: "Os dois", weight: 1 }, { label: "Profissional", weight: 0 }] },
        ],
      },
      {
        id: "aberto",
        nome: "Com suas palavras",
        descricao: "Quatro perguntas livres. Escreva do seu jeito, sem formalidade.",
        perguntas: [
          { id: "maior_problema", q: "Qual é hoje o maior problema da sua empresa?", type: "textarea", scored: false, required: true, placeholder: "Pode ser direto." },
          { id: "tira_sono", q: "O que mais tira seu sono quando pensa no negócio?", type: "textarea", scored: false, required: true, placeholder: "O que fica na cabeça à noite." },
          { id: "melhorar", q: "O que você gostaria de melhorar nos próximos 6 meses?", type: "textarea", scored: false, required: true, placeholder: "Uma ou duas coisas já bastam." },
          { id: "expectativa", q: "O que você espera descobrir com este diagnóstico?", type: "textarea", scored: false, required: false, placeholder: "Opcional." },
        ],
      },
    ],
    /** Classificação de cada bloco pela porcentagem. */
    faixas: [
      { min: 75, rotulo: "Saudável", descricao: "Essa frente está sob controle." },
      { min: 40, rotulo: "Atenção", descricao: "Funciona, mas depende de você lembrar." },
      { min: 0, rotulo: "Crítico", descricao: "Aqui o dinheiro vaza sem ninguém ver." },
    ],
    resultado: {
      title: "Seu diagnóstico está pronto.",
      prioridadeLabel: "Prioridade número 1",
      body: "Estas são as seis frentes analisadas. A VN começa sempre pela mais frágil — é onde o resultado aparece mais rápido.",
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
