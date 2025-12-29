/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRALIZADA - WHITE LABEL (VANILLA JS)
 * ============================================================================
 *
 * Este arquivo é o ponto central de customização para toda a landing page.
 * Todas as cores, tipografia, conteúdo e assets devem ser alterados aqui.
 *
 * FILOSOFIA: Código fixo, Configuração dinâmica
 * Apenas ESTE arquivo precisa ser alterado para criar novos sites.
 *
 * ============================================================================
 */

// ============================================================================
// SEÇÃO 1: CORES - Personalizar Paleta de Cores
// ============================================================================
export const COLORS = {
  // Cores Principais
  primary: "#B38B59", // Cor principal (botões, links, destaques)
  primaryDark: "#9A764A", // Cor principal no hover/dark mode
  primaryLight: "#D4A574", // Cor principal clara (backgrounds)

  // Cores Secundárias
  secondary: "#1A1A1A", // Cor secundária (textos importantes)
  secondaryLight: "#4B5563", // Cinza médio (textos secundários)

  // Backgrounds e Superfícies
  background: "#F5F5F5", // Background principal (cinza claro)
  backgroundDark: "#EEEEEE", // Background secundário
  surface: "#FFFFFF", // Cards, componentes (branco)
  surfaceDark: "#F9F9F9", // Cards/componentes com fundo alternado

  // Textos
  text: "#1A1A1A", // Texto principal (preto)
  textLight: "#4B5563", // Texto secundário (cinza)
  textLighter: "#8A92A2", // Texto terciário (cinza claro)
  textInverse: "#FFFFFF", // Texto sobre backgrounds escuros

  // Estados e Feedback
  success: "#10B981", // Verde (sucesso, confirmação)
  error: "#EF4444", // Vermelho (erro, alerta)
  warning: "#F59E0B", // Amarelo (aviso)
  info: "#3B82F6", // Azul (informação)

  // Bordas e Divisões
  border: "#E5E7EB", // Cor de borda padrão
  borderLight: "#F3F4F6", // Borda clara
};

// ============================================================================
// SEÇÃO 2: TIPOGRAFIA - Customizar Fontes
// ============================================================================
export const TYPOGRAPHY = {
  // URL de importação do Google Fonts
  googleFontsUrl:
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap",

  // Nomes das fontes (devem estar no Google Fonts URL acima)
  sans: "'Lato', sans-serif",
  serif: "'Playfair Display', serif",

  // Tamanhos de fonte (em rem)
  sizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },

  // Pesos de fonte
  weights: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// ============================================================================
// SEÇÃO 3: CONTEÚDO - Textos, Links e Estrutura
// ============================================================================
export const CONTENT = {
  // INFORMAÇÕES DA EMPRESA
  company: {
    name: "URBANISMO",
    nameHighlight: ".",
    tagline: "Transformando espaços em experiências",
    description: "Inovação e sustentabilidade em cada projeto",
  },

  // SEÇÃO HERO (Capa)
  hero: {
    title: "Soluções Inteligentes para Cidades",
    titleHighlight: "Modernas",
    subtitle: "Criamos espaços que conectam pessoas e inovação",
    ctaPrimary: {
      label: "Começar Agora",
      link: "#contact",
    },
    ctaSecondary: {
      label: "Saiba Mais",
      link: "#features",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop",
    imageAlt: "Arquitetura urbana moderna",
  },

  // SEÇÃO DE DIFERENCIAIS (Features)
  features: {
    title: "Por Que Nos Escolher",
    items: [
      {
        icon: "leaf",
        title: "Sustentável",
        description: "Projetos com foco em sustentabilidade ambiental",
      },
      {
        icon: "map",
        title: "Localização Estratégica",
        description: "Posicionados nos melhores pontos da cidade",
      },
      {
        icon: "sun",
        title: "Design Inovador",
        description: "Arquitetura que une estética e funcionalidade",
      },
    ],
  },

  // SEÇÃO DE PROJETOS (Carrossel)
  projects: {
    title: "Nossos Projetos",
    items: [
      {
        title: "Projeto Alpha",
        description: "Complexo residencial premium com 150 unidades",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        link: "#",
      },
      {
        title: "Projeto Beta",
        description: "Centro comercial integrado com espaços verdes",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        link: "#",
      },
      {
        title: "Projeto Gamma",
        description: "Parque urbano com infraestrutura inteligente",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
        link: "#",
      },
    ],
  },

  // SEÇÃO SOBRE
  about: {
    title: "Sobre Nós",
    description:
      "Com mais de 20 anos de experiência, transformamos cidades através de projetos sustentáveis e inovadores. Nossa equipe multidisciplinar trabalha para criar espaços que melhoram a qualidade de vida das pessoas.",
    highlights: [
      { label: "Projetos Realizados", value: "150+" },
      { label: "Clientes Satisfeitos", value: "500+" },
      { label: "Anos de Experiência", value: "20+" },
    ],
  },

  // SEÇÃO CONTATO
  contact: {
    title: "Entre em Contato",
    subtitle: "Estamos prontos para transformar sua visão em realidade",
    address: "São Paulo, SP - Brasil",
    phone: "+55 (11) 99999-9999",
    email: "contato@urbanismo.com",
    formTitle: "Envie Uma Mensagem",
    formPlaceholder: {
      name: "Seu Nome",
      email: "seu@email.com",
      phone: "Seu Telefone",
      message: "Sua Mensagem",
    },
    submitButton: "Enviar Mensagem",
    successMessage:
      "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    errorMessage: "Erro ao enviar mensagem. Tente novamente.",
  },

  // SEÇÃO FOOTER
  footer: {
    copyrightText: "© 2024 URBANISMO. Todos os direitos reservados.",
    links: [
      { label: "Política de Privacidade", href: "/privacy" },
      { label: "Termos de Uso", href: "/terms" },
      { label: "Contato", href: "#contact" },
    ],
  },
};

// ============================================================================
// SEÇÃO 4: ASSETS - Imagens, Ícones e Mídia
// ============================================================================
export const ASSETS = {
  logo: {
    light: "/logo-light.png",
    dark: "/logo-dark.png",
    text: "URBANISMO",
  },

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  icons: {
    leaf: "leaf",
    map: "map-pin",
    sun: "sun",
  },
};

// ============================================================================
// SEÇÃO 5: SEO - Meta Tags e Otimizações
// ============================================================================
export const SEO = {
  title: "URBANISMO | Soluções em Arquitetura Urbana",
  description:
    "Criamos espaços inovadores e sustentáveis que transformam cidades. Projetos residenciais, comerciais e de infraestrutura.",
  keywords: "arquitetura, urbanismo, construção, projetos, sustentabilidade",
  ogImage:
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
  ogUrl: "https://urbanismo.com",
  twitterHandle: "@urbanismo",
};

// ============================================================================
// SEÇÃO 6: CONFIGURAÇÕES TÉCNICAS
// ============================================================================
export const SETTINGS = {
  // Injetar CSS vars no documento
  injectCSSVariables: true,

  // Modo produção
  production: process.env.NODE_ENV === "production",

  // Configurações de performance
  performance: {
    lazyLoadImages: true,
    preloadCritical: true,
    minifyCSS: true,
  },

  // Configurações de acessibilidade
  accessibility: {
    enableSkipLinks: true,
    enableKeyboardNavigation: true,
    enableAriaLabels: true,
  },
};

// ============================================================================
// FUNÇÃO: Injetar Variáveis CSS
// ============================================================================
export function injectCSSVariables() {
  if (!SETTINGS.injectCSSVariables) return;

  const root = document.documentElement;

  // Cores
  Object.entries(COLORS).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });

  // Tipografia
  Object.entries(TYPOGRAPHY.sizes).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key}`, value);
  });

  Object.entries(TYPOGRAPHY.weights).forEach(([key, value]) => {
    root.style.setProperty(`--font-weight-${key}`, value);
  });

  Object.entries(TYPOGRAPHY.lineHeights).forEach(([key, value]) => {
    root.style.setProperty(`--line-height-${key}`, value);
  });

  // Fontes
  root.style.setProperty("--font-sans", TYPOGRAPHY.sans);
  root.style.setProperty("--font-serif", TYPOGRAPHY.serif);
}

export default {
  COLORS,
  TYPOGRAPHY,
  CONTENT,
  ASSETS,
  SEO,
  SETTINGS,
  injectCSSVariables,
};
