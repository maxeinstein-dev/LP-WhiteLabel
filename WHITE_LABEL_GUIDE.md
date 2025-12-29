# 📋 Guia de Customização - Landing Page White Label

## Visão Geral

Esta é uma landing page **white label** totalmente customizável. Toda a parte de configuração está centralizada em um único arquivo, facilitando a criação de diferentes versões para diferentes clientes.

## 📁 Estrutura de Arquivos

```
src/
├── config/
│   ├── index.ts                 ⭐ ARQUIVO PRINCIPAL DE CONFIGURAÇÃO
│   └── USAGE_EXAMPLES.md        📚 Exemplos de uso
├── context/
│   └── ThemeContext.tsx         🎨 Context global do tema
├── utils/
│   └── whiteLabel.ts            🛠️ Funções auxiliares
└── components/
    └── landing/
        ├── Header.tsx
        ├── Hero.tsx
        ├── Features.tsx
        ├── Projects.tsx
        ├── About.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

## 🎯 Como Customizar

### PASSO 1: Cores e Estilo

Abra `src/config/index.ts` e edite a seção **COLORS**:

```typescript
export const COLORS = {
  primary: "#B38B59", // ← Mude para sua cor principal
  primaryDark: "#9A764A", // ← Cor para hover/dark mode
  secondary: "#1A1A1A", // ← Cor secundária
  // ... outras cores
};
```

### PASSO 2: Tipografia (Fontes)

Na seção **TYPOGRAPHY**:

```typescript
export const TYPOGRAPHY = {
  googleFontsUrl: "https://fonts.googleapis.com/css2?family=...", // ← URL do Google Fonts
  sans: "'Lato', sans-serif", // ← Fonte padrão
  serif: "'Playfair Display', serif", // ← Fonte para títulos
};
```

**Como encontrar fontes no Google Fonts:**

1. Acesse [fonts.google.com](https://fonts.google.com)
2. Escolha as fontes que deseja
3. Clique em "Select all variants" ou escolha pesos específicos
4. Copie a URL de importação
5. Cole em `googleFontsUrl`

### PASSO 3: Conteúdo (Textos)

Na seção **CONTENT**, customize:

```typescript
export const CONTENT = {
  company: {
    name: "URBANISMO", // ← Nome da sua empresa
    tagline: "Seu slogan aqui", // ← Slogan
  },

  hero: {
    title: "INOVAÇÃO E",
    titleHighlight: "ELEGÂNCIA URBANA", // ← Parte em destaque
    subtitle: "Seu texto aqui...",
    // ... outros textos
  },

  features: {
    items: [
      {
        icon: "Leaf", // ← Ícone do lucide-react
        title: "Sustentabilidade",
        description: "Descrição...",
      },
      // ... mais features
    ],
  },
  // ... e assim por diante
};
```

### PASSO 4: Imagens e Assets

Na seção **ASSETS**:

```typescript
export const ASSETS = {
  logo: {
    light: "/logo-light.png", // ← URL de sua logo
    dark: "/logo-dark.png",
  },
  social: {
    facebook: "https://facebook.com/seuperfil",
    instagram: "https://instagram.com/seuperfil",
    // ... redes sociais
  },
};
```

### PASSO 5: SEO (Metadados)

Na seção **SEO**, configure para buscadores:

```typescript
export const SEO = {
  title: "Sua Empresa - Slogan",
  description: "Descrição que aparece no Google",
  keywords: "palavra1, palavra2, palavra3",
  og: {
    image: "https://url-da-imagem-para-compartilhar.jpg",
  },
  url: "https://seusiteaqui.com.br",
  locale: "pt_BR", // ou en_US, es_ES, etc.
};
```

---

## 🎨 Usando o Tema nos Componentes

### Método 1: Hook `useTheme()` (Completo)

```tsx
import { useTheme } from "@/context/ThemeContext";

export function MyComponent() {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme.colors.primary }}>
      {theme.content.company.name}
    </div>
  );
}
```

### Método 2: Hooks Específicos (Recomendado)

```tsx
import { useColors, useContent } from "@/context/ThemeContext";

export function HeroSection() {
  const colors = useColors();
  const content = useContent();

  return (
    <section style={{ backgroundColor: colors.background }}>
      <h1 style={{ color: colors.primary }}>{content.hero.title}</h1>
    </section>
  );
}
```

### Método 3: Com Tailwind CSS + CSS Variables

O App.tsx automaticamente define variáveis CSS, então você pode usar:

```tsx
<button className="bg-[var(--primary)] text-[var(--text-inverse)] hover:bg-[var(--primary-dark)]">
  Meu Botão
</button>
```

### Método 4: Com Utilitários

```tsx
import { createGradient, withOpacity } from "@/utils/whiteLabel";
import { useColors } from "@/context/ThemeContext";

export function GradientButton() {
  const colors = useColors();

  return (
    <button
      style={{
        background: createGradient([colors.primary, colors.primaryDark]),
        color: withOpacity(colors.textInverse, 0.9),
      }}
    >
      Clique aqui
    </button>
  );
}
```

---

## 📦 Ícones Disponíveis (Lucide React)

Você pode usar qualquer ícone do [lucide-react](https://lucide.dev). Alguns exemplos:

- `Leaf` - Folha
- `Map` - Mapa
- `Sun` - Sol
- `MapPin` - Localização
- `Phone` - Telefone
- `Mail` - Email
- `Facebook` - Facebook
- `Instagram` - Instagram
- `Linkedin` - LinkedIn
- `Home` - Casa
- `Users` - Usuários
- `Award` - Prêmio
- `Zap` - Raio/Energia

[Ver todos os ícones disponíveis →](https://lucide.dev)

---

## 🔧 Funções Auxiliares

### `withOpacity(color, opacity)`

Adiciona transparência a uma cor:

```typescript
withOpacity("#B38B59", 0.5); // rgba(179, 139, 89, 0.5)
```

### `createGradient(colors, direction)`

Cria um gradiente:

```typescript
createGradient(["#B38B59", "#1A1A1A"], "to right");
// linear-gradient(to right, #B38B59, #1A1A1A)
```

### `adjustBrightness(color, percent)`

Ajusta o brilho de uma cor:

```typescript
adjustBrightness("#B38B59", 20); // Mais claro
adjustBrightness("#B38B59", -20); // Mais escuro
```

### `isValidHexColor(color)`

Valida se uma cor é hexadecimal:

```typescript
isValidHexColor("#B38B59"); // true
```

---

## 📱 Checklist de Customização

- [ ] **Cores** - Modifiquei `COLORS` com a paleta do cliente
- [ ] **Tipografia** - Atualizei fontes em `TYPOGRAPHY`
- [ ] **Conteúdo** - Preenchi todos os textos em `CONTENT`
- [ ] **Imagens** - Adicionei URLs em `ASSETS`
- [ ] **SEO** - Configurei metadados em `SEO`
- [ ] **Componentes** - Revisei componentes específicos se necessário
- [ ] **Testei localmente** - `npm run dev` e validei no navegador
- [ ] **Build de produção** - `npm run build` gerou sem erros

---

## 🚀 Iniciando um Novo White Label

1. **Copie o arquivo de configuração**:

   ```bash
   cp src/config/index.ts src/config/brands/novo-cliente.ts
   ```

2. **Customize para o novo cliente**

3. **Importe no App.tsx**:

   ```typescript
   // Em vez de:
   import { THEME } from "@/config";

   // Use:
   import { THEME as NOVO_CLIENTE } from "@/config/brands/novo-cliente";
   ```

4. **Passe ao ThemeProvider**:
   ```tsx
   <ThemeProvider theme={NOVO_CLIENTE}>
     <App />
   </ThemeProvider>
   ```

---

## 🎯 Estrutura de Cores Recomendada

Para melhor resultados, defina:

- **Primary**: Sua cor mais importante
- **Primary Dark**: Versão mais escura para hover/ativo
- **Primary Light**: Versão mais clara para backgrounds
- **Secondary**: Cor complementar
- **Background**: Fundo principal da página
- **Surface**: Fundo de cards/componentes
- **Text**: Texto principal
- **Text Light**: Texto secundário

---

## 🐛 Troubleshooting

### As cores não estão mudando

- Verifique se o hexadecimal é válido: `#RGB` ou `#RRGGBB`
- Limpe o cache do navegador: `Ctrl+Shift+Del`
- Reinicie o servidor: `Ctrl+C` e `npm run dev`

### As fontes não carregam

- Confirme que a URL do Google Fonts é válida
- Verifique a conexão com a internet
- Teste no incógnito para descartar cache

### Componentes não veem o tema

- Certifique-se de que está dentro de `<ThemeProvider>`
- Use `useTheme()` e não `THEME` diretamente (melhor performance)

---

## 📚 Recursos

- [Google Fonts](https://fonts.google.com) - Escolha fontes
- [Lucide Icons](https://lucide.dev) - Escolha ícones
- [Color Picker](https://htmlcolorcodes.com) - Escolha cores
- [React Context API](https://react.dev/reference/react/createContext) - Documentação

---

## 💡 Dicas Profissionais

1. **Use variáveis CSS** para máxima flexibilidade
2. **Teste em dispositivos móveis** regularmente
3. **Mantenha backup** da configuração original
4. **Documente mudanças** para referência futura
5. **Use Dark Mode** com variantes das cores
6. **Teste acessibilidade** de contraste (A11y)

---

## 🆘 Suporte

Se tiver dúvidas sobre customização:

1. Verifique `USAGE_EXAMPLES.md`
2. Consulte o código existente dos componentes
3. Revise a estrutura de tipos em TypeScript

---

**Última atualização:** 28 de dezembro de 2025
