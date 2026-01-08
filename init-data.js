// Script para adicionar dados de exemplo ao banco de dados
// Execute com: node init-data.js

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('caps.db');

db.serialize(() => {
  // Mensagens motivacionais de exemplo
  const mensagens = [
    {
      titulo: 'Você é mais forte do que imagina',
      conteudo: 'Cada dia é uma nova oportunidade de crescer e se superar. Você tem dentro de si toda a força necessária para enfrentar os desafios.',
      autor: 'Equipe CAPS'
    },
    {
      titulo: 'Pequenos passos, grandes mudanças',
      conteudo: 'Não subestime o poder dos pequenos passos. Cada ação positiva que você toma hoje está construindo um futuro melhor.',
      autor: 'Equipe CAPS'
    },
    {
      titulo: 'Você não está sozinho',
      conteudo: 'Lembre-se: você tem uma rede de apoio ao seu redor. Estamos aqui para caminhar junto com você nesta jornada.',
      autor: 'Equipe CAPS'
    }
  ];

  mensagens.forEach(msg => {
    db.run('INSERT OR IGNORE INTO mensagens (titulo, conteudo, autor) VALUES (?, ?, ?)',
      [msg.titulo, msg.conteudo, msg.autor]);
  });

  // Itens de biblioteca de exemplo
  const biblioteca = [
    {
      titulo: 'Guia de Autocuidado',
      descricao: 'Dicas práticas para cuidar da sua saúde mental no dia a dia',
      tipo: 'PDF',
      url: '',
      arquivo: 'guia-autocuidado.pdf'
    },
    {
      titulo: 'Entendendo a Ansiedade',
      descricao: 'Vídeo educativo sobre ansiedade e estratégias de enfrentamento',
      tipo: 'Vídeo',
      url: 'https://www.youtube.com/watch?v=exemplo',
      arquivo: ''
    }
  ];

  biblioteca.forEach(item => {
    db.run('INSERT OR IGNORE INTO biblioteca (titulo, descricao, tipo, url, arquivo) VALUES (?, ?, ?, ?, ?)',
      [item.titulo, item.descricao, item.tipo, item.url, item.arquivo]);
  });

  // Meditações de exemplo
  const meditacoes = [
    {
      titulo: 'Meditação para Relaxamento',
      descricao: 'Uma meditação guiada de 10 minutos para aliviar o estresse e promover o relaxamento',
      duracao: 10,
      arquivo_audio: 'relaxamento.mp3',
      imagem: ''
    },
    {
      titulo: 'Respiração Consciente',
      descricao: 'Prática de respiração consciente para acalmar a mente e o corpo',
      duracao: 5,
      arquivo_audio: 'respiração.mp3',
      imagem: ''
    }
  ];

  meditacoes.forEach(med => {
    db.run('INSERT OR IGNORE INTO meditacoes (titulo, descricao, duracao, arquivo_audio, imagem) VALUES (?, ?, ?, ?, ?)',
      [med.titulo, med.descricao, med.duracao, med.arquivo_audio, med.imagem]);
  });

  console.log('✅ Dados de exemplo adicionados com sucesso!');
  console.log('💡 Nota: Os arquivos de áudio e PDF mencionados precisam ser adicionados manualmente na pasta uploads/');
});

db.close();

