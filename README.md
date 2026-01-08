# 🏥 CAPS Digital - Prefeitura de Iraquara

> Sistema digital de apoio à saúde mental desenvolvido para o **Centro de Atenção Psicossocial (CAPS)** da Prefeitura de Iraquara. Uma plataforma acessível e intuitiva que oferece recursos de bem-estar, educação em saúde mental e acompanhamento psicossocial.

[![Status](https://img.shields.io/badge/status-ativo-success)]()
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)]()
[![Prisma](https://img.shields.io/badge/Prisma-5.7+-blue)]()

## 📖 Sobre o Projeto

O **CAPS Digital** é uma iniciativa social desenvolvida para democratizar o acesso a recursos de saúde mental na cidade de Iraquara. A plataforma permite que usuários acessem conteúdo educativo, mensagens motivacionais, meditações guiadas e realizem autoavaliações de saúde mental através de um simples QR code.

### 🎯 Objetivos

- ✅ Facilitar o acesso a recursos de saúde mental
- ✅ Promover educação em saúde mental de forma acessível
- ✅ Oferecer ferramentas de autocuidado e bem-estar
- ✅ Permitir acompanhamento através de questionários de saúde
- ✅ Centralizar conteúdo educativo e informativo

## ✨ Funcionalidades

### 👥 Para Usuários

- **📱 Acesso via QR Code**: Acesso rápido e simples através de QR code
- **💬 Mensagens Motivacionais**: Espaço com mensagens inspiradoras e de apoio
- **📚 Biblioteca Digital**: Conselhos educativos, artigos e materiais informativos
- **🧘 Meditação Guiada**: Áudios relaxantes e vídeos do YouTube para práticas de mindfulness
- **📋 Questionário de Saúde Mental**: Autoavaliação com 13 perguntas e recomendações personalizadas

### 👨‍💼 Para Coordenadores/Administradores

- **🔐 Painel Administrativo**: Interface completa para gerenciar todo o conteúdo
- **📝 Gerenciamento de Mensagens**: Adicionar, editar e organizar mensagens motivacionais
- **📦 Biblioteca Digital**: Gerenciar links, arquivos e conteúdo educativo
- **🎵 Meditações**: Adicionar áudios locais ou vídeos do YouTube
- **📊 Estatísticas de Questionários**: Visualizar respostas e estatísticas dos questionários respondidos

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js + Express
- **Banco de Dados**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Deploy**: Vercel
- **Hospedagem de Banco**: Neon.tech

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com Node.js)
- Conta no [Neon.tech](https://neon.tech) (para banco de dados PostgreSQL)

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/caps-digital.git
cd caps-digital
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

#### 3.1. Crie uma conta no Neon

1. Acesse [https://neon.tech](https://neon.tech)
2. Crie uma conta (pode usar GitHub)
3. Crie um novo projeto
4. Copie a **Connection String** fornecida

#### 3.2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@host.neon.tech/database?sslmode=require"
```

**Onde encontrar a URL:**
- No console do Neon, vá em **Dashboard** > **Connection Details**
- Copie a Connection String completa

### 4. Configure o Prisma

```bash
# Gerar o cliente Prisma
npm run prisma:generate

# Criar as tabelas no banco de dados
npm run prisma:migrate
```

Quando perguntar o nome da migração, use: `init`

### 5. (Opcional) Popular com dados iniciais

```bash
npx prisma db seed
```

Isso cria o usuário administrador padrão:
- **Usuário**: `admin`
- **Senha**: `admin123`

⚠️ **IMPORTANTE**: Altere a senha padrão após o primeiro acesso!

### 6. Inicie o servidor

```bash
npm start
```

Para desenvolvimento com auto-reload:

```bash
npm run dev
```

## 🌐 Acessos

Após iniciar o servidor:

- **Site Principal**: http://localhost:3000
- **Painel Admin**: http://localhost:3000/admin
  - Usuário padrão: `admin`
  - Senha padrão: `admin123`

## 📱 Como Usar

### Para Usuários Finais

1. **Acesso via QR Code**: Escaneie o QR code que leva para a URL do site
2. **Navegação**: Na página principal, escolha entre:
   - 💬 Mensagens Motivacionais
   - 📚 Biblioteca Digital
   - 🧘 Meditação Guiada
   - 📋 Questionário de Saúde
3. **Questionário**: Responda as 13 perguntas e receba recomendações personalizadas

### Para Administradores

1. **Login**: Acesse `/admin` e faça login
2. **Gerenciar Conteúdo**: Use as abas para gerenciar:
   - **Mensagens**: Adicionar mensagens motivacionais
   - **Biblioteca**: Adicionar links, PDFs e conteúdo educativo
   - **Meditações**: Adicionar áudios ou links do YouTube
   - **Questionários**: Visualizar respostas e estatísticas
3. **Vídeos do YouTube**: Para meditações em vídeo, cole o link completo do YouTube no campo apropriado

## ☁️ Deploy na Vercel

### 1. Preparação

```bash
# Certifique-se de que tudo está commitado
git add .
git commit -m "Preparar para deploy"
git push
```

### 2. Deploy na Vercel

#### Opção A: Via Interface Web

1. Acesse [https://vercel.com](https://vercel.com)
2. Faça login (pode usar GitHub)
3. Clique em **"Add New Project"**
4. Conecte seu repositório do GitHub
5. Configure as variáveis de ambiente:
   - **Name**: `DATABASE_URL`
   - **Value**: Cole a Connection String do Neon
6. Clique em **"Deploy"**

#### Opção B: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

### 3. Configurar Variáveis de Ambiente na Vercel

Após o primeiro deploy:

1. Vá em **Settings** > **Environment Variables**
2. Adicione:
   - **Name**: `DATABASE_URL`
   - **Value**: Connection String do Neon
3. Selecione todos os ambientes (Production, Preview, Development)
4. Clique em **Save**

### 4. Executar Migrações

Após o deploy, execute as migrações:

```bash
vercel env pull .env.local
npx prisma migrate deploy
```

Ou adicione no `package.json`:

```json
"scripts": {
  "vercel-build": "prisma generate && prisma migrate deploy"
}
```

## 📁 Estrutura do Projeto

```
CAPS/
├── api/                    # API para Vercel (serverless)
│   └── index.js
├── prisma/                  # Configuração Prisma
│   ├── schema.prisma        # Schema do banco de dados
│   ├── client.js            # Cliente Prisma configurado
│   ├── seed.js              # Dados iniciais
│   └── migrations/          # Migrações do banco
├── public/                  # Arquivos estáticos
│   ├── index.html           # Página principal
│   ├── mensagens.html       # Página de mensagens
│   ├── biblioteca.html      # Página da biblioteca
│   ├── meditacao.html       # Página de meditações
│   ├── quiz.html            # Questionário de saúde
│   ├── styles.css           # Estilos CSS
│   └── admin/              # Painel administrativo
│       ├── login.html       # Login admin
│       └── painel.html      # Painel de gerenciamento
├── uploads/                 # Arquivos enviados
│   ├── audios/             # Áudios de meditação
│   └── images/             # Imagens
├── server.js                # Servidor Express (desenvolvimento)
├── package.json            # Dependências
├── vercel.json             # Configuração Vercel
└── README.md               # Este arquivo
```

## 🔐 Segurança

⚠️ **Recomendações importantes para produção:**

- ✅ Alterar a senha padrão do administrador
- ✅ Usar variáveis de ambiente para dados sensíveis
- ✅ Implementar HTTPS (já incluído na Vercel)
- ✅ Validar uploads de arquivos
- ✅ Considerar autenticação mais robusta (JWT, OAuth)
- ✅ Implementar rate limiting para APIs

## 📊 Banco de Dados

O projeto utiliza **PostgreSQL** hospedado no **Neon.tech** com as seguintes tabelas:

- `mensagens` - Mensagens motivacionais
- `biblioteca` - Conteúdo da biblioteca digital
- `meditacoes` - Meditações guiadas
- `admins` - Administradores do sistema
- `quiz_respostas` - Respostas dos questionários

### Comandos Úteis do Prisma

```bash
# Ver banco de dados no navegador
npm run prisma:studio

# Criar nova migração
npm run prisma:migrate

# Apenas gerar cliente (sem migração)
npm run prisma:generate
```

## 🎨 Personalização

Você pode personalizar o visual do sistema editando `public/styles.css`. As variáveis CSS no início do arquivo controlam o tema:

```css
:root {
  --primary-color: #4A90E2;
  --secondary-color: #50C878;
  --accent-color: #FF6B6B;
  /* ... */
}
```

## 🤝 Contribuindo

Este é um projeto social desenvolvido para o CAPS de Iraquara. Contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é de uso público e foi desenvolvido para fins sociais e educacionais.

## 👥 Equipe

Desenvolvido com ❤️ para o **CAPS - Centro de Atenção Psicossocial** da **Prefeitura de Iraquara**.

## 📞 Contato

Para dúvidas, sugestões ou problemas:

- **Prefeitura de Iraquara**: [Site Oficial](https://www.iraquara.ba.gov.br)
- **CAPS**: Entre em contato com a coordenação do CAPS

## 🙏 Agradecimentos

Agradecemos a todos que contribuíram para tornar este projeto realidade e ajudar na promoção da saúde mental em nossa comunidade.

---

**Desenvolvido com dedicação para promover saúde mental e bem-estar na cidade de Iraquara** 🏥💙
