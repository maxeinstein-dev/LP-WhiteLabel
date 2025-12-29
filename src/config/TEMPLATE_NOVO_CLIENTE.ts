/**
 * ============================================================================
 * TEMPLATE MINIMALISTA - PARA NOVO CLIENTE
 * ============================================================================
 *
 * USE ESTE ARQUIVO COMO PONTO DE PARTIDA PARA CRIAR NOVO WHITE LABEL
 *
 * INSTRUÇÕES:
 * 1. Copie este arquivo
 * 2. Renomeie para: src/config/brands/[nome-cliente].ts
 * 3. Preencha os placeholders marcados com [CUSTOMIZE AQUI]
 * 4. Mantenha a estrutura igual
 * 5. Teste localmente
 *
 * Para usar: Importe em src/main.tsx e passe ao ThemeProvider
 */

export const COLORS = {
  primary: "[CUSTOMIZE AQUI - COR PRINCIPAL, ex: #B38B59]",
  primaryDark: "[CUSTOMIZE AQUI - COR ESCURA, ex: #9A764A]",
  primaryLight: "[CUSTOMIZE AQUI - COR CLARA, ex: #D4A574]",

  secondary: "#1A1A1A",
  secondaryLight: "#4B5563",

  background: "#F5F5F5",
  backgroundDark: "#EEEEEE",
  surface: "#FFFFFF",
  surfaceDark: "#F9F9F9",

  text: "#1A1A1A",
  textLight: "#4B5563",
  textLighter: "#8A92A2",
  textInverse: "#FFFFFF",

  success: "#10B981",
  error: "#EF4444",
  warning: "#F59E0B",
  info: "#3B82F6",

  border: "#E5E7EB",
  borderLight: "#F3F4F6",
};

export const TYPOGRAPHY = {
  // Cole a URL do Google Fonts aqui
  // https://fonts.google.com → Escolha fontes → Copie URL
  googleFontsUrl: "[CUSTOMIZE AQUI - URL DO GOOGLE FONTS]",

  // Nomes exatos das fontes do Google Fonts
  sans: "[CUSTOMIZE AQUI - ex: 'Lato', sans-serif]",
  serif: "[CUSTOMIZE AQUI - ex: 'Playfair Display', serif]",

  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },

  weights: {
    light: 300,
    normal: 400,
    bold: 700,
  },

  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const CONTENT = {
  company: {
    name: "[CUSTOMIZE - Nome da empresa]",
    nameHighlight: "[CUSTOMIZE - Parte com cor especial, ex: '.']",
    tagline: "[CUSTOMIZE - Slogan da empresa]",
    description: "[CUSTOMIZE - Descrição breve]",
  },

  hero: {
    title: "[CUSTOMIZE - Primeira parte do título]",
    titleHighlight: "[CUSTOMIZE - Parte em destaque do título]",
    subtitle: "[CUSTOMIZE - Subtítulo/descrição]",

    ctaPrimary: {
      label: "[CUSTOMIZE - Botão principal, ex: 'Saber Mais']",
      link: "#projects",
    },
    ctaSecondary: {
      label: "[CUSTOMIZE - Botão secundário, ex: 'Contato']",
      link: "#contact",
    },

    backgroundImage: "[CUSTOMIZE - URL da imagem de fundo]",
    imageAlt: "[CUSTOMIZE - Descrição da imagem para SEO]",
  },

  features: {
    title: "[CUSTOMIZE - Título da seção de features]",
    subtitle: "[CUSTOMIZE - Subtítulo]",
    items: [
      {
        icon: "[CUSTOMIZE - Nome do ícone Lucide, ex: 'Leaf']",
        title: "[CUSTOMIZE - Título do item]",
        description: "[CUSTOMIZE - Descrição]",
      },
      {
        icon: "[CUSTOMIZE - Nome do ícone Lucide]",
        title: "[CUSTOMIZE - Título do item]",
        description: "[CUSTOMIZE - Descrição]",
      },
      {
        icon: "[CUSTOMIZE - Nome do ícone Lucide]",
        title: "[CUSTOMIZE - Título do item]",
        description: "[CUSTOMIZE - Descrição]",
      },
    ],
  },

  projects: {
    title: "[CUSTOMIZE - Título da seção de projetos]",
    subtitle: "[CUSTOMIZE - Subtítulo]",
    items: [
      {
        id: 1,
        title: "[CUSTOMIZE - Nome do projeto 1]",
        description: "[CUSTOMIZE - Descrição breve]",
        image: "[CUSTOMIZE - URL da imagem]",
        location: "[CUSTOMIZE - Localização]",
        size: "[CUSTOMIZE - Tamanho/metragem]",
        status: "[CUSTOMIZE - Status: 'Disponível', 'Em Construção', etc]",
        features: ["[CUSTOMIZE - Recurso 1]", "[CUSTOMIZE - Recurso 2]"],
        longDescription: "[CUSTOMIZE - Descrição longa]",
      },
      {
        id: 2,
        title: "[CUSTOMIZE - Nome do projeto 2]",
        description: "[CUSTOMIZE - Descrição breve]",
        image: "[CUSTOMIZE - URL da imagem]",
        location: "[CUSTOMIZE - Localização]",
        size: "[CUSTOMIZE - Tamanho/metragem]",
        status: "[CUSTOMIZE - Status]",
        features: ["[CUSTOMIZE - Recurso 1]", "[CUSTOMIZE - Recurso 2]"],
        longDescription: "[CUSTOMIZE - Descrição longa]",
      },
      {
        id: 3,
        title: "[CUSTOMIZE - Nome do projeto 3]",
        description: "[CUSTOMIZE - Descrição breve]",
        image: "[CUSTOMIZE - URL da imagem]",
        location: "[CUSTOMIZE - Localização]",
        size: "[CUSTOMIZE - Tamanho/metragem]",
        status: "[CUSTOMIZE - Status]",
        features: ["[CUSTOMIZE - Recurso 1]", "[CUSTOMIZE - Recurso 2]"],
        longDescription: "[CUSTOMIZE - Descrição longa]",
      },
    ],
  },

  about: {
    title: "[CUSTOMIZE - Título da seção About]",
    content: "[CUSTOMIZE - Conteúdo sobre a empresa]",
    highlights: [
      "[CUSTOMIZE - Destaque 1, ex: '20 anos de experiência']",
      "[CUSTOMIZE - Destaque 2]",
      "[CUSTOMIZE - Destaque 3]",
    ],
  },

  contact: {
    title: "[CUSTOMIZE - Título da seção de contato]",
    subtitle: "[CUSTOMIZE - Subtítulo]",
    form: {
      namePlaceholder: "[CUSTOMIZE - ex: 'Seu nome']",
      emailPlaceholder: "[CUSTOMIZE - ex: 'seu@email.com']",
      phonePlaceholder: "[CUSTOMIZE - ex: '(11) 99999-9999']",
      messagePlaceholder: "[CUSTOMIZE - ex: 'Sua mensagem...']",
      submitButton: "[CUSTOMIZE - ex: 'Enviar Mensagem']",
      successMessage: "[CUSTOMIZE - Mensagem de sucesso]",
      errorMessage: "[CUSTOMIZE - Mensagem de erro]",
    },
    info: {
      phone: "[CUSTOMIZE - Número de telefone]",
      email: "[CUSTOMIZE - Email de contato]",
      address: "[CUSTOMIZE - Endereço]",
    },
  },

  footer: {
    copyrightText: "[CUSTOMIZE - Texto de copyright]",
    links: [
      { label: "Início", href: "#" },
      { label: "[CUSTOMIZE - Link]", href: "#projects" },
      { label: "[CUSTOMIZE - Link]", href: "#contact" },
      { label: "[CUSTOMIZE - Link]", href: "/privacy" },
    ],
  },

  header: {
    logo: "[CUSTOMIZE - Logo/nome da empresa]",
    navigation: [
      { label: "Início", href: "#" },
      { label: "[CUSTOMIZE - Opção menu]", href: "#projects" },
      { label: "[CUSTOMIZE - Opção menu]", href: "#contact" },
    ],
  },
};

export const ASSETS = {
  logo: {
    light: "[CUSTOMIZE - URL do logo versão clara]",
    dark: "[CUSTOMIZE - URL do logo versão escura]",
  },

  social: {
    facebook: "[CUSTOMIZE - URL do Facebook]",
    instagram: "[CUSTOMIZE - URL do Instagram]",
    linkedin: "[CUSTOMIZE - URL do LinkedIn]",
    whatsapp: "[CUSTOMIZE - URL do WhatsApp]",
  },

  placeholders: {
    project: "[CUSTOMIZE - URL de imagem padrão para projetos]",
    hero: "[CUSTOMIZE - URL de imagem padrão para hero]",
  },
};

export const SEO = {
  title: "[CUSTOMIZE - Título para buscadores]",
  description: "[CUSTOMIZE - Descrição para buscadores]",
  keywords: "[CUSTOMIZE - Palavras-chave separadas por vírgula]",
  author: "[CUSTOMIZE - Nome do autor/empresa]",

  og: {
    image: "[CUSTOMIZE - URL da imagem para compartilhar]",
    type: "website",
  },

  url: "[CUSTOMIZE - URL do site, ex: https://seu-site.com.br]",
  locale: "pt_BR",
};

// Export consolidado
export const THEME = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  content: CONTENT,
  assets: ASSETS,
  seo: SEO,
};

// Compatibilidade com código legado
export const THEME_LEGACY = {
  colors: COLORS,
  fonts: TYPOGRAPHY,
};

/**
 * ============================================================================
 * PRÓXIMOS PASSOS APÓS PREENCHER ESTE TEMPLATE
 * ============================================================================
 *
 * 1. Substitua todos os [CUSTOMIZE AQUI - ...] com valores reais
 * 2. Mantenha a estrutura e nomes das variáveis iguais
 * 3. Salve o arquivo como: src/config/brands/[nome-cliente].ts
 * 4. Em src/main.tsx, importe:
 *    import { THEME as NOVO_CLIENTE } from '@/config/brands/novo-cliente';
 * 5. Passe ao ThemeProvider:
 *    <ThemeProvider theme={NOVO_CLIENTE}>
 * 6. Execute: npm run dev
 * 7. Valide no navegador
 * 8. Quando satisfeito: npm run build
 * 9. Deploy!
 */
