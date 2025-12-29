/**
 * ============================================================================
 * UTILITÁRIOS - Funções Auxiliares para Vanilla JS
 * ============================================================================
 */

/**
 * Cria um elemento DOM com classes e atributos
 */
export function createElement(tag, options = {}) {
  const element = document.createElement(tag);

  if (options.className) {
    element.className = options.className;
  }

  if (options.id) {
    element.id = options.id;
  }

  if (options.innerHTML) {
    element.innerHTML = options.innerHTML;
  }

  if (options.textContent) {
    element.textContent = options.textContent;
  }

  if (options.attributes) {
    Object.entries(options.attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  if (options.styles) {
    Object.entries(options.styles).forEach(([key, value]) => {
      element.style[key] = value;
    });
  }

  if (options.listeners) {
    Object.entries(options.listeners).forEach(([event, handler]) => {
      element.addEventListener(event, handler);
    });
  }

  return element;
}

/**
 * Renderiza ícone SVG baseado no nome
 */
export function renderIcon(iconName, className = "") {
  const icons = {
    leaf: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 22c-1.657 0-3-1.343-3-3v-7c0-1.657 1.343-3 3-3s3 1.343 3 3v7c0 1.657-1.343 3-3 3z"/><path d="M7 7.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/><path d="M14 2c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4z"/></svg>`,

    "map-pin": `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,

    sun: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,

    menu: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,

    close: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,

    "arrow-right": `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,

    "chevron-right": `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,

    "chevron-left": `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,

    instagram: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>`,

    facebook: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h3z"/></svg>`,

    linkedin: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  };

  return icons[iconName] || icons.leaf;
}

/**
 * Debounce para otimizar eventos
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle para limitar frequência de eventos
 */
export function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Detecta se a página está em modo mobile
 */
export function isMobile() {
  return window.innerWidth < 768;
}

/**
 * Monitora mudanças de tamanho de tela
 */
export function onMediaChange(callback) {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  mediaQuery.addEventListener("change", (e) => callback(e.matches));
}

/**
 * Lazy load de imagens
 */
export function lazyLoadImages(selector = "img[data-src]") {
  const images = document.querySelectorAll(selector);

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);

          // Adiciona classe quando carregada
          img.addEventListener("load", () => {
            img.classList.add("loaded");
          });
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback para navegadores antigos
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    });
  }
}

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

/**
 * Valida e-mail
 */
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Valida telefone (formato BR)
 */
export function validatePhone(phone) {
  const re = /^\(?([0-9]{2})\)?[-.\s]?9?([0-9]{4})[-.\s]?([0-9]{4})$/;
  return re.test(phone.replace(/\D/g, ""));
}

/**
 * Formata telefone para padrão brasileiro
 */
export function formatPhone(phone) {
  const numbers = phone.replace(/\D/g, "");
  if (numbers.length < 10) return numbers;
  if (numbers.length < 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(
      6
    )}`;
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
}

/**
 * Cria observador de scroll
 */
export function observeScroll(callback, threshold = 0.1) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    },
    { threshold }
  );

  return observer;
}

/**
 * Animação simples com requestAnimationFrame
 */
export function animate(element, duration, easing, update) {
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    update(progress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

/**
 * Carrossel simples
 */
export class Carousel {
  constructor(container, options = {}) {
    this.container = container;
    this.items = container.querySelectorAll("[data-carousel-item]");
    this.currentIndex = 0;
    this.autoplay = options.autoplay ?? true;
    this.interval = options.interval ?? 5000;

    this.init();
  }

  init() {
    this.showItem(0);

    if (this.autoplay) {
      this.startAutoplay();
    }

    // Controles
    const prevBtn = this.container.querySelector("[data-carousel-prev]");
    const nextBtn = this.container.querySelector("[data-carousel-next]");

    if (prevBtn) prevBtn.addEventListener("click", () => this.prev());
    if (nextBtn) nextBtn.addEventListener("click", () => this.next());
  }

  showItem(index) {
    this.items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
    this.currentIndex = index;
  }

  next() {
    this.showItem((this.currentIndex + 1) % this.items.length);
    if (this.autoplay) this.resetAutoplay();
  }

  prev() {
    this.showItem(
      (this.currentIndex - 1 + this.items.length) % this.items.length
    );
    if (this.autoplay) this.resetAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => this.next(), this.interval);
  }

  resetAutoplay() {
    clearInterval(this.autoplayInterval);
    this.startAutoplay();
  }

  destroy() {
    clearInterval(this.autoplayInterval);
  }
}

/**
 * Menu móvel
 */
export class MobileMenu {
  constructor(toggleBtn, menu) {
    this.toggleBtn = toggleBtn;
    this.menu = menu;
    this.isOpen = false;

    this.init();
  }

  init() {
    this.toggleBtn.addEventListener("click", () => this.toggle());

    // Fechar ao clicar em links
    this.menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => this.close());
    });

    // Fechar ao clicar fora
    document.addEventListener("click", (e) => {
      if (!this.menu.contains(e.target) && !this.toggleBtn.contains(e.target)) {
        this.close();
      }
    });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.menu.classList.add("open");
    this.toggleBtn.classList.add("active");
    this.isOpen = true;
    document.body.style.overflow = "hidden";
  }

  close() {
    this.menu.classList.remove("open");
    this.toggleBtn.classList.remove("active");
    this.isOpen = false;
    document.body.style.overflow = "";
  }

  destroy() {
    document.body.style.overflow = "";
  }
}

export default {
  createElement,
  renderIcon,
  debounce,
  throttle,
  isMobile,
  onMediaChange,
  lazyLoadImages,
  smoothScroll,
  validateEmail,
  validatePhone,
  formatPhone,
  observeScroll,
  animate,
  Carousel,
  MobileMenu,
};
