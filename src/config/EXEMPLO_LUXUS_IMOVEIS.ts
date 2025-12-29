/**
 * ============================================================================
 * EXEMPLO DE NOVO WHITE LABEL - CLIENTE: LUXUS IMÓVEIS
 * ============================================================================
 *
 * Este arquivo é um exemplo de como seria a configuração para outro cliente.
 * Copie este arquivo, renomeie e customize para seus clientes!
 *
 * Para usar este tema:
 * 1. Salve como: src/config/brands/luxusimóveis.ts
 * 2. Em src/main.tsx, importe e passe ao ThemeProvider:
 *    import { THEME as LUXUS_THEME } from '@/config/brands/luxusimóveis';
 *    <ThemeProvider theme={LUXUS_THEME}>
 * 3. Ou configure via variável de ambiente (ver MULTI_BRAND_EXAMPLE.md)
 */

import { Sparkles, Home, Award } from "lucide-react";

export const COLORS = {
  primary: "#C4AF6F", // Ouro - Luxo
  primaryDark: "#A89860", // Ouro escuro
  primaryLight: "#D4C49F", // Ouro claro

  secondary: "#2C2C2C", // Cinza escuro sofisticado
  secondaryLight: "#5A5A5A", // Cinza médio

  background: "#F8F7F3", // Bege muito claro
  backgroundDark: "#F0EEEA", // Bege mais escuro
  surface: "#FFFFFF", // Branco
  surfaceDark: "#FAFAF8", // Branco com toque quente

  text: "#2C2C2C", // Preto sofisticado
  textLight: "#5A5A5A", // Cinza médio
  textLighter: "#8A8880", // Cinza claro
  textInverse: "#FFFFFF", // Branco

  success: "#10B981",
  error: "#EF4444",
  warning: "#F59E0B",
  info: "#3B82F6",

  border: "#E8E6E1",
  borderLight: "#F2F0EB",
};

export const TYPOGRAPHY = {
  googleFontsUrl:
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Cormorant:ital,wght@0,400;0,600;0,700;1,400&display=swap",

  sans: "'Montserrat', sans-serif", // Moderno e limpo
  serif: "'Cormorant', serif", // Elegante e sofisticado

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
    bold: 600,
    heavy: 700,
  },

  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const CONTENT = {
  company: {
    name: "LUXUS IMÓVEIS",
    nameHighlight: "IMÓVEIS",
    tagline: "Luxo e Refinamento em Cada Detalhe",
    description: "Oferecemos imóveis premium em localizações privilegiadas",
  },

  hero: {
    title: "SOFISTICAÇÃO E",
    titleHighlight: "EXCLUSIVIDADE",
    subtitle:
      "Descubra imóveis de luxo em localizações privilegiadas com acabamento impecável e serviço de concierge personalizado.",

    ctaPrimary: {
      label: "Explorar Propriedades",
      link: "#projects",
    },
    ctaSecondary: {
      label: "Agendar Visita",
      link: "#contact",
    },

    backgroundImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c52af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    imageAlt: "Luxoso apartamento com vista para a cidade",
  },

  features: {
    title: "O Que Nos Diferencia",
    subtitle: "Experiência de luxo incomparável",
    items: [
      {
        icon: "Sparkles",
        title: "Acabamento Impecável",
        description:
          "Cada propriedade é decorada com os melhores materiais e design de ponta.",
      },
      {
        icon: "Home",
        title: "Localizações Privilegiadas",
        description: "Empreendimentos nos endereços mais cobiçados da cidade.",
      },
      {
        icon: "Award",
        title: "Serviço Premium",
        description:
          "Concierge 24 horas dedicado ao conforto e bem-estar dos proprietários.",
      },
    ],
  },

  projects: {
    title: "Propriedades Exclusivas",
    subtitle: "Uma seleção curada de imóveis premium",
    items: [
      {
        id: 1,
        title: "Penthouse Vila Mariana",
        description:
          "Apartamento de 400m² com terraço privativo e vista panorâmica.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        location: "Vila Mariana, São Paulo",
        size: "400m²",
        status: "Disponível",
        features: ["Terraço Privativo", "Adega", "Piscina", "Cinema"],
        longDescription:
          "Penthouse exclusive com acabamento personalizado, equipamentos de última geração.",
      },
      {
        id: 2,
        title: "Mansão Morumbi",
        description: "Residência com 1.200m² em lote privilegiado.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        location: "Morumbi, São Paulo",
        size: "1.200m²",
        status: "Disponível",
        features: ["Piscina Aquecida", "Spa", "Academia", "Heliporto"],
        longDescription:
          "Mansão clássica com modernos amenities, localizada numa das áreas mais exclusivas.",
      },
      {
        id: 3,
        title: "Flat Ibirapuera",
        description: "Studio de luxo frente ao Parque Ibirapuera.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        location: "Ibirapuera, São Paulo",
        size: "150m²",
        status: "Pré-Lançamento",
        features: ["Concierge", "Segurança 24h", "Academia", "Lounge"],
        longDescription:
          "Primeira linha do parque, ambiente moderno e sofisticado.",
      },
    ],
  },

  about: {
    title: "Luxus Imóveis",
    content:
      "Há 20 anos operando no segmento de imóveis de luxo, nossa reputação é construída sobre a excelência em cada detalhe.",
    highlights: [
      "20 anos de experiência",
      "500+ propriedades comercializadas",
      "Clientela em 5 continentes",
    ],
  },

  contact: {
    title: "Conversar com Nossos Especialistas",
    subtitle: "Estamos disponíveis para orientações personalizadas",
    form: {
      namePlaceholder: "Seu nome completo",
      emailPlaceholder: "seu@email.com",
      phonePlaceholder: "+55 (11) 99999-9999",
      messagePlaceholder: "Conte-nos que tipo de propriedade procura...",
      submitButton: "Solicitar Informações",
      successMessage: "Obrigado! Entraremos em contato em breve.",
      errorMessage: "Erro ao enviar. Tente novamente.",
    },
    info: {
      phone: "+55 (11) 3456-7890",
      email: "contato@luxusimóveis.com.br",
      address: "Av. Paulista, 1000 - São Paulo, SP",
    },
  },

  footer: {
    copyrightText: "© 2025 Luxus Imóveis. Todos os direitos reservados.",
    links: [
      { label: "Início", href: "#" },
      { label: "Propriedades", href: "#projects" },
      { label: "Contato", href: "#contact" },
      { label: "Confidencialidade", href: "/privacy" },
    ],
  },

  header: {
    logo: "LUXUS",
    navigation: [
      { label: "Início", href: "#" },
      { label: "Propriedades", href: "#projects" },
      { label: "Contato", href: "#contact" },
    ],
  },
};

export const ASSETS = {
  logo: {
    light: "/logo-luxus-light.png",
    dark: "/logo-luxus-dark.png",
  },

  social: {
    facebook: "https://facebook.com/luxusimóveis",
    instagram: "https://instagram.com/luxusimóveis",
    linkedin: "https://linkedin.com/company/luxusimóveis",
    whatsapp: "https://whatsapp.com",
  },

  placeholders: {
    project: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    hero: "https://images.unsplash.com/photo-1512917774080-9991f1c52af8",
  },
};

export const SEO = {
  title: "Luxus Imóveis - Propriedades Premium em São Paulo",
  description:
    "Imóveis de luxo exclusivos em localizações privilegiadas. Apartamentos, casarões e penthouses com acabamento impecável.",
  keywords:
    "imóveis de luxo, apartamentos premium, São Paulo, casarões, penthouses",
  author: "Luxus Imóveis",

  og: {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c52af8",
    type: "website",
  },

  url: "https://luxusimóveis.com.br",
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
