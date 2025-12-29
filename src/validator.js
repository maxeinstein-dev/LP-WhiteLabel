/**
 * ============================================================================
 * VALIDADOR - Validação de Configuração
 * ============================================================================
 * Valida a integridade dos dados de config.js na inicialização.
 * Referência: Defensive Programming - Falhar rápido com mensagens claras.
 */

/**
 * Valida se um objeto tem as propriedades obrigatórias
 * @param {Object} obj - Objeto a validar
 * @param {string[]} requiredProps - Lista de propriedades obrigatórias
 * @param {string} context - Contexto para mensagem de erro
 * @throws {Error} Se propriedade obrigatória está faltando
 */
function validateRequiredProps(obj, requiredProps, context) {
  const missing = requiredProps.filter((prop) => !(prop in obj));

  if (missing.length > 0) {
    throw new Error(
      `[Config Error] ${context}: Propriedades obrigatórias faltando: ${missing.join(
        ", "
      )}`
    );
  }
}

/**
 * Valida se um valor é uma cor válida (hex, rgb, ou HSL)
 * @param {string} color - Cor a validar
 * @throws {Error} Se cor é inválida
 */
function validateColor(color) {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const rgbRegex = /^rgba?\(/;

  if (!hexRegex.test(color) && !rgbRegex.test(color)) {
    throw new Error(
      `[Config Error] Cor inválida: "${color}". Use formato hex (#RRGGBB) ou rgb()`
    );
  }
}

/**
 * Valida objeto COLORS
 * @param {Object} colors - Objeto COLORS da config
 */
export function validateColors(colors) {
  const requiredColors = [
    "primary",
    "secondary",
    "text",
    "background",
    "surface",
  ];

  validateRequiredProps(colors, requiredColors, "COLORS");

  // Valida cada cor
  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value !== "string") {
      throw new Error(
        `[Config Error] COLORS.${key} deve ser string, recebeu: ${typeof value}`
      );
    }
    try {
      validateColor(value);
    } catch (e) {
      throw new Error(`[Config Error] COLORS.${key}: ${e.message}`);
    }
  });
}

/**
 * Valida objeto TYPOGRAPHY
 * @param {Object} typography - Objeto TYPOGRAPHY da config
 */
export function validateTypography(typography) {
  const requiredProps = ["sans", "serif", "googleFontsUrl"];

  validateRequiredProps(typography, requiredProps, "TYPOGRAPHY");

  if (typeof typography.sans !== "string" || !typography.sans.trim()) {
    throw new Error(
      "[Config Error] TYPOGRAPHY.sans deve ser uma string não-vazia"
    );
  }

  if (typeof typography.serif !== "string" || !typography.serif.trim()) {
    throw new Error(
      "[Config Error] TYPOGRAPHY.serif deve ser uma string não-vazia"
    );
  }

  if (
    typeof typography.googleFontsUrl !== "string" ||
    !typography.googleFontsUrl.startsWith("http")
  ) {
    throw new Error(
      "[Config Error] TYPOGRAPHY.googleFontsUrl deve ser uma URL válida"
    );
  }
}

/**
 * Valida objeto CONTENT
 * @param {Object} content - Objeto CONTENT da config
 */
export function validateContent(content) {
  const requiredProps = ["company", "navigation", "hero", "features"];

  validateRequiredProps(content, requiredProps, "CONTENT");

  if (!content.company.name || typeof content.company.name !== "string") {
    throw new Error("[Config Error] CONTENT.company.name é obrigatório");
  }

  if (!Array.isArray(content.navigation) || content.navigation.length === 0) {
    throw new Error(
      "[Config Error] CONTENT.navigation deve ser um array não-vazio"
    );
  }

  if (!content.hero.title || typeof content.hero.title !== "string") {
    throw new Error("[Config Error] CONTENT.hero.title é obrigatório");
  }

  if (!Array.isArray(content.features) || content.features.length === 0) {
    throw new Error(
      "[Config Error] CONTENT.features deve ser um array não-vazio"
    );
  }
}

/**
 * Valida objeto SEO
 * @param {Object} seo - Objeto SEO da config
 */
export function validateSEO(seo) {
  const requiredProps = ["title", "description"];

  validateRequiredProps(seo, requiredProps, "SEO");

  if (typeof seo.title !== "string" || seo.title.length < 5) {
    throw new Error("[Config Error] SEO.title deve ter mínimo 5 caracteres");
  }

  if (typeof seo.description !== "string" || seo.description.length < 10) {
    throw new Error(
      "[Config Error] SEO.description deve ter mínimo 10 caracteres"
    );
  }

  // Meta description não deve exceder 160 caracteres
  if (seo.description.length > 160) {
    console.warn(
      `[Config Warning] SEO.description tem ${seo.description.length} caracteres (máximo recomendado: 160)`
    );
  }
}

/**
 * VALIDAÇÃO PRINCIPAL - Valida toda a configuração
 * @param {Object} config - Objeto completo de configuração
 * @throws {Error} Se configuração é inválida
 * @returns {boolean} true se válido
 */
export function validateConfig(config) {
  try {
    if (!config || typeof config !== "object") {
      throw new Error("[Config Error] Configuração deve ser um objeto");
    }

    const requiredObjects = ["COLORS", "TYPOGRAPHY", "CONTENT", "SEO"];
    const missing = requiredObjects.filter((obj) => !(obj in config));

    if (missing.length > 0) {
      throw new Error(
        `[Config Error] Objetos obrigatórios faltando: ${missing.join(", ")}`
      );
    }

    // Executa todas as validações
    validateColors(config.COLORS);
    validateTypography(config.TYPOGRAPHY);
    validateContent(config.CONTENT);
    validateSEO(config.SEO);

    console.log("✅ [Config] Configuração validada com sucesso!");
    return true;
  } catch (error) {
    console.error("❌", error.message);
    throw error; // Re-lança para parar a inicialização
  }
}

export default {
  validateConfig,
  validateColors,
  validateTypography,
  validateContent,
  validateSEO,
};
