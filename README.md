# Template de Landing Page - White Label

Este projeto é uma **fábrica de Landing Pages** em Vanilla JavaScript com Tailwind CSS.

**Filosofia:** Código fixo, Configuração dinâmica

## 🚀 Quick Start

### Instalação

```bash
npm install
```

### Desenvolvimento Local

```bash
npm run dev
```

O navegador abrirá automaticamente em http://localhost:3000

### Deployment

O build é **automático** via GitHub Actions:

- Push para `main` → Build automático → Deploy no GitHub Pages
- Visualize em: https://maxeinstein-dev.github.io/LP-WhiteLabel/

## 📝 Customização

Toda customização acontece em um único arquivo:
👉 **`src/config/config.js`**

### A. Cores e Tipografia

```javascript
export const COLORS = {
  primary: "#0055FF",
  primaryDark: "#003399",
  secondary: "#111111",
  background: "#FFFFFF",
};

export const TYPOGRAPHY = {
  serif: "'Playfair Display', serif",
  sans: "'Inter', sans-serif",
  googleFontsUrl: "https://fonts.googleapis.com/css2?family=...",
};
```

### B. Conteúdo

```javascript
export const CONTENT = {
  companyName: "Sua Empresa",
  hero: {
    title: "Título Principal",
    subtitle: "Subtítulo",
    // ...
  },
  features: [...],
  projects: [...],
  // ...
};
```

### C. Formulário

```javascript
export const FORMS = {
  contact: {
    action: "https://seu-endpoint.com/form",
    successMessage: "Mensagem enviada com sucesso!",
  },
};
```

## 📁 Estrutura

```
src/
├── config/
│   └── config.js          ← Arquivo de configuração principal
├── main.js                ← Renderizador da página
├── utils/
│   └── vanilla-utils.js   ← Funções auxiliares
├── components/            ← Componentes UI
└── styles/                ← Estilos globais
```

## 📦 Build & Deploy

**Local:**

```bash
npm run dev        # Desenvolvimento
npm run build      # Build local (opcional)
npm run preview    # Preview do build
```

**Produção:**

- Build automático via GitHub Actions (`.github/workflows/deploy.yml`)
- Deploy automático no GitHub Pages

## 🎯 Stack

- Vite 6.3.5 - Build tool
- Vanilla JavaScript - Sem frameworks
- Tailwind CSS - Via CDN
- GitHub Actions - CI/CD automático

## ✅ Checklist

1. Editar `src/config/config.js`
2. Testar com `npm run dev`
3. Commit e push para `main`
4. GitHub Actions faz build e deploy automaticamente

## 📖 Licença

MIT
