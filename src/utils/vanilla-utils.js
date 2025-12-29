/**
 * ============================================================================
 * UTILITÁRIOS - Funções Auxiliares para Vanilla JS
 * ============================================================================
 */

/**
 * Scroll suave para elementos
 */
export function smoothScroll(target) {
  const element =
    typeof target === "string" ? document.querySelector(target) : target;

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export default {
  smoothScroll,
};
