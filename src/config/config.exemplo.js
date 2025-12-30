/**
 * ============================================================================
 * CONFIGURAÇÃO WHITE-LABEL DE EXEMPLO (para outro cliente)
 * ============================================================================
 *
 * Este arquivo é um template completo e sincronizado com config.js
 * Substitua este arquivo por src/config/config.js para usar um tema diferente
 *
 * FILOSOFIA: Uma única linha de código muda todo o site
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
  primary: "#0F766E", // Cor principal (botões, links, destaques) - teal
  primaryDark: "#0B5E58", // Cor principal no hover/dark mode
  primaryLight: "#14B8A6", // Cor principal clara (backgrounds)
  primaryOpacity22: "rgba(20, 184, 166, 0.22)", // Cor principal com 22% de opacidade (para fundos de ícones)

  // Cores Secundárias
  secondary: "#111827", // Cor secundária (textos importantes)
  secondaryLight: "#6B7280", // Cinza médio (textos secundários)

  // Footer e Componentes Escuros
  footerBackground: "#0F172A", // Fundo do footer (azul escuro)
  footerIconBg: "#1F2937", // Fundo dos ícones no footer (gray-800)

  // Backgrounds e Superfícies
  background: "#F3F4F6", // Background principal (cinza claro)
  backgroundDark: "#E5E7EB", // Background secundário
  backgroundLight: "#F9FAFB", // Background muito claro (gray-50)
  surface: "#FFFFFF", // Cards, componentes (branco)
  surfaceDark: "#F9F9F9", // Cards/componentes com fundo alternado

  // Textos
  text: "#111827", // Texto principal (preto)
  textLight: "#4B5563", // Texto secundário (cinza)
  textLighter: "#9CA3AF", // Texto terciário (cinza claro)
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
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap",

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
    name: "TECH SOLUTIONS",
    nameHighlight: ".",
    tagline: "Inovação Digital para Seu Negócio",
    description: "Transformação digital com excelência e segurança",
  },

  // NAVEGAÇÃO
  navigation: [
    { id: "features", label: "Serviços", href: "#features" },
    { id: "projects", label: "Projetos", href: "#projects" },
    { id: "about", label: "Sobre", href: "#about" },
    { id: "contact", label: "Contato", href: "#contact" },
  ],

  // SEÇÃO HERO (Capa)
  hero: {
    title: "Soluções Tecnológicas para o",
    highlight: "Futuro",
    subtitle:
      "Transformamos ideias em realidade através de tecnologia inovadora",
    cta: {
      label: "Ver Projetos",
      link: "#projects",
    },
    ctaSecondary: {
      label: "Solicitar Consultoria",
      link: "#contact",
    },
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1024&h=512&fit=crop&auto=format&fm=webp&q=55",
    imageAlt: "Tecnologia e inovação digital",
  },

  // SEÇÃO DE DIFERENCIAIS (Features)
  features: {
    title: "Nossos Diferenciais",
    items: [
      {
        icon: "zap",
        title: "Inovação",
        description: "Utilizamos as mais recentes tecnologias e metodologias",
      },
      {
        icon: "shield",
        title: "Segurança",
        description: "Proteção de dados e conformidade com regulamentações",
      },
      {
        icon: "target",
        title: "Resultados",
        description: "Soluções orientadas por dados e ROI comprovado",
      },
    ],
  },

  // SEÇÃO DE PROJETOS (Carrossel)
  projects: {
    title: "Nossos Projetos",
    subtitle: "Conheça os projetos que transformaram negócios",
    items: [
      {
        id: 1,
        title: "Plataforma E-commerce",
        description:
          "Sistema de vendas online completo com integração de pagamentos e analytics",
        status: "Concluído",
        badge: "Ativo",
        image:
          "https://images.unsplash.com/photo-1460925895917-adf4e565db96?w=800&h=600&fit=crop&auto=format&fm=webp&q=55",
        location: "Tecnologia Web",
        size: "500.000+ usuários",
        year: "2023",
      },
      {
        id: 2,
        title: "App Móvel para Logística",
        description:
          "Aplicativo mobile para rastreamento e gerenciamento de frota em tempo real",
        status: "Concluído",
        badge: "Destaque",
        image:
          "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop&auto=format&fm=webp&q=55",
        location: "Mobile Development",
        size: "100+ empresas",
        year: "2023",
      },
      {
        id: 3,
        title: "Dashboard Analytics",
        description:
          "Plataforma de inteligência de negócios com visualização de dados em tempo real",
        status: "Concluído",
        badge: "Inovador",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&fm=webp&q=55",
        location: "Data Intelligence",
        size: "50+ clientes",
        year: "2024",
      },
      {
        id: 4,
        title: "Sistema ERP Customizado",
        description:
          "Solução empresarial integrada para gestão de recursos com automação workflow",
        status: "Em Desenvolvimento",
        badge: "Enterprise",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format&fm=webp&q=55",
        location: "Enterprise Solutions",
        size: "Multimodular",
        year: "2024",
      },
    ],
  },

  // SEÇÃO SOBRE
  about: {
    tagline: "NOSSA EMPRESA",
    title: "Mais de 10 Anos em Transformação Digital",
    description:
      "Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções que geram impacto real nos negócios de nossos clientes. Com experiência em diversas indústrias, entregamos tecnologia que transforma.",
    highlights: [
      "Mais de 10 anos de experiência",
      "50+ projetos entregues com sucesso",
      "Equipe multidisciplinar de 25+ especialistas",
      "Certificações internacionais ISO e AWS",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop&auto=format&fm=webp&q=55",
    imageAlt: "Equipe de tecnologia colaborando",
  },

  // SEÇÃO CONTATO
  contact: {
    tagline: "VAMOS TRABALHAR JUNTOS",
    title: "Entre em Contato",
    subtitle: "Estamos prontos para ajudar sua transformação digital",
    info: [
      {
        label: "Localização",
        value: "São Paulo, SP - Brasil",
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      },
      {
        label: "Telefone",
        value: "(11) 98888-8888",
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      },
      {
        label: "E-mail",
        value: "contato@techsolutions.com",
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
      "Soluções tecnológicas que transformam negócios e geram resultados mensuráveis.",
    copyright: "TECH SOLUTIONS. Todos os direitos reservados.",
    links: [
      { label: "Política de Privacidade", href: "/privacy" },
      { label: "Termos de Uso", href: "/terms" },
      { label: "Contato", href: "#contact" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://instagram.com",
        label: "Siga-nos no Instagram",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" fill="none" stroke="currentColor" stroke-width="2" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" /></svg>',
      },
      {
        name: "Facebook",
        href: "https://facebook.com",
        label: "Siga-nos no Facebook",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h3z" /></svg>',
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        label: "Conecte-se no LinkedIn",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>',
      },
    ],
    developer: {
      name: "AlfamaWeb",
      url: "https://alfamaweb.com.br",
      logo: "./src/images/alfama-logo.png",
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
    text: "TECH SOLUTIONS",
  },
};

// ============================================================================
// SEÇÃO 5: SEO - Meta Tags e Otimizações
// ============================================================================
export const SEO = {
  title: "TECH SOLUTIONS | Transformação Digital & Inovação",
  description:
    "Soluções tecnológicas personalizadas para transformação digital. Desenvolvimento web, mobile, ERP e analytics para seu negócio crescer.",
  keywords:
    "tecnologia, software, desenvolvimento, transformação digital, inovação",
  ogImage:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
  ogUrl: "https://techsolutions.com",
  twitterHandle: "@techsolutions",
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
    swiperJs: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
    swiperCss: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
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
