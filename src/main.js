/**
 * ============================================================================
 * MAIN.JS - Inicialização da Aplicação
 * ============================================================================
 *
 * Este arquivo é o ponto de entrada da aplicação.
 * Ele importa a configuração e renderiza os componentes dinamicamente.
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
// 1. INICIALIZAÇÃO - Setup do Documento
// ============================================================================

function initializeApp() {
  console.log("🚀 Inicializando aplicação...");

  // Injetar Google Fonts
  injectGoogleFonts();

  // Injetar CSS Variables
  injectCSSVariables();

  // Renderizar componentes
  renderFeatures();
  renderProjects();
  renderAboutStats();

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
// 2. GOOGLE FONTS
// ============================================================================

function injectGoogleFonts() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = TYPOGRAPHY.googleFontsUrl;
  document.head.appendChild(link);
}

// ============================================================================
// 3. RENDERIZAR DIFERENCIAIS (FEATURES)
// ============================================================================

function renderFeatures() {
  const container = document.getElementById("features-grid");
  if (!container) return;

  const featuresHTML = CONTENT.features.items
    .map(
      (item, index) => `
      <div class="feature-card" data-index="${index}">
        <div class="feature-icon">
          ${renderIcon(item.icon, "w-10 h-10")}
        </div>
        <h3 class="feature-title">${item.title}</h3>
        <p class="feature-description">${item.description}</p>
      </div>
    `
    )
    .join("");

  container.innerHTML = featuresHTML;
}

// ============================================================================
// 4. RENDERIZAR PROJETOS (CARROSSEL)
// ============================================================================

function renderProjects() {
  const container = document.getElementById("carousel-inner");
  if (!container) return;

  const projectsHTML = CONTENT.projects.items
    .map(
      (project, index) => `
      <div class="carousel-item ${
        index === 0 ? "active" : ""
      }" data-carousel-item>
        <div class="project-card">
          <div class="project-image">
            <img 
              src="${project.image}" 
              alt="${project.title}"
              loading="lazy"
              decoding="async"
            >
          </div>
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${
              project.link
            }" class="btn btn-sm btn-primary">Saiba Mais</a>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  container.innerHTML = projectsHTML;
}

// ============================================================================
// 5. RENDERIZAR ESTATÍSTICAS (ABOUT)
// ============================================================================

function renderAboutStats() {
  const container = document.getElementById("about-stats");
  if (!container) return;

  const statsHTML = CONTENT.about.highlights
    .map(
      (stat) => `
      <div class="stat-item">
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `
    )
    .join("");

  container.innerHTML = statsHTML;
}

// ============================================================================
// 6. CARROSSEL
// ============================================================================

function initializeCarousel() {
  const carousel = document.getElementById("projects-carousel");
  if (!carousel) return;

  const carouselInstance = new Carousel(carousel, {
    autoplay: true,
    interval: 6000,
  });

  // Salvar referência global para cleanup
  window.projectsCarousel = carouselInstance;
}

// ============================================================================
// 7. MENU MOBILE
// ============================================================================

function initializeMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const menuMobile = document.getElementById("nav-menu-mobile");

  if (!toggleBtn || !menuMobile) return;

  const mobileMenu = new MobileMenu(toggleBtn, menuMobile);

  // Salvar referência global para cleanup
  window.mobileMenuInstance = mobileMenu;
}

// ============================================================================
// 8. FORMULÁRIO DE CONTATO
// ============================================================================

function initializeContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validar formulário
    if (!validateForm(form)) return;

    // Coletar dados
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simular envio (você pode integrar com uma API real aqui)
    await handleFormSubmit(data, form);
  });

  // Validação em tempo real
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
  }

  return isValid;
}

async function handleFormSubmit(data, form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const messageDiv = form.querySelector(".form-message");

  // Desabilitar botão
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  try {
    // Simular delay de rede
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Aqui você pode fazer uma requisição POST real
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });

    // Sucesso
    messageDiv.textContent = CONTENT.contact.successMessage;
    messageDiv.className = "form-message success";

    // Resetar formulário
    form.reset();

    // Scroll para mensagem de sucesso
    setTimeout(() => {
      smoothScroll(messageDiv);
    }, 300);

    // Limpar mensagem após 5 segundos
    setTimeout(() => {
      messageDiv.textContent = "";
      messageDiv.className = "form-message";
    }, 5000);
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    messageDiv.textContent = CONTENT.contact.errorMessage;
    messageDiv.className = "form-message error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = CONTENT.contact.submitButton;
  }
}

// ============================================================================
// 9. SCROLL SUAVE (SMOOTH SCROLL)
// ============================================================================

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

// ============================================================================
// 10. ANIMAÇÕES NO SCROLL
// ============================================================================

function initializeScrollAnimations() {
  const elements = document.querySelectorAll(
    ".feature-card, .project-card, .stat-item"
  );

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

// ============================================================================
// 11. EXECUTAR
// ============================================================================

// Executar quando o DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

// ============================================================================
// 12. CLEANUP
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
