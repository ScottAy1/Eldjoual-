// ==========================================================
// EL DJOUAL DISTRIBUTION — Partner Application Page
// Handles FR / EN / AR translations, sticky navbar, and
// direct-to-email partner request formatting & dispatch.
// ==========================================================
(() => {
  const STORE = {
    name: "EL DJOUAL DISTRIBUTION",
    commercialEmail: "commercial@eldjoual.com",
    whatsapp: "213563516895"
  };

  const TRANSLATIONS = {
    fr: {
      meta: {
        title: "Devenir Partenaire — EL DJOUAL DISTRIBUTION",
        description: "Devenez partenaire EL DJOUAL DISTRIBUTION, distributeur Samsung en Algérie. Remplissez le formulaire B2B pour soumettre votre demande directement par e-mail."
      },
      nav: {
        aria: "Navigation principale",
        langAria: "Choisir la langue",
        home: "Accueil",
        catalogue: "Catalogue",
        accessories: "Accessoires",
        partners: "Partenaires",
        becomePartner: "Devenir partenaire",
        contact: "Contact",
        email: "E-mail",
        emailDirect: "Envoyer un e-mail",
        whatsapp: "WhatsApp",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu"
      },
      hero: {
        back: "Retour au site",
        eyebrow: "PARTENARIAT B2B · EL DJOUAL DISTRIBUTION",
        title: "Devenez partenaire Samsung en Algérie.",
        desc: 'Remplissez ce formulaire avec vos coordonnées et les informations de votre entreprise. Votre demande est préparée et transmise directement par e-mail à notre service commercial (<span class="ltr-num">commercial@eldjoual.com</span>).'
      },
      aside: {
        eyebrow: "POURQUOI NOUS REJOINDRE",
        title: "Un réseau fiable depuis 2006.",
        b1: "Produits Samsung Galaxy authentiques avec garantie officielle 12 mois",
        b2: "Tarifs B2B compétitifs pour revendeurs, distributeurs et entreprises",
        b3: "Livraison nationale sécurisée à travers les 69 wilayas",
        b4: "Accompagnement commercial personnalisé et service après-vente dédié",
        directLabel: "Contact commercial direct",
        note: "Réponse rapide par e-mail ou téléphone du dimanche au jeudi."
      },
      form: {
        title: "Demande de partenariat",
        subtitle: "Les champs marqués d’un * sont obligatoires.",
        fullName: "Nom complet",
        fullNamePh: "Ex. Karim Benali",
        companyName: "Nom de l’entreprise",
        companyNamePh: "Ex. SARL Atlas Mobile",
        jobTitle: "Fonction / Poste",
        jobTitlePh: "Ex. Gérant, Responsable achats",
        phone: "Numéro de téléphone",
        phonePh: "Ex. 0550 00 00 00",
        email: "Adresse e-mail",
        emailPh: "contact@entreprise.dz",
        wilaya: "Wilaya",
        wilayaPh: "Ex. Alger, Oran, Constantine...",
        address: "Adresse complète",
        addressPh: "Rue, commune, code postal",
        activity: "Type d’activité",
        activityPlaceholder: "Sélectionnez un secteur",
        actReseller: "Revendeur / Boutique téléphonie",
        actDistributor: "Grossiste / Distributeur régional",
        actCorporate: "Entreprise / Équipement flotte B2B",
        actTelecom: "Télécoms & Technologies",
        actIndustry: "Énergie, Industrie & Agro",
        actOther: "Autre secteur",
        taxId: "Registre de commerce / NIF (optionnel)",
        taxIdPh: "RC ou NIF",
        needs: "Produits & volumes souhaités",
        needsPh: "Ex. Gamme Galaxy A, accessoires originaux, quantité mensuelle estimée...",
        message: "Message / Détails complémentaires",
        messagePh: "Présentez votre activité et vos besoins commerciaux...",
        submit: "Envoyer la demande par e-mail",
        hint: "Destination : commercial@eldjoual.com",
        errRequired: "Veuillez remplir tous les champs obligatoires marqués d’un *.",
        errEmail: "Veuillez saisir une adresse e-mail valide."
      },
      result: {
        eyebrow: "DEMANDE PRÊTE À L’ENVOI",
        title: "Votre e-mail de partenariat a été préparé.",
        desc: 'Si votre application de messagerie ne s’est pas ouverte automatiquement, utilisez l’une des options ci-dessous pour envoyer votre dossier directement à <strong class="ltr-num">commercial@eldjoual.com</strong> :',
        openMail: "Ouvrir mon application e-mail",
        openGmail: "Ouvrir dans Gmail",
        copy: "Copier le récapitulatif",
        copied: "Récapitulatif copié ✓",
        whatsapp: "Envoyer aussi sur WhatsApp"
      },
      mailTemplate: {
        subject: company => `Demande de partenariat B2B — ${company}`,
        intro: `Bonjour ${STORE.name},\n\nVoici ma demande pour devenir partenaire commercial :`,
        labels: {
          fullName: "Nom complet",
          companyName: "Entreprise",
          jobTitle: "Fonction",
          phone: "Téléphone",
          email: "E-mail",
          wilaya: "Wilaya",
          address: "Adresse",
          activity: "Type d'activité",
          taxId: "RC / NIF",
          needs: "Produits & volumes",
          message: "Message"
        },
        quickMailSubject: `Demande de partenariat B2B — ${STORE.name}`,
        quickMailBody: `Bonjour ${STORE.name},\n\nJe souhaite devenir partenaire commercial.\n\nCordialement,`,
        quickWhatsApp: `Bonjour ${STORE.name}, je souhaite devenir partenaire commercial.`
      }
    },
    en: {
      meta: {
        title: "Become a Partner — EL DJOUAL DISTRIBUTION",
        description: "Become a partner of EL DJOUAL DISTRIBUTION, Samsung distributor in Algeria. Complete the B2B form to send your request directly by email."
      },
      nav: {
        aria: "Main navigation",
        langAria: "Choose language",
        home: "Home",
        catalogue: "Catalogue",
        accessories: "Accessories",
        partners: "Partners",
        becomePartner: "Become a partner",
        contact: "Contact",
        email: "Email",
        emailDirect: "Send an email",
        whatsapp: "WhatsApp",
        openMenu: "Open menu",
        closeMenu: "Close menu"
      },
      hero: {
        back: "Back to site",
        eyebrow: "B2B PARTNERSHIP · EL DJOUAL DISTRIBUTION",
        title: "Become a Samsung partner in Algeria.",
        desc: 'Fill out this form with your contact and company details. Your application is formatted and sent directly by email to our sales team (<span class="ltr-num">commercial@eldjoual.com</span>).'
      },
      aside: {
        eyebrow: "WHY PARTNER WITH US",
        title: "A trusted network since 2006.",
        b1: "Authentic Samsung Galaxy devices with an official 12-month warranty",
        b2: "Competitive B2B pricing for resellers, distributors, and businesses",
        b3: "Reliable nationwide shipping across all 69 wilayas",
        b4: "Personalized commercial support and official after-sales service",
        directLabel: "Direct sales contact",
        note: "Fast response by email or phone from Sunday to Thursday."
      },
      form: {
        title: "Partnership application",
        subtitle: "Fields marked with * are required.",
        fullName: "Full name",
        fullNamePh: "e.g. Karim Benali",
        companyName: "Company name",
        companyNamePh: "e.g. Atlas Mobile LLC",
        jobTitle: "Job title / Role",
        jobTitlePh: "e.g. Managing Director, Procurement Manager",
        phone: "Phone number",
        phonePh: "e.g. 0550 00 00 00",
        email: "Email address",
        emailPh: "contact@company.dz",
        wilaya: "Wilaya / Province",
        wilayaPh: "e.g. Algiers, Oran, Constantine...",
        address: "Full address",
        addressPh: "Street, city, postal code",
        activity: "Business type",
        activityPlaceholder: "Select a sector",
        actReseller: "Reseller / Mobile retail store",
        actDistributor: "Wholesaler / Regional distributor",
        actCorporate: "Enterprise / B2B fleet supply",
        actTelecom: "Telecoms & Technology",
        actIndustry: "Energy, Industry & Agri-Food",
        actOther: "Other sector",
        taxId: "Commercial Register / Tax ID (optional)",
        taxIdPh: "RC or NIF",
        needs: "Products & expected volumes",
        needsPh: "e.g. Galaxy A series, original accessories, estimated monthly quantity...",
        message: "Message / Additional details",
        messagePh: "Tell us about your business and commercial needs...",
        submit: "Send application by email",
        hint: "Recipient: commercial@eldjoual.com",
        errRequired: "Please fill in all required fields marked with *.",
        errEmail: "Please enter a valid email address."
      },
      result: {
        eyebrow: "READY TO SEND",
        title: "Your partnership email has been prepared.",
        desc: 'If your email app did not open automatically, use any option below to send your application directly to <strong class="ltr-num">commercial@eldjoual.com</strong>:',
        openMail: "Open my email app",
        openGmail: "Open in Gmail",
        copy: "Copy summary",
        copied: "Summary copied ✓",
        whatsapp: "Also send on WhatsApp"
      },
      mailTemplate: {
        subject: company => `B2B Partnership Application — ${company}`,
        intro: `Hello ${STORE.name},\n\nHere are my details to become a commercial partner:`,
        labels: {
          fullName: "Full name",
          companyName: "Company",
          jobTitle: "Role",
          phone: "Phone",
          email: "Email",
          wilaya: "Wilaya",
          address: "Address",
          activity: "Business type",
          taxId: "RC / Tax ID",
          needs: "Products & volumes",
          message: "Message"
        },
        quickMailSubject: `B2B Partnership Inquiry — ${STORE.name}`,
        quickMailBody: `Hello ${STORE.name},\n\nI would like to become a commercial partner.\n\nBest regards,`,
        quickWhatsApp: `Hello ${STORE.name}, I would like to become a commercial partner.`
      }
    },
    ar: {
      meta: {
        title: "كن شريكاً لنا — EL DJOUAL DISTRIBUTION",
        description: "كن شريكاً لـ EL DJOUAL DISTRIBUTION، موزع سامسونج في الجزائر. املأ استمارة الشراكة لإرسال طلبك مباشرة عبر البريد الإلكتروني."
      },
      nav: {
        aria: "القائمة الرئيسية",
        langAria: "اختر اللغة",
        home: "الرئيسية",
        catalogue: "الكتالوج",
        accessories: "الإكسسوارات",
        partners: "شركاؤنا",
        becomePartner: "كن شريكاً لنا",
        contact: "اتصل بنا",
        email: "البريد",
        emailDirect: "إرسال بريد إلكتروني",
        whatsapp: "واتساب",
        openMenu: "فتح القائمة",
        closeMenu: "إغلاق القائمة"
      },
      hero: {
        back: "العودة إلى الموقع",
        eyebrow: "الشراكة التجارية B2B · EL DJOUAL DISTRIBUTION",
        title: "كن شريكاً لسامسونج في الجزائر.",
        desc: 'املأ هذه الاستمارة ببياناتك ومعلومات شركتك. يتم تجهيز طلبك وإرساله مباشرة عبر البريد الإلكتروني إلى المصلحة التجارية (<span class="ltr-num">commercial@eldjoual.com</span>).'
      },
      aside: {
        eyebrow: "لماذا تنضم إلينا",
        title: "شبكة موثوقة منذ 2006.",
        b1: "أجهزة سامسونج Galaxy أصلية مع ضمان رسمي لمدة 12 شهراً",
        b2: "أسعار B2B تنافسية لبائعي التجزئة والموزعين والشركات",
        b3: "توصيل وطني آمن وسريع عبر 69 ولاية",
        b4: "مرافقة تجارية مخصصة وخدمة ما بعد البيع رسمية",
        directLabel: "التواصل التجاري المباشر",
        note: "رد سريع عبر البريد الإلكتروني أو الهاتف من الأحد إلى الخميس."
      },
      form: {
        title: "استمارة طلب الشراكة",
        subtitle: "الحقول التي تحمل علامة * إلزامية.",
        fullName: "الاسم الكامل",
        fullNamePh: "مثال: كريم بن علي",
        companyName: "اسم الشركة أو المؤسسة",
        companyNamePh: "مثال: شركة أطلس موبايل",
        jobTitle: "المنصب / الصفة",
        jobTitlePh: "مثال: مسير، مسؤول المشتريات",
        phone: "رقم الهاتف",
        phonePh: "مثال: 0550 00 00 00",
        email: "البريد الإلكتروني",
        emailPh: "contact@company.dz",
        wilaya: "الولاية",
        wilayaPh: "مثال: الجزائر، وهران، قسنطينة...",
        address: "العنوان الكامل",
        addressPh: "الشارع، البلدية، الرمز البريدي",
        activity: "طبيعة النشاط",
        activityPlaceholder: "اختر قطاع النشاط",
        actReseller: "بائع تجزئة / محل هواتف",
        actDistributor: "تاجر جملة / موزع جهوي",
        actCorporate: "شركة / تجهيز أسطول B2B",
        actTelecom: "الاتصالات والتكنولوجيا",
        actIndustry: "الطاقة والصناعة والأغذية",
        actOther: "قطاع آخر",
        taxId: "السجل التجاري / الرقم الجبائي (اختياري)",
        taxIdPh: "السجل التجاري أو NIF",
        needs: "المنتجات والكميات المطلوبة",
        needsPh: "مثال: سلسلة Galaxy A، إكسسوارات أصلية، الكمية الشهرية التقديرية...",
        message: "رسالة / تفاصيل إضافية",
        messagePh: "قدّم نبذة عن نشاطك واحتياجاتك التجارية...",
        submit: "إرسال الطلب عبر البريد الإلكتروني",
        hint: "المستلم: commercial@eldjoual.com",
        errRequired: "يرجى ملء جميع الحقول الإلزامية التي تحمل علامة *.",
        errEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح."
      },
      result: {
        eyebrow: "الطلب جاهز للإرسال",
        title: "تم تجهيز رسالة طلب الشراكة الخاصة بك.",
        desc: 'إذا لم يُفتح تطبيق البريد الإلكتروني تلقائياً، يمكنك استخدام أحد الخيارات أدناه لإرسال ملفك مباشرة إلى <strong class="ltr-num">commercial@eldjoual.com</strong>:',
        openMail: "فتح تطبيق البريد الإلكتروني",
        openGmail: "فتح عبر Gmail",
        copy: "نسخ الملخص",
        copied: "تم نسخ الملخص ✓",
        whatsapp: "إرسال أيضاً عبر واتساب"
      },
      mailTemplate: {
        subject: company => `طلب شراكة تجارية B2B — ${company}`,
        intro: `مرحباً ${STORE.name}،\n\nفيما يلي بيانات طلبي لأصبح شريكاً تجارياً:`,
        labels: {
          fullName: "الاسم الكامل",
          companyName: "الشركة / المؤسسة",
          jobTitle: "المنصب",
          phone: "رقم الهاتف",
          email: "البريد الإلكتروني",
          wilaya: "الولاية",
          address: "العنوان",
          activity: "طبيعة النشاط",
          taxId: "السجل التجاري / NIF",
          needs: "المنتجات والكميات",
          message: "الرسالة"
        },
        quickMailSubject: `طلب شراكة تجارية B2B — ${STORE.name}`,
        quickMailBody: `مرحباً ${STORE.name}،\n\nأرغب في أن أصبح شريكاً تجارياً معكم.\n\nمع التحية،`,
        quickWhatsApp: `مرحباً ${STORE.name}، أرغب في أن أصبح شريكاً تجارياً معكم.`
      }
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const getByPath = (obj, path) => path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  const waLink = msg => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`;
  const mailtoLink = (subject, body) => `mailto:${STORE.commercialEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailLink = (subject, body) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(STORE.commercialEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  let currentLang = "fr";
  let lastSubmission = null;
  let copyTimer;
  const getDict = () => TRANSLATIONS[currentLang] || TRANSLATIONS.fr;

  function applyLanguage(lang, persist = true) {
    currentLang = TRANSLATIONS[lang] ? lang : "fr";
    const dict = getDict();

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.title = dict.meta.title;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict.meta.description);

    $$("[data-i18n]").forEach(el => {
      const value = getByPath(dict, el.dataset.i18n);
      if (typeof value === "string") el.textContent = value;
    });
    $$("[data-i18n-html]").forEach(el => {
      const value = getByPath(dict, el.dataset.i18nHtml);
      if (typeof value === "string") el.innerHTML = value;
    });
    $$("[data-i18n-aria]").forEach(el => {
      const value = getByPath(dict, el.dataset.i18nAria);
      if (typeof value === "string") el.setAttribute("aria-label", value);
    });
    $$("[data-i18n-placeholder]").forEach(el => {
      const value = getByPath(dict, el.dataset.i18nPlaceholder);
      if (typeof value === "string") el.setAttribute("placeholder", value);
    });

    $$(".lang-btn").forEach(btn => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    const toggle = $("#mobileMenuToggle");
    if (toggle) {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", isOpen ? dict.nav.closeMenu : dict.nav.openMenu);
    }

    const quickMail = gmailLink(dict.mailTemplate.quickMailSubject, dict.mailTemplate.quickMailBody);
    const quickWa = waLink(dict.mailTemplate.quickWhatsApp);
    if ($("#partnerNavEmail")) {
      $("#partnerNavEmail").href = quickMail;
      $("#partnerNavEmail").target = "_blank";
      $("#partnerNavEmail").rel = "noopener noreferrer";
    }
    if ($("#partnerMobileEmail")) {
      $("#partnerMobileEmail").href = quickMail;
      $("#partnerMobileEmail").target = "_blank";
      $("#partnerMobileEmail").rel = "noopener noreferrer";
    }
    if ($("#partnerNavWhatsApp")) $("#partnerNavWhatsApp").href = quickWa;
    if ($("#partnerMobileWhatsApp")) $("#partnerMobileWhatsApp").href = quickWa;

    if (lastSubmission) renderSubmissionResult(lastSubmission, false);

    if (persist) {
      try {
        localStorage.setItem("eldjoualLang", currentLang);
      } catch (error) {
        // Ignore storage errors.
      }
    }
  }

  function buildEmailContent(data) {
    const dict = getDict();
    const t = dict.mailTemplate;
    const activitySelect = $("#activity");
    const activityOption = activitySelect ? activitySelect.querySelector(`option[value="${data.activity}"]`) : null;
    const activityLabel = activityOption ? activityOption.textContent : data.activity;

    const lines = [
      t.intro,
      "",
      `${t.labels.fullName}: ${data.fullName}`,
      `${t.labels.companyName}: ${data.companyName}`,
      data.jobTitle ? `${t.labels.jobTitle}: ${data.jobTitle}` : null,
      `${t.labels.phone}: ${data.phone}`,
      `${t.labels.email}: ${data.email}`,
      `${t.labels.wilaya}: ${data.wilaya}`,
      `${t.labels.address}: ${data.address}`,
      `${t.labels.activity}: ${activityLabel}`,
      data.taxId ? `${t.labels.taxId}: ${data.taxId}` : null,
      data.needs ? `${t.labels.needs}: ${data.needs}` : null,
      data.message ? `\n${t.labels.message}:\n${data.message}` : null
    ].filter(Boolean);

    return {
      subject: t.subject(data.companyName),
      body: lines.join("\n")
    };
  }

  function renderSubmissionResult(data, triggerMailClient = true) {
    const { subject, body } = buildEmailContent(data);
    const mailHref = mailtoLink(subject, body);
    const gmailHref = gmailLink(subject, body);
    const waHref = waLink(`${subject}\n\n${body}`);

    $("#resultMailto").href = mailHref;
    $("#resultGmail").href = gmailHref;
    $("#resultWhatsApp").href = waHref;
    $("#resultPreview").textContent = `To: ${STORE.commercialEmail}\nSubject: ${subject}\n\n${body}`;

    const resultBox = $("#formResult");
    resultBox.hidden = false;
    if (triggerMailClient) {
      resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      window.location.href = mailHref;
    }
  }

  function initForm() {
    const form = $("#partnerApplicationForm");
    const errorEl = $("#formError");
    if (!form) return;

    form.addEventListener("submit", event => {
      event.preventDefault();
      const dict = getDict();
      const data = {
        fullName: $("#fullName").value.trim(),
        companyName: $("#companyName").value.trim(),
        jobTitle: $("#jobTitle").value.trim(),
        phone: $("#phone").value.trim(),
        email: $("#email").value.trim(),
        wilaya: $("#wilaya").value.trim(),
        address: $("#address").value.trim(),
        activity: $("#activity").value.trim(),
        taxId: $("#taxId").value.trim(),
        needs: $("#needs").value.trim(),
        message: $("#message").value.trim()
      };

      if (!data.fullName || !data.companyName || !data.phone || !data.email || !data.wilaya || !data.address || !data.activity) {
        errorEl.textContent = dict.form.errRequired;
        errorEl.hidden = false;
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errorEl.textContent = dict.form.errEmail;
        errorEl.hidden = false;
        return;
      }

      errorEl.hidden = true;
      lastSubmission = data;
      renderSubmissionResult(data, true);
    });

    $("#resultCopy").addEventListener("click", async () => {
      const btn = $("#resultCopy");
      const text = $("#resultPreview").textContent;
      window.clearTimeout(copyTimer);
      try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
          await navigator.clipboard.writeText(text);
        } else {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.append(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
        }
        btn.textContent = getDict().result.copied;
      } catch (error) {
        // Ignore clipboard denial.
      }
      copyTimer = window.setTimeout(() => {
        btn.textContent = getDict().result.copy;
      }, 2200);
    });
  }

  function initHeaderAndMenu() {
    const header = $("#siteHeader");
    const syncHeader = () => {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    const menu = $("#mobileMenu");
    const toggle = $("#mobileMenuToggle");
    if (!menu || !toggle) return;

    const setOpen = open => {
      const dict = getDict();
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", String(!open));
      menu.toggleAttribute("inert", !open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? dict.nav.closeMenu : dict.nav.openMenu);
    };

    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    menu.addEventListener("click", event => {
      if (event.target.closest("a, button")) setOpen(false);
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && menu.classList.contains("is-open")) setOpen(false);
    });
  }

  $$(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang && btn.dataset.lang !== currentLang) {
        applyLanguage(btn.dataset.lang, true);
      }
    });
  });

  let savedLang = "fr";
  try {
    const stored = localStorage.getItem("eldjoualLang");
    if (stored && TRANSLATIONS[stored]) savedLang = stored;
  } catch (error) {
    // Default to French.
  }

  initHeaderAndMenu();
  initForm();
  applyLanguage(savedLang, false);
})();
