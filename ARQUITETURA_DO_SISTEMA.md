# 🏗️ ARQUITETURA DA SOLUÇÃO WHITE LABEL

## Visão Geral do Sistema

```
┌─────────────────────────────────────────────────────────────────────┐
│                        LANDING PAGE WHITE LABEL                      │
│                                                                      │
│  Um arquivo para customizar tudo → Múltiplos clientes/versões      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 1️⃣ CAMADA DE CONFIGURAÇÃO

```
┌──────────────────────────────────────────────────┐
│         src/config/index.ts (ARQUIVO PRINCIPAL)   │
├──────────────────────────────────────────────────┤
│                                                  │
│  ✓ COLORS - Paleta de cores                    │
│    ├─ primary: "#B38B59"                        │
│    ├─ primaryDark: "#9A764A"                    │
│    ├─ secondary: "#1A1A1A"                      │
│    └─ ... 12 cores principais                   │
│                                                  │
│  ✓ TYPOGRAPHY - Fontes e Tamanhos              │
│    ├─ googleFontsUrl: "https://..."             │
│    ├─ sans: "'Lato', sans-serif"               │
│    ├─ serif: "'Playfair Display', serif"       │
│    └─ sizes: { xs, sm, base, lg, xl, 2xl... }  │
│                                                  │
│  ✓ CONTENT - Textos e Conteúdo                 │
│    ├─ company: { name, tagline }               │
│    ├─ hero: { title, subtitle, CTA... }        │
│    ├─ features: { items[] }                     │
│    ├─ projects: { items[] }                     │
│    ├─ about: { ... }                            │
│    ├─ contact: { form, info }                   │
│    ├─ footer: { ... }                           │
│    └─ header: { ... }                           │
│                                                  │
│  ✓ ASSETS - Imagens e Logos                    │
│    ├─ logo: { light, dark }                     │
│    ├─ social: { facebook, instagram, ... }      │
│    └─ placeholders: { project, hero }          │
│                                                  │
│  ✓ SEO - Metadados                             │
│    ├─ title: "Título para buscadores"          │
│    ├─ description: "Descrição..."               │
│    ├─ keywords: "..."                           │
│    └─ og: { image, type }                       │
│                                                  │
│  ✓ THEME - Objeto Consolidado                  │
│    └─ Agrupa tudo acima                         │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 2️⃣ CAMADA DE CONTEXTO & HOOKS

```
┌──────────────────────────────────────────────────────┐
│     src/context/ThemeContext.tsx (ACESSO GLOBAL)     │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Provider Component:                                 │
│  ┌────────────────────────────────────────────┐     │
│  │ <ThemeProvider>                            │     │
│  │   ├─ Recebe THEME como prop               │     │
│  │   ├─ Fornece via Context                  │     │
│  │   └─ Disponibiliza para toda app          │     │
│  └────────────────────────────────────────────┘     │
│                                                      │
│  Hooks Disponíveis:                                  │
│  ├─ useTheme()       → Tema completo                │
│  ├─ useColors()      → Apenas COLORS               │
│  ├─ useContent()     → Apenas CONTENT              │
│  ├─ useAssets()      → Apenas ASSETS               │
│  ├─ useSEO()         → Apenas SEO                  │
│  └─ useTypography()  → Apenas TYPOGRAPHY           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 3️⃣ CAMADA DE UTILITÁRIOS

```
┌──────────────────────────────────────────────────────┐
│      src/utils/whiteLabel.ts (FUNÇÕES AUXILIARES)   │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Cores & Estilos:                                    │
│  ├─ withOpacity()         → Transparência           │
│  ├─ createGradient()      → Gradientes CSS          │
│  ├─ adjustBrightness()    → Mais claro/escuro       │
│  ├─ isValidHexColor()     → Valida hexadecimal      │
│  └─ createThemeStyles()   → Objetos de estilos      │
│                                                      │
│  CSS Variables:                                      │
│  ├─ getCSSVariable()              → var(--name)     │
│  ├─ generateCSSVariables()        → Objeto de vars  │
│  └─ generateCSSVariablesString()  → String CSS      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 4️⃣ FLUXO DE DADOS

```
┌─────────────────────────────────────────────────────────────────┐
│                      APLICAÇÃO REACT                            │
│                                                                 │
│  src/main.tsx                                                  │
│  ├─ Importa THEME de src/config/index.ts                       │
│  ├─ Importa ThemeProvider de src/context/ThemeContext.tsx      │
│  └─ Renderiza:                                                 │
│     <ThemeProvider theme={THEME}>                              │
│       <App />                                                  │
│     </ThemeProvider>                                           │
│                                                                 │
│  ↓                                                             │
│                                                                 │
│  src/App.tsx                                                   │
│  ├─ Usa useTheme() para acessar THEME                          │
│  ├─ Define CSS variables globais (:root)                       │
│  └─ Renderiza:                                                 │
│     <Home /> ou <ThankYou />                                   │
│                                                                 │
│  ↓                                                             │
│                                                                 │
│  Componentes (Header, Hero, Features, etc)                     │
│  ├─ Importam hooks (useColors, useContent, etc)                │
│  ├─ Usam em JSX: style={{ color: colors.primary }}             │
│  └─ Exibem dados customizados:                                 │
│     <h1>{content.company.name}</h1>                            │
│                                                                 │
│  ↓                                                             │
│                                                                 │
│  Browser                                                        │
│  └─ Renderiza página customizada com tema aplicado ✨          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 5️⃣ INTEGRAÇÃO COM TAILWIND

```
┌─────────────────────────────────────────────────────────────┐
│         CSS VARIABLES APLICADAS GLOBALMENTE                  │
│                                                             │
│  App.tsx injeta no <style>:                                │
│                                                             │
│  :root {                                                   │
│    --primary: #B38B59;                                    │
│    --primary-dark: #9A764A;                               │
│    --secondary: #1A1A1A;                                  │
│    --text-main: #1A1A1A;                                  │
│    --text-light: #4B5563;                                 │
│    --font-sans: 'Lato', sans-serif;                       │
│    --font-serif: 'Playfair Display', serif;               │
│    ... mais 10+ variáveis                                 │
│  }                                                        │
│                                                             │
│  ↓                                                         │
│                                                             │
│  Usados em Tailwind:                                       │
│  <button className="bg-[var(--primary)]">                 │
│    Ótimo!</button>                                        │
│                                                             │
│  Ou em estilos inline:                                    │
│  <div style={{ color: 'var(--primary)' }}>               │
│    Perfeito!</div>                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 6️⃣ ESTRUTURA PARA MÚLTIPLOS CLIENTES

```
Camada 1: CONFIGURAÇÃO ESPECÍFICA DO CLIENTE
┌─────────────────────────────────────────────┐
│  src/config/brands/cliente1.ts              │
│  src/config/brands/cliente2.ts              │
│  src/config/brands/cliente3.ts              │
└─────────────────────────────────────────────┘

Camada 2: SELEÇÃO DE MARCA
┌─────────────────────────────────────────────┐
│  Por Variável de Ambiente:                  │
│  VITE_BRAND=cliente1 npm run dev            │
│                                             │
│  Ou por localStorage:                       │
│  localStorage.getItem('selectedBrand')      │
│                                             │
│  Ou por URL:                                │
│  https://site.com/cliente1                  │
│                                             │
│  Ou por Subdomain:                          │
│  cliente1.site.com                          │
└─────────────────────────────────────────────┘

Camada 3: DINÂMICA DO TEMA
┌─────────────────────────────────────────────┐
│  App.js detecta marca selecionada           │
│  ↓                                          │
│  Importa configuração específica:           │
│  const brand = BRANDS['cliente1']           │
│  ↓                                          │
│  Passa ao ThemeProvider:                    │
│  <ThemeProvider theme={brand.THEME}>        │
│  ↓                                          │
│  Landing renderizada com tema de cliente1   │
└─────────────────────────────────────────────┘
```

---

## 7️⃣ FLOW VISUAL COMPLETO

```
USER CUSTOMIZA
      ↓
src/config/index.ts (EDITA)
      ↓
COLORS, TYPOGRAPHY, CONTENT, ASSETS, SEO
      ↓
export const THEME = { ... }
      ↓
src/main.tsx IMPORTA
      ↓
<ThemeProvider theme={THEME}>
      ↓
App.tsx ACESSA
      ↓
const { theme } = useTheme()
      ↓
Injeta CSS Variables em :root
      ↓
Componentes USAM
      ↓
const colors = useColors()
const content = useContent()
      ↓
<h1 style={{ color: colors.primary }}>
  {content.company.name}
</h1>
      ↓
BROWSER RENDERIZA
      ↓
LANDING PAGE CUSTOMIZADA ✨
```

---

## 8️⃣ DECISÕES DE DESIGN

```
┌──────────────────────────────────────────────────────┐
│ POR QUE ESSA ARQUITETURA?                            │
├──────────────────────────────────────────────────────┤
│                                                      │
│ ✅ CENTRALIZAÇÃO                                    │
│    Um arquivo para toda customização               │
│    Nenhuma dispersão                                │
│                                                      │
│ ✅ TIPAGEM (TypeScript)                             │
│    Segurança em tempo de desenvolvimento            │
│    Autocomplete no editor                           │
│                                                      │
│ ✅ PERFORMANCE                                      │
│    Context API é leve                              │
│    CSS Variables são nativas                        │
│    Sem overhead desnecessário                       │
│                                                      │
│ ✅ ESCALABILIDADE                                   │
│    Pronto para múltiplos clientes                   │
│    Estrutura replicável                             │
│                                                      │
│ ✅ MANUTENIBILIDADE                                 │
│    Código limpo e organizado                        │
│    Fácil de entender e modificar                    │
│                                                      │
│ ✅ DOCUMENTAÇÃO                                     │
│    6 guias inclusos                                 │
│    Exemplos reais                                   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 9️⃣ COMPONENTES E SEUS HOOKS

```
Header.tsx
├─ useColors() → cores do header
├─ useContent() → textos de navegação
└─ useAssets() → logo

Hero.tsx
├─ useColors() → cores de fundo/texto
├─ useContent() → título, subtítulo, CTA
└─ useTypography() → tamanhos de fonte

Features.tsx
├─ useColors() → cores dos cards
├─ useContent() → títulos e descrições
└─ Ícones do Lucide

Projects.tsx
├─ useColors() → cores de destaque
├─ useContent() → dados dos projetos
└─ useAssets() → imagens

Contact.tsx
├─ useColors() → cores do formulário
├─ useContent() → labels, placeholders
└─ Integração de email/WhatsApp

Footer.tsx
├─ useColors() → cores do footer
├─ useContent() → links e copyright
└─ useAssets() → links sociais
```

---

## 🔟 FLUXO DE DEPLOY

```
DESENVOLVIMENTO LOCAL
  npm install
  npm run dev
  Editar src/config/index.ts
  Ver mudanças em tempo real
      ↓
BUILD PARA PRODUÇÃO
  npm run build
  Gera pasta dist/
      ↓
TESTE PRÉ-DEPLOY
  npm run preview
  Validar em produção local
      ↓
ESCOLHER PLATAFORMA
  ├─ Vercel (Recomendado)
  ├─ Netlify
  └─ Hosting Tradicional
      ↓
DEPLOY
  Fazer upload ou conectar Git
      ↓
MONITIR
  Analytics
  Performance
  Erros
```

---

## 📊 COMPARATIVO: ANTES vs DEPOIS

```
┌─────────────────────────────────────────────────────────┐
│ ANTES (Sem White Label)                                 │
├─────────────────────────────────────────────────────────┤
│ ❌ Cores espalhadas em múltiplos arquivos               │
│ ❌ Textos em componentes individuais                    │
│ ❌ Difícil reutilizar para novo cliente                │
│ ❌ Prop drilling necessário                             │
│ ❌ Sem tipagem centralizada                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ DEPOIS (Com White Label)                                │
├─────────────────────────────────────────────────────────┤
│ ✅ Um arquivo para tudo (src/config/index.ts)          │
│ ✅ Todos os textos centralizados                        │
│ ✅ Reutilizável em segundos para novo cliente           │
│ ✅ Hooks simples, sem prop drilling                     │
│ ✅ TypeScript + tipagem completa                        │
│ ✅ Deploy múltiplo simplificado                         │
│ ✅ Documentação completa inclusa                        │
│ ✅ Pronto para produção                                 │
└─────────────────────────────────────────────────────────┘
```

---

**Versão:** 1.0.0 | Data: 28 de dezembro de 2025

Esta arquitetura foi projetada para **máxima centralização** + **máxima flexibilidade**.

🎯 **Resultado:** Sistema profissional, escalável e fácil de usar!
