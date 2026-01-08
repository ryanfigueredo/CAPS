const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const prisma = require('../prisma/client');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Inicializar banco de dados
async function initDatabase() {
  try {
    await prisma.$connect();
    console.log('✅ Banco de dados conectado via Prisma');
    
    // Criar admin padrão se não existir
    await prisma.admin.upsert({
      where: { usuario: 'admin' },
      update: {},
      create: {
        usuario: 'admin',
        senha: 'admin123',
        nome: 'Administrador'
      }
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

initDatabase();

// ========== ROTAS PÚBLICAS ==========

// API - Mensagens motivacionais
app.get('/api/mensagens', async (req, res) => {
  try {
    const mensagens = await prisma.mensagem.findMany({
      where: { ativo: 1 },
      orderBy: { dataCriacao: 'desc' }
    });
    res.json(mensagens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API - Biblioteca digital
app.get('/api/biblioteca', async (req, res) => {
  try {
    const itens = await prisma.biblioteca.findMany({
      where: { ativo: 1 },
      orderBy: { dataCriacao: 'desc' }
    });
    res.json(itens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API - Meditações guiadas
app.get('/api/meditacoes', async (req, res) => {
  try {
    const meditacoes = await prisma.meditacao.findMany({
      where: { ativo: 1 },
      orderBy: { dataCriacao: 'desc' }
    });
    res.json(meditacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== ROTAS ADMIN ==========

// Login
app.post('/api/admin/login', async (req, res) => {
  try {
    const { usuario, senha } = req.body;
    const admin = await prisma.admin.findUnique({
      where: { usuario }
    });

    if (admin && admin.senha === senha) {
      res.json({ success: true, nome: admin.nome });
    } else {
      res.status(401).json({ success: false, error: 'Credenciais inválidas' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CRUD Mensagens
app.post('/api/admin/mensagens', async (req, res) => {
  try {
    const { titulo, conteudo, autor } = req.body;
    const mensagem = await prisma.mensagem.create({
      data: { titulo, conteudo, autor: autor || null }
    });
    res.json({ id: mensagem.id, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/admin/mensagens/:id', async (req, res) => {
  try {
    const { titulo, conteudo, autor, ativo } = req.body;
    await prisma.mensagem.update({
      where: { id: parseInt(req.params.id) },
      data: { titulo, conteudo, autor: autor || null, ativo: ativo !== undefined ? ativo : 1 }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/admin/mensagens/:id', async (req, res) => {
  try {
    await prisma.mensagem.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/admin/mensagens', async (req, res) => {
  try {
    const mensagens = await prisma.mensagem.findMany({
      orderBy: { dataCriacao: 'desc' }
    });
    res.json(mensagens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CRUD Biblioteca
app.post('/api/admin/biblioteca', async (req, res) => {
  try {
    const { titulo, descricao, tipo, arquivo, url } = req.body;
    const item = await prisma.biblioteca.create({
      data: { titulo, descricao: descricao || null, tipo, arquivo: arquivo || null, url: url || null }
    });
    res.json({ id: item.id, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/admin/biblioteca/:id', async (req, res) => {
  try {
    const { titulo, descricao, tipo, arquivo, url, ativo } = req.body;
    await prisma.biblioteca.update({
      where: { id: parseInt(req.params.id) },
      data: { titulo, descricao: descricao || null, tipo, arquivo: arquivo || null, url: url || null, ativo: ativo !== undefined ? ativo : 1 }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/admin/biblioteca/:id', async (req, res) => {
  try {
    await prisma.biblioteca.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/admin/biblioteca', async (req, res) => {
  try {
    const itens = await prisma.biblioteca.findMany({
      orderBy: { dataCriacao: 'desc' }
    });
    res.json(itens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CRUD Meditações
app.post('/api/admin/meditacoes', async (req, res) => {
  try {
    const { titulo, descricao, duracao, arquivo_audio, url_youtube, imagem } = req.body;
    const meditacao = await prisma.meditacao.create({
      data: {
        titulo,
        descricao: descricao || null,
        duracao: duracao ? parseInt(duracao) : null,
        arquivoAudio: arquivo_audio || null,
        urlYoutube: url_youtube || null,
        imagem: imagem || null
      }
    });
    res.json({ id: meditacao.id, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/admin/meditacoes/:id', async (req, res) => {
  try {
    const { titulo, descricao, duracao, arquivo_audio, url_youtube, imagem, ativo } = req.body;
    await prisma.meditacao.update({
      where: { id: parseInt(req.params.id) },
      data: {
        titulo,
        descricao: descricao || null,
        duracao: duracao ? parseInt(duracao) : null,
        arquivoAudio: arquivo_audio || null,
        urlYoutube: url_youtube || null,
        imagem: imagem || null,
        ativo: ativo !== undefined ? ativo : 1
      }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/admin/meditacoes/:id', async (req, res) => {
  try {
    await prisma.meditacao.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/admin/meditacoes', async (req, res) => {
  try {
    const meditacoes = await prisma.meditacao.findMany({
      orderBy: { dataCriacao: 'desc' }
    });
    res.json(meditacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== ROTAS QUIZ ==========

// Salvar respostas do quiz
app.post('/api/quiz/respostas', async (req, res) => {
  try {
    const { respostas, pontuacao, porcentagem } = req.body;
    const resposta = await prisma.quizResposta.create({
      data: {
        respostas: JSON.stringify(respostas),
        pontuacao,
        porcentagem
      }
    });
    res.json({ id: resposta.id, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar todas as respostas (admin)
app.get('/api/admin/quiz', async (req, res) => {
  try {
    const respostas = await prisma.quizResposta.findMany({
      orderBy: { dataCriacao: 'desc' }
    });
    const parsedRespostas = respostas.map(r => ({
      ...r,
      respostas: JSON.parse(r.respostas)
    }));
    res.json(parsedRespostas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Estatísticas do quiz (admin)
app.get('/api/admin/quiz/estatisticas', async (req, res) => {
  try {
    const total = await prisma.quizResposta.count();
    const stats = await prisma.quizResposta.aggregate({
      _avg: {
        pontuacao: true,
        porcentagem: true
      },
      _min: {
        pontuacao: true
      },
      _max: {
        pontuacao: true
      }
    });

    res.json({
      total,
      media_pontuacao: stats._avg.pontuacao || 0,
      media_porcentagem: stats._avg.porcentagem || 0,
      min_pontuacao: stats._min.pontuacao || 0,
      max_pontuacao: stats._max.pontuacao || 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== ROTAS AVALIAÇÃO ==========

// Salvar avaliação
app.post('/api/avaliacao', async (req, res) => {
  try {
    const { atendimento, recepcao, funcionarios, medico, psicologos, farmacia, recomendacao, sugestao } = req.body;
    const avaliacao = await prisma.avaliacao.create({
      data: {
        atendimento,
        recepcao,
        funcionarios,
        medico,
        psicologos,
        farmacia,
        recomendacao,
        sugestao: sugestao || null
      }
    });
    res.json({ id: avaliacao.id, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar todas as avaliações (admin)
app.get('/api/admin/avaliacoes', async (req, res) => {
  try {
    const avaliacoes = await prisma.avaliacao.findMany({
      orderBy: { dataCriacao: 'desc' }
    });
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Estatísticas das avaliações (admin)
app.get('/api/admin/avaliacoes/estatisticas', async (req, res) => {
  try {
    const total = await prisma.avaliacao.count();
    const stats = await prisma.avaliacao.aggregate({
      _avg: {
        atendimento: true,
        recepcao: true,
        funcionarios: true,
        medico: true,
        psicologos: true,
        farmacia: true,
        recomendacao: true
      }
    });

    res.json({
      total,
      media_atendimento: stats._avg.atendimento || 0,
      media_recepcao: stats._avg.recepcao || 0,
      media_funcionarios: stats._avg.funcionarios || 0,
      media_medico: stats._avg.medico || 0,
      media_psicologos: stats._avg.psicologos || 0,
      media_farmacia: stats._avg.farmacia || 0,
      media_recomendacao: stats._avg.recomendacao || 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exportar para Vercel
module.exports = app;
