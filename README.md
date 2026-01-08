# CAPS Digital

Sistema digital para CAPS (Centro de Atenção Psicossocial) com espaço para mensagens motivacionais, biblioteca digital e meditação guiada.

## 🚀 Funcionalidades

- **Página Principal**: Interface moderna com botões para acessar cada seção
- **Mensagens Motivacionais**: Espaço para compartilhar mensagens inspiradoras
- **Biblioteca Digital**: Conselhos educativos e materiais informativos
- **Meditação Guiada**: Áudios relaxantes e práticas de mindfulness
- **Painel Administrativo**: Gerenciamento completo de conteúdo pela coordenadora

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente vem com Node.js)

## 🔧 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor:
```bash
npm start
```

Para desenvolvimento com auto-reload:
```bash
npm run dev
```

## 🌐 Acessos

- **Site Principal**: http://localhost:3000
- **Painel Admin**: http://localhost:3000/admin
  - Usuário padrão: `admin`
  - Senha padrão: `admin123`

## 📱 Uso

### Para Usuários Finais

1. Acesse a página principal através do QR code ou URL
2. Escolha entre:
   - Mensagens Motivacionais
   - Biblioteca Digital
   - Meditação Guiada

### Para Administradores

1. Acesse `/admin` e faça login
2. No painel, você pode:
   - **Mensagens**: Adicionar, editar e excluir mensagens motivacionais
   - **Biblioteca**: Gerenciar conteúdo educativo (links, arquivos, etc.)
   - **Meditações**: Adicionar meditações guiadas com áudios

## 📁 Estrutura do Projeto

```
CAPS/
├── server.js              # Servidor Express e API
├── package.json           # Dependências do projeto
├── caps.db               # Banco de dados SQLite (criado automaticamente)
├── public/               # Arquivos estáticos
│   ├── index.html        # Página principal
│   ├── mensagens.html    # Página de mensagens
│   ├── biblioteca.html   # Página da biblioteca
│   ├── meditacao.html    # Página de meditações
│   ├── styles.css        # Estilos CSS
│   └── admin/           # Painel administrativo
│       ├── login.html    # Login admin
│       └── painel.html   # Painel de gerenciamento
└── uploads/              # Arquivos enviados (criado automaticamente)
    ├── audios/          # Áudios de meditação
    └── images/          # Imagens
```

## ☁️ Deploy na Vercel

Este projeto está configurado para deploy na Vercel! Veja o arquivo `DEPLOY-VERCEL.md` para instruções detalhadas.

**Resumo rápido:**
1. Faça push do código para GitHub
2. Conecte o repositório na Vercel
3. Deploy automático!

⚠️ **Nota sobre banco de dados**: O SQLite funciona na Vercel, mas os dados são temporários. Para produção, considere migrar para um banco na nuvem (Supabase, PlanetScale, etc.).

## 🔐 Segurança

⚠️ **Importante**: Este é um sistema simples para uso interno. Para produção, considere:
- Alterar a senha padrão do admin
- Implementar autenticação mais robusta
- Adicionar HTTPS (já incluído na Vercel)
- Implementar validação de uploads de arquivos

## 📝 Notas

- O banco de dados SQLite é criado automaticamente na primeira execução
- Os diretórios de upload são criados automaticamente
- Para adicionar áudios de meditação, coloque os arquivos em `uploads/audios/` e referencie no painel admin

## 🎨 Personalização

Você pode personalizar as cores e estilos editando o arquivo `public/styles.css`. As variáveis CSS no início do arquivo controlam o tema principal.

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento.

---

Desenvolvido para CAPS - Centro de Atenção Psicossocial

