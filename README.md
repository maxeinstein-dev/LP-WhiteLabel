# Template de Landing Page - White Label

Este projeto é uma **fábrica de Landing Pages** em Vanilla JavaScript puro com Tailwind CSS.

**Filosofia:** Código fixo, Configuração dinâmica. Sem build tools, sem dependencies, apenas HTML + CSS + JS puro.

## 🚀 Quick Start

### Desenvolvimento Local

**Opção 1: Python (builtin)**

```bash
python -m http.server 8000
```

**Opção 2: Node.js**

```bash
npx http-server
```

Abra: http://localhost:8000

### Deployment

- Push para `main` → Deploy automático no GitHub Pages
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
  sans: "'Lato', sans-serif",
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

## 📁 Estrutura

```
src/
├── config/
│   └── config.js          ← Arquivo de configuração principal
├── main.js                ← Renderizador da página
├── utils/
│   └── vanilla-utils.js   ← Funções auxiliares
└── styles/
    └── animations.css     ← Estilos customizados
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
