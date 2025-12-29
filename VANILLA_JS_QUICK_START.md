# 🚀 Quick Start - Vanilla JS Edition

## ⚡ 5 Minutos para Começar

### 1. Instale Dependências (1 min)

```bash
npm install
```

### 2. Inicie Servidor Local (1 min)

```bash
npm run dev
```

Abre automaticamente em `http://localhost:3000` 🎉

### 3. Customize para Seu Cliente (2 min)

Abra este arquivo:

```
📄 src/config/config.js
```

Altere apenas:

```javascript
// 1. CORES
export const COLORS = {
  primary: "#SEU_NOVO_COR", // Cor principal do cliente
  primaryDark: "#TONESCURO", // Hover color
  // ... resto das cores
};

// 2. TEXTOS E CONTEÚDO
export const CONTENT = {
  company: {
    name: "Nome do Cliente", // ← Mude para nome real
  },
  hero: {
    title: "Título Principal", // ← Seu novo título
    subtitle: "Subtítulo...", // ← Seu novo subtítulo
    // ... resto do conteúdo
  },
};
```

### 4. Build para Produção (1 min)

```bash
npm run build
```

Pronto! A pasta `dist/` contém seu site.

---

## 📝 Template Básico de Config

Copie, cole e customize:

```javascript
export const COLORS = {
  primary: "#0055FF", // Cor botões, links
  primaryDark: "#003399", // Hover
  secondary: "#111111", // Textos importantes
  background: "#F5F5F5", // Fundo geral
  surface: "#FFFFFF", // Cards
  text: "#1A1A1A", // Texto padrão
  textLight: "#4B5563", // Texto secundário
};

export const CONTENT = {
  company: {
    name: "Seu Negócio",
    tagline: "Uma frase que vende",
  },

  hero: {
    title: "Título que Chama Atenção",
    titleHighlight: "Palavra em Destaque",
    subtitle: "Subtítulo que explica benefício",
    ctaPrimary: { label: "Começar", link: "#contact" },
    ctaSecondary: { label: "Saiba Mais", link: "#features" },
    backgroundImage: "https://via.placeholder.com/1200x600",
  },

  features: {
    title: "Por Que Nos Escolher",
    items: [
      {
        icon: "leaf",
        title: "Diferencial 1",
        description: "Descrição do diferencial",
      },
      {
        icon: "map",
        title: "Diferencial 2",
        description: "Descrição do diferencial",
      },
    ],
  },

  projects: {
    title: "Nossos Projetos",
    items: [
      {
        title: "Projeto 1",
        description: "Descrição do projeto",
        image: "https://via.placeholder.com/600x400",
        link: "#",
      },
    ],
  },

  contact: {
    title: "Entre em Contato",
    address: "Endereço Completo",
    phone: "+55 (XX) 9XXXX-XXXX",
    email: "contato@empresa.com",
  },
};
```

---

## 🎨 Exemplos de Customização

### Exemplo 1: Agência de Viagens

```javascript
export const COLORS = {
  primary: "#FF6B35", // Laranja vibrante
  primaryDark: "#D95626",
  secondary: "#004E89", // Azul oceano
};

export const CONTENT = {
  company: { name: "Viagens Incríveis" },
  hero: {
    title: "Explore o Mundo",
    titleHighlight: "Conosco",
    features: [
      { icon: "map", title: "Destinos Exóticos", description: "..." },
      { icon: "sun", title: "Pacotes Personalizados", description: "..." },
    ],
  },
};
```

### Exemplo 2: E-commerce

```javascript
export const CONTENT = {
  company: { name: "Sua Loja Online" },
  hero: {
    title: "Moda de Qualidade",
    subtitle: "Entrega em Todo Brasil",
  },
  projects: {
    title: "Coleção Exclusiva",
    items: [
      { title: "Coleção Verão 2025", image: "..." },
      { title: "Coleção Inverno", image: "..." },
    ],
  },
};
```

### Exemplo 3: Consultoria

```javascript
export const CONTENT = {
  company: { name: "Consultoria XYZ" },
  hero: {
    title: "Transforme Seu Negócio",
    subtitle: "Com Estratégias Comprovadas",
  },
  features: [
    { title: "Diagnóstico Completo", description: "..." },
    { title: "Implementação", description: "..." },
    { title: "Resultados Mensuráveis", description: "..." },
  ],
};
```

---

## 🖼️ Ícones Disponíveis

Você pode usar estes ícones nos `features`:

- `leaf` - Folha (sustentabilidade)
- `map` - Mapa (localização)
- `sun` - Sol (energia/brilho)

Quer outro ícone? Adicione em `src/utils/vanilla-utils.js`:

```javascript
export function renderIcon(iconName) {
  const icons = {
    // ... existentes
    star: `<svg>...</svg>`, // ← Novo ícone
  };
}
```

---

## 🎥 Personalizando Imagens

### Opção 1: URLs Externas (Recomendado)

```javascript
backgroundImage: "https://unsplash.com/photos/ABC123/download?w=1200";
```

Fontes gratuitas:

- [Unsplash](https://unsplash.com/)
- [Pexels](https://pexels.com/)
- [Pixabay](https://pixabay.com/)

### Opção 2: Pasta `public/`

1. Coloque imagem em `public/minha-imagem.jpg`
2. Use em config:

```javascript
backgroundImage: "/minha-imagem.jpg";
```

---

## ✅ Checklist Antes de Publicar

- [ ] Nome da empresa correto
- [ ] Cores customizadas
- [ ] Textos e conteúdo prontos
- [ ] Imagens carregando
- [ ] Links funcionando (`href="#contact"`)
- [ ] Telefone e email corretos
- [ ] Testou em mobile
- [ ] Teste em 2-3 navegadores diferentes

---

## 🧪 Testando Localmente

```bash
# 1. Inicie servidor
npm run dev

# 2. Acesse em navegador
# http://localhost:3000

# 3. Abra DevTools (F12 ou Cmd+Opt+I)

# 4. Verifique:
# - Performance (Lighthouse)
# - Console (erros?)
# - Responsividade (device emulation)
# - Acessibilidade (Audit)
```

---

## 📦 Deploy (Escolha Uma Opção)

### ✅ Vercel (Recomendado - Gratuito)

```bash
npm install -g vercel
vercel
# Siga os prompts
```

### ✅ Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### ✅ GitHub Pages

```bash
# Edite vite.config.ts
# base: "/seu-repo-name/"

npm run build
# Faça push da pasta 'dist' para gh-pages
```

### ✅ Hostgator / Hospedagem Compartilhada

```bash
npm run build
# Via FTP, envie conteúdo de 'dist/' para 'public_html/'
```

---

## 🆘 Problemas Comuns

### ❓ "Não vejo mudanças após editar config"

**Solução:** Reinicie servidor

```bash
# Pressione Ctrl+C no terminal
# Rode novamente:
npm run dev
```

### ❓ "Imagens não carregam"

**Solução:** Verifique URL

```javascript
// Errado:
backgroundImage: "minha-imagem.jpg";

// Correto:
backgroundImage: "/minha-imagem.jpg";
// ou
backgroundImage: "https://exemplo.com/imagem.jpg";
```

### ❓ "Cores não mudaram"

**Solução:** Certifique-se de editar `config.js`, não outro arquivo

```javascript
export const COLORS = {
  // ← Verifique isto
  primary: "#NOVA_COR",
};
```

### ❓ "Formulário não funciona"

**Solução:** Atualmente é uma demo. Para integração real:

```javascript
// Em src/main.js, função handleFormSubmit()
// Integre com sua API ou serviço (Zapier, Make, etc)

async function handleFormSubmit(data, form) {
  // Envie para seu backend/serviço aqui
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
```

---

## 📱 Teste em Mobile

### Opção 1: DevTools do Navegador

1. Abra DevTools (F12)
2. Clique ícone mobile 📱
3. Escolha "iPhone" ou "Android"

### Opção 2: No Seu Celular

```bash
# Descubra seu IP local:
ipconfig getifaddr en0  # macOS/Linux

# Ou em Windows:
ipconfig

# Acesse do celular:
# http://seu-ip-local:3000
```

---

## 🎯 Próximo Passo

Pronto para publicar? Rode:

```bash
npm run build
```

Envie conteúdo de `dist/` para seu hospedador! 🚀

---

## 📖 Aprenda Mais

- [VANILLA_JS_README.md](./VANILLA_JS_README.md) - Documentação completa
- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - O que mudou do React
- [src/config/config.js](./src/config/config.js) - Todas as opções de config

---

**Sucesso! Seu site está pronto! 🎉**

_Dúvidas? Verifique os arquivos de documentação ou revisão o código-fonte - é tudo comentado!_
