/**
 * Configuração white-label de exemplo para outro cliente
 * Este arquivo substitui src/config/config.js para personalizar todo o site.
 */

// Shim seguro para process em ambiente browser (evita ReferenceError)
const SAFE_PROCESS = typeof process !== "undefined" ? process : { env: {} };

// CORES
export const COLORS = {
  primary: "#0F766E", // teal
  primaryDark: "#0B5E58",
  primaryLight: "#14B8A6",
  primaryOpacity22: "rgba(20, 184, 166, 0.22)",

  secondary: "#111827",
  secondaryLight: "#6B7280",

  footerBackground: "#0F172A",
  footerIconBg: "#1F2937",

  background: "#F3F4F6",
  backgroundDark: "#E5E7EB",
  backgroundLight: "#F9FAFB",
  surface: "#FFFFFF",
  surfaceDark: "#F9F9F9",

  text: "#111827",
  textLight: "#4B5563",
  textLighter: "#9CA3AF",
  textInverse: "#FFFFFF",

  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray800: "#1F2937",

  success: "#10B981",
  error: "#EF4444",
  warning: "#F59E0B",
  info: "#3B82F6",

  border: "#E5E7EB",
  borderLight: "#F3F4F6",
  borderGray200: "#E5E7EB",
  borderGray800: "#1F2937",

  carouselDotDefault: "#CBD5E0",
  carouselArrowBg: "#FFFFFF",
  carouselArrowShadow: "rgba(0,0,0,0.1)",

  white: "#FFFFFF",
  whiteOpacity30: "rgba(255,255,255,0.3)",
  whiteOpacity20: "rgba(255,255,255,0.2)",
  whiteOpacity80: "rgba(255,255,255,0.8)",
  whiteOpacity90: "rgba(255,255,255,0.9)",
  overlay: "rgba(0,0,0,0.5)",
};

// TIPOGRAFIA
export const TYPOGRAPHY = {
  googleFontsUrl:
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Merriweather:wght@400;700&display=swap",
  sans: "'Inter', sans-serif",
  serif: "'Merriweather', serif",
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
  weights: { light: 300, normal: 400, semibold: 600, bold: 700 },
  lineHeights: { tight: 1.2, normal: 1.5, relaxed: 1.75 },
};

// CONTEÚDO
export const CONTENT = {
  company: {
    name: "LUMINA",
    nameHighlight: ".",
    tagline: "Arquitetura que ilumina cidades",
    description: "Projetos contemporâneos com tecnologia e sustentabilidade",
  },
  navigation: [
    { id: "features", label: "Diferenciais", href: "#features" },
    { id: "projects", label: "Portfólio", href: "#projects" },
    { id: "about", label: "Sobre", href: "#about" },
    { id: "contact", label: "Contato", href: "#contact" },
  ],
  hero: {
    title: "Experiências Urbanas Inteligentes",
    highlight: "Lumina",
    subtitle: "Integramos design, eficiência energética e bem-estar",
    cta: { label: "Ver Portfólio", link: "#projects" },
    ctaSecondary: { label: "Falar com Especialista", link: "#contact" },
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1024&h=512&fit=crop&auto=format&fm=webp&q=55",
    imageAlt: "Skyline moderno ao entardecer",
  },
  features: {
    title: "Por que a Lumina",
    items: [
      {
        icon: "leaf",
        title: "Sustentável",
        description: "Eficiência energética e materiais eco",
      },
      {
        icon: "map",
        title: "Localização Premium",
        description: "Conexão com mobilidade e serviços",
      },
      {
        icon: "sun",
        title: "Design Atemporal",
        description: "Estética funcional e conforto",
      },
    ],
  },
  projects: {
    title: "Portfólio",
    subtitle: "Seleção de projetos residenciais e comerciais",
    items: [
      {
        id: 1,
        title: "Lumina Gardens",
        description: "Residencial com jardins verticais e energia solar",
        status: "Em Construção",
        badge: "Lançamento",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&fm=webp&q=55",
        location: "Campinas, SP",
        size: "90m² a 140m²",
        year: "2025",
      },
      {
        id: 2,
        title: "Aurora Corporate",
        description: "Torre comercial com certificação LEED e automação",
        status: "Concluído",
        badge: "Premiado",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&auto=format&fm=webp&q=55",
        location: "São Paulo, SP",
        size: "28.000m²",
        year: "2024",
      },
      {
        id: 3,
        title: "Vista Mar",
        description: "Coberturas com vista panorâmica e ventilação cruzada",
        status: "Pronto para Morar",
        badge: "Últimas Unidades",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&auto=format&fm=webp&q=55",
        location: "Florianópolis, SC",
        size: "120m² a 280m²",
        year: "2023",
      },
      {
        id: 4,
        title: "Eco Ville",
        description: "Condomínio com reuso de água e mobilidade elétrica",
        status: "Planejamento",
        badge: "Sustentável",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format&fm=webp&q=55",
        location: "Curitiba, PR",
        size: "160 unidades",
        year: "2026",
      },
    ],
  },
  about: {
    tagline: "NOSSA HISTÓRIA",
    title: "15+ Anos de Inovação Urbana",
    description:
      "Projetamos espaços que maximizam conforto, luminosidade e eficiência. Nossa equipe integra arquitetura, engenharia e design para resultados duráveis.",
    highlights: [
      "Certificações internacionais",
      "Projetos premiados",
      "Equipe multidisciplinar",
      "Compromisso ambiental",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop&auto=format&fm=webp&q=55",
    imageAlt: "Interior com iluminação natural",
  },
  contact: {
    tagline: "VAMOS CONVERSAR",
    title: "Entre em Contato",
    subtitle: "Vamos entender seu projeto e objetivos",
    info: [
      {
        label: "Localização",
        value: "Av. Brasil, 500 - São Paulo, SP",
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      },
      {
        label: "Telefone",
        value: "(11) 3333-3333",
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      },
      {
        label: "E-mail",
        value: "contato@lumina.com",
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="22,6 12,13 2,6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      },
    ],
    submitButton: "Enviar Mensagem",
    successMessage: "Mensagem enviada com sucesso!",
    errorMessage: "Erro ao enviar mensagem. Tente novamente.",
  },
  footer: {
    description:
      "Projetos urbanos que combinam estética, tecnologia e sustentabilidade.",
    copyright: "LUMINA. Todos os direitos reservados.",
    links: [
      { label: "Política de Privacidade", href: "/privacy" },
      { label: "Termos de Uso", href: "/terms" },
      { label: "Contato", href: "#contact" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://instagram.com/lumina",
        label: "Siga a Lumina no Instagram",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>',
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/company/lumina",
        label: "Conecte-se no LinkedIn",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>',
      },
    ],
    developer: {
      name: "AlfamaWeb",
      url: "https://alfamaweb.com.br",
      logo: "./src/images/alfama-logo.png",
    },
  },
};

// ASSETS
export const ASSETS = {
  logo: { light: "/logo-light.png", dark: "/logo-dark.png", text: "LUMINA" },
};

// SEO
export const SEO = {
  title: "LUMINA | Arquitetura Urbana Inteligente",
  description:
    "Integramos design contemporâneo, eficiência energética e tecnologia para transformar a experiência urbana.",
  keywords: "arquitetura, urbanismo, sustentabilidade, design, eficiência",
  ogImage:
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1200&h=630&fit=crop",
  ogUrl: "https://lumina.com",
  twitterHandle: "@lumina",
};

// CONFIG TÉCNICA
export const SETTINGS = {
  injectCSSVariables: true,
  production:
    (typeof window !== "undefined" &&
      typeof location !== "undefined" &&
      !/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) ||
    (SAFE_PROCESS.env && SAFE_PROCESS.env.NODE_ENV === "production"),
  performance: { lazyLoadImages: true, preloadCritical: true, minifyCSS: true },
  accessibility: {
    enableSkipLinks: true,
    enableKeyboardNavigation: true,
    enableAriaLabels: true,
  },
  ui: { overlayBlurPx: 12 },
  cdn: {
    swiperJs: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
    swiperCss: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
  },
};

// Injetar variáveis CSS
export function injectCSSVariables() {
  if (!SETTINGS.injectCSSVariables) return;
  const root = document.documentElement;
  Object.entries(COLORS).forEach(([k, v]) =>
    root.style.setProperty(`--color-${k}`, v)
  );
  Object.entries(TYPOGRAPHY.sizes).forEach(([k, v]) =>
    root.style.setProperty(`--font-size-${k}`, v)
  );
  Object.entries(TYPOGRAPHY.weights).forEach(([k, v]) =>
    root.style.setProperty(`--font-weight-${k}`, v)
  );
  Object.entries(TYPOGRAPHY.lineHeights).forEach(([k, v]) =>
    root.style.setProperty(`--line-height-${k}`, v)
  );
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
