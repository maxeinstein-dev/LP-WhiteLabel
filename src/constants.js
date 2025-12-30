/**
 * ============================================================================
 * CONSTANTES GLOBAIS - Magic Numbers e Strings
 * ============================================================================
 * Centraliza números mágicos para fácil manutenção e reutilização.
 * Referência: Clean Code - Evitar Magic Numbers
 */

/**
 * Timeouts e Intervals (em ms)
 */
export const TIMING = {
  SCROLL_DETECTION_DELAY: 10, // Treshold de scroll em pixels
  CAROUSEL_AUTOPLAY_INTERVAL: 4000, // Autoplay do carrossel (4s)
  HEADER_TRANSITION_DURATION: 500, // Animação do header (500ms)
  SMOOTH_SCROLL_BEHAVIOR: "smooth", // Comportamento do scroll
};

/**
 * Media Queries (breakpoints em px)
 */
export const BREAKPOINTS = {
  MOBILE: 768, // Breakpoint md (Tailwind)
  TABLET: 1024, // Breakpoint lg (Tailwind)
  DESKTOP: 1280, // Breakpoint xl (Tailwind)
};

/**
 * Seletores DOM
 */
export const SELECTORS = {
  HEADER: "#header",
  MAIN: "#main",
  FOOTER: "#footer",
  MAIN_HEADER: "#main-header",
  MOBILE_MENU_TOGGLE: "#mobile-menu-toggle",
  MOBILE_MENU: "#mobile-menu",
  CAROUSEL_CONTAINER: ".projects-carousel",
};

/**
 * Atributos ARIA para Acessibilidade
 */
export const ARIA = {
  LABEL_MENU: "Menu",
  LABEL_CLOSE_MENU: "Fechar menu",
  ROLE_BANNER: "banner",
  ROLE_MAIN: "main",
  ROLE_CONTENTINFO: "contentinfo",
};

/**
 * Índices e Limites
 */
export const LIMITS = {
  MIN_SCROLL_THRESHOLD: 10, // Pixels para ativar estado scrolled
  CAROUSEL_SLIDES_TO_SHOW: 3, // Slides visíveis no carrossel
  CAROUSEL_SLIDES_TO_SCROLL: 1, // Slides a scrollar por vez
};

export default {
  TIMING,
  BREAKPOINTS,
  SELECTORS,
  ARIA,
  LIMITS,
};
