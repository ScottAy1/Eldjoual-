// ==========================================================
// Eldjoual storefront
// Update STORE, HERO_SLIDES and PHONES to customize the shop.
// ==========================================================
(() => {
  const STORE = {
    name: "EL DJOUAL DISTRIBUTION",
    whatsapp: "213563516895",
    commercialWhatsapp: "213552856155",
    phoneDisplay: "0563 51 68 95",
    mapsUrl: "https://maps.app.goo.gl/nc4N5kCj3Bnv2JJ2A?g_st=ac"
  };

  // Use local product imagery for the hero scenes; replace these paths with banner artwork as needed.
  const HERO_SLIDES = [
    {
      scene: "store",
      progressLabel: "DISTRIBUTEUR",
      kicker: "DISTRIBUTEUR OFFICIEL SAMSUNG ALGÉRIE",
      title: "EL DJOUAL DISTRIBUTION",
      subtitle: "Distributeur Officiel Samsung Algérie",
      mission: "DISTRIBUTION NATIONALE • GARANTIE 12 MOIS • DEVIS SUR WHATSAPP ↗",
      loadLabel: "DISTRIBUTEUR OFFICIEL // ALGÉRIE",
      image: "assets/phones/samsung-a37.png",
      foreground: "assets/phones/samsung-a26.png",
      foregroundAlt: "Smartphone Samsung Galaxy"
    },
    {
      scene: "galaxy",
      progressLabel: "GAMME GALAXY A",
      kicker: "SMARTPHONES SAMSUNG",
      title: "GAMME GALAXY A",
      subtitle: "A37 5G, A26 5G, A18, A17, A08, A07s, A07 • Garantie 12 Mois",
      mission: "SEPT MODÈLES GALAXY A • GARANTIE 12 MOIS",
      loadLabel: "GALAXY A // 7 MODÈLES",
      image: "assets/phones/samsung-a26.png",
      foreground: "assets/phones/samsung-a37.png",
      foregroundAlt: "Smartphone Samsung Galaxy série A"
    },
    {
      scene: "distribution",
      progressLabel: "58 WILAYAS",
      kicker: "LIVRAISON & APPROVISIONNEMENT B2B",
      title: "DISTRIBUTION NATIONALE",
      subtitle: "Livraison & Approvisionnement B2B sur 58 Wilayas",
      mission: "APPROVISIONNEMENT B2B • LIVRAISON NATIONALE ↗",
      loadLabel: "RÉSEAU NATIONAL // 58 WILAYAS",
      image: "assets/phones/samsung-a17.png",
      foreground: "assets/phones/samsung-a07.png",
      foregroundAlt: "Smartphone Samsung Galaxy prêt pour la distribution"
    },
    {
      scene: "accessories",
      progressLabel: "ACCESSOIRES",
      kicker: "ÉQUIPEZ VOTRE QUOTIDIEN",
      title: "ACCESSOIRES ORIGINAUX",
      subtitle: "Écouteurs, Power Banks & Chargeurs Rapides",
      mission: "AUDIO • POWER BANKS • CHARGEURS RAPIDES",
      loadLabel: "ACCESSOIRES // GALAXY",
      image: "assets/phones/samsung-a08.png",
      foreground: "assets/phones/samsung-a07s.png",
      foregroundAlt: "Smartphone Samsung Galaxy et accessoires"
    }
  ];

  const PHONES = [
    {
      id: "a26-5g",
      model: "Samsung Galaxy A26 5G",
      badge: "GARANTIE 12 MOIS · GALAXY A26 5G",
      condition: "Neuf · Garantie 12 mois",
      price: "Prix sur devis",
      summary: "Un écran Super AMOLED fluide, la 5G et un appareil photo stabilisé pour le quotidien.",
      image: "assets/phones/samsung-a26.png",
      specs: {
        screen: '6,7" FHD+ Super AMOLED · 120 Hz',
        chip: "Exynos 1380",
        camera: "50 MP OIS + 8 MP ultra grand-angle + 2 MP macro",
        battery: "5 000 mAh · charge 25 W",
        storage: "128 Go ou 256 Go · microSD",
        network: "5G",
        protection: "IP67",
        updates: "Jusqu’à 6 générations Android",
        warranty: "Garantie 12 mois"
      }
    },
    {
      id: "a17",
      model: "Samsung Galaxy A17",
      badge: "GARANTIE 12 MOIS · GALAXY A17",
      condition: "Neuf · Garantie 12 mois",
      price: "Prix sur devis",
      summary: "Un grand écran Super AMOLED, une batterie longue durée et l’essentiel Galaxy.",
      image: "assets/phones/samsung-a17.png",
      specs: {
        screen: '6,7" FHD+ Super AMOLED · 90 Hz',
        chip: "MediaTek Helio G99 (version 4G)",
        camera: "50 MP + 5 MP ultra grand-angle + 2 MP macro",
        battery: "5 000 mAh · charge 25 W",
        storage: "128 Go ou 256 Go · microSD",
        network: "4G LTE",
        protection: "IP54",
        updates: "Jusqu’à 6 générations Android",
        warranty: "Garantie 12 mois"
      }
    },
    {
      id: "a07",
      model: "Samsung Galaxy A07",
      badge: "GARANTIE 12 MOIS · GALAXY A07",
      condition: "Neuf · Garantie 12 mois",
      price: "Prix sur devis",
      summary: "Un Galaxy accessible avec un grand écran 90 Hz et une autonomie de 5 000 mAh.",
      image: "assets/phones/samsung-a07.png",
      specs: {
        screen: '6,7" HD+ PLS LCD · 90 Hz',
        chip: "MediaTek Helio G99",
        camera: "50 MP + 2 MP profondeur",
        battery: "5 000 mAh · charge 25 W",
        storage: "64 Go ou 128 Go · microSD",
        network: "4G LTE",
        protection: "IP54",
        updates: "Jusqu’à 6 générations Android",
        warranty: "Garantie 12 mois"
      }
    },
    {
      id: "a37-5g",
      model: "Samsung Galaxy A37 5G",
      badge: "FABRIQUÉ EN ALGÉRIE · GARANTIE 12 MOIS",
      condition: "Neuf · Garantie 12 mois",
      price: "Prix sur devis",
      summary: "Écran Super AMOLED 120 Hz, performances Exynos et résistance IP68 avec connectivité 5G.",
      image: "assets/phones/samsung-a37.png",
      imageScale: "scale-125",
      specs: {
        screen: '6,7" FHD+ Super AMOLED · 120 Hz · 1 900 nits · Gorilla Glass Victus+',
        chip: "Exynos 1480 (4 nm)",
        memory: "6/8/12 Go RAM · 128/256 Go UFS 3.1",
        camera: "50 MP OIS + 8 MP ultra grand-angle + 5 MP · selfie 12 MP · vidéo 4K",
        battery: "5 000 mAh · charge 45 W",
        protection: "IP68",
        network: "5G · eSIM",
        software: "Android 16 · One UI 8.5",
        updates: "6 ans de mises à jour",
        origin: "Fabriqué en Algérie",
        warranty: "Garantie 12 mois"
      }
    },
    {
      id: "a18",
      model: "Samsung Galaxy A18",
      badge: "FABRIQUÉ EN ALGÉRIE · GARANTIE 12 MOIS",
      condition: "Neuf · Garantie 12 mois",
      price: "Prix sur devis",
      summary: "Grand écran Super AMOLED, processeur octa-core et fonctionnalités utiles au quotidien.",
      image: "assets/phones/samsung-a18.png",
      specs: {
        screen: '6,7" FHD+ Super AMOLED · 90 Hz · Gorilla Glass 3',
        chip: "Octa-core 6 nm · MediaTek Helio G99+",
        memory: "4/6/8 Go RAM · 128/256 Go",
        camera: "50 MP + 5 MP ultra grand-angle + 2 MP · selfie 13 MP",
        battery: "5 000 mAh · charge 25 W",
        protection: "IP64",
        connectivity: "NFC",
        software: "Android 17 · One UI 9",
        updates: "6 ans de mises à jour",
        origin: "Fabriqué en Algérie",
        warranty: "Garantie 12 mois"
      }
    },
    {
      id: "a08",
      model: "Samsung Galaxy A08",
      badge: "FABRIQUÉ EN ALGÉRIE · GARANTIE 12 MOIS",
      condition: "Neuf · Garantie 12 mois",
      price: "Prix sur devis",
      summary: "Grand écran 90 Hz, double appareil photo et batterie haute capacité.",
      image: "assets/phones/samsung-a08.png",
      imageScale: "scale-125",
      specs: {
        screen: '6,7" HD+ PLS LCD · 90 Hz',
        chip: "MediaTek Helio G99+ (6 nm)",
        memory: "4/6 Go RAM · 64/128 Go · microSD",
        camera: "50 MP + 2 MP · selfie 8 MP",
        battery: "6 000 mAh · charge 25 W",
        protection: "IP64",
        software: "Android 17 · One UI 9",
        updates: "6 ans de mises à jour",
        origin: "Fabriqué en Algérie",
        warranty: "Garantie 12 mois"
      }
    },
    {
      id: "a07s",
      model: "Samsung Galaxy A07s",
      badge: "FABRIQUÉ EN ALGÉRIE · GARANTIE 12 MOIS",
      condition: "Neuf · Garantie 12 mois",
      price: "Prix sur devis",
      summary: "Une expérience Galaxy accessible avec écran 90 Hz et stockage extensible.",
      image: "assets/phones/samsung-a07s.png",
      specs: {
        screen: '6,7" HD+ PLS LCD · 90 Hz',
        chip: "MediaTek Helio G99+ (6 nm)",
        memory: "4/6 Go RAM · 64/128 Go · microSD",
        camera: "50 MP + 2 MP · selfie 8 MP",
        battery: "5 000 mAh · charge 25 W",
        protection: "IP54",
        software: "Android 16 · One UI 8.5",
        updates: "6 ans de mises à jour",
        origin: "Fabriqué en Algérie",
        warranty: "Garantie 12 mois"
      }
    }
  ];

  const PROMO_PHONES = PHONES;
  const PARTNERS = [
    { name: "SONATRACH DG", sector: "energy", label: "Énergie & Hydrocarbures", logo: "Sonatrach.svg" },
    { name: "Naftal", sector: "energy", label: "Énergie & Hydrocarbures", logo: "Logo_NAFTAL.svg" },
    { name: "Algérie Télécom", sector: "telecom", label: "Télécoms & Tech", logo: "Algérie_Télécom.svg" },
    { name: "Yassir", sector: "telecom", label: "Télécoms & Tech", logo: "Logo_Yassir.svg" },
    { name: "SPA Cevital", sector: "industry", label: "Industrie & Agro", logo: "Cevital.svg" },
    { name: "SPA Brandt Algérie", sector: "industry", label: "Industrie & Agro", logo: "BRANDT.svg" },
    { name: "SPA Saidal", sector: "health", label: "Santé & Pharma", logo: "Logo_PNG_SAIDAL.png" },
    { name: "Hikma", sector: "health", label: "Santé & Pharma", logo: "hikma.svg" },
    { name: "Journal El Massa", sector: "media", label: "Médias", logo: "El-massa.svg" }
  ];
  const SPEC_LABELS = {
    screen: "Écran",
    chip: "Puce",
    camera: "Caméra",
    battery: "Batterie",
    storage: "Stockage",
    network: "Réseau",
    condition: "État",
    feature: "Fonctions",
    protection: "Protection",
    updates: "Mises à jour",
    warranty: "Garantie",
    origin: "Origine",
    memory: "Mémoire & stockage",
    connectivity: "Connectivité",
    software: "Système"
  };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const waLink = (message, number = STORE.whatsapp) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  const WHATSAPP_ICON = '<svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20l1.2-5A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8.2 8.2c.2-.5.5-.7.8-.7h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.6.7a.5.5 0 0 0 0 .6c.4.7 1.1 1.5 1.8 1.9.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.3.6-.1.4-.4.8-.8 1.1-.4.3-.9.4-1.4.3-.9-.1-2-.7-3.1-1.7-1.1-.9-1.8-2-2.1-2.9-.2-.6-.1-1.1.1-1.5Z"/></svg>';
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = Boolean(window.gsap && window.ScrollTrigger);
  if (hasGsap) window.gsap.registerPlugin(window.ScrollTrigger);

  let heroIndex = 0;
  let heroTimer;
  let heroTransitionTimer;
  let partnerFilterTimer;
  let introTimer;
  let introTimeline;
  let lenis;
  let lastFocus;
  let copyResetTimer;

  // Lenis and GSAP share one animation loop for smooth scrolling.
  function initSmoothScroll() {
    if (reducedMotion || !window.Lenis || !hasGsap) return;

    lenis = new window.Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.85 });
    lenis.on("scroll", window.ScrollTrigger.update);
    window.gsap.ticker.add(time => lenis.raf(time * 1000));
    window.gsap.ticker.lagSmoothing(0);
  }

  function setScrollLocked(locked) {
    document.body.classList.toggle("modal-open", locked);
    if (!lenis) return;
    locked ? lenis.stop() : lenis.start();
  }

  // Hero slider with a timed progress line.
  function renderHero() {
    $("#heroSlides").innerHTML = HERO_SLIDES.map((slide, index) => `
      <article class="hero-slide hero-scene-${slide.scene} ${index === 0 ? "is-active" : ""}"
        role="group" aria-roledescription="diapositive" aria-label="${slide.title}" aria-hidden="${index !== 0}">
        <div class="hero-image-layer" style="background-image:url('${slide.image}')"></div>
        <div class="hero-art-tone" aria-hidden="true"></div>
        <div class="hero-character" aria-hidden="true">
          <img src="${slide.foreground}" alt="" loading="${index === 0 ? "eager" : "lazy"}">
        </div>
      </article>
    `).join("");

    $("#heroProgress").innerHTML = HERO_SLIDES.map((slide, index) => `
      <button class="progress-track ${index === 0 ? "is-active" : ""}" type="button"
        data-slide="${index}" aria-label="Afficher ${slide.kicker}" aria-current="${index === 0}">
        <span class="progress-number">0${index + 1}</span>
        <span class="progress-name">${slide.progressLabel}</span>
        <span class="progress-fill"></span>
      </button>
    `).join("");

    showHero(0, false);
    startHeroTimer();
  }

  function showHero(index, animate = true) {
    heroIndex = (index + HERO_SLIDES.length) % HERO_SLIDES.length;
    const slide = HERO_SLIDES[heroIndex];
    $$(".hero-slide").forEach((element, itemIndex) => {
      const active = itemIndex === heroIndex;
      element.classList.toggle("is-active", active);
      element.setAttribute("aria-hidden", String(!active));
    });
    $("#heroKicker").textContent = slide.kicker;
    $("#heroTitle").textContent = slide.title;
    $("#heroSubtitle").textContent = slide.subtitle;
    $("#heroMission").textContent = slide.mission;
    $("#heroLoadLabel").textContent = slide.loadLabel;
    $("#heroLoadStep").textContent = `0${heroIndex + 1} / 0${HERO_SLIDES.length}`;
    $("#heroCurrent").textContent = String(heroIndex + 1).padStart(2, "0");

    $$(".progress-track").forEach((button, itemIndex) => {
      button.classList.toggle("is-active", itemIndex === heroIndex);
      button.setAttribute("aria-current", String(itemIndex === heroIndex));
    });

    const loader = $("#heroLoaderFill");
    loader.classList.remove("is-running");
    void loader.offsetWidth;
    if (!reducedMotion) loader.classList.add("is-running");

    if (animate) {
      const stage = $("#accueil");
      window.clearTimeout(heroTransitionTimer);
      stage.classList.remove("is-transitioning");
      void stage.offsetWidth;
      stage.classList.add("is-transitioning");
      heroTransitionTimer = window.setTimeout(() => stage.classList.remove("is-transitioning"), 850);
    }

    if (animate && hasGsap && !reducedMotion) {
      window.gsap.fromTo(".hero-copy > *",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.07, ease: "power3.out", overwrite: true }
      );
    }
  }

  function startHeroTimer() {
    window.clearInterval(heroTimer);
    if (reducedMotion) return;
    heroTimer = window.setInterval(() => showHero(heroIndex + 1), 5500);
  }

  const heroStage = $("#accueil");
  let swipeStart = null;
  heroStage.addEventListener("pointermove", event => {
    if (event.pointerType !== "mouse" || reducedMotion) return;
    const bounds = heroStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroStage.style.setProperty("--hero-parallax-x", `${x * 16}px`);
    heroStage.style.setProperty("--hero-parallax-y", `${y * 12}px`);
  });
  heroStage.addEventListener("pointerleave", () => {
    heroStage.style.setProperty("--hero-parallax-x", "0px");
    heroStage.style.setProperty("--hero-parallax-y", "0px");
  });
  heroStage.addEventListener("touchstart", event => {
    const touch = event.changedTouches[0];
    swipeStart = { x: touch.clientX, y: touch.clientY };
  }, { passive: true });
  heroStage.addEventListener("touchend", event => {
    if (!swipeStart) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - swipeStart.x;
    const dy = touch.clientY - swipeStart.y;
    swipeStart = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    showHero(heroIndex + (dx < 0 ? 1 : -1));
    startHeroTimer();
  }, { passive: true });

  $("#heroPrev").addEventListener("click", () => {
    showHero(heroIndex - 1);
    startHeroTimer();
  });
  $("#heroNext").addEventListener("click", () => {
    showHero(heroIndex + 1);
    startHeroTimer();
  });
  $("#heroProgress").addEventListener("click", event => {
    const indicator = event.target.closest("[data-slide]");
    if (!indicator) return;
    showHero(Number(indicator.dataset.slide));
    startHeroTimer();
  });

  function renderShowcase() {
    $("#phoneShowcase").innerHTML = PHONES.map((phone, index) => {
      const reversed = index % 2 === 1;
      const highlights = ["screen", "chip", "camera", "battery"];
      return `
        <article class="phone-section ${reversed ? "is-reversed" : ""}" data-phone-section="${phone.id}">
          <div class="phone-stage" data-tilt>
            <div class="phone-ambient"></div>
            <img class="phone-product-image ${phone.imageScale || "scale-100"}" src="${phone.image}" alt="${phone.model}" loading="lazy">
            <button class="phone-image-trigger" type="button" data-open-phone="${index}" aria-label="Explorer ${phone.model}"></button>
          </div>
          <div class="phone-copy">
            <p class="model-badge">${phone.badge}</p>
            <button class="phone-title-button" type="button" data-open-phone="${index}">${phone.model}</button>
            <p class="phone-summary">${phone.summary}</p>
            <dl class="spec-summary">
              ${highlights.map(key => `
                <div><dt>${SPEC_LABELS[key]}</dt><dd>${phone.specs[key]}</dd></div>
              `).join("")}
            </dl>
            <div class="phone-purchase">
              <p class="phone-price">${phone.price}</p>
              <button class="button button-dark" type="button" data-open-phone="${index}">Explorer l'appareil <span aria-hidden="true">↗</span></button>
              <a class="button button-outline" href="${waLink(`Bonjour ${STORE.name}, je souhaite demander un devis et commander le ${phone.model}.`, STORE.commercialWhatsapp)}" target="_blank" rel="noopener">${WHATSAPP_ICON}Demander un devis / Commander sur WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    initProductMotion();
  }

  function renderPartnerGrid(sector = "all") {
    const grid = $("#partnerGrid");
    const partners = sector === "all" ? PARTNERS : PARTNERS.filter(partner => partner.sector === sector);
    grid.innerHTML = partners.map(partner => `
      <article class="partner-tile" data-sector="${partner.sector}">
        <div class="partner-logo-frame">
          <img class="partner-logo-image" src="assets/partners/${partner.logo}" alt="" aria-hidden="true" loading="lazy">
        </div>
        <h3 class="partner-name">${partner.name}</h3>
        <p class="partner-sector-tag">${partner.label}</p>
      </article>
    `).join("");
  }

  function initPartnerFilters() {
    $("#partnerFilters").addEventListener("click", event => {
      const selected = event.target.closest("[data-sector]");
      if (!selected) return;

      $$(".partner-filter").forEach(button => {
        const active = button === selected;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });

      window.clearTimeout(partnerFilterTimer);
      const grid = $("#partnerGrid");
      grid.classList.add("is-filtering");
      partnerFilterTimer = window.setTimeout(() => {
        renderPartnerGrid(selected.dataset.sector);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => grid.classList.remove("is-filtering"));
        });
      }, 140);
    });
    renderPartnerGrid();
  }

  function initProductMotion() {
    const sections = $$(".phone-section");

    if (hasGsap && !reducedMotion) {
      sections.forEach(section => {
        window.gsap.fromTo(section.querySelector(".phone-copy"),
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 78%", once: true }
          }
        );
        window.gsap.to(section.querySelector(".phone-product-image"), {
          yPercent: -6,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 0.7 }
        });
      });
    }

    if (reducedMotion || !window.matchMedia("(pointer:fine)").matches) return;
    sections.forEach(section => {
      const stage = section.querySelector("[data-tilt]");
      stage.addEventListener("pointermove", event => {
        if (event.pointerType !== "mouse") return;
        const bounds = stage.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        if (window.gsap) {
          window.gsap.to(stage, { rotateY: x * 5, rotateX: y * -5, duration: 0.45, ease: "power2.out", overwrite: true });
        } else {
          stage.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
        }
      });
      stage.addEventListener("pointerleave", () => {
        if (window.gsap) window.gsap.to(stage, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
        else stage.style.transform = "";
      });
    });
  }

  // Product detail modal.
  function openPhone(index) {
    const phone = PHONES[index];
    if (!phone) return;
    closePromo();
    lastFocus = document.activeElement;

    $("#detailBadge").textContent = phone.badge;
    $("#detailTitle").textContent = phone.model;
    $("#detailCondition").textContent = phone.condition;
    $("#detailPrice").textContent = phone.price;
    $("#detailSpecs").innerHTML = Object.entries(phone.specs).map(([key, value]) => `
      <div class="spec-row"><dt>${SPEC_LABELS[key] || key}</dt><dd>${value}</dd></div>
    `).join("");
    $("#detailWhatsApp").href = waLink(`Bonjour ${STORE.name}, je souhaite demander un devis pour le ${phone.model}.`, STORE.commercialWhatsapp);
    const image = $("#detailImage");
    image.className = `studio-image ${phone.imageScale || "scale-100"}`;
    image.src = phone.image;
    image.alt = phone.model;
    $("#studioViewer").classList.remove("is-zoomed");
    setModalOpen($("#detailModal"), true);
    $("#closeDetail").focus();
  }

  function setModalOpen(modal, open) {
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
    setScrollLocked(open);
  }

  function closePhone() {
    const modal = $("#detailModal");
    if (!modal.classList.contains("is-open")) return;
    setModalOpen(modal, false);
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  $("#phoneShowcase").addEventListener("click", event => {
    const trigger = event.target.closest("[data-open-phone]");
    if (trigger) openPhone(Number(trigger.dataset.openPhone));
  });
  $("#closeDetail").addEventListener("click", closePhone);
  $("#closeDetail").addEventListener("pointerdown", event => {
    if (event.button === 0) {
      event.preventDefault();
      closePhone();
    }
  });
  $("#detailModal").addEventListener("pointerdown", event => {
    if (event.button === 0 && event.target === $("#detailModal")) closePhone();
  });
  $("#detailModal").addEventListener("click", event => {
    if (event.target === $("#detailModal")) closePhone();
  });

  // Zoom lens follows the pointer inside the product viewer.
  $("#studioViewer").addEventListener("pointermove", event => {
    if (event.pointerType !== "mouse" || reducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--zoom-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
    event.currentTarget.style.setProperty("--zoom-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
  });
  $("#studioViewer").addEventListener("pointerenter", event => {
    if (event.pointerType === "mouse" && !reducedMotion) event.currentTarget.classList.add("is-zoomed");
  });
  $("#studioViewer").addEventListener("pointerleave", event => event.currentTarget.classList.remove("is-zoomed"));

  // Samsung spotlight modal.
  function renderPromo() {
    $("#promoPhones").innerHTML = PROMO_PHONES.map(phone => `
      <article class="promo-card">
        <div class="promo-image-wrap"><img class="promo-image ${phone.imageScale || "scale-100"}" src="${phone.image}" alt="${phone.model}" loading="lazy"></div>
        <p class="eyebrow">${phone.condition}</p>
        <h3>${phone.model}</h3>
        <p>${phone.specs.screen} · ${phone.specs.chip} · ${phone.specs.camera}</p>
        <p class="price">${phone.price}</p>
        <a class="button button-whatsapp" href="${waLink(`Bonjour ${STORE.name}, je souhaite demander un devis pour ${phone.model}.`, STORE.commercialWhatsapp)}" target="_blank" rel="noopener">${WHATSAPP_ICON}Demander un devis <span aria-hidden="true">↗</span></a>
      </article>
    `).join("");
  }

  function openPromo() {
    closePhone();
    lastFocus = $("#mobileMenu").classList.contains("is-open")
      ? $("#mobileMenuToggle")
      : document.activeElement;
    setModalOpen($("#promoModal"), true);
    $("#closePromo").focus();
  }

  function closePromo() {
    const modal = $("#promoModal");
    if (!modal.classList.contains("is-open")) return;
    setModalOpen(modal, false);
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  $("#openPromo").addEventListener("click", openPromo);
  $("#openPromoMobile").addEventListener("click", openPromo);
  $("#closePromo").addEventListener("click", closePromo);
  $("#closePromo").addEventListener("pointerdown", event => {
    if (event.button === 0) {
      event.preventDefault();
      closePromo();
    }
  });
  $("#promoModal").addEventListener("pointerdown", event => {
    if (event.button === 0 && event.target === $("#promoModal")) closePromo();
  });
  $("#promoModal").addEventListener("click", event => {
    if (event.target === $("#promoModal")) closePromo();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closePhone();
      closePromo();
      if ($("#mobileMenu").classList.contains("is-open")) setMobileMenuOpen(false, true);
      return;
    }
  });

  function setMobileMenuOpen(open, restoreFocus = false) {
    const menu = $("#mobileMenu");
    const toggle = $("#mobileMenuToggle");
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    menu.toggleAttribute("inert", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    if (!open && restoreFocus) toggle.focus();
  }

  $("#mobileMenuToggle").addEventListener("click", () => {
    setMobileMenuOpen($("#mobileMenuToggle").getAttribute("aria-expanded") !== "true");
  });
  $("#mobileMenu").addEventListener("click", event => {
    if (event.target.closest("a, button")) setMobileMenuOpen(false);
  });

  document.addEventListener("click", event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.getElementById(decodeURIComponent(href.slice(1)));
    if (!target) return;

    event.preventDefault();
    if ($("#mobileMenu").classList.contains("is-open")) setMobileMenuOpen(false);
    if (lenis) {
      lenis.start();
      lenis.scrollTo(target, {
        duration: 1.4,
        offset: -80,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    }
  });

  // Intro reveal and session gating.
  function completeIntro() {
    const curtain = $("#introCurtain");
    if (!curtain || curtain.classList.contains("is-hidden")) return;
    curtain.classList.add("is-hidden");
    curtain.classList.remove("is-playing", "is-wiping", "use-css");
    curtain.setAttribute("aria-hidden", "true");
    if (hasGsap) window.gsap.set(curtain, { clearProps: "opacity,scale,transform" });
    else {
      curtain.style.opacity = "";
      curtain.style.transform = "";
    }
    if (lenis) lenis.start();
  }

  function finishIntro() {
    const curtain = $("#introCurtain");
    window.clearTimeout(introTimer);
    if (!curtain || curtain.classList.contains("is-hidden") || curtain.dataset.finishing === "true") return;
    curtain.dataset.finishing = "true";
    if (introTimeline) {
      introTimeline.kill();
      introTimeline = null;
    }

    curtain.classList.remove("is-playing");
    if (hasGsap && !reducedMotion) {
      window.gsap.to(curtain, { opacity: 0, scale: 1.04, duration: 0.75, ease: "power3.out", onComplete: completeIntro });
    } else {
      curtain.classList.add("is-wiping");
      window.setTimeout(completeIntro, 850);
    }
  }

  function playIntro(force = false) {
    const curtain = $("#introCurtain");
    if (!force) {
      try {
        if (sessionStorage.getItem("samsungBootPlayed")) {
          curtain.classList.add("is-hidden");
          return;
        }
        sessionStorage.setItem("samsungBootPlayed", "true");
      } catch (error) {
        // Keep the intro available even when browser storage is disabled.
      }
    } else {
      try {
        sessionStorage.setItem("samsungBootPlayed", "true");
      } catch (error) {
        console.warn("L’état de l’intro ne peut pas être mémorisé dans cette session.", error);
      }
    }

    if (reducedMotion) {
      curtain.classList.add("is-hidden");
      curtain.setAttribute("aria-hidden", "true");
      return;
    }

    if (lenis) lenis.stop();
    curtain.dataset.finishing = "false";
    curtain.classList.remove("is-hidden", "is-wiping", "use-css");
    curtain.setAttribute("aria-hidden", "false");
    if (hasGsap) {
      window.gsap.set(curtain, { clearProps: "opacity,scale,transform" });
      window.gsap.set(".intro-glow, .intro-streak, #tv-logo-wrap, #tv-sub", { clearProps: "all" });
    }
    void curtain.offsetWidth;
    curtain.classList.add("is-playing");

    if (hasGsap) {
      introTimeline = window.gsap.timeline({ onComplete: completeIntro })
        .fromTo(".intro-streak", { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.28, ease: "power4.out" }, 0)
        .to(".intro-streak", { scaleX: 1.15, opacity: 0.9, duration: 0.38, ease: "power2.out" }, 0.28)
        .to(".intro-streak", { scaleX: 1.3, opacity: 0, duration: 0.44, ease: "power2.out" }, 0.66)
        .fromTo(".intro-glow", { scale: 0.4, opacity: 0 }, { scale: 1.05, opacity: 1, duration: 0.9, ease: "power3.out" }, 0.25)
        .to(".intro-glow", { scale: 1, opacity: 0.75, duration: 0.9, ease: "power2.out" }, 1.15)
        .fromTo("#tv-logo-wrap", { scaleY: 0.05, scaleX: 1.12, opacity: 0, filter: "brightness(2.5) blur(4px)" }, { scaleY: 1.02, scaleX: 0.99, opacity: 1, filter: "brightness(1.3) blur(0px)", duration: 0.38, ease: "power3.out" }, 0.22)
        .to("#tv-logo-wrap", { scaleY: 1, scaleX: 1, filter: "brightness(1) blur(0px)", duration: 0.45, ease: "power2.out" }, 0.6)
        .fromTo("#tv-sub", { y: 6, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power2.out" }, 0.8)
        .to(curtain, { opacity: 0, scale: 1.04, duration: 0.75, ease: "power3.out" }, 1.65);
    } else {
      curtain.classList.add("use-css");
      introTimer = window.setTimeout(finishIntro, 2400);
    }
  }

  $("#skipIntro").addEventListener("click", finishIntro);

  function copyWithFallback(text) {
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = text;
    temporaryInput.setAttribute("readonly", "");
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.append(temporaryInput);
    try {
      temporaryInput.select();
      return document.execCommand("copy");
    } finally {
      temporaryInput.remove();
    }
  }

  async function copyPhoneNumber() {
    const button = $("#copyPhone");
    window.clearTimeout(copyResetTimer);
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        try {
          await navigator.clipboard.writeText(STORE.phoneDisplay);
        } catch (clipboardError) {
          if (!copyWithFallback(STORE.phoneDisplay)) throw clipboardError;
        }
      } else if (!copyWithFallback(STORE.phoneDisplay)) {
        throw new Error("Clipboard access is unavailable.");
      }
      button.textContent = "Copié ✓";
    } catch (error) {
      console.error("Impossible de copier le numéro de téléphone.", error);
      button.textContent = "Copie impossible";
    }
    copyResetTimer = window.setTimeout(() => {
      button.textContent = "Copier";
    }, 2000);
  }

  function initStoreContact() {
    $("#copyPhone").addEventListener("click", copyPhoneNumber);
    $("#contactWhatsapp").href = waLink(`Bonjour ${STORE.name}, je souhaite obtenir des renseignements sur vos smartphones Samsung.`);
    $("#footerWhatsapp").href = waLink(`Bonjour ${STORE.name}, j'aimerais vous contacter.`);
    $("#storeDirections").href = STORE.mapsUrl;
    $("#mapDirections").href = STORE.mapsUrl;
    $("#footerMaps").href = STORE.mapsUrl;
  }

  $("#replayIntro").addEventListener("click", () => {
    closePhone();
    closePromo();
    try {
      sessionStorage.removeItem("samsungBootPlayed");
      sessionStorage.removeItem("eldjoualIntroSeen");
    } catch (error) {
      console.warn("La session ne peut pas être réinitialisée dans ce navigateur.", error);
    }
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo({ top: 0, behavior: "auto" });
    playIntro(true);
  });

  // Startup.
  $("#navWhatsApp").href = waLink(`Bonjour ${STORE.name}, j'ai une question.`);
  $("#mobileWhatsApp").href = waLink(`Bonjour ${STORE.name}, j'ai une question.`);
  $("#accessoriesWhatsApp").href = waLink(`Bonjour ${STORE.name}, je souhaite recevoir le catalogue accessoires.`, STORE.commercialWhatsapp);
  initStoreContact();
  renderHero();
  renderShowcase();
  initPartnerFilters();
  renderPromo();
  initSmoothScroll();
  playIntro();
})();
