# Template de Landing Page - White Label

Este projeto é uma **fábrica de Landing Pages** em Vanilla JavaScript puro com Tailwind CSS.

**Filosofia:** Código fixo, Configuração dinâmica. Sem build tools, sem dependencies, apenas HTML + CSS + JS puro.

## 🎯 Princípios de Código Limpo Implementados

Este projeto aplica boas práticas de engenharia de software:

### ✅ **1. Validação de Configuração** (`src/validator.js`)

**Por quê:** Erros em config são detectados **imediatamente na inicialização**, com mensagens claras.
**Benefício:** Economia de tempo em debugging. Falha rápido, falha cedo.

```javascript
// Na inicialização, config.js é validada automaticamente
validateConfig({ COLORS, TYPOGRAPHY, CONTENT, SEO });
// ❌ Erro → Mensagem clara apontando o problema
```

### ✅ **2. Constantes Nomeadas** (`src/constants.js`)

**Por quê:** Evita "magic numbers" espalhados no código. `TIMING.CAROUSEL_AUTOPLAY_INTERVAL` é mais legível que `4000`.
**Benefício:** Alterações centralizadas - mude uma vez, afeta tudo.

```javascript
// ❌ Antes (magic number)
setTimeout(() => carousel.next(), 4000);

// ✅ Depois (constante nomeada)
setTimeout(() => carousel.next(), TIMING.CAROUSEL_AUTOPLAY_INTERVAL);
```

### ✅ **3. Tratamento de Erros** (`src/main.js`)

**Por quê:** Sem try-catch, um erro crash a página inteira.
**Benefício:** Usuário vê mensagem amigável, não branco em branco.

```javascript
try {
  validateConfig({ COLORS, TYPOGRAPHY, CONTENT, SEO });
  renderHeader();
  // ... resto da app
} catch (error) {
  // Mostra erro amigável em vez de crash silencioso
  console.error("❌ [App] Erro crítico:", error);
}
```

### ✅ **4. JSDoc Completo** (`src/main.js`)

**Por quê:** IDE autocomplete, type hints sem TypeScript, documentação automática.
**Benefício:** Melhor DX (Developer Experience).

```javascript
/**
 * Renderiza seção de hero
 * @returns {void}
 * @example
 * renderHero(); // Renderiza na div#main
 */
function renderHero() { ... }
```

### ✅ **5. Testes Unitários** (`src/tests.js`)

**Por quê:** Detecta regressões antes de deploy.
**Benefício:** Refatorações seguras, menos bugs em produção.

```bash
# Execute testes (sem dependências!)
node src/tests.js
```

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
