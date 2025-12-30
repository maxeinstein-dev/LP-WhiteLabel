import { COLORS, TYPOGRAPHY, CONTENT, SEO, SETTINGS } from "./config/config.js";
import { SELECTORS } from "./constants.js";
import { validateConfig } from "./validator.js";

// Icon registry
const iconRegistry = {
  leaf: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  map: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  sun: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
};

function getFeatureIcon(type) {
  return iconRegistry[type] || iconRegistry.leaf;
}

// SEO injection
function injectSEO() {
  try {
    document.title = SEO.title;

    const metas = [
      { name: "keywords", content: SEO.keywords },
      { property: "og:title", content: SEO.title },
      { property: "og:description", content: SEO.description },
      { property: "og:image", content: SEO.ogImage || SEO.image },
      {
        property: "og:url",
        content: typeof location !== "undefined" ? location.href : SEO.ogUrl,
      },
      { name: "theme-color", content: COLORS.primary },
    ];

    metas.forEach((attr) => {
      const meta = document.createElement("meta");
      Object.assign(meta, attr);
      document.head.appendChild(meta);
    });

    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = typeof location !== "undefined" ? location.href : SEO.ogUrl;
    document.head.appendChild(link);
  } catch (err) {
    console.error("❌ [SEO]:", err);
  }
}

// Header/Navbar
function renderHeader() {
  const header = document.getElementById("header");

  header.innerHTML = `
    <nav id="main-header" class="navbar navbar-expand-lg navbar-dark fixed-top" style="background: transparent; transition: all 500ms; z-index: 1030;">
      <div class="container-fluid px-3 px-md-5">
        <a href="#hero" class="navbar-brand fw-bold" style="color: #fff;">
          ${CONTENT.company.name}
          <span style="color: ${COLORS.primary};">${
    CONTENT.company.nameHighlight
  }</span>
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-label="Menu de navegação">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" id="offcanvasNavbar">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div class="offcanvas-body">
            <div class="navbar-nav ms-auto">
              ${CONTENT.navigation
                .map(
                  (nav) => `
                <a href="${nav.href}" class="nav-link" style="color: #fff !important;">${nav.label}</a>
              `
                )
                .join("")}
            </div>
            <div class="d-flex gap-3 ms-3 mt-3">
              ${CONTENT.footer.social
                .map(
                  (social) => `
                <a href="${social.href}" target="_blank" title="${social.label}" style="color: #fff; text-decoration: none;">
                  ${social.icon}
                </a>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Navbar scroll effect com throttling
  let wasScrolled = false;
  let ticking = false;
  function updateNavbar() {
    const navbar = document.getElementById("main-header");
    const isScrolled = window.scrollY > 10;

    if (isScrolled !== wasScrolled) {
      wasScrolled = isScrolled;
      if (isScrolled) {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.backdropFilter = "blur(12px)";
        navbar.classList.add("shadow-sm");
        navbar
          .querySelectorAll(".nav-link")
          .forEach((link) => (link.style.color = "#000 !important"));
        navbar.querySelector(".navbar-brand").style.color = "#000";
      } else {
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.classList.remove("shadow-sm");
        navbar
          .querySelectorAll(".nav-link")
          .forEach((link) => (link.style.color = "#fff !important"));
        navbar.querySelector(".navbar-brand").style.color = "#fff";
      }
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    },
    { passive: true }
  );
  updateNavbar();

  // Hero section
  function renderHero() {
    const main = document.getElementById("main");

    main.innerHTML = `
    <section id="hero" class="position-relative d-flex align-items-center justify-content-center" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${CONTENT.hero.image}') center/cover; min-height: 100vh; background-attachment: fixed;">
      <div class="container-fluid px-3 px-md-5 text-center text-white position-relative" style="z-index: 2;">
        <h1 class="display-3 fw-bold mb-4" style="line-height: 1.2;">
          ${CONTENT.hero.title}
          <br/>
          <span class="fst-italic fw-light" style="color: ${COLORS.primary};">${CONTENT.hero.highlight}</span>
        </h1>
        <p class="lead mb-5 fs-5">${CONTENT.hero.subtitle}</p>
        <div class="d-flex gap-3 justify-content-center flex-wrap">
          <a href="${CONTENT.hero.cta.link}" class="btn btn-lg px-5" style="background-color: ${COLORS.primaryDark}; border: none; color: white; font-weight: 600; min-height: 48px;" aria-label="${CONTENT.hero.cta.label}">
            ${CONTENT.hero.cta.label}
          </a>
          <a href="${CONTENT.hero.ctaSecondary.link}" class="btn btn-lg btn-outline-light px-5" style="font-weight: 600; min-height: 48px;" aria-label="${CONTENT.hero.ctaSecondary.label}">
            ${CONTENT.hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  `;
  }

  // Features section
  function renderFeatures() {
    const main = document.getElementById("main");

    main.innerHTML += `
    <section id="features" class="py-5 py-md-6" style="background: #f9fafb;">
      <div class="container-fluid px-3 px-md-5">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" style="color: ${COLORS.secondary};">${
      CONTENT.features.title
    }</h2>
          <div class="mx-auto my-4" style="width: 96px; height: 4px; background-color: ${
            COLORS.primary
          };"></div>
        </div>
        <div class="row g-4 g-md-5">
          ${CONTENT.features.items
            .map(
              (feature) => `
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center pt-5">
                  <div class="mx-auto mb-4" style="width: 80px; height: 80px; border-radius: 50%; background-color: ${
                    COLORS.primaryOpacity22
                  }; display: flex; align-items: center; justify-content: center; color: ${
                COLORS.primary
              };">
                    ${getFeatureIcon(feature.icon)}
                  </div>
                  <h4 class="card-title fw-bold" style="color: ${
                    COLORS.secondary
                  };">${feature.title}</h4>
                  <p class="card-text text-muted">${feature.description}</p>
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
  }

  // Projects section with Swiper
  function renderProjects() {
    const main = document.getElementById("main");

    main.innerHTML += `
    <section id="projects" class="py-5 py-md-6" style="background: #f3f4f6;">
      <div class="container-fluid px-3 px-md-5">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" style="color: ${COLORS.secondary};">${
      CONTENT.projects.title
    }</h2>
          <div class="mx-auto my-4" style="width: 96px; height: 4px; background-color: ${
            COLORS.primary
          };"></div>
          <p class="text-muted fs-6">${CONTENT.projects.subtitle}</p>
        </div>
        <div class="swiper projects-carousel">
          <div class="swiper-wrapper">
            ${CONTENT.projects.items
              .map(
                (project) => `
              <div class="swiper-slide h-auto">
                <div class="card border-0 shadow-sm h-100">
                  <div class="position-relative overflow-hidden" style="height: 256px;">
                    <span class="badge position-absolute top-0 start-0 m-3 fs-6" style="background-color: ${COLORS.primaryDark}; color: white;">
                      ${project.status}
                    </span>
                    <img src="${project.image}" alt="${project.title}" class="w-100 h-100" style="object-fit: cover;" width="800" height="600" loading="lazy">
                  </div>
                  <div class="card-body d-flex flex-column">
                    <h4 class="card-title fw-bold" style="color: ${COLORS.secondary};">${project.title}</h4>
                    <p class="card-text text-muted flex-grow-1">${project.description}</p>
                    <button class="btn btn-sm px-3" style="background-color: ${COLORS.primaryDark}; color: white; width: fit-content; font-weight: 600;" aria-label="Ver detalhes de ${project.title}">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
          <div class="swiper-pagination mt-4"></div>
          <div class="swiper-button-prev" aria-label="Projeto anterior"></div>
          <div class="swiper-button-next" aria-label="Próximo projeto"></div>
        </div>
      </div>
      <style>
        .swiper-button-prev,
        .swiper-button-next {
          width: 48px;
          height: 48px;
          min-height: 48px;
          background-color: ${COLORS.carouselArrowBg};
          border-radius: 50%;
          box-shadow: 0 2px 8px ${COLORS.carouselArrowShadow};
          top: auto;
          bottom: -60px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          color: ${COLORS.primary};
          font-size: 20px;
        }
        .swiper-pagination-bullet {
          background-color: ${COLORS.carouselDotDefault};
          width: 12px;
          height: 12px;
          margin: 0 8px;
        }
        .swiper-pagination-bullet-active {
          background-color: ${COLORS.primary};
        }
        .projects-carousel {
          padding-bottom: 80px;
        }
      </style>
    </section>
  `;

    // Initialize Swiper after a delay
    const initSwiper = () => {
      if (window.Swiper) {
        new window.Swiper(".projects-carousel", {
          slidesPerView: 3,
          spaceBetween: 24,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          },
        });
      }
    };

    // Lazy load Swiper when section is visible
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.disconnect();
              initSwiper();
            }
          });
        },
        { rootMargin: "200px" }
      );

      const section = document.getElementById("projects");
      if (section) observer.observe(section);
    } else {
      initSwiper();
    }

    setTimeout(initSwiper, SETTINGS.production ? 2200 : 1500);
  }

  // About section
  function renderAbout() {
    const main = document.getElementById("main");

    main.innerHTML += `
    <section id="about" class="py-5 py-md-6 bg-white">
      <div class="container-fluid px-3 px-md-5">
        <div class="row align-items-center g-4 g-md-5">
          <div class="col-12 col-lg-6">
            <img src="${CONTENT.about.image}" alt="${
      CONTENT.about.imageAlt
    }" class="img-fluid shadow-lg rounded" style="max-height: 500px; object-fit: cover;" width="800" height="1000" loading="lazy">
          </div>
          <div class="col-12 col-lg-6">
            <span class="text-uppercase fw-bold small" style="color: ${
              COLORS.primary
            }; letter-spacing: 2px;">
              ${CONTENT.about.tagline}
            </span>
            <h2 class="display-5 fw-bold mt-3 mb-4" style="color: ${
              COLORS.secondary
            };">
              ${CONTENT.about.title}
            </h2>
            <p class="lead text-muted mb-4">${CONTENT.about.description}</p>
            <ul class="list-unstyled mb-4">
              ${CONTENT.about.highlights
                .map(
                  (highlight) => `
                <li class="mb-3">
                  <span style="color: ${COLORS.primary}; font-weight: bold;">✓</span>
                  <span class="ms-2">${highlight}</span>
                </li>
              `
                )
                .join("")}
            </ul>
            <a href="#contact" class="btn btn-lg px-5" style="background-color: ${
              COLORS.primaryDark
            }; color: white; font-weight: 600; min-height: 48px;" aria-label="Ir para seção de contato">
              ENTRE EM CONTATO
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
  }

  // Contact section
  function renderContact() {
    const main = document.getElementById("main");

    main.innerHTML += `
    <section id="contact" class="py-5 py-md-6 bg-white">
      <div class="container-fluid px-3 px-md-5">
        <div class="text-center mb-5">
          <span class="text-uppercase fw-bold small" style="color: ${
            COLORS.primary
          }; letter-spacing: 2px;">
            ${CONTENT.contact.tagline}
          </span>
          <h2 class="display-5 fw-bold mt-3" style="color: ${
            COLORS.secondary
          };">
            ${CONTENT.contact.title}
          </h2>
          <p class="text-muted mt-3">${CONTENT.contact.subtitle}</p>
        </div>
        <div class="row g-4 g-md-5">
          <div class="col-12 col-lg-4">
            <div class="bg-light p-4 rounded">
              <h3 class="fw-bold mb-4" style="color: ${
                COLORS.secondary
              };">Informações</h3>
              ${CONTENT.contact.info
                .map(
                  (info) => `
                <div class="mb-4">
                  <div style="color: ${COLORS.primary}; font-size: 24px; margin-bottom: 8px;">
                    ${info.icon}
                  </div>
                  <p class="fw-bold small mb-1">${info.label}</p>
                  <p class="text-muted small m-0">${info.value}</p>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <form id="contact-form" class="row g-3">
              <div class="col-md-6">
                <label for="contact-name" class="form-label fw-bold">Nome</label>
                <input id="contact-name" type="text" class="form-control" name="name" required>
              </div>
              <div class="col-md-6">
                <label for="contact-email" class="form-label fw-bold">E-mail</label>
                <input id="contact-email" type="email" class="form-control" name="email" required>
              </div>
              <div class="col-md-6">
                <label for="contact-phone" class="form-label fw-bold">Telefone</label>
                <input id="contact-phone" type="tel" class="form-control" name="phone">
              </div>
              <div class="col-md-6">
                <label for="contact-project" class="form-label fw-bold">Projeto</label>
                <select id="contact-project" class="form-select" name="project">
                  <option>Selecione...</option>
                  ${CONTENT.projects.items
                    .map((project) => `<option>${project.title}</option>`)
                    .join("")}
                </select>
              </div>
              <div class="col-12">
                <label for="contact-message" class="form-label fw-bold">Mensagem</label>
                <textarea id="contact-message" class="form-control" name="message" rows="5" required></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-lg w-100 px-5" style="background-color: ${
                  COLORS.primaryDark
                }; color: white; font-weight: 600; min-height: 48px;" aria-label="Enviar formulário de contato">
                  ENVIAR MENSAGEM
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

    // Form handler
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensagem enviada!");
        form.reset();
      });
    }
  }

  // Footer
  function renderFooter() {
    const footer = document.getElementById("footer");
    const year = new Date().getFullYear();

    footer.innerHTML = `
    <footer class="text-white pt-5 pb-4" style="background-color: ${
      COLORS.footerBackground
    };">
      <div class="container-fluid px-3 px-md-5">
        <div class="row mb-5 g-4 g-md-5">
          <div class="col-12 col-md-4">
            <h5 class="fw-bold mb-3" style="color: ${COLORS.textInverse};">
              ${CONTENT.company.name}
              <span style="color: ${COLORS.primary};">${
      CONTENT.company.nameHighlight
    }</span>
            </h5>
            <p class="small mb-3" style="color: ${COLORS.whiteOpacity80};">${
      CONTENT.footer.description
    }</p>
            <div class="d-flex gap-3 mt-4">
              ${CONTENT.footer.social
                .map(
                  (social) => `
                <a href="${social.href}" target="_blank" rel="noopener" title="${social.label}" style="color: ${COLORS.whiteOpacity80}; text-decoration: none; transition: color 300ms;">
                  ${social.icon}
                </a>
              `
                )
                .join("")}
            </div>
          </div>
          <div class="col-12 col-md-4">
            <h6 class="fw-bold mb-3" style="border-left: 3px solid ${
              COLORS.primary
            }; padding-left: 12px; color: ${COLORS.textInverse};">
              Menu
            </h6>
            <ul class="list-unstyled small" style="color: ${
              COLORS.whiteOpacity90
            };">
              ${CONTENT.navigation
                .map(
                  (nav) => `
                <li class="mb-2">
                  <a href="${nav.href}" style="color: ${COLORS.whiteOpacity90}; text-decoration: none;">
                    ${nav.label}
                  </a>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
          <div class="col-12 col-md-4">
            <h6 class="fw-bold mb-3" style="border-left: 3px solid ${
              COLORS.primary
            }; padding-left: 12px; color: ${COLORS.textInverse};">
              Contato
            </h6>
            <ul class="list-unstyled small" style="color: ${
              COLORS.whiteOpacity90
            };">
              ${CONTENT.contact.info
                .map(
                  (info) => `
                <li class="mb-2">${info.value}</li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>
        <hr style="border-color: ${COLORS.borderGray800}; opacity: 0.3;">
        <div class="row align-items-center small" style="color: ${
          COLORS.whiteOpacity80
        };">
          <div class="col-md-6">
            © ${year} ${CONTENT.footer.copyright}
          </div>
          <div class="col-md-6 text-end mt-3 mt-md-0">
            <a href="${
              CONTENT.footer.developer.url
            }" target="_blank" rel="noopener">
              <img src="${CONTENT.footer.developer.logo}" alt="${
      CONTENT.footer.developer.name
    }" height="24" width="80" style="opacity: 0.8;" loading="lazy">
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
  }

  // Initialize app
  function initializeApp() {
    try {
      validateConfig({ COLORS, TYPOGRAPHY, CONTENT, SEO });
      injectSEO();
      renderHeader();
      renderHero();
      renderFeatures();
      renderProjects();
      renderAbout();
      renderContact();
      renderFooter();
    } catch (err) {
      console.error("❌ [App]:", err);
      const main = document.getElementById(SELECTORS.MAIN.replace("#", ""));
      if (main) {
        main.innerHTML = `
        <div style="padding: 40px; text-align: center; color: #d32f2f;">
          <h1>⚠️ Erro ao inicializar</h1>
          <p>${err.message}</p>
        </div>
      `;
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
  } else {
    initializeApp();
  }
}
