/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRALIZADA - WHITE LABEL
 * ============================================================================
 *
 * Este arquivo é o ponto central de customização para toda a landing page.
 * Todas as cores, tipografia, conteúdo e assets devem ser alterados aqui.
 *
 * INSTRUÇÕES:
 * 1. Altere as cores na seção COLORS
 * 2. Customize fontes em TYPOGRAPHY
 * 3. Atualize textos e conteúdo em CONTENT
 * 4. Configure imagens e mídia em ASSETS
 * 5. Defina metadados em SEO
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
    "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap",

  // Nomes das fontes (devem corresponder ao Google Fonts)
  sans: "'Lato', sans-serif", // Fonte sem serifa (corpo do texto)
  serif: "'Playfair Display', serif", // Fonte com serifa (títulos)

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
    bold: 700,
  },

  // Line heights
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// ============================================================================
// SEÇÃO 3: CONTEÚDO - Textos e Mensagens
// ============================================================================
export const CONTENT = {
  // Informações da Empresa
  company: {
    name: "URBANISMO", // Nome da empresa
    nameHighlight: ".", // Parte do nome com cor especial
    tagline: "Inovação e Elegância Urbana", // Slogan/tagline
    description: "Transformamos espaços em experiências de vida excepcionais",
  },

  // Seção HERO - Topo da página
  hero: {
    title: "INOVAÇÃO E",
    titleHighlight: "ELEGÂNCIA URBANA", // Parte em destaque (itálico + cor)
    subtitle:
      "Transformamos espaços em experiências de vida excepcionais com planejamento sustentável e design contemporâneo.",

    // Botões de Ação
    ctaPrimary: {
      label: "Conheça Nossos Projetos",
      link: "#projects",
    },
    ctaSecondary: {
      label: "Fale Com a Gente",
      link: "#contact",
    },

    // Imagem de fundo
    backgroundImage:
      "https://images.unsplash.com/photo-1751698186759-5bac83376c9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjB1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMGxhbmRzY2FwZSUyMHN1bnNldHxlbnwxfHx8fDE3NjQ1OTg5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Vista panorâmica de arquitetura urbana moderna ao pôr do sol",
  },

  // Seção FEATURES - Diferenciais
  features: {
    title: "Nossos Diferenciais",
    subtitle: "O que nos torna únicos no mercado",
    items: [
      {
        icon: "Leaf", // Nome do ícone do lucide-react
        title: "Sustentabilidade",
        description:
          "Projetos que respeitam o meio ambiente, integrando natureza e arquitetura.",
      },
      {
        icon: "Map",
        title: "Planejamento Urbano",
        description:
          "Desenvolvimento inteligente das cidades focando em mobilidade e acessibilidade.",
      },
      {
        icon: "Sun",
        title: "Qualidade de Vida",
        description:
          "Espaços pensados para bem-estar, segurança e convívio social.",
      },
    ],
  },

  // Seção PROJECTS - Projetos/Empreendimentos
  projects: {
    title: "Projetos",
    subtitle:
      "Conheça nossos empreendimentos que estão redefinindo o conceito de morar bem.",
    items: [
      {
        id: 1,
        title: "Eco Viver",
        description: "Condomínio sustentável com ampla área verde.",
        image: "https://images.unsplash.com/photo-1746047226421-f7ecb2591bed",
        location: "Vila Madalena, São Paulo",
        size: "120m² - 240m²",
        status: "Em Construção",
        features: ["Energia Solar", "Reuso de Água", "Horta Comunitária"],
        longDescription:
          "O Eco Viver redefine o conceito de moradia urbana integrando sustentabilidade.",
      },
      {
        id: 2,
        title: "Reserva Imperial",
        description: "Luxo e privacidade em localização privilegiada.",
        image: "https://images.unsplash.com/photo-1622015663319-e97e697503ee",
        location: "Jardins, São Paulo",
        size: "280m² - 450m²",
        status: "Lançamento",
        features: ["Segurança 24h", "Spa Privativo", "Automação Residencial"],
        longDescription:
          "Situado em um dos endereços mais cobiçados, o Reserva Imperial oferece exclusividade.",
      },
      {
        id: 3,
        title: "Urban Heights",
        description: "Design contemporâneo no coração da cidade.",
        image: "https://images.unsplash.com/photo-1587771518560-d4e96de71240",
        location: "Itaim Bibi, São Paulo",
        size: "80m² - 150m²",
        status: "Pronto para Morar",
        features: ["Rooftop Lounge", "Academia High-Tech", "Piscina Infinita"],
        longDescription:
          "Urban Heights é a escolha perfeita para quem vive o ritmo da cidade.",
      },
    ],
  },

  // Seção ABOUT - Sobre a Empresa
  about: {
    title: "Sobre Nós",
    content:
      "Com mais de 15 anos de experiência, transformamos visões em realidades urbanas.",
    highlights: [
      "Mais de 50 projetos entregues",
      "10.000+ clientes satisfeitos",
      "Presença em 5 estados",
    ],
  },

  // Seção CONTACT - Contato
  contact: {
    title: "Entre em Contato",
    subtitle: "Ficamos felizes em ouvir você. Envie uma mensagem!",
    form: {
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      phonePlaceholder: "(11) 99999-9999",
      messagePlaceholder: "Sua mensagem...",
      submitButton: "Enviar Mensagem",
      successMessage: "Mensagem enviada com sucesso!",
      errorMessage: "Erro ao enviar mensagem. Tente novamente.",
    },
    info: {
      phone: "+55 (11) 3000-0000",
      email: "contato@urbanismo.com.br",
      address: "São Paulo, SP - Brasil",
    },
  },

  // Seção FOOTER - Rodapé
  footer: {
    copyrightText: "© 2025 Urbanismo. Todos os direitos reservados.",
    links: [
      { label: "Início", href: "#" },
      { label: "Projetos", href: "#projects" },
      { label: "Contato", href: "#contact" },
      { label: "Privacidade", href: "/privacy" },
    ],
  },

  // Seção HEADER - Cabeçalho/Navegação
  header: {
    logo: "URBANISMO",
    navigation: [
      { label: "Início", href: "#" },
      { label: "Projetos", href: "#projects" },
      { label: "Contato", href: "#contact" },
    ],
  },
};

// ============================================================================
// SEÇÃO 4: ASSETS - URLs de Imagens e Mídias
// ============================================================================
export const ASSETS = {
  // Logo
  logo: {
    light: "/logo-light.png",
    dark: "/logo-dark.png",
  },

  // Ícones Sociais
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://whatsapp.com",
  },

  // Imagens Padrão
  placeholders: {
    project: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    hero: "https://images.unsplash.com/photo-1751698186759-5bac83376c9f",
  },
};

// ============================================================================
// SEÇÃO 5: SEO - Metadados e Configurações de Busca
// ============================================================================
export const SEO = {
  // Metadados principais
  title: "Urbanismo - Inovação e Elegância Urbana",
  description:
    "Transformamos espaços em experiências de vida excepcionais com planejamento sustentável e design contemporâneo.",
  keywords:
    "urbanismo, arquitetura, imóveis, construção, desenvolvimento urbano",
  author: "Urbanismo",

  // Open Graph (redes sociais)
  og: {
    image: "https://images.unsplash.com/photo-1751698186759-5bac83376c9f",
    type: "website",
  },

  // Configurações de URL
  url: "https://urbanismo.com.br",
  locale: "pt_BR",
};

// ============================================================================
// SEÇÃO 6: TEMA EXPORTADO - Objeto Consolidado
// ============================================================================
export const THEME = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  content: CONTENT,
  assets: ASSETS,
  seo: SEO,
};

// Export padrão para compatibilidade com código existente
export const THEME_LEGACY = {
  colors: COLORS,
  fonts: TYPOGRAPHY,
};
