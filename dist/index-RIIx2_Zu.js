(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const i={primary:"#B38B59",primaryDark:"#9A764A",primaryLight:"#D4A574",secondary:"#1A1A1A",secondaryLight:"#4B5563",background:"#F5F5F5",backgroundDark:"#EEEEEE",surface:"#FFFFFF",surfaceDark:"#F9F9F9",text:"#1A1A1A",textLight:"#4B5563",textLighter:"#8A92A2",textInverse:"#FFFFFF",success:"#10B981",error:"#EF4444",warning:"#F59E0B",info:"#3B82F6",border:"#E5E7EB",borderLight:"#F3F4F6"},l={googleFontsUrl:"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap",sans:"'Lato', sans-serif",serif:"'Playfair Display', serif",sizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem"},weights:{light:300,normal:400,semibold:600,bold:700},lineHeights:{tight:1.2,normal:1.5,relaxed:1.75}},r={company:{name:"URBANISMO",nameHighlight:".",tagline:"Transformando espaços em experiências",description:"Inovação e sustentabilidade em cada projeto"},navigation:[{id:"features",label:"Diferenciais"},{id:"projects",label:"Projetos"},{id:"about",label:"Sobre"},{id:"contact",label:"Contato"}],hero:{title:"Soluções Inteligentes para Cidades",highlight:"Modernas",subtitle:"Criamos espaços que conectam pessoas e inovação",cta:"Começar Agora",image:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop",imageAlt:"Arquitetura urbana moderna"},features:{title:"Por Que Nos Escolher",items:[{icon:"leaf",title:"Sustentável",description:"Projetos com foco em sustentabilidade ambiental"},{icon:"map",title:"Localização Estratégica",description:"Posicionados nos melhores pontos da cidade"},{icon:"sun",title:"Design Inovador",description:"Arquitetura que une estética e funcionalidade"}]},projects:{title:"Nossos Projetos",items:[{title:"Projeto Alpha",description:"Complexo residencial premium com 150 unidades",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",link:"#"},{title:"Projeto Beta",description:"Centro comercial integrado com espaços verdes",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",link:"#"},{title:"Projeto Gamma",description:"Parque urbano com infraestrutura inteligente",image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",link:"#"}]},about:{title:"Sobre Nós",description:"Com mais de 20 anos de experiência, transformamos cidades através de projetos sustentáveis e inovadores. Nossa equipe multidisciplinar trabalha para criar espaços que melhoram a qualidade de vida das pessoas.",highlights:[{label:"Projetos Realizados",value:"150+"},{label:"Clientes Satisfeitos",value:"500+"},{label:"Anos de Experiência",value:"20+"}]},contact:{title:"Entre em Contato",subtitle:"Estamos prontos para transformar sua visão em realidade",info:[{label:"Localização",value:"São Paulo, SP - Brasil"},{label:"Telefone",value:"(11) 99999-9999"},{label:"E-mail",value:"contato@urbanismo.com"}],submitButton:"Enviar Mensagem",successMessage:"Mensagem enviada com sucesso! Entraremos em contato em breve.",errorMessage:"Erro ao enviar mensagem. Tente novamente."},footer:{links:[{label:"Política de Privacidade",href:"/privacy"},{label:"Termos de Uso",href:"/terms"},{label:"Contato",href:"#contact"}],social:[{name:"Instagram",url:"https://instagram.com",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" fill="none" stroke="currentColor" stroke-width="2" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" /></svg>'},{name:"Facebook",url:"https://facebook.com",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h3z" /></svg>'},{name:"LinkedIn",url:"https://linkedin.com",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>'}]}},c={title:"URBANISMO | Soluções em Arquitetura Urbana",description:"Criamos espaços inovadores e sustentáveis que transformam cidades. Projetos residenciais, comerciais e de infraestrutura.",keywords:"arquitetura, urbanismo, construção, projetos, sustentabilidade"};function h(){const o=document.documentElement;Object.entries(i).forEach(([e,t])=>{o.style.setProperty(`--color-${e}`,t)}),Object.entries(l.sizes).forEach(([e,t])=>{o.style.setProperty(`--font-size-${e}`,t)}),Object.entries(l.weights).forEach(([e,t])=>{o.style.setProperty(`--font-weight-${e}`,t)}),Object.entries(l.lineHeights).forEach(([e,t])=>{o.style.setProperty(`--line-height-${e}`,t)}),o.style.setProperty("--font-sans",l.sans),o.style.setProperty("--font-serif",l.serif)}function g(o,e=""){const t={leaf:`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 22c-1.657 0-3-1.343-3-3v-7c0-1.657 1.343-3 3-3s3 1.343 3 3v7c0 1.657-1.343 3-3 3z"/><path d="M7 7.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/><path d="M14 2c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4z"/></svg>`,"map-pin":`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,sun:`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,menu:`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,close:`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,"arrow-right":`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,"chevron-right":`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,"chevron-left":`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,instagram:`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>`,facebook:`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h3z"/></svg>`,linkedin:`<svg class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`};return t[o]||t.leaf}function f(o="img[data-src]"){const e=document.querySelectorAll(o);if("IntersectionObserver"in window){const t=new IntersectionObserver(s=>{s.forEach(a=>{if(a.isIntersecting){const n=a.target;n.src=n.dataset.src,n.removeAttribute("data-src"),t.unobserve(n),n.addEventListener("load",()=>{n.classList.add("loaded")})}})});e.forEach(s=>t.observe(s))}else e.forEach(t=>{t.src=t.dataset.src,t.removeAttribute("data-src")})}function m(o){const e=typeof o=="string"?document.querySelector(o):o;e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function v(o){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)}function y(o){return/^\(?([0-9]{2})\)?[-.\s]?9?([0-9]{4})[-.\s]?([0-9]{4})$/.test(o.replace(/\D/g,""))}class x{constructor(e,t={}){this.container=e,this.items=e.querySelectorAll("[data-carousel-item]"),this.currentIndex=0,this.autoplay=t.autoplay??!0,this.interval=t.interval??5e3,this.init()}init(){this.showItem(0),this.autoplay&&this.startAutoplay();const e=this.container.querySelector("[data-carousel-prev]"),t=this.container.querySelector("[data-carousel-next]");e&&e.addEventListener("click",()=>this.prev()),t&&t.addEventListener("click",()=>this.next())}showItem(e){this.items.forEach((t,s)=>{t.classList.toggle("active",s===e)}),this.currentIndex=e}next(){this.showItem((this.currentIndex+1)%this.items.length),this.autoplay&&this.resetAutoplay()}prev(){this.showItem((this.currentIndex-1+this.items.length)%this.items.length),this.autoplay&&this.resetAutoplay()}startAutoplay(){this.autoplayInterval=setInterval(()=>this.next(),this.interval)}resetAutoplay(){clearInterval(this.autoplayInterval),this.startAutoplay()}destroy(){clearInterval(this.autoplayInterval)}}class b{constructor(e,t){this.toggleBtn=e,this.menu=t,this.isOpen=!1,this.init()}init(){this.toggleBtn.addEventListener("click",()=>this.toggle()),this.menu.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>this.close())}),document.addEventListener("click",e=>{!this.menu.contains(e.target)&&!this.toggleBtn.contains(e.target)&&this.close()})}toggle(){this.isOpen?this.close():this.open()}open(){this.menu.classList.add("open"),this.toggleBtn.classList.add("active"),this.isOpen=!0,document.body.style.overflow="hidden"}close(){this.menu.classList.remove("open"),this.toggleBtn.classList.remove("active"),this.isOpen=!1,document.body.style.overflow=""}destroy(){document.body.style.overflow=""}}function w(){const o=document.documentElement;o.style.setProperty("--color-primary",i.primary),o.style.setProperty("--color-primary-dark",i.primaryDark),o.style.setProperty("--color-secondary",i.secondary),o.style.setProperty("--color-background",i.background)}function k(){document.title=`${c.title}`,[{name:"description",content:c.description},{name:"keywords",content:c.keywords},{property:"og:title",content:c.title},{property:"og:description",content:c.description},{property:"og:image",content:c.image},{name:"theme-color",content:i.primary}].forEach(e=>{const t=document.createElement("meta");Object.assign(t,e),document.head.appendChild(t)})}function $(){const o=document.createElement("link");o.rel="stylesheet",o.href=l.googleFontsUrl,document.head.appendChild(o),document.body.style.fontFamily=l.sans,document.documentElement.style.setProperty("--font-display",l.serif)}function E(){const o=document.getElementById("header"),e=r.navigation.map(s=>`<li><a href="#${s.id}" class="text-secondary hover:text-primary transition">${s.label}</a></li>`).join(""),t=`
    <nav class="bg-white shadow-sm sticky top-0 z-50" role="navigation" aria-label="Navegação principal">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <a href="#" class="font-display text-2xl font-bold text-secondary" aria-label="${r.company.name} - Página inicial">
            ${r.company.name}
          </a>

          <!-- Menu Desktop -->
          <ul class="hidden md:flex space-x-8" id="nav-menu">
            ${e}
          </ul>

          <!-- Menu Mobile Toggle -->
          <button
            class="md:hidden flex flex-col space-y-1"
            id="menu-toggle"
            aria-label="Abrir menu"
            aria-expanded="false"
          >
            <span class="block w-6 h-0.5 transition" style="background-color: ${i.secondary}"></span>
            <span class="block w-6 h-0.5 transition" style="background-color: ${i.secondary}"></span>
            <span class="block w-6 h-0.5 transition" style="background-color: ${i.secondary}"></span>
          </button>
        </div>

        <!-- Menu Mobile -->
        <ul class="hidden md:hidden space-y-2 pb-4" id="nav-menu-mobile">
          ${e}
        </ul>
      </div>
    </nav>
  `;o.innerHTML=t}function C(){const o=document.getElementById("main");o.innerHTML=`
    <!-- Hero Section - Full Screen com Imagem de Fundo -->
    <section id="hero" class="relative w-full min-h-screen flex items-center justify-center overflow-hidden" aria-label="Seção principal">
      <!-- Imagem de Fundo -->
      <div class="absolute inset-0 z-0">
        <img
          src="${r.hero.image}"
          alt="${r.hero.imageAlt}"
          loading="eager"
          class="w-full h-full object-cover"
        />
        <!-- Overlay escuro -->
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Conteúdo sobre a imagem -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-white font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg fade-in">
          ${r.hero.title}<br>
          <span class="italic font-light drop-shadow-md" style="color: ${i.primary}">${r.hero.highlight}</span>
        </h1>
        
        <p class="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide drop-shadow-md fade-in">
          ${r.hero.subtitle}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in">
          <a href="#contact" class="px-8 py-6 text-white text-sm uppercase tracking-widest min-w-[200px] shadow-lg transition hover:opacity-90 font-semibold" style="background-color: ${i.primary}">
            ${r.hero.cta}
          </a>
          <a href="#features" class="px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-black text-sm uppercase tracking-widest min-w-[200px] bg-white/10 backdrop-blur-sm transition font-semibold">
            Saiba Mais
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-gray-50" aria-label="Diferenciais">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-secondary mb-4">
            ${r.features.title}
          </h2>
          <div class="w-24 h-1 mx-auto" style="background-color: ${i.primary}"></div>
        </div>

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
    <section id="projects" class="py-20 lg:py-32" style="background-color: ${i.background}" aria-label="Projetos">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-center text-secondary mb-16">
          ${r.projects.title}
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
            style="background-color: ${i.primary}"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            class="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 text-white p-3 rounded-full hover:opacity-90 transition"
            id="carousel-next"
            aria-label="Próximo projeto"
            style="background-color: ${i.primary}"
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
          ${r.about.title}
        </h2>

        <p class="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          ${r.about.description}
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
    <section id="contact" class="py-20 lg:py-32" style="background-color: ${i.background}" aria-label="Contato">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-center text-secondary mb-4">
          ${r.contact.title}
        </h2>
        <p class="text-lg text-gray-600 text-center mb-16">
          ${r.contact.subtitle}
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div role="region" aria-label="Informações de contato">
            ${r.contact.info.map(e=>`
              <div class="mb-8">
                <h3 class="font-display text-xl font-bold text-secondary mb-2">${e.label}</h3>
                <p class="text-gray-600">${e.value}</p>
              </div>
            `).join("")}
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

            <button type="submit" class="w-full px-8 py-3 text-white rounded-lg hover:opacity-90 transition font-semibold" style="background-color: ${i.primary}">
              ${r.contact.submitButton}
            </button>
            <div class="form-message text-center" role="status" aria-live="polite"></div>
          </form>
        </div>
      </div>
    </section>
  `,M(),j(),L()}function I(){const o=document.getElementById("footer"),e=`
    <div style="background-color: ${i.secondary}; color: white" class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="font-display text-xl font-bold mb-2">${r.company.name}</h3>
            <p class="text-gray-400">${r.company.tagline}</p>
          </div>

          <div>
            <h3 class="font-display text-xl font-bold mb-4">Links Rápidos</h3>
            <ul class="space-y-2">
              ${r.footer.links.map(t=>`
                <li><a href="${t.href}" class="text-gray-400 hover:text-white transition">${t.label}</a></li>
              `).join("")}
            </ul>
          </div>

          <div>
            <h3 class="font-display text-xl font-bold mb-4">Redes Sociais</h3>
            <div class="flex space-x-4" role="region" aria-label="Links de redes sociais">
              ${r.footer.social.map(t=>`
                <a
                  href="${t.url}"
                  target="_blank"
                  rel="noopener"
                  aria-label="${t.name}"
                  class="text-gray-400 hover:text-white transition"
                >
                  ${t.icon}
                </a>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; ${new Date().getFullYear()} ${r.company.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  `;o.innerHTML=e}function M(){const o=document.getElementById("features-grid");if(!o)return;const e=r.features.items.map(t=>`
      <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-none group h-full">
        <div class="flex flex-col items-center pt-10 pb-4">
          <div class="p-4 bg-gray-50 rounded-full mb-4 group-hover:bg-primary/10 transition-colors" style="color: ${i.primary}">
            ${g(t.icon,"w-10 h-10")}
          </div>
          <h3 class="text-xl font-display font-semibold text-secondary text-center px-8">${t.title}</h3>
        </div>
        <div class="text-center pb-10 px-8">
          <p class="text-gray-600 leading-relaxed">${t.description}</p>
        </div>
      </div>
    `).join("");o.innerHTML=e}function j(){const o=document.getElementById("carousel-inner");if(!o)return;const e=r.projects.items.map(t=>`
      <div class="flex-shrink-0 w-full" data-carousel-item>
        <div class="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="${t.image}" 
            alt="${t.title}"
            loading="lazy"
            decoding="async"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 bg-white">
            <h3 class="font-display text-2xl font-bold text-secondary mb-2">${t.title}</h3>
            <p class="text-gray-600 mb-4">${t.description}</p>
            <a href="${t.link}" class="inline-block px-4 py-2 text-white rounded transition" style="background-color: ${i.primary}">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    `).join("");o.innerHTML=e}function L(){const o=document.getElementById("about-stats");if(!o)return;const e=r.about.highlights.map(t=>`
      <div class="text-center">
        <div class="font-display text-4xl font-bold text-secondary mb-2" style="color: ${i.primary}">
          ${t.value}
        </div>
        <div class="text-gray-600">${t.label}</div>
      </div>
    `).join("");o.innerHTML=e}function u(){console.log("🚀 Inicializando aplicação..."),w(),k(),$(),h(),E(),C(),I(),B(),S(),A(),q(),z(),f(),console.log("✅ Aplicação inicializada com sucesso!")}function B(){const o=document.getElementById("projects-carousel");if(!o)return;const e=new x(o,{autoplay:!0,interval:6e3});window.projectsCarousel=e}function S(){const o=document.getElementById("menu-toggle"),e=document.getElementById("nav-menu-mobile");if(!o||!e)return;const t=new b(o,e);window.mobileMenuInstance=t}function A(){const o=document.getElementById("contact-form");o&&(o.addEventListener("submit",async e=>{if(e.preventDefault(),!F(o))return;const t=new FormData(o),s=Object.fromEntries(t);await P(s,o)}),o.querySelectorAll("input, textarea").forEach(e=>{e.addEventListener("blur",()=>p(e))}))}function F(o){const e=o.querySelectorAll("[required]");let t=!0;return e.forEach(s=>{p(s)||(t=!1)}),t}function p(o){const e=o.parentElement.querySelector(".error-message");let t=!0,s="";return o.value.trim()?o.type==="email"&&!v(o.value)?(t=!1,s="Email inválido"):o.type==="tel"&&o.value&&!y(o.value)&&(t=!1,s="Telefone inválido"):(t=!1,s="Este campo é obrigatório"),o.classList.toggle("error",!t),e&&(e.textContent=s,e.classList.toggle("hidden",t)),t}async function P(o,e){const t=e.querySelector('button[type="submit"]'),s=e.querySelector(".form-message");t.disabled=!0,t.textContent="Enviando...";try{await new Promise(a=>setTimeout(a,1500)),s.textContent=r.contact.successMessage,s.style.color=i.success,e.reset(),setTimeout(()=>{m(s)},300),setTimeout(()=>{s.textContent=""},5e3)}catch(a){console.error("Erro ao enviar formulário:",a),s.textContent=r.contact.errorMessage,s.style.color=i.error}finally{t.disabled=!1,t.textContent=r.contact.submitButton}}function q(){document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",e=>{const t=o.getAttribute("href");t!=="#"&&(e.preventDefault(),m(t))})})}function z(){const o=document.querySelectorAll("[data-carousel-item], #features-grid > div, #about-stats > div");if(!o.length)return;const e=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(s.target.classList.add("fade-in"),e.unobserve(s.target))})},{threshold:.1});o.forEach(t=>e.observe(t))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();window.addEventListener("beforeunload",()=>{window.projectsCarousel&&window.projectsCarousel.destroy(),window.mobileMenuInstance&&window.mobileMenuInstance.destroy()});
