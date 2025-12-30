# Template de Landing Page - White Label

Uma **fábrica de Landing Pages** moderna em **Vanilla JavaScript puro** com **Bootstrap 5.3** e **Swiper**.

**Filosofia:** Código fixo, Configuração dinâmica. Sem build tools, sem dependencies, apenas HTML + CSS + JS puro.

## 🎯 Características

✅ **Uma linha muda tudo** - Customize cores, conteúdo e SEO em `src/config/config.js`  
✅ **Zero dependências** - Apenas Bootstrap e Swiper via CDN  
✅ **Vanilla JavaScript** - Sem frameworks (React, Vue, Angular)  
✅ **Código limpo** - Validação, constantes nomeadas, tratamento de erros  
✅ **Acessível** - WCAG AA (92 score no Lighthouse)  
✅ **Performático** - 94 score Performance, lazy loading, otimizações de renderização  
✅ **SEO-ready** - Meta tags dinâmicas, schema.org ready (100 SEO score)  
✅ **Responsivo** - Mobile-first, Swiper carousel automático

---

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
LP-WhiteLabel/
├── src/
│   ├── config/
│   │   ├── config.js              ← Arquivo de configuração centralizado (EDITE AQUI!)
│   │   └── config.exemplo.js      ← Template com tema alternativo (Tech Solutions)
│   ├── styles/
│   │   └── styles.css             ← Estilos globais (animações, componentes customizados)
│   ├── images/
│   │   └── alfama-logo.png        ← Logo da AlfamaWeb (footer)
│   ├── constants.js               ← Constantes nomeadas (magic numbers)
│   ├── validator.js               ← Validação automática de config
│   ├── main.js                    ← Renderizador principal (ES6 modules, 610+ linhas)
│   └── tests.js                   ← Testes unitários sem dependências
├── index.html                     ← Ponto de entrada (preload otimizado)
├── README.md                      ← Documentação (este arquivo)
├── .gitignore                     ← Arquivos ignorados no Git
└── .git/                          ← Repositório Git (GitHub Pages)
```

## 🏗️ Stack Técnico

| Tecnologia   | Versão | Uso                                  | CDN          | Status     |
| ------------ | ------ | ------------------------------------ | ------------ | ---------- |
| Bootstrap    | 5.3.0  | Framework CSS responsivo             | jsDelivr     | ✅ CDN     |
| Swiper       | 11     | Carrossel de projetos                | jsDelivr     | ✅ CDN     |
| Google Fonts | -      | Tipografia (Playfair Display + Lato) | Google Fonts | ✅ Preload |
| Vanilla JS   | ES6+   | Sem frameworks, modules nativas      | Inline       | ✅ Local   |

---

## 📊 Performance

**Scores Lighthouse (Mobile, Moto G Power 4G):**

| Métrica           | Score   |
| ----------------- | ------- |
| 🚀 Performance    | **94**  |
| ♿ Acessibilidade | **92**  |
| ✅ Best Practices | **100** |
| 🔍 SEO            | **100** |

**Otimizações implementadas:**

- ✅ Lazy loading de imagens com width/height
- ✅ Throttle de scroll events (requestAnimationFrame)
- ✅ Preload de Google Fonts com display=swap
- ✅ Remoção de CSS transitions globais (previne forced reflow)
- ✅ Cache control headers (1 hora)
- ✅ Estrutura HTML semântica e acessível
- ✅ Zero console errors em navegadores modernos

**Métricas Core Web Vitals:**

- First Contentful Paint (FCP): 2,4s
- Largest Contentful Paint (LCP): 2,5s
- Total Blocking Time (TBT): 0ms ✅
- Cumulative Layout Shift (CLS): 0 ✅
- Speed Index: 2,4s

## 🧪 Testes Unitários

Execute testes localmente:

```bash
node src/tests.js
```

Valida:

- ✅ Cores hexadecimais (#B38B59)
- ✅ URLs de Google Fonts
- ✅ Estrutura de config completa
- ✅ Arrays obrigatórios (navigation, features, projects)

---

## ✨ White-Label Template

Este projeto é um **template pronto para clientes**. Dois exemplos incluídos:

1. **URBANISMO** - Arquitetura urbana (config.js)
2. **TECH SOLUTIONS** - Empresa de tecnologia (config.exemplo.js)

Para criar um novo cliente, copie `src/config/config.js`:

```bash
cp src/config/config.js src/config/config.novo-cliente.js
```

Edite os valores e renomeie em `index.html`:

```javascript
// import { COLORS, CONTENT, ... } from "./src/config/config.js";
import { COLORS, CONTENT, ... } from "./src/config/config.novo-cliente.js";
```

---

## 🔒 Segurança

- ✅ Content Security Policy (CSP) efetiva
- ✅ HSTS forte (se em HTTPS)
- ✅ Proteção contra XSS
- ✅ Prevenção de clickjacking

---

## 📱 Responsividade

- ✅ Mobile-first (design)
- ✅ Breakpoints Bootstrap (576px, 768px, 992px, 1200px)
- ✅ Touch-friendly buttons (48px mínimo)
- ✅ Swiper automático em mobile

---

## 🚀 Deployment

Configure GitHub Pages nas settings do repositório:

1. **Settings → Pages**
2. **Branch:** `main`
3. **Folder:** `/` (root)
4. Clique em **Save**

GitHub Pages servirá `index.html` automaticamente.

---

## 🛠️ Checklist de Customização

- [ ] 1. Editar `src/config/config.js` com suas cores
- [ ] 2. Editar conteúdo (company, hero, features, projects, about, contact)
- [ ] 3. Editar SEO (title, description, keywords)
- [ ] 4. Testar localmente: `python -m http.server 8000`
- [ ] 5. Executar testes: `node src/tests.js`
- [ ] 6. Commit e push para `main`
- [ ] 7. GitHub Pages faz deploy automaticamente

---

## 📖 Referências

- [Bootstrap 5 Documentação](https://getbootstrap.com/docs/5.3/)
- [Swiper Documentação](https://swiperjs.com/)
- [Google Fonts](https://fonts.google.com/)
- [Lighthouse Accessibility](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 📄 Licença

Maxsuel Einstein

Maxsuel Einstein
