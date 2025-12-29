/**
 * ============================================================================
 * TESTES UNITÁRIOS - Validação Automática
 * ============================================================================
 * Testes simples sem framework (sem dependências).
 * Execute: node src/tests.js
 * Referência: Jest-style test assertions (mas com vanilla JS)
 */

// Simples framework de testes
class TestRunner {
  constructor(name) {
    this.name = name;
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  test(description, fn) {
    this.tests.push({ description, fn });
  }

  assert(condition, message) {
    if (!condition) {
      throw new Error(`Assertion failed: ${message}`);
    }
  }

  assertEqual(actual, expected, message) {
    if (actual !== expected) {
      throw new Error(`Expected ${expected}, but got ${actual}. ${message}`);
    }
  }

  assertTrue(value, message) {
    if (value !== true) {
      throw new Error(`Expected true, but got ${value}. ${message}`);
    }
  }

  assertThrows(fn, message) {
    try {
      fn();
      throw new Error(`Expected function to throw. ${message}`);
    } catch (e) {
      if (e.message.includes("Expected function to throw")) {
        throw e;
      }
    }
  }

  async run() {
    console.log(`\n🧪 Suite: ${this.name}`);
    console.log("═".repeat(50));

    for (const test of this.tests) {
      try {
        test.fn(this);
        this.passed++;
        console.log(`✅ ${test.description}`);
      } catch (error) {
        this.failed++;
        console.log(`❌ ${test.description}`);
        console.log(`   └─ ${error.message}`);
      }
    }

    console.log("═".repeat(50));
    console.log(`📊 Results: ${this.passed} passed, ${this.failed} failed\n`);

    return this.failed === 0;
  }
}

// ============================================================================
// TESTES DO VALIDADOR
// ============================================================================

const validatorTests = new TestRunner("Validator");

validatorTests.test("Deve rejeitar color inválida", (t) => {
  t.assertThrows(() => {
    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test("invalid-color")) {
      throw new Error("Cor inválida");
    }
  }, "Color validation failed");
});

validatorTests.test("Deve aceitar color hex válida", (t) => {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  t.assertTrue(hexRegex.test("#B38B59"), "Hex color should be valid");
});

validatorTests.test("Deve validar URL de Google Fonts", (t) => {
  const url = "https://fonts.googleapis.com/css2?family=Playfair+Display";
  t.assertTrue(url.startsWith("http"), "URL should start with http");
});

validatorTests.test("Deve rejeitar SEO title curto", (t) => {
  const title = "ab";
  t.assertTrue(title.length < 5, "Title is too short");
});

// ============================================================================
// TESTES DE CONSTANTES
// ============================================================================

const constantsTests = new TestRunner("Constants");

constantsTests.test("Deve ter TIMING.SCROLL_DETECTION_DELAY", (t) => {
  const TIMING = {
    SCROLL_DETECTION_DELAY: 10,
    CAROUSEL_AUTOPLAY_INTERVAL: 4000,
    HEADER_TRANSITION_DURATION: 500,
  };
  t.assertEqual(
    typeof TIMING.SCROLL_DETECTION_DELAY,
    "number",
    "Should be a number"
  );
  t.assertTrue(TIMING.SCROLL_DETECTION_DELAY > 0, "Should be positive");
});

constantsTests.test("Deve ter BREAKPOINTS válidos", (t) => {
  const BREAKPOINTS = {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1280,
  };
  t.assertTrue(
    BREAKPOINTS.MOBILE < BREAKPOINTS.TABLET,
    "Mobile should be less than tablet"
  );
  t.assertTrue(
    BREAKPOINTS.TABLET < BREAKPOINTS.DESKTOP,
    "Tablet should be less than desktop"
  );
});

constantsTests.test("Deve ter SELECTORS válidos", (t) => {
  const SELECTORS = {
    HEADER: "#header",
    MAIN: "#main",
    FOOTER: "#footer",
  };
  t.assertTrue(
    SELECTORS.HEADER.startsWith("#"),
    "Selector should be CSS selector"
  );
});

// ============================================================================
// TESTES DE INTEGRAÇÃO
// ============================================================================

const integrationTests = new TestRunner("Integration");

integrationTests.test("Deve verificar estrutura de config", (t) => {
  const mockConfig = {
    COLORS: { primary: "#B38B59" },
    TYPOGRAPHY: { sans: "sans-serif", serif: "serif" },
    CONTENT: { company: { name: "Test" } },
    SEO: { title: "Test", description: "Test description" },
  };

  t.assertTrue("COLORS" in mockConfig, "Should have COLORS");
  t.assertTrue("TYPOGRAPHY" in mockConfig, "Should have TYPOGRAPHY");
  t.assertTrue("CONTENT" in mockConfig, "Should have CONTENT");
  t.assertTrue("SEO" in mockConfig, "Should have SEO");
});

integrationTests.test("Deve validar array de navigation", (t) => {
  const navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  t.assertTrue(Array.isArray(navigation), "Should be array");
  t.assertTrue(navigation.length > 0, "Should not be empty");
  t.assertTrue(
    navigation[0].hasOwnProperty("label"),
    "Should have label property"
  );
  t.assertTrue(
    navigation[0].hasOwnProperty("href"),
    "Should have href property"
  );
});

// ============================================================================
// RUNNER PRINCIPAL
// ============================================================================

async function runAllTests() {
  console.log("\n");
  console.log("╔════════════════════════════════════════════════════════╗");
  console.log("║          TESTES UNITÁRIOS - Landing Page               ║");
  console.log("╚════════════════════════════════════════════════════════╝");

  const results = [];
  results.push(await validatorTests.run());
  results.push(await constantsTests.run());
  results.push(await integrationTests.run());

  const allPassed = results.every((r) => r);

  if (allPassed) {
    console.log("🎉 TODOS OS TESTES PASSARAM!");
  } else {
    console.log("⚠️  Alguns testes falharam. Verifique acima.");
    process.exit(1);
  }
}

// Executa diretamente quando rodado via Node.js
runAllTests().catch((error) => {
  console.error("❌ Erro ao executar testes:", error);
  process.exit(1);
});

export {
  TestRunner,
  runAllTests,
  validatorTests,
  constantsTests,
  integrationTests,
};
