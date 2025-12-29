import React from "react";
import {
  Leaf,
  Map,
  Sun,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import alfamaLogo from "figma:asset/bfd741d9166504d5621837cb581513e05f08eb9c.png";
import { THEME as CENTRAL_THEME } from "../../config";

// Mapeia nomes de ícones (config) para componentes lucide-react
function iconFromName(name: string) {
  switch (name) {
    case "Leaf":
      return <Leaf className="w-10 h-10 text-[var(--primary)]" />;
    case "Map":
      return <Map className="w-10 h-10 text-[var(--primary)]" />;
    case "Sun":
      return <Sun className="w-10 h-10 text-[var(--primary)]" />;
    default:
      return <Leaf className="w-10 h-10 text-[var(--primary)]" />;
  }
}

// Socials a partir de ASSETS
const socials = [
  CENTRAL_THEME.assets?.social?.instagram
    ? {
        icon: <Instagram className="w-4 h-4" />,
        href: CENTRAL_THEME.assets.social.instagram,
        label: "Instagram",
      }
    : null,
  CENTRAL_THEME.assets?.social?.facebook
    ? {
        icon: <Facebook className="w-4 h-4" />,
        href: CENTRAL_THEME.assets.social.facebook,
        label: "Facebook",
      }
    : null,
  CENTRAL_THEME.assets?.social?.linkedin
    ? {
        icon: <Linkedin className="w-4 h-4" />,
        href: CENTRAL_THEME.assets.social.linkedin,
        label: "LinkedIn",
      }
    : null,
].filter(Boolean) as Array<{
  icon: React.ReactNode;
  href: string;
  label: string;
}>;

export const THEME = {
  colors: {
    primary: CENTRAL_THEME.colors.primary,
    primaryDark: CENTRAL_THEME.colors.primaryDark,
    secondary: CENTRAL_THEME.colors.secondary,
    background: CENTRAL_THEME.colors.background,
    surface: CENTRAL_THEME.colors.surface,
    text: CENTRAL_THEME.colors.text,
    textLight: CENTRAL_THEME.colors.textLight,
  },
  fonts: {
    googleFontsUrl: CENTRAL_THEME.typography.googleFontsUrl,
    sans: CENTRAL_THEME.typography.sans,
    serif: CENTRAL_THEME.typography.serif,
  },
};

export const CONTENT = {
  // GLOBAL
  companyName: CENTRAL_THEME.content.company?.name ?? "URBANISMO",
  companyNameHighlight: CENTRAL_THEME.content.company?.nameHighlight ?? ".",

  // HERO SECTION
  hero: {
    title: CENTRAL_THEME.content.hero.title,
    titleHighlight: CENTRAL_THEME.content.hero.titleHighlight,
    subtitle: CENTRAL_THEME.content.hero.subtitle,
    ctaPrimaryLabel: CENTRAL_THEME.content.hero.ctaPrimary.label,
    ctaPrimaryLink: CENTRAL_THEME.content.hero.ctaPrimary.link,
    ctaSecondaryLabel: CENTRAL_THEME.content.hero.ctaSecondary.label,
    ctaSecondaryLink: CENTRAL_THEME.content.hero.ctaSecondary.link,
    backgroundImage: CENTRAL_THEME.content.hero.backgroundImage,
    imageAlt: CENTRAL_THEME.content.hero.imageAlt,
  },

  // FEATURES SECTION
  features: {
    title: CENTRAL_THEME.content.features.title,
    items: CENTRAL_THEME.content.features.items.map((item: any) => ({
      icon: iconFromName(item.icon),
      title: item.title,
      description: item.description,
    })),
  },

  // PROJECTS SECTION
  projects: {
    title: CENTRAL_THEME.content.projects.title,
    subtitle: CENTRAL_THEME.content.projects.subtitle,
    items: CENTRAL_THEME.content.projects.items,
  },

  // ABOUT SECTION (adaptador simples)
  about: {
    tagline: CENTRAL_THEME.content.about.title,
    titlePrefix: "",
    titleHighlight: "",
    titleSuffix: "",
    description1: CENTRAL_THEME.content.about.content,
    description2: "",
    highlights: CENTRAL_THEME.content.about.highlights,
    image: CENTRAL_THEME.assets.placeholders?.hero,
    imageAlt: "Sobre",
  },

  // CONTACT SECTION
  contact: {
    tagline: CENTRAL_THEME.content.contact.title,
    title: CENTRAL_THEME.content.contact.title,
    description: CENTRAL_THEME.content.contact.subtitle,
    info: {
      address: {
        label: "Endereço",
        value: [CENTRAL_THEME.content.contact.info.address],
        icon: <MapPin className="w-5 h-5" />,
      },
      email: {
        label: "E-mail",
        value: CENTRAL_THEME.content.contact.info.email,
        icon: <Mail className="w-5 h-5" />,
      },
      phone: {
        label: "Telefone",
        value: CENTRAL_THEME.content.contact.info.phone,
        icon: <Phone className="w-5 h-5" />,
      },
    },
  },

  // FOOTER SECTION
  footer: {
    description: CENTRAL_THEME.content.company?.description ?? "",
    menuTitle: "Menu",
    contactTitle: "Contato",
    socials,
    menuItems: (CENTRAL_THEME.content.header?.navigation ?? []).map(
      (n: any) => ({ label: n.label, href: n.href })
    ),
    copyright: CENTRAL_THEME.content.footer?.copyrightText ?? "",
    developer: {
      name: "AlfamaWeb",
      url: "https://alfamaweb.com.br",
      logo: alfamaLogo,
    },
  },

  // FORM CONFIGURATION (mantido como padrão)
  formConfig: {
    provider: "rd-station",
    rdStation: {
      token: "1f8c12a5a4fffa12fa0a913e76d237f9",
      formId: "leads-c012a1399ae98558e6da",
    },
    messages: {
      successTitle: "Mensagem Enviada!",
      successText:
        "Obrigado pelo seu contato. Recebemos sua mensagem e retornaremos em breve.",
      loadingText: "ENVIANDO...",
      submitText: "ENVIAR MENSAGEM",
    },
  },
};
