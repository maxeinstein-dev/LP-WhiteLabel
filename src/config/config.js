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
 * Nota: adicionamos um shim de process para evitar ReferenceError em browsers.
 *
 * ============================================================================
 */

// Shim seguro para process em ambiente browser (evita ReferenceError)
const SAFE_PROCESS = typeof process !== "undefined" ? process : { env: {} };

// ============================================================================
// SEÇÃO 1: CORES - Personalizar Paleta de Cores
// ============================================================================
export const COLORS = {
  // Cores Principais
  primary: "#B38B59", // Cor principal (botões, links, destaques)
  primaryDark: "#9A764A", // Cor principal no hover/dark mode
  primaryLight: "#D4A574", // Cor principal clara (backgrounds)
  primaryOpacity22: "rgba(179, 139, 89, 0.22)", // Cor principal com 22% de opacidade (para fundos de ícones)

  // Cores Secundárias
  secondary: "#1A1A1A", // Cor secundária (textos importantes)
  secondaryLight: "#4B5563", // Cinza médio (textos secundários)

  // Footer e Componentes Escuros
  footerBackground: "#2D2D2D", // Fundo do footer (cinza escuro)
  footerIconBg: "#374151", // Fundo dos ícones no footer (gray-800)

  // Backgrounds e Superfícies
  background: "#F5F5F5", // Background principal (cinza claro)
  backgroundDark: "#EEEEEE", // Background secundário
  backgroundLight: "#F9FAFB", // Background muito claro (gray-50)
  surface: "#FFFFFF", // Cards, componentes (branco)
  surfaceDark: "#F9F9F9", // Cards/componentes com fundo alternado

  // Textos
  text: "#1A1A1A", // Texto principal (preto)
  textLight: "#4B5563", // Texto secundário (cinza)
  textLighter: "#8A92A2", // Texto terciário (cinza claro)
  textInverse: "#FFFFFF", // Texto sobre backgrounds escuros

  // Textos específicos
  gray400: "#9CA3AF", // Cinza 400 (textos footer)
  gray500: "#6B7280", // Cinza 500 (textos footer copyright)
  gray600: "#4B5563", // Cinza 600 (textos nav)
  gray800: "#1F2937", // Cinza 800 (fundo elementos)

  // Estados e Feedback
  success: "#10B981", // Verde (sucesso, confirmação)
  error: "#EF4444", // Vermelho (erro, alerta)
  warning: "#F59E0B", // Amarelo (aviso)
  info: "#3B82F6", // Azul (informação)

  // Bordas e Divisões
  border: "#E5E7EB", // Cor de borda padrão
  borderLight: "#F3F4F6", // Borda clara
  borderGray200: "#E5E7EB", // Borda cinza 200
  borderGray800: "#1F2937", // Borda cinza 800 (footer)

  // Carrossel
  carouselDotDefault: "#CBD5E0", // Cor padrão dos dots do carrossel
  carouselArrowBg: "#FFFFFF", // Fundo das setas do carrossel
  carouselArrowShadow: "rgba(0, 0, 0, 0.1)", // Sombra das setas

  // Whites e transparências
  white: "#FFFFFF",
  whiteOpacity30: "rgba(255, 255, 255, 0.3)", // Header scrolled
  whiteOpacity20: "rgba(255, 255, 255, 0.2)", // Bordas transparentes
  whiteOpacity80: "rgba(255, 255, 255, 0.8)", // Ícones semi-transparentes
  whiteOpacity90: "rgba(255, 255, 255, 0.9)", // Links semi-transparentes
  // Overlay acima da dobra (hero/menu)
  overlay: "rgba(0, 0, 0, 0.5)",
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

  // NAVEGAÇÃO
  navigation: [
    { id: "features", label: "Diferenciais", href: "#features" },
    { id: "projects", label: "Projetos", href: "#projects" },
    { id: "about", label: "Sobre", href: "#about" },
    { id: "contact", label: "Contato", href: "#contact" },
  ],

  // SEÇÃO HERO (Capa)
  hero: {
    title: "Soluções Inteligentes para Cidades",
    highlight: "Modernas",
    subtitle: "Criamos espaços que conectam pessoas e inovação",
    cta: {
      label: "Explorar Projetos",
      link: "#projects",
    },
    ctaSecondary: {
      label: "Falar com Especialista",
      link: "#contact",
    },
    image:
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
    subtitle: "Cada projeto é único e conta uma história de transformação",
    items: [
      {
        id: 1,
        title: "Reserva Imperial",
        description:
          "Residencial de alto padrão com 120 unidades exclusivas e infraestrutura completa",
        status: "Em Construção",
        badge: "Lançamento",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        location: "Jardim Europa, São Paulo",
        size: "180m² a 350m²",
        year: "2024",
      },
      {
        id: 2,
        title: "Urban Heights",
        description:
          "Complexo comercial integrado com conceito de cidade vertical e áreas de convivência",
        status: "Concluído",
        badge: "Premiado",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        location: "Avenida Paulista, São Paulo",
        size: "45.000m² de área construída",
        year: "2023",
      },
      {
        id: 3,
        title: "Skyline Penthouse",
        description:
          "Coberturas de luxo com vista panorâmica e acabamento premium",
        status: "Pronto para Morar",
        badge: "Últimas Unidades",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        location: "Vila Olímpia, São Paulo",
        size: "450m² a 800m²",
        year: "2023",
      },
      {
        id: 4,
        title: "Eco Village",
        description:
          "Condomínio sustentável com energia solar e sistemas de reuso de água",
        status: "Planejamento",
        badge: "Sustentável",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        location: "Alphaville, Barueri",
        size: "200 unidades",
        year: "2025",
      },
    ],
  },

  // SEÇÃO SOBRE
  about: {
    tagline: "NOSSA HISTÓRIA",
    title: "Mais de 15 Anos Transformando Espaços",
    description:
      "Somos especialistas em criar projetos que unem design sofisticado, funcionalidade e sustentabilidade. Nossa equipe multidisciplinar trabalha para transformar cada visão em realidade, entregando espaços que inspiram e valorizam.",
    highlights: [
      "Mais de 15 anos de experiência",
      "Projetos premiados internacionalmente",
      "Equipe multidisciplinar especializada",
      "Compromisso com sustentabilidade",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop",
    imageAlt: "Projeto arquitetônico moderno",
  },

  // SEÇÃO CONTATO
  contact: {
    tagline: "VAMOS CONVERSAR",
    title: "Entre em Contato",
    subtitle: "Estamos prontos para transformar sua visão em realidade",
    info: [
      {
        label: "Localização",
        value: "Av. Paulista, 1000 - São Paulo, SP",
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      },
      {
        label: "Telefone",
        value: "(11) 99999-9999",
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      },
      {
        label: "E-mail",
        value: "contato@urbanismo.com",
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="22,6 12,13 2,6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      },
    ],
    submitButton: "Enviar Mensagem",
    successMessage:
      "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    errorMessage: "Erro ao enviar mensagem. Tente novamente.",
  },

  // SEÇÃO FOOTER
  footer: {
    description:
      "Transformando espaços em experiências únicas através de design inovador e sustentável.",
    copyright: "URBANISMO. Todos os direitos reservados.",
    links: [
      { label: "Política de Privacidade", href: "/privacy" },
      { label: "Termos de Uso", href: "/terms" },
      { label: "Contato", href: "#contact" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://instagram.com",
        label: "Instagram",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" fill="none" stroke="currentColor" stroke-width="2" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" /></svg>',
      },
      {
        name: "Facebook",
        href: "https://facebook.com",
        label: "Facebook",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h3z" /></svg>',
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        label: "LinkedIn",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>',
      },
    ],
    developer: {
      name: "AlfamaWeb",
      url: "https://alfamaweb.com.br",
      logo: "https://alfamaweb.com.br/logo.png",
    },
  },
};

// ============================================================================
// SEÇÃO 4: ASSETS - Imagens e Mídia
// ============================================================================
export const ASSETS = {
  logo: {
    light: "/logo-light.png",
    dark: "/logo-dark.png",
    text: "URBANISMO",
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
  // Sem bundler no browser: detecta produção via hostname (não localhost)
  production:
    (typeof window !== "undefined" &&
      typeof location !== "undefined" &&
      !/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) ||
    (SAFE_PROCESS.env && SAFE_PROCESS.env.NODE_ENV === "production"),

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

  // Configurações de UI gerais
  ui: {
    overlayBlurPx: 12,
  },

  // CDNs (carregamento sob demanda)
  cdn: {
    jquery: "https://code.jquery.com/jquery-3.7.1.min.js",
    slickJs:
      "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js",
    slickCss:
      "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css",
    slickThemeCss:
      "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css",
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
