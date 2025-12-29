/**
 * ============================================================================
 * MAIN.JS - Conversão fiel do React para Vanilla JS
 * ============================================================================
 * Mantém 100% de fidelidade visual e funcional ao projeto React original.
 *
 * Boas Práticas Aplicadas:
 * - Importações centralizadas (constants, validator)
 * - Validação de config na inicialização
 * - Constantes nomeadas em vez de magic numbers
 * - Tratamento de erros com try-catch
 * - JSDoc completo para todas as funções
 */

import { COLORS, TYPOGRAPHY, CONTENT, SEO } from "./config/config.js";
import { smoothScroll } from "./utils/vanilla-utils.js";
import { TIMING, SELECTORS, LIMITS } from "./constants.js";
import { validateConfig } from "./validator.js";

// ============================================================================
// FUNÇÃO AUXILIAR: ÍCONES SVG PARA FEATURES
// ============================================================================

/**
 * Retorna SVG de ícone baseado no nome
 * @param {string} iconName - Nome do ícone (leaf, map, sun)
 * @returns {string} HTML do SVG
 * @example
 * const leaf = getFeatureIcon('leaf');
 */
function getFeatureIcon(iconName) {
  const icons = {
    leaf: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>`,
    map: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>`,
    sun: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2"/>
      <path d="M12 20v2"/>
      <path d="m4.93 4.93 1.41 1.41"/>
      <path d="m17.66 17.66 1.41 1.41"/>
      <path d="M2 12h2"/>
      <path d="M20 12h2"/>
      <path d="m6.34 17.66-1.41 1.41"/>
      <path d="m19.07 4.93-1.41 1.41"/>
    </svg>`,
  };
  return icons[iconName] || icons.leaf;
}

// ============================================================================
// 1. INJETAR SEO E META TAGS
// ============================================================================

/**
 * Injeta meta tags de SEO no <head>
 * Referência: Open Graph Protocol para compartilhamento em redes sociais
 */
function injectSEO() {
  try {
    document.title = SEO.title;

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
  } catch (error) {
    console.error("❌ [SEO] Erro ao injetar meta tags:", error);
  }
}

// ============================================================================
// 2. INJETAR GOOGLE FONTS
// ============================================================================

function injectGoogleFonts() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = TYPOGRAPHY.googleFontsUrl;
  document.head.appendChild(link);

  document.body.style.fontFamily = TYPOGRAPHY.sans;
}

// ============================================================================
// 3. RENDERIZAR HEADER (TRANSPARENTE E FIXO)
// ============================================================================

function renderHeader() {
  const header = document.getElementById("header");
  let isScrolled = false;

  const navItems = CONTENT.navigation
    .map(
      (item) =>
        `<a href="${item.href}" class="text-sm uppercase tracking-widest transition-colors font-medium hover-primary nav-link text-white/90">${item.label}</a>`
    )
    .join("");

  const socialIcons = CONTENT.footer.social
    .map(
      (social, index) =>
        `<a key="${index}" href="${social.href}" class="transition-colors hover-primary social-link text-white/80" aria-label="${social.label}">
          ${social.icon}
        </a>`
    )
    .join("");

  header.innerHTML = `
    <header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent py-6">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="text-2xl font-serif font-bold tracking-tight transition-colors logo-text text-white">
          ${CONTENT.company.name}<span style="color: ${COLORS.primary}">${
    CONTENT.company.nameHighlight
  }</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <nav class="flex items-center space-x-6">
            ${navItems}
          </nav>

          <!-- Social Icons -->
          <div class="flex items-center space-x-3 pl-6 border-l border-white/20 social-border">
            ${socialIcons}
          </div>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="md:hidden mobile-menu-btn text-white" id="mobile-menu-toggle" aria-label="Menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="hidden md:hidden mobile-menu fixed inset-0 bg-black/40 backdrop-blur-md z-40 pt-20" id="mobile-menu">
        <div class="flex items-center justify-end px-6">
          <button id="mobile-menu-close" class="text-white/90 hover:opacity-100 focus:outline-none" aria-label="Fechar menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <nav class="flex flex-col gap-4 p-6">
          ${CONTENT.navigation
            .map(
              (item) =>
                `<a href="${item.href}" class="text-lg font-medium text-white/90 hover-primary py-2 border-b border-white/20">${item.label}</a>`
            )
            .join("")}
        </nav>
      </div>
    </header>
  `;

  // Scroll handler
  function handleScroll() {
    const headerEl = document.getElementById("main-header");
    const scrolled = window.scrollY > 10;

    if (scrolled !== isScrolled) {
      isScrolled = scrolled;

      if (isScrolled) {
        headerEl.classList.add(
          "bg-white/30",
          "backdrop-blur-md",
          "shadow-sm",
          "border-white/20",
          "py-3"
        );
        headerEl.classList.remove("bg-transparent", "py-6");

        // Text colors
        document.querySelectorAll(".logo-text").forEach((el) => {
          el.classList.remove("text-white");
          el.classList.add("text-secondary");
        });
        document.querySelectorAll(".nav-link").forEach((el) => {
          el.classList.remove("text-white/90");
          el.classList.add("text-gray-600");
        });
        document.querySelectorAll(".social-link").forEach((el) => {
          el.classList.remove("text-white/80");
          el.classList.add("text-gray-400");
        });
        document.querySelectorAll(".social-border").forEach((el) => {
          el.classList.remove("border-white/20");
          el.classList.add("border-gray-200");
        });
        document
          .querySelector(".mobile-menu-btn")
          ?.classList.remove("text-white");
        document
          .querySelector(".mobile-menu-btn")
          ?.classList.add("text-gray-900");
      } else {
        headerEl.classList.remove(
          "bg-white/30",
          "backdrop-blur-md",
          "shadow-sm",
          "border-white/20",
          "py-3"
        );
        headerEl.classList.add("bg-transparent", "py-6");

        // Text colors
        document.querySelectorAll(".logo-text").forEach((el) => {
          el.classList.remove("text-secondary");
          el.classList.add("text-white");
        });
        document.querySelectorAll(".nav-link").forEach((el) => {
          el.classList.add("text-white/90");
          el.classList.remove("text-gray-600");
        });
        document.querySelectorAll(".social-link").forEach((el) => {
          el.classList.add("text-white/80");
          el.classList.remove("text-gray-400");
        });
        document.querySelectorAll(".social-border").forEach((el) => {
          el.classList.add("border-white/20");
          el.classList.remove("border-gray-200");
        });
        document.querySelector(".mobile-menu-btn")?.classList.add("text-white");
        document
          .querySelector(".mobile-menu-btn")
          ?.classList.remove("text-gray-900");
      }
    }
  }

  // Initialize
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial state

  // Mobile Menu behavior
  const mobileMenu = document.getElementById("mobile-menu");
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("mobile-menu-close");

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("open");
    mobileMenu.removeAttribute("inert");
    document.body.classList.add("menu-open");
    toggleBtn?.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    mobileMenu.classList.add("hidden");
    mobileMenu.setAttribute("inert", "");
    document.body.classList.remove("menu-open");
    toggleBtn?.setAttribute("aria-expanded", "false");
    // Return focus to toggle to avoid focused element inside hidden region
    toggleBtn?.focus();
  }

  // Toggle on button
  toggleBtn?.addEventListener("click", () => {
    const isOpen = mobileMenu?.classList.contains("open");
    if (isOpen) closeMobileMenu();
    else openMobileMenu();
  });

  // Close on close button
  closeBtn?.addEventListener("click", () => closeMobileMenu());

  // Close when clicking backdrop (outside nav)
  mobileMenu?.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;
    if (!e.target.closest("nav")) closeMobileMenu();
  });

  // Close on ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileMenu();
  });

  // Close when clicking a link
  mobileMenu
    ?.querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => closeMobileMenu()));

  // Prevent flicker on scroll when menu open
  const originalHandleScroll = handleScroll;
  function guardedScroll() {
    if (document.body.classList.contains("menu-open")) return;
    originalHandleScroll();
  }
  window.removeEventListener("scroll", handleScroll);
  window.addEventListener("scroll", guardedScroll);
  guardedScroll();
}

// ============================================================================
// 4. RENDERIZAR HERO
// ============================================================================

function renderHero() {
  const main = document.getElementById("main");

  const heroHTML = `
    <section id="hero" class="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="${CONTENT.hero.image}"
          alt="${CONTENT.hero.imageAlt}"
          loading="eager"
          class="w-full h-full object-cover"
        />
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg fade-in">
          ${CONTENT.hero.title} <br />
          <span class="italic font-light" style="color: ${COLORS.primary}">
            ${CONTENT.hero.highlight}
          </span>
        </h1>

        <p class="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide drop-shadow-md fade-in">
          ${CONTENT.hero.subtitle}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in">
          <a href="${CONTENT.hero.cta.link}" class="px-8 py-6 text-white text-sm uppercase tracking-widest min-w-[200px] shadow-lg transition-all hover:opacity-90" style="background-color: ${COLORS.primary}">
            ${CONTENT.hero.cta.label}
          </a>
          <a href="${CONTENT.hero.ctaSecondary.link}" class="px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-black text-sm uppercase tracking-widest min-w-[200px] bg-white/10 backdrop-blur-sm transition-all">
            ${CONTENT.hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  `;

  main.innerHTML = heroHTML;
}

// ============================================================================
// 5. RENDERIZAR FEATURES
// ============================================================================

function renderFeatures() {
  const main = document.getElementById("main");

  const featuresHTML = `
    <section id="features" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
            ${CONTENT.features.title}
          </h2>
          <div class="w-24 h-1 mx-auto" style="background-color: ${
            COLORS.primary
          }"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${CONTENT.features.items
            .map(
              (item, index) => `
            <div class="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg overflow-hidden group h-full fade-in" style="animation-delay: ${
              index * 0.2
            }s">
              <div class="flex flex-col items-center pt-10 pb-4">
                <div class="w-20 h-20 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform" style="background-color: ${
                  COLORS.primaryOpacity22
                }">
                  <div style="color: ${COLORS.primary}">
                    ${getFeatureIcon(item.icon)}
                  </div>
                </div>
                <h3 class="text-xl font-serif font-semibold text-secondary text-center px-8">${
                  item.title
                }</h3>
              </div>
              <div class="text-center pb-10 px-8">
                <p class="text-gray-600 leading-relaxed">${item.description}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  main.innerHTML += featuresHTML;
}

// ============================================================================
// 6. RENDERIZAR PROJECTS COM CARROSSEL
// ============================================================================

function renderProjects() {
  const main = document.getElementById("main");

  const projectsHTML = `
    <!-- Slick Carousel CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>

    <section id="projects" class="py-20 bg-gray-100 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
            ${CONTENT.projects.title}
          </h2>
          <div class="w-24 h-1 mx-auto mb-4" style="background-color: ${
            COLORS.primary
          }"></div>
          <p class="text-gray-600 max-w-xl mx-auto text-[15px]">
            ${CONTENT.projects.subtitle}
          </p>
        </div>

        <div class="projects-carousel px-4 -mx-4" id="projects-slider">
          ${CONTENT.projects.items
            .map(
              (project) => `
            <div class="px-3">
              <div class="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col group">
                <div class="relative overflow-hidden">
                  <span class="absolute top-4 left-4 z-10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white" style="background-color: ${COLORS.primary}">
                    ${project.status}
                  </span>
                  <img 
                    src="${project.image}" 
                    alt="${project.title}"
                    loading="lazy"
                    class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div class="p-6 flex-grow flex flex-col">
                  <h3 class="font-serif text-xl font-bold text-secondary mb-2">${project.title}</h3>
                  <p class="text-gray-600 mb-4 flex-grow">${project.description}</p>
                  <button class="self-start px-6 py-2 text-white text-sm font-semibold uppercase tracking-wider transition-all hover:opacity-90" style="background-color: ${COLORS.primary}">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>

    <style>
      /* Carrossel - Dots customizados */
      #projects .slick-dots {
        bottom: -50px;
      }
      
      #projects .slick-dots li button:before {
        font-size: 12px;
        color: ${COLORS.carouselDotDefault};
        opacity: 1;
      }
      
      #projects .slick-dots li.slick-active button:before {
        color: ${COLORS.primary} !important;
        opacity: 1;
      }
      
      /* Carrossel - Setas customizadas */
      #projects .slick-prev,
      #projects .slick-next {
        width: 50px;
        height: 50px;
        z-index: 10;
        background-color: ${COLORS.carouselArrowBg};
        border-radius: 50%;
        box-shadow: 0 4px 6px -1px ${COLORS.carouselArrowShadow};
        transition: all 0.3s ease;
      }
      
      #projects .slick-prev:hover,
      #projects .slick-next:hover {
        background-color: ${COLORS.primary};
        transform: scale(1.1);
      }
      
      #projects .slick-prev:before,
      #projects .slick-next:before {
        color: ${COLORS.primary};
        font-size: 24px;
        line-height: 1;
        opacity: 1;
      }
      
      #projects .slick-prev:hover:before,
      #projects .slick-next:hover:before {
        color: ${COLORS.white};
      }
      
      #projects .slick-prev {
        left: -25px;
      }
      
      #projects .slick-next {
        right: -25px;
      }
      
      @media (max-width: 640px) {
        #projects .slick-prev,
        #projects .slick-next {
          display: none !important;
        }
      }
    </style>
  `;

  main.innerHTML += projectsHTML;

  // Initialize Slick Carousel
  if (window.jQuery && window.jQuery.fn.slick) {
    setTimeout(() => {
      window.jQuery("#projects-slider").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      });
    }, 100);
  }
}

// ============================================================================
// 7. RENDERIZAR ABOUT
// ============================================================================

function renderAbout() {
  const main = document.getElementById("main");

  const aboutHTML = `
    <section id="about" class="py-20 md:py-32 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Image Column -->
          <div class="relative fade-in">
            <div class="relative h-[500px] md:h-[600px] w-full overflow-hidden shadow-2xl">
              <img
                src="${CONTENT.about.image}"
                alt="${CONTENT.about.imageAlt}"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Decorative Boxes -->
            <div class="absolute -bottom-8 -right-8 w-48 h-48 bg-gray-100 -z-10 hidden md:block"></div>
            <div class="absolute -top-8 -left-8 w-48 h-48 border-2 -z-10 hidden md:block" style="border-color: ${
              COLORS.primary
            }33"></div>
          </div>

          <!-- Text Column -->
          <div class="flex flex-col justify-center fade-in">
            <span class="font-bold text-sm tracking-widest uppercase mb-4" style="color: ${
              COLORS.primary
            }">
              ${CONTENT.about.tagline}
            </span>
            <h2 class="text-3xl md:text-5xl font-serif font-bold text-secondary mb-8 leading-tight">
              ${CONTENT.about.title}
            </h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              ${CONTENT.about.description}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              ${CONTENT.about.highlights
                .map(
                  (item) => `
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style="background-color: ${COLORS.primary}33">
                    <svg class="w-3 h-3" style="color: ${COLORS.primary}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700 text-sm">${item}</span>
                </div>
              `
                )
                .join("")}
            </div>

            <a href="#contact" class="inline-block px-8 py-4 text-white text-sm font-semibold uppercase tracking-widest transition-all hover:opacity-90" style="background-color: ${
              COLORS.primary
            }">
              ENTRE EM CONTATO
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  main.innerHTML += aboutHTML;
}

// ============================================================================
// 8. RENDERIZAR CONTACT
// ============================================================================

function renderContact() {
  const main = document.getElementById("main");

  const contactHTML = `
    <section id="contact" class="py-20 bg-white relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 fade-in">
          <span class="font-bold text-sm tracking-widest uppercase mb-2 block" style="color: ${
            COLORS.primary
          }">
            ${CONTENT.contact.tagline}
          </span>
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
            ${CONTENT.contact.title}
          </h2>
          <p class="text-gray-600 max-w-xl mx-auto">
            ${CONTENT.contact.subtitle}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-1 space-y-8 bg-gray-50 p-10 rounded-lg h-fit fade-in">
            <h3 class="text-xl font-serif font-bold text-secondary mb-6">
              Informações
            </h3>

            ${CONTENT.contact.info
              .map(
                (item) => `
              <div class="flex items-start space-x-4">
                <div class="p-3 bg-white rounded-full shadow-sm" style="color: ${COLORS.primary}">
                  ${item.icon}
                </div>
                <div>
                  <p class="font-medium text-secondary">${item.label}</p>
                  <p class="text-gray-600 text-sm leading-relaxed">${item.value}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>

          <!-- Form -->
          <div class="lg:col-span-2 fade-in">
            <form id="contact-form" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-secondary mb-2">Nome *</label>
                  <input type="text" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-${
                    COLORS.primary
                  }" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-secondary mb-2">E-mail *</label>
                  <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none" placeholder="seu@email.com" />
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-secondary mb-2">Telefone</label>
                  <input type="tel" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-secondary mb-2">Projeto de Interesse</label>
                  <select name="project" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none">
                    <option value="">Selecione</option>
                    ${CONTENT.projects.items
                      .map(
                        (p) => `<option value="${p.title}">${p.title}</option>`
                      )
                      .join("")}
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-secondary mb-2">Mensagem *</label>
                <textarea name="message" required rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button type="submit" class="w-full px-8 py-4 text-white text-sm font-semibold uppercase tracking-widest transition-all hover:opacity-90" style="background-color: ${
                COLORS.primary
              }">
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  main.innerHTML += contactHTML;

  // Form handler
  document.getElementById("contact-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Formulário enviado! (Integração com RD Station deve ser configurada)"
    );
  });
}

// ============================================================================
// 9. RENDERIZAR FOOTER
// ============================================================================

function renderFooter() {
  const footer = document.getElementById("footer");
  const currentYear = new Date().getFullYear();

  const footerHTML = `
    <footer class="text-white pt-16 pb-8 border-t" style="background-color: ${
      COLORS.footerBackground
    }; border-color: ${COLORS.borderGray800}">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <!-- Brand -->
          <div class="col-span-1 md:col-span-1">
            <a href="#" class="text-2xl font-serif font-bold tracking-tight text-white mb-6 block">
              ${CONTENT.company.name}<span style="color: ${COLORS.primary}">${
    CONTENT.company.nameHighlight
  }</span>
            </a>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              ${CONTENT.footer.description}
            </p>
            <div class="flex space-x-4">
              ${CONTENT.footer.social
                .map(
                  (social, index) => `
                <a key="${index}" href="${social.href}" class="w-8 h-8 rounded-full flex items-center justify-center transition-all" style="background-color: ${COLORS.footerIconBg}; color: ${COLORS.gray400}" onmouseover="this.style.backgroundColor='${COLORS.primary}'; this.style.color='${COLORS.white}'" onmouseout="this.style.backgroundColor='${COLORS.footerIconBg}'; this.style.color='${COLORS.gray400}'">
                  ${social.icon}
                </a>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- Links -->
          <div class="col-span-1">
            <h4 class="text-lg font-semibold mb-6 text-white border-l-2 pl-3" style="border-color: ${
              COLORS.primary
            }">Menu</h4>
            <ul class="space-y-3">
              ${CONTENT.navigation
                .map(
                  (item, index) => `
                <li key="${index}"><a href="${item.href}" class="text-gray-400 hover:text-sm transition-colors" style="hover:color: ${COLORS.primary}">${item.label}</a></li>
              `
                )
                .join("")}
            </ul>
          </div>

          <!-- Contact -->
          <div class="col-span-1">
            <h4 class="text-lg font-semibold mb-6 text-white border-l-2 pl-3" style="border-color: ${
              COLORS.primary
            }">Contato</h4>
            <ul class="space-y-3 text-sm text-gray-400">
              ${CONTENT.contact.info
                .map(
                  (item) => `
                <li class="flex items-start gap-3">
                  <span style="color: ${COLORS.primary}" class="shrink-0 mt-0.5">${item.icon}</span>
                  <span>${item.value}</span>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-xs text-center md:text-left">
            © ${currentYear} ${CONTENT.footer.copyright}
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div class="flex items-center gap-2">
              <span class="text-gray-600 text-xs">Desenvolvido por:</span>
              <a href="${
                CONTENT.footer.developer.url
              }" target="_blank" rel="noopener noreferrer" aria-label="Visitar site da ${
    CONTENT.footer.developer.name
  }">
                <img src="${CONTENT.footer.developer.logo}" alt="Logo da ${
    CONTENT.footer.developer.name
  }" class="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  footer.innerHTML = footerHTML;
}

// ============================================================================
// 10. INICIALIZAÇÃO
// ============================================================================

/**
 * Inicializa a aplicação
 * Executa todas as funções de rendering e configuração
 *
 * Boas Práticas:
 * - Validação de config antes de tudo
 * - Try-catch para detectar erros cedo
 * - Logs estruturados para debugging
 */
function initializeApp() {
  try {
    // 1️⃣ VALIDAÇÃO - Verifica integridade da config
    validateConfig({ COLORS, TYPOGRAPHY, CONTENT, SEO });

    // 2️⃣ INJEÇÃO - Adiciona recursos globais
    injectSEO();
    injectGoogleFonts();

    // 3️⃣ RENDERIZAÇÃO - Renderiza seções na ordem
    renderHeader();
    renderHero();
    renderFeatures();
    renderProjects();
    renderAbout();
    renderContact();
    renderFooter();

    // 4️⃣ INTERATIVIDADE - Ativa scroll suave
    smoothScroll();

    console.log("✅ [App] Inicializado com sucesso!");
  } catch (error) {
    console.error("❌ [App] Erro crítico na inicialização:", error);

    // Fallback: Mostra mensagem de erro ao usuário
    const main = document.getElementById(SELECTORS.MAIN.replace("#", ""));
    if (main) {
      main.innerHTML = `
        <div style="padding: 40px; text-align: center; color: #d32f2f;">
          <h1>⚠️ Erro ao carregar página</h1>
          <p>Verifique a configuração em src/config/config.js</p>
          <p style="font-size: 12px; margin-top: 20px; color: #666;">
            ${error.message}
          </p>
        </div>
      `;
    }
  }
}

/**
 * Inicia a app quando DOM estiver pronto
 * Referência: DOMContentLoaded - garante que o DOM está totalmente carregado
 */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
