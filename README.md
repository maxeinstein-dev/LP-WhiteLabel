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

Abra: http://localhost:8000

**Opção 2: VS Code Live Server (extensão)**

- Instale a extensão "Live Server" no VS Code e clique em "Go Live" para servir o `index.html`.

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
│   └── config.js          ← Arquivo de configuração centralizado
├── constants.js           ← Constantes nomeadas (magic numbers)
├── validator.js           ← Validação de config na inicialização
├── tests.js              ← Testes unitários
├── main.js               ← Renderizador da página
├── utils/
│   └── vanilla-utils.js  ← Utilitários (scroll suave)
└── styles/
    └── animations.css    ← Estilos customizados
```

## 🎯 Stack

- **Vanilla JavaScript** - Zero frameworks, zero dependências em runtime
- **Tailwind CSS** - Compilado via CLI (sem CDN em produção)
- **HTML/CSS/JS Puro** - Deploy direto no GitHub Pages

## 🧪 Testes

Execute testes unitários localmente:

```bash
node src/tests.js
```

Valida:

- ✅ Cores hexadecimais
- ✅ URLs de Google Fonts
- ✅ Estrutura de config
- ✅ Arrays obrigatórios

## 🧱 Tailwind (produção)

Para evitar o aviso do CDN e usar Tailwind corretamente em produção, gere um CSS estático:

1. Gere o CSS minificado com o Tailwind CLI:

```bash
npm run build:css
```

2. Confirme que o `index.html` importa o arquivo gerado:

```html
<link rel="stylesheet" href="./src/styles/tw.css" />
```

3. Sempre que mudar HTML/JS (classes Tailwind), rode o comando de build acima novamente.

Arquivos criados:

- `tailwind.config.js` (content aponta para `index.html` e `src/**/*.js`)
- `src/styles/tailwind.css` (entrada com `@tailwind base; components; utilities;`)

## 🚀 Deployment

Configure GitHub Pages nas settings do repositório:

1. **Settings → Pages**
2. **Branch:** `main`
3. **Folder:** `/` (root)
4. Clique em **Save**

GitHub Pages servirá `index.html` + `src/styles/tw.css` automaticamente.

## ✅ Checklist de Customização

1. Editar `src/config/config.js` com suas cores, conteúdo e assets
2. Testar localmente: `python -m http.server 8000`
3. Executar testes: `node src/tests.js`
4. Commit e push para `main`
5. GitHub Pages faz deploy automaticamente

## 📖 Licença

Maxsuel Einstein
