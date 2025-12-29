/**
 * ============================================================================
 * MAIN.JS - Inicialização e Renderização Dinâmica com Tailwind
 * ============================================================================
 *
 * Este arquivo renderiza toda a página dinamicamente a partir do config.js
 * Filosofia: Código fixo, Configuração dinâmica
 *
 */

import {
  COLORS,
  TYPOGRAPHY,
  CONTENT,
  ASSETS,
  SEO,
  injectCSSVariables,
} from "./config/config.js";

import {
  renderIcon,
  Carousel,
  MobileMenu,
  lazyLoadImages,
  validateEmail,
  validatePhone,
  formatPhone,
  smoothScroll,
} from "./utils/vanilla-utils.js";

// ============================================================================
// 1. CONFIGURAR TAILWIND COM CORES DINÂMICAS
// ============================================================================

function configureTailwind() {
  const script = document.createElement("script");
  script.innerHTML = `
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'primary': '${COLORS.primary}',
            'primary-dark': '${COLORS.primaryDark}',
            'secondary': '${COLORS.secondary}',
            'accent': '${COLORS.primary}',
            'neutral': '${COLORS.background}',
          },
          fontFamily: {
            'display': ['${TYPOGRAPHY.serif}'],
            'body': ['${TYPOGRAPHY.sans}'],
          },
        }
      }
    }
  `;
  document.head.appendChild(script);
}

// ============================================================================
// 2. INJETAR SEO E META TAGS
// ============================================================================

function injectSEO() {
  // Title
  document.title = `${SEO.title}`;

  // Meta tags
  const metaTags = [
    { name: "description", content: SEO.description },
    { name: "keywords", content: SEO.keywords },
    { property: "og:title", content: SEO.title },
    { property: "og:description", content: SEO.description },
    { property: "og:image", content: SEO.image },
    { name: "theme-color", content: COLORS.primary },
  ];

  metaTags.forEach((tag) => {
    const meta = document.createElement("meta");
    Object.assign(meta, tag);
    document.head.appendChild(meta);
  });
}

// ============================================================================
// 3. INJETAR GOOGLE FONTS
// ============================================================================

function injectGoogleFonts() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = TYPOGRAPHY.googleFontsUrl;
  document.head.appendChild(link);

  // Aplicar fontes ao body
  document.body.style.fontFamily = TYPOGRAPHY.sans;
  document.documentElement.style.setProperty(
    "--font-display",
    TYPOGRAPHY.serif
  );
}

// ============================================================================
// 4. RENDERIZAR HEADER COM NAVEGAÇÃO
// ============================================================================

function renderHeader() {
  const header = document.getElementById("header");

  const navItems = CONTENT.navigation
    .map(
      (item) =>
        `<li><a href="#${item.id}" class="text-secondary hover:text-primary transition">${item.label}</a></li>`
    )
    .join("");

  const headerHTML = `
    <nav class="bg-white shadow-sm sticky top-0 z-50" role="navigation" aria-label="Navegação principal">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <a href="#" class="font-display text-2xl font-bold text-secondary" aria-label="${CONTENT.company.name} - Página inicial">
            ${CONTENT.company.name}
          </a>

          <!-- Menu Desktop -->
          <ul class="hidden md:flex space-x-8" id="nav-menu">
            ${navItems}
          </ul>

          <!-- Menu Mobile Toggle -->
          <button
            class="md:hidden flex flex-col space-y-1"
            id="menu-toggle"
            aria-label="Abrir menu"
            aria-expanded="false"
          >
            <span class="block w-6 h-0.5 transition" style="background-color: ${COLORS.secondary}"></span>
            <span class="block w-6 h-0.5 transition" style="background-color: ${COLORS.secondary}"></span>
            <span class="block w-6 h-0.5 transition" style="background-color: ${COLORS.secondary}"></span>
          </button>
        </div>

        <!-- Menu Mobile -->
        <ul class="hidden md:hidden space-y-2 pb-4" id="nav-menu-mobile">
          ${navItems}
        </ul>
      </div>
    </nav>
  `;

  header.innerHTML = headerHTML;
}

// ============================================================================
// 5. RENDERIZAR MAIN CONTENT
// ============================================================================

function renderMainContent() {
  const main = document.getElementById("main");

  main.innerHTML = `
    <!-- Hero Section -->
    <section id="hero" class="py-20 lg:py-32" aria-label="Seção principal" style="background: linear-gradient(to right, ${
      COLORS.background
    }, white)">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="font-display text-5xl lg:text-6xl font-bold text-secondary mb-6">
              ${CONTENT.hero.title}
              <span class="highlight" style="color: ${COLORS.primary}">${
    CONTENT.hero.highlight
  }</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              ${CONTENT.hero.subtitle}
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#contact" class="px-8 py-3 text-white rounded-lg hover:opacity-90 transition font-semibold text-center" style="background-color: ${
                COLORS.primary
              }">
                ${CONTENT.hero.cta}
              </a>
              <a href="#features" class="px-8 py-3 border-2 rounded-lg hover:text-white transition font-semibold text-center" style="border-color: ${
                COLORS.primary
              }; color: ${COLORS.primary}">
                Saiba Mais
              </a>
            </div>
          </div>

          <div>
            <img
              src="${CONTENT.hero.image}"
              alt="${CONTENT.hero.imageAlt}"
              loading="lazy"
              decoding="async"
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 lg:py-32 bg-white" aria-label="Diferenciais">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-center text-secondary mb-16">
          ${CONTENT.features.title}
        </h2>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
          id="features-grid"
          role="region"
          aria-label="Lista de diferenciais"
        >
          <!-- Itens serão renderizados dinamicamente -->
        </div>
      </div>
    </section>

    <!-- Projects Section (Carrossel) -->
    <section id="projects" class="py-20 lg:py-32" style="background-color: ${
      COLORS.background
    }" aria-label="Projetos">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-center text-secondary mb-16">
          ${CONTENT.projects.title}
        </h2>

        <div class="relative">
          <div
            class="overflow-hidden rounded-lg"
            id="projects-carousel"
            role="region"
            aria-label="Carrossel de projetos"
          >
            <div class="flex transition-transform duration-500" id="carousel-inner">
              <!-- Itens serão renderizados dinamicamente -->
            </div>
          </div>

          <button
            class="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 text-white p-3 rounded-full hover:opacity-90 transition"
            id="carousel-prev"
            aria-label="Projeto anterior"
            style="background-color: ${COLORS.primary}"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            class="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 text-white p-3 rounded-full hover:opacity-90 transition"
            id="carousel-next"
            aria-label="Próximo projeto"
            style="background-color: ${COLORS.primary}"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 lg:py-32 bg-white" aria-label="Sobre nós">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-center text-secondary mb-8">
          ${CONTENT.about.title}
        </h2>

        <p class="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          ${CONTENT.about.description}
        </p>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
          id="about-stats"
          role="region"
          aria-label="Estatísticas"
        >
          <!-- Itens serão renderizados dinamicamente -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 lg:py-32" style="background-color: ${
      COLORS.background
    }" aria-label="Contato">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-center text-secondary mb-4">
          ${CONTENT.contact.title}
        </h2>
        <p class="text-lg text-gray-600 text-center mb-16">
          ${CONTENT.contact.subtitle}
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div role="region" aria-label="Informações de contato">
            ${CONTENT.contact.info
              .map(
                (item) => `
              <div class="mb-8">
                <h3 class="font-display text-xl font-bold text-secondary mb-2">${item.label}</h3>
                <p class="text-gray-600">${item.value}</p>
              </div>
            `
              )
              .join("")}
          </div>

          <!-- Contact Form -->
          <form
            id="contact-form"
            class="space-y-6"
            novalidate
            aria-label="Formulário de contato"
          >
            <div>
              <label for="form-name" class="block text-secondary font-semibold mb-2">Nome *</label>
              <input
                type="text"
                id="form-name"
                name="name"
                required
                placeholder="Seu Nome"
                aria-required="true"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg transition"
              />
              <span class="error-message text-red-500 text-sm mt-1 hidden" role="alert"></span>
            </div>

            <div>
              <label for="form-email" class="block text-secondary font-semibold mb-2">E-mail *</label>
              <input
                type="email"
                id="form-email"
                name="email"
                required
                placeholder="seu@email.com"
                aria-required="true"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg transition"
              />
              <span class="error-message text-red-500 text-sm mt-1 hidden" role="alert"></span>
            </div>

            <div>
              <label for="form-phone" class="block text-secondary font-semibold mb-2">Telefone</label>
              <input
                type="tel"
                id="form-phone"
                name="phone"
                placeholder="(11) 99999-9999"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg transition"
              />
              <span class="error-message text-red-500 text-sm mt-1 hidden" role="alert"></span>
            </div>

            <div>
              <label for="form-message" class="block text-secondary font-semibold mb-2">Mensagem *</label>
              <textarea
                id="form-message"
                name="message"
                rows="5"
                required
                placeholder="Sua Mensagem"
                aria-required="true"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg transition"
              ></textarea>
              <span class="error-message text-red-500 text-sm mt-1 hidden" role="alert"></span>
            </div>

            <button type="submit" class="w-full px-8 py-3 text-white rounded-lg hover:opacity-90 transition font-semibold" style="background-color: ${
              COLORS.primary
            }">
              ${CONTENT.contact.submitButton}
            </button>
            <div class="form-message text-center" role="status" aria-live="polite"></div>
          </form>
        </div>
      </div>
    </section>
  `;

  // Renderizar componentes dinâmicos
  renderFeatures();
  renderProjects();
  renderAboutStats();
}

// ============================================================================
// 6. RENDERIZAR FOOTER
// ============================================================================

function renderFooter() {
  const footer = document.getElementById("footer");

  const footerHTML = `
    <div style="background-color: ${
      COLORS.secondary
    }; color: white" class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="font-display text-xl font-bold mb-2">${
              CONTENT.company.name
            }</h3>
            <p class="text-gray-400">${CONTENT.company.tagline}</p>
          </div>

          <div>
            <h3 class="font-display text-xl font-bold mb-4">Links Rápidos</h3>
            <ul class="space-y-2">
              ${CONTENT.footer.links
                .map(
                  (link) => `
                <li><a href="${link.href}" class="text-gray-400 hover:text-white transition">${link.label}</a></li>
              `
                )
                .join("")}
            </ul>
          </div>

          <div>
            <h3 class="font-display text-xl font-bold mb-4">Redes Sociais</h3>
            <div class="flex space-x-4" role="region" aria-label="Links de redes sociais">
              ${CONTENT.footer.social
                .map(
                  (social) => `
                <a
                  href="${social.url}"
                  target="_blank"
                  rel="noopener"
                  aria-label="${social.name}"
                  class="text-gray-400 hover:text-white transition"
                >
                  ${social.icon}
                </a>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; ${new Date().getFullYear()} ${
    CONTENT.company.name
  }. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  `;

  footer.innerHTML = footerHTML;
}

// ============================================================================
// 7. RENDERIZAR FEATURES
// ============================================================================

function renderFeatures() {
  const container = document.getElementById("features-grid");
  if (!container) return;

  const featuresHTML = CONTENT.features.items
    .map(
      (item) => `
      <div class="p-6 border-2 rounded-lg hover:shadow-lg transition" style="border-color: ${
        COLORS.border
      }">
        <div class="mb-4" style="color: ${COLORS.primary}">
          ${renderIcon(item.icon, "w-10 h-10")}
        </div>
        <h3 class="font-display text-xl font-bold text-secondary mb-2">${
          item.title
        }</h3>
        <p class="text-gray-600">${item.description}</p>
      </div>
    `
    )
    .join("");

  container.innerHTML = featuresHTML;
}

// ============================================================================
// 8. RENDERIZAR PROJECTS (CAROUSEL)
// ============================================================================

function renderProjects() {
  const container = document.getElementById("carousel-inner");
  if (!container) return;

  const projectsHTML = CONTENT.projects.items
    .map(
      (project) => `
      <div class="flex-shrink-0 w-full" data-carousel-item>
        <div class="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="${project.image}" 
            alt="${project.title}"
            loading="lazy"
            decoding="async"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 bg-white">
            <h3 class="font-display text-2xl font-bold text-secondary mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <a href="${project.link}" class="inline-block px-4 py-2 text-white rounded transition" style="background-color: ${COLORS.primary}">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  container.innerHTML = projectsHTML;
}

// ============================================================================
// 9. RENDERIZAR ABOUT STATS
// ============================================================================

function renderAboutStats() {
  const container = document.getElementById("about-stats");
  if (!container) return;

  const statsHTML = CONTENT.about.highlights
    .map(
      (stat) => `
      <div class="text-center">
        <div class="font-display text-4xl font-bold text-secondary mb-2" style="color: ${COLORS.primary}">
          ${stat.value}
        </div>
        <div class="text-gray-600">${stat.label}</div>
      </div>
    `
    )
    .join("");

  container.innerHTML = statsHTML;
}

// ============================================================================
// 10. INICIALIZAÇÃO PRINCIPAL
// ============================================================================

function initializeApp() {
  console.log("🚀 Inicializando aplicação...");

  // Configurar Tailwind
  configureTailwind();

  // Injetar SEO
  injectSEO();

  // Injetar Google Fonts
  injectGoogleFonts();

  // Injetar CSS Variables
  injectCSSVariables();

  // Renderizar componentes
  renderHeader();
  renderMainContent();
  renderFooter();

  // Inicializar interações
  initializeCarousel();
  initializeMobileMenu();
  initializeContactForm();
  initializeSmoothScroll();
  initializeScrollAnimations();

  // Lazy load de imagens
  lazyLoadImages();

  console.log("✅ Aplicação inicializada com sucesso!");
}

// ============================================================================
// 11. HELPER FUNCTIONS - Interações
// ============================================================================

function initializeCarousel() {
  const carousel = document.getElementById("projects-carousel");
  if (!carousel) return;

  const carouselInstance = new Carousel(carousel, {
    autoplay: true,
    interval: 6000,
  });

  window.projectsCarousel = carouselInstance;
}

function initializeMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const menuMobile = document.getElementById("nav-menu-mobile");

  if (!toggleBtn || !menuMobile) return;

  const mobileMenu = new MobileMenu(toggleBtn, menuMobile);
  window.mobileMenuInstance = mobileMenu;
}

function initializeContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    await handleFormSubmit(data, form);
  });

  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });
}

function validateForm(form) {
  const fields = form.querySelectorAll("[required]");
  let isValid = true;

  fields.forEach((field) => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  const errorSpan = field.parentElement.querySelector(".error-message");
  let isValid = true;
  let errorMessage = "";

  if (!field.value.trim()) {
    isValid = false;
    errorMessage = "Este campo é obrigatório";
  } else if (field.type === "email" && !validateEmail(field.value)) {
    isValid = false;
    errorMessage = "Email inválido";
  } else if (
    field.type === "tel" &&
    field.value &&
    !validatePhone(field.value)
  ) {
    isValid = false;
    errorMessage = "Telefone inválido";
  }

  field.classList.toggle("error", !isValid);
  if (errorSpan) {
    errorSpan.textContent = errorMessage;
    errorSpan.classList.toggle("hidden", isValid);
  }

  return isValid;
}

async function handleFormSubmit(data, form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const messageDiv = form.querySelector(".form-message");

  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    messageDiv.textContent = CONTENT.contact.successMessage;
    messageDiv.style.color = COLORS.success;

    form.reset();

    setTimeout(() => {
      smoothScroll(messageDiv);
    }, 300);

    setTimeout(() => {
      messageDiv.textContent = "";
    }, 5000);
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    messageDiv.textContent = CONTENT.contact.errorMessage;
    messageDiv.style.color = COLORS.error;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = CONTENT.contact.submitButton;
  }
}

function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      smoothScroll(href);
    });
  });
}

function initializeScrollAnimations() {
  const elements = document.querySelectorAll(
    "[data-carousel-item], #features-grid > div, #about-stats > div"
  );

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

// ============================================================================
// 12. EXECUTAR
// ============================================================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

// ============================================================================
// 13. CLEANUP
// ============================================================================

window.addEventListener("beforeunload", () => {
  if (window.projectsCarousel) {
    window.projectsCarousel.destroy();
  }
  if (window.mobileMenuInstance) {
    window.mobileMenuInstance.destroy();
  }
});

export { initializeApp };
