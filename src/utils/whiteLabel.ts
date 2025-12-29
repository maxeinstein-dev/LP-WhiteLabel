/**
 * ============================================================================
 * UTILIDADES WHITE LABEL
 * ============================================================================
 *
 * Funções auxiliares para trabalhar com o sistema de tema e customização.
 */

import { COLORS } from "../config";

/**
 * Converte um valor de cor para variável CSS
 *
 * @example
 * getCSSVariable('primary') // retorna 'var(--primary)'
 */
export function getCSSVariable(colorName: keyof typeof COLORS): string {
  const cssName = colorName
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
  return `var(--${cssName})`;
}

/**
 * Gera as variáveis CSS para o documento
 *
 * @example
 * const cssVars = generateCSSVariables(COLORS);
 * // Retorna: { '--primary': '#B38B59', '--primary-dark': '#9A764A', ... }
 */
export function generateCSSVariables(
  colors: typeof COLORS
): Record<string, string> {
  const vars: Record<string, string> = {};

  Object.entries(colors).forEach(([key, value]) => {
    const cssKey =
      "--" +
      key
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .replace(/^-/, "");
    vars[cssKey] = value;
  });

  return vars;
}

/**
 * Cria uma tag de estilo com as variáveis CSS
 *
 * @example
 * const styleContent = generateCSSVariablesString(COLORS);
 * // Retorna: `:root { --primary: #B38B59; ... }`
 */
export function generateCSSVariablesString(colors: typeof COLORS): string {
  const vars = generateCSSVariables(colors);
  const cssVars = Object.entries(vars)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n  ");

  return `:root {\n  ${cssVars}\n}`;
}

/**
 * Valida se uma cor é um hexadecimal válido
 *
 * @example
 * isValidHexColor('#B38B59') // true
 * isValidHexColor('not-a-color') // false
 */
export function isValidHexColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

/**
 * Converte um array de cores para um gradiente CSS
 *
 * @example
 * createGradient(['#B38B59', '#1A1A1A'], 'to right')
 * // Retorna: 'linear-gradient(to right, #B38B59, #1A1A1A)'
 */
export function createGradient(
  colors: string[],
  direction: string = "to right"
): string {
  return `linear-gradient(${direction}, ${colors.join(", ")})`;
}

/**
 * Muda a luminosidade de uma cor (lighten/darken)
 *
 * @param color - Cor em hexadecimal
 * @param percent - Percentual de mudança (-100 a 100)
 *
 * @example
 * adjustBrightness('#B38B59', 20) // Mais claro
 * adjustBrightness('#B38B59', -20) // Mais escuro
 */
export function adjustBrightness(color: string, percent: number): string {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);

  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;

  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

/**
 * Obtém uma cor com transparência
 *
 * @example
 * withOpacity('#B38B59', 0.5) // rgba(179, 139, 89, 0.5)
 */
export function withOpacity(color: string, opacity: number): string {
  if (!color.startsWith("#")) return color;

  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Cria um objeto de estilos inline a partir das cores do tema
 *
 * @example
 * const styles = createThemeStyles(COLORS);
 * <div style={styles.primaryButton} />
 */
export function createThemeStyles(colors: typeof COLORS) {
  return {
    primaryButton: {
      backgroundColor: colors.primary,
      color: colors.textInverse,
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    primaryButtonHover: {
      backgroundColor: colors.primaryDark,
    },
    card: {
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: "8px",
    },
    text: {
      color: colors.text,
    },
    textLight: {
      color: colors.textLight,
    },
  };
}

/**
 * Exporta um template de configuração para criar uma nova instância
 * Útil para gerar configs de novos white labels
 */
export function exportThemeTemplate() {
  return `
// ============================================================================
// NOVO TEMPLATE DE TEMA WHITE LABEL
// ============================================================================

export const MY_BRAND_CONFIG = {
  colors: {
    primary: "#DEFINE_COR_PRINCIPAL",
    primaryDark: "#DEFINE_COR_PRINCIPAL_ESCURA",
    secondary: "#DEFINE_COR_SECUNDARIA",
    // ... defina outras cores
  },
  
  typography: {
    googleFontsUrl: "https://fonts.googleapis.com/...",
    sans: "'SuaFonte', sans-serif",
    serif: "'OutraFonte', serif",
  },
  
  content: {
    company: {
      name: "NOME_DA_SUA_EMPRESA",
      tagline: "Seu slogan aqui",
    },
    // ... defina outro conteúdo
  },
};
  `;
}
