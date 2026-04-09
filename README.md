# PokeExplorer 🎮

Uma aplicação web interativa desenvolvida com **Next.js 14** que permite explorar e descobrir informações detalhadas sobre Pokémon utilizando a **PokéAPI**.

## 📋 Visão Geral

PokeExplorer é um catálogo interativo de Pokémon que demonstra domínio prático de conceitos fundamentais do Next.js, incluindo:

- ✅ Estrutura de rotas com App Router
- ✅ Rotas dinâmicas com parâmetros
- ✅ Componentização e reutilização
- ✅ Consumo de API pública com requisições GET
- ✅ Navegação entre páginas com Link
- ✅ Server Components e data fetching

## 🚀 Funcionalidades

### Página Principal (`/`)
- Listagem de 20 Pokémon da PokéAPI
- Exibição de imagem e nome de cada Pokémon
- Cards clicáveis que redirecionam para a página de detalhes
- Link para acessar a página "Sobre"

### Página de Detalhes (`/pokemon/[name]`)
- Nome, ID e imagem oficial do Pokémon
- Tipos de Pokémon (com cores distintas)
- Peso e altura em unidades apropriadas
- 3 primeiras habilidades do Pokémon
- Navegação de volta para o catálogo

### Página Sobre (`/sobre`)
- Informações do desenvolvedor
- Descrição do projeto
- Tecnologias utilizadas
- Requisitos atendidos
- Instruções de execução

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização responsiva
- **PokéAPI** - API gratuita de Pokémon (https://pokeapi.co)

## 📦 Estrutura do Projeto

```
pokeexplorer/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Rota principal - listagem
│   │   ├── layout.tsx            # Layout raiz com Header e Footer
│   │   ├── globals.css           # Estilos globais
│   │   ├── sobre/
│   │   │   └── page.tsx          # Página estática /sobre
│   │   └── pokemon/
│   │       └── [name]/
│   │           └── page.tsx      # Rota dinâmica /pokemon/:name
│   └── components/
│       ├── Header.tsx            # Cabeçalho da aplicação
│       ├── Footer.tsx            # Rodapé com créditos
│       └── PokemonCard.tsx       # Card de Pokémon para listagem
├── public/                       # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🏃 Como Executar Localmente

### Pré-requisitos
- Node.js 16.x ou superior
- npm, yarn, pnpm ou bun

### Passos de Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/usuario/pokeexplorer.git
   cd pokeexplorer
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação em ação.

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento com hot reload
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm run start

# Lint e verificação de código
npm run lint
```

## 🌐 Deploy

A aplicação pode ser facilmente deployada na **Vercel** (recomendado para Next.js):

1. Faça push do seu código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Vercel detectará automaticamente que é um projeto Next.js
5. Clique em "Deploy"

A aplicação estará disponível em `https://seu-projeto.vercel.app`

## 🎯 Requisitos Técnicos Atendidos

| Req. | Descrição | Status |
|------|-----------|--------|
| R1 | Projeto Next.js com App Router v14+ | ✅ |
| R2 | Rota principal com 20 Pokémon da PokéAPI | ✅ |
| R3 | Rota dinâmica /pokemon/[name] com detalhes | ✅ |
| R4 | 3+ componentes reutilizáveis | ✅ |
| R5 | Navegação com Link do Next.js | ✅ |
| R6 | Página /sobre estática | ✅ |

## 📚 Referências

- [Documentação Next.js](https://nextjs.org/docs)
- [PokéAPI Docs](https://pokeapi.co/docs/v2)
- [Tailwind CSS](https://tailwindcss.com)

## 👨‍🎓 Aluno

**Nome:** Aluno FAETERJ  
**Disciplina:** Programação e Design para Web II  
**Instituição:** FAETERJ - Barra Mansa

## 📄 Licença

Este projeto foi desenvolvido como trabalho acadêmico e pode ser utilizado livremente.

---

**Desenvolvido em 2026**
