# 🎨 Sistema White Label - Quick Start

## O Que Foi Criado?

Sistema completo de customização centralizada para transformar esta landing page em um produto white label reutilizável.

## 📂 Arquivos Principais

| Arquivo                             | Propósito                                                               |
| ----------------------------------- | ----------------------------------------------------------------------- |
| `src/config/index.ts`               | ⭐ **CONFIGURAÇÃO CENTRAL** - Todas as cores, fontes, textos e conteúdo |
| `src/context/ThemeContext.tsx`      | Context global + hooks para acessar tema em componentes                 |
| `src/utils/whiteLabel.ts`           | Funções auxiliares (cores, gradientes, etc)                             |
| `WHITE_LABEL_GUIDE.md`              | 📚 Guia completo de customização                                        |
| `src/config/USAGE_EXAMPLES.md`      | Exemplos de como usar em componentes                                    |
| `src/config/MULTI_BRAND_EXAMPLE.md` | Como gerenciar múltiplos clientes                                       |

## 🚀 Início Rápido (3 passos)

### 1️⃣ Customize as cores

Abra `src/config/index.ts` e edite:

```typescript
export const COLORS = {
  primary: "#B38B59", // Mude para SUA cor principal
  primaryDark: "#9A764A", // Cor mais escura para hover
  secondary: "#1A1A1A", // Cor secundária
  // ... outras cores
};
```

### 2️⃣ Customize as fontes

```typescript
export const TYPOGRAPHY = {
  googleFontsUrl: "https://fonts.googleapis.com/...", // URL do Google Fonts
  sans: "'SuaFonte', sans-serif",
  serif: "'OutraFonte', serif",
};
```

### 3️⃣ Customize o conteúdo

```typescript
export const CONTENT = {
  company: {
    name: "SUA EMPRESA",
    tagline: "Seu slogan aqui",
  },
  hero: {
    title: "NOVO",
    titleHighlight: "TÍTULO DESTACADO",
    subtitle: "Seu texto aqui...",
    // ... mais conteúdo
  },
  // ... tudo mais
};
```

## 🎯 Como Usar em Componentes

### Opção 1: Hook simples (Recomendado)

```tsx
import { useColors, useContent } from "@/context/ThemeContext";

export function Hero() {
  const colors = useColors();
  const content = useContent();

  return <div style={{ color: colors.primary }}>{content.company.name}</div>;
}
```

### Opção 2: Com Tailwind CSS

```tsx
<button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)]">
  Clique
</button>
```

## 📋 Estrutura de Configuração

```
config/index.ts
├── COLORS              (paleta de cores)
├── TYPOGRAPHY          (fontes e tamanhos)
├── CONTENT             (textos e mensagens)
│   ├── company
│   ├── hero
│   ├── features
│   ├── projects
│   ├── about
│   ├── contact
│   ├── footer
│   └── header
├── ASSETS              (logos, imagens, redes sociais)
├── SEO                 (metadados para buscadores)
└── THEME               (objeto consolidado)
```

## 🔄 Para Múltiplos Clientes

### Opção A: Usar variável de ambiente

```bash
# .env.local
VITE_BRAND=cliente1

# Depois importe dinamicamente em config/index.ts
```

### Opção B: Criar arquivos separados

```
config/brands/
├── urbanismo.ts
├── luxusimóveis.ts
├── ecovia.ts
└── template.ts
```

Ver `src/config/MULTI_BRAND_EXAMPLE.md` para detalhes.

## ✨ Recursos Disponíveis

### Hooks para acessar tema

- `useTheme()` - Tema completo
- `useColors()` - Apenas cores
- `useContent()` - Apenas conteúdo
- `useAssets()` - Apenas assets
- `useSEO()` - Apenas SEO
- `useTypography()` - Apenas tipografia

### Funções auxiliares

```typescript
import {
  withOpacity,
  createGradient,
  adjustBrightness,
} from "@/utils/whiteLabel";

withOpacity("#B38B59", 0.5); // rgba com transparência
createGradient(["#fff", "#000"]); // gradiente CSS
adjustBrightness("#B38B59", 20); // mais claro/escuro
```

## 📚 Documentação Completa

- **WHITE_LABEL_GUIDE.md** - Guia detalhado com exemplos
- **src/config/USAGE_EXAMPLES.md** - Exemplos de código
- **src/config/MULTI_BRAND_EXAMPLE.md** - Estratégias para múltiplas marcas

## ✅ Checklist Customização

- [ ] Alterei cores em `COLORS`
- [ ] Atualizei fontes em `TYPOGRAPHY`
- [ ] Preenchi conteúdo em `CONTENT`
- [ ] Configurei imagens em `ASSETS`
- [ ] Defini metadados em `SEO`
- [ ] Testei localmente: `npm run dev`
- [ ] Validei no navegador

## 🎨 Paleta de Cores Sugerida

Para melhor resultado profissional, use:

- **Primary**: Sua cor de marca (destaque)
- **Primary Dark**: 15-20% mais escura (hover/active)
- **Secondary**: Cor complementar
- **Background**: Cinza muito claro (#F5F5F5)
- **Surface**: Branco (#FFFFFF)
- **Text**: Preto escuro (#1A1A1A)
- **Text Light**: Cinza médio (#4B5563)

## 🚀 Próximos Passos

1. **Customize `src/config/index.ts`** com suas cores, fontes e conteúdo
2. **Execute** `npm install` seguido de `npm run dev`
3. **Veja as mudanças** em tempo real no navegador
4. **Para produção** execute `npm run build`

## 🆘 Dúvidas Frequentes

**P: As cores não mudaram**
R: Limpe o cache (Ctrl+Shift+Del) e reinicie o servidor

**P: Posso ter múltiplos white labels?**
R: Sim! Veja `MULTI_BRAND_EXAMPLE.md`

**P: Como adiciono minhas imagens?**
R: Atualize URLs em `ASSETS` em `src/config/index.ts`

**P: Preciso mudar um componente específico?**
R: Use `useColors()` ou `useContent()` nos componentes individuais

---

**Versão:** 1.0.0 | **Data:** 28 de dezembro de 2025
