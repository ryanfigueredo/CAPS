const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Criar admin padrão
  await prisma.admin.upsert({
    where: { usuario: "admin" },
    update: {},
    create: {
      usuario: "admin",
      senha: "admin123",
      nome: "Administrador",
    },
  });

  // Limpar dados existentes (opcional - descomente se quiser resetar)
  // await prisma.meditacao.deleteMany({});
  // await prisma.mensagem.deleteMany({});

  // Adicionar Meditações e Vídeos de Mindfulness
  const meditacoes = [
    {
      titulo: "Prática de Mindfulness - Meditação Guiada",
      descricao:
        "Aprenda técnicas fundamentais de mindfulness e atenção plena para melhorar seu bem-estar mental e emocional.",
      duracao: 15,
      urlYoutube: "https://www.youtube.com/watch?v=1fYt92gSJ_U",
    },
    {
      titulo: "Meditação e Relaxamento - Técnicas Práticas",
      descricao:
        "Pratique técnicas eficazes de meditação e relaxamento para reduzir o estresse e promover tranquilidade interior.",
      duracao: 20,
      urlYoutube: "https://www.youtube.com/watch?v=IJzNHztdNzI",
    },
    {
      titulo: "Mindfulness para o Dia a Dia",
      descricao:
        "Desenvolva habilidades de mindfulness que podem ser aplicadas no seu dia a dia para maior bem-estar e qualidade de vida.",
      duracao: 18,
      urlYoutube: "https://www.youtube.com/watch?v=mLOCYir6bnI",
    },
  ];

  // Criar meditações (verificar se já existe antes de criar)
  for (const med of meditacoes) {
    const existe = await prisma.meditacao.findFirst({
      where: { titulo: med.titulo },
    });
    if (!existe) {
      await prisma.meditacao.create({ data: med });
    }
  }

  // Adicionar Mensagens Motivacionais
  const mensagens = [
    {
      titulo: "Você é mais forte do que imagina",
      conteudo:
        "Cada dia que você enfrenta é uma prova de sua força. Mesmo quando não sente, você está evoluindo, crescendo e se tornando mais resiliente. Confie no seu processo.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Pequenos passos ainda são progresso",
      conteudo:
        "Não importa o quão pequeno seja o passo que você dá hoje. O importante é que você está se movendo. Cada pequena ação conta e soma para grandes transformações.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Permita-se sentir",
      conteudo:
        "Está tudo bem não estar bem o tempo todo. Suas emoções são válidas e importantes. Permitir-se sentir é um ato de coragem e autoconhecimento.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Você não está sozinho",
      conteudo:
        "Mesmo nos momentos mais escuros, lembre-se: você não está sozinho. Existem pessoas que se importam com você e profissionais prontos para ajudar. Peça ajuda quando precisar.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Cuidar de si não é egoísmo",
      conteudo:
        "Cuidar da sua saúde mental não é egoísmo, é necessidade. Quando você está bem, consegue estar presente para si mesmo e para os outros de forma mais plena.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Recaídas fazem parte da jornada",
      conteudo:
        "Ter um dia difícil não significa que você falhou. A recuperação não é uma linha reta. Cada recaída ensina algo novo e te torna mais forte para o próximo passo.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Seu valor não depende da sua produtividade",
      conteudo:
        "Você tem valor simplesmente por existir. Sua importância não está ligada ao que você produz ou realiza. Você é valioso exatamente como está.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Momento presente é tudo que temos",
      conteudo:
        "Não podemos mudar o passado nem controlar o futuro, mas podemos escolher como viver o presente. Foque no aqui e agora, um momento de cada vez.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Gratidão transforma perspectiva",
      conteudo:
        "Mesmo nos dias mais difíceis, há algo pelo que podemos ser gratos. Pode ser pequeno: uma xícara de café, um raio de sol, uma respiração. A gratidão abre espaço para a luz.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Autocompaixão é a chave",
      conteudo:
        "Seja gentil consigo mesmo como seria com um amigo querido. Você merece compaixão, paciência e compreensão. Trate-se com o mesmo carinho que oferece aos outros.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Cada respiração é uma nova chance",
      conteudo:
        "Com cada respiração, você tem uma nova oportunidade de começar. Não importa o que aconteceu antes, este momento é seu. Respire fundo e siga em frente.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Progresso, não perfeição",
      conteudo:
        "Não busque a perfeição, busque o progresso. Cada pequena melhoria conta. Celebre suas vitórias, mesmo as menores, porque todas importam.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Você já superou 100% dos seus dias difíceis",
      conteudo:
        "Olhe para trás e veja: você sobreviveu a todos os dias difíceis até agora. Isso mostra sua capacidade de resiliência. Você consegue enfrentar o que vier.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Rotinas saudáveis constroem vidas melhores",
      conteudo:
        "Pequenas rotinas diárias - como tomar água, respirar conscientemente, fazer uma caminhada - são os tijolos que constroem uma vida mais equilibrada e saudável.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Sua história ainda está sendo escrita",
      conteudo:
        "O capítulo difícil que você está vivendo não define seu livro inteiro. Novas páginas estão sendo escritas a cada dia. Continue virando as páginas.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Pedir ajuda é um sinal de força",
      conteudo:
        "Reconhecer que precisa de ajuda não é fraqueza, é sabedoria. Pedir suporte mostra que você se importa consigo mesmo e está disposto a crescer.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Mindfulness é presente, não perfeição",
      conteudo:
        "A prática de mindfulness não exige mente vazia ou perfeição. É sobre estar presente, observar sem julgar, e voltar gentilmente quando a mente divaga.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Você merece paz",
      conteudo:
        "Você merece momentos de paz e tranquilidade. Reserve um tempo para cuidar de si, meditar, ou simplesmente não fazer nada. Isso é autocuidado necessário.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Transformação começa com aceitação",
      conteudo:
        "Para transformar, primeiro precisamos aceitar onde estamos. Aceitar não significa desistir, mas sim reconhecer a realidade para então criar mudanças positivas.",
      autor: "CAPS Digital",
    },
    {
      titulo: "Seus sentimentos são temporários",
      conteudo:
        "Assim como as nuvens passam pelo céu, os sentimentos difíceis também passam. Você não está preso neles para sempre. Respire e espere, a tempestade vai passar.",
      autor: "CAPS Digital",
    },
  ];

  // Criar mensagens (verificar se já existe antes de criar)
  for (const msg of mensagens) {
    const existe = await prisma.mensagem.findFirst({
      where: { titulo: msg.titulo },
    });
    if (!existe) {
      await prisma.mensagem.create({ data: msg });
    }
  }

  // Adicionar itens na Biblioteca Digital
  const bibliotecaItens = [
    {
      titulo: "O que é Saúde Mental?",
      descricao:
        "Entenda o conceito de saúde mental, sua importância e como cuidar dela no dia a dia.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/saude-mental/",
    },
    {
      titulo: "Direitos dos Usuários do SUS na Saúde Mental",
      descricao:
        "Conheça seus direitos enquanto usuário do Sistema Único de Saúde na área de saúde mental.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/bvs/publicacoes/direitos_saude_mental.pdf",
    },
    {
      titulo: "Cartilha de Saúde Mental - Cuidados Básicos",
      descricao:
        "Material educativo sobre cuidados básicos com a saúde mental, incluindo dicas práticas para o dia a dia.",
      tipo: "PDF",
      url: "https://bvsms.saude.gov.br/bvs/publicacoes/cartilha_saude_mental.pdf",
    },
    {
      titulo: "Como Identificar Sinais de Depressão",
      descricao:
        "Aprenda a reconhecer os principais sinais e sintomas de depressão e quando buscar ajuda profissional.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/depressao-sinais-e-sintomas/",
    },
    {
      titulo: "Ansiedade: Guia Prático de Manejo",
      descricao:
        "Técnicas práticas para lidar com ansiedade no cotidiano, incluindo exercícios de respiração e mindfulness.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/ansiedade-guia-pratico/",
    },
    {
      titulo: "Reabilitação Psicossocial",
      descricao:
        "Entenda o que é reabilitação psicossocial e como ela pode ajudar no processo de recuperação e autonomia.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/reabilitacao-psicossocial/",
    },
    {
      titulo: "Medicação e Tratamento: Orientações Importantes",
      descricao:
        "Informações essenciais sobre o uso correto de medicações psiquiátricas e importância da adesão ao tratamento.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/medicacao-psiquiatrica/",
    },
    {
      titulo: "Família e Saúde Mental",
      descricao:
        "Como a família pode apoiar e participar do tratamento em saúde mental de forma positiva e acolhedora.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/familia-saude-mental/",
    },
    {
      titulo: "Atividades Terapêuticas para o Dia a Dia",
      descricao:
        "Sugestões de atividades terapêuticas que podem ser realizadas em casa para promover bem-estar mental.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/atividades-terapeuticas/",
    },
    {
      titulo: "Crises em Saúde Mental: Como Proceder",
      descricao:
        "Orientações sobre como agir diante de crises em saúde mental e onde buscar ajuda imediata.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/crises-saude-mental/",
    },
    {
      titulo: "Autocuidado em Saúde Mental",
      descricao:
        "Estratégias práticas de autocuidado que contribuem para o bem-estar e a manutenção da saúde mental.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/autocuidado-saude-mental/",
    },
    {
      titulo: "CAPS: Centro de Atenção Psicossocial",
      descricao:
        "Conheça melhor os serviços oferecidos pelos CAPS e como eles podem ajudar no seu tratamento.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/caps-centro-atencao-psicossocial/",
    },
    {
      titulo: "Redução de Danos em Saúde Mental",
      descricao:
        "Entenda a abordagem de redução de danos e sua importância no cuidado em saúde mental.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/reducao-danos-saude-mental/",
    },
    {
      titulo: "Trabalho e Inclusão Social",
      descricao:
        "A importância do trabalho e da inclusão social no processo de reabilitação e recuperação em saúde mental.",
      tipo: "Artigo",
      url: "https://bvsms.saude.gov.br/trabalho-inclusao-social/",
    },
    {
      titulo: "CVV - Centro de Valorização da Vida",
      descricao:
        "Serviço gratuito de apoio emocional e prevenção do suicídio, disponível 24 horas todos os dias.",
      tipo: "Link",
      url: "https://www.cvv.org.br/",
    },
  ];

  // Criar itens da biblioteca (verificar se já existe antes de criar)
  for (const item of bibliotecaItens) {
    const existe = await prisma.biblioteca.findFirst({
      where: { titulo: item.titulo },
    });
    if (!existe) {
      await prisma.biblioteca.create({ data: item });
    }
  }

  console.log("✅ Seed executado com sucesso!");
  console.log(`✅ ${meditacoes.length} meditações criadas`);
  console.log(`✅ ${mensagens.length} mensagens motivacionais criadas`);
  console.log(`✅ ${bibliotecaItens.length} itens da biblioteca criados`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
