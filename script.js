// ==========================================================
// Eldjoual storefront
// Update STORE, HERO_SLIDES and PHONES to customize the shop.
// ==========================================================
(() => {
  const STORE = {
    name: "EL DJOUAL DISTRIBUTION",
    whatsapp: "213563516895",
    commercialWhatsapp: "213563516895",
    email: "contact@eldjoual.com",
    commercialEmail: "commercial@eldjoual.com",
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
      subtitle: [
        "EL DJOUAL DISTRIBUTION est une entreprise spécialisée dans la distribution de produits de téléphonie mobile de la marque Samsung en Algérie. Depuis 2006, nous mettons notre expérience et notre connaissance du marché au service des professionnels, des entreprises et de nos partenaires commerciaux.",
        "Nous proposons une offre adaptée aux besoins du marché, un accompagnement commercial personnalisé.",
        "Forts de près de 20 ans d'expérience, nous poursuivons notre développement avec une ambition claire : renforcer notre présence sur le marché algérien et construire un réseau de distribution solide et durable, fondé sur la confiance, la proximité et la qualité de service."
      ],
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
  const TRANSLATIONS = {
    fr: {
      meta: {
        title: "EL DJOUAL DISTRIBUTION — Samsung Galaxy Algérie",
        description: "EL DJOUAL DISTRIBUTION, distributeur Samsung en Algérie. Sélection Galaxy, modèles fabriqués en Algérie, garantie 12 mois et livraison dans les 69 wilayas."
      },
      intro: {
        sub: "EL DJOUAL DISTRIBUTION <span>• Algérie</span>",
        caption: "Samsung Galaxy • Algérie",
        skip: "Passer l'intro"
      },
      nav: {
        aria: "Navigation principale",
        langAria: "Choisir la langue",
        catalogue: "Catalogue",
        accessories: "Accessoires",
        partners: "Partenaires",
        becomePartner: "Devenir partenaire",
        selection: "Sélection Galaxy",
        contact: "Contact",
        whatsapp: "WhatsApp",
        email: "E-mail",
        emailDirect: "Envoyer un e-mail",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu"
      },
      hero: {
        eyebrow: "EL DJOUAL DISTRIBUTION // ALGÉRIE",
        cta: "Entrer dans le catalogue",
        aboutBtn: "À propos de nous",
        missionLabel: "OBJECTIF // ELDJOUAL",
        checkpoints: "CHECKPOINTS",
        prevAria: "Présentation précédente",
        nextAria: "Présentation suivante",
        slideAria: "Afficher"
      },
      trust: {
        stockTitle: "Stock disponible",
        stockDesc: "Produits Samsung officiels en stock physique",
        deliveryTitle: "Livraison 69 Wilayas",
        deliveryDesc: "Expédition rapide partout en Algérie",
        replyTitle: "On vous répond !",
        replyDesc: 'Joignez-nous au <a class="ltr-num" href="tel:+213552856155">0552 85 61 55</a>',
        b2bTitle: "Tarifs B2B compétitifs",
        b2bDesc: "Prix négociés pour professionnels & revendeurs",
        warrantyTitle: "Garantie 12 mois",
        warrantyDesc: "Garantie officielle & service après-vente"
      },
      catalogue: {
        eyebrow: "Sélection Eldjoual",
        title: "Un Galaxy pour chaque idée.",
        desc: "Explorez les appareils, comparez les essentiels et trouvez celui qui vous ressemble.",
        explore: "Explorer l'appareil",
        exploreAria: "Explorer",
        orderWhatsapp: "Commander sur WhatsApp",
        orderEmail: "Demander par e-mail"
      },
      service: {
        distTitle: "Distribution nationale · 69 Wilayas",
        distDesc: "Livraison rapide et fiable partout en Algérie, au service de nos clients dans les 69 wilayas.",
        warrantyTitle: "Garantie officielle · 12 mois",
        warrantyDesc: "Vos appareils Samsung bénéficient d’une garantie officielle d’un an et d’un accompagnement dédié.",
        partnerTitle: "Distributeur Samsung Algérie",
        partnerDesc: "Un approvisionnement en produits Samsung authentiques, adapté aux besoins des professionnels et revendeurs."
      },
      sav: {
        title: "Service Après-Vente (SAV) Samsung",
        p1: "Les matériels Samsung sont garantis un an pièces et main-d'œuvre, à l'exclusion des dommages décrits dans nos Conditions Générales de Vente.",
        p2: 'Le matériel est à retourner directement au centre de réparation suivant :<br><strong>MYME TELECOMMUNICATION</strong><br>Av. des Frères Abdeslami, Kouba<br>Tél. : <span class="ltr-num">0780 10 01 00</span><br>Site : <a href="https://mymetelecom.com" target="_blank" rel="noopener noreferrer">mymetelecom.com</a>',
        p3: "Le matériel doit être retourné avec sa boîte, accompagné d'un courrier mentionnant vos coordonnées et une description de la panne."
      },
      accessories: {
        eyebrow: "ACCESSOIRES & ÉQUIPEMENTS",
        title: "Complétez votre expérience Galaxy.",
        desc: "Les essentiels Samsung pour équiper vos équipes et accompagner chaque appareil.",
        c1Title: "Écouteurs & Audio",
        c1Desc: "Écouteurs filaires, Bluetooth & Galaxy Buds",
        c2Title: "Power Banks",
        c2Desc: "Batteries externes haute capacité & charge rapide",
        c3Title: "Chargeurs & Câbles",
        c3Desc: "Adaptateurs secteur 25W/45W Super Fast Charging & câbles USB-C",
        c4Title: "Coques de protection",
        c4Desc: "Coques résistantes et élégantes pour protéger vos appareils Galaxy",
        c5Title: "Protections d’écran",
        c5Desc: "Films et verres trempés pour préserver l’écran de vos smartphones",
        cta: "Demander le catalogue accessoires",
        ctaEmail: "Demander par e-mail"
      },
      becomePartner: {
        eyebrow: "PROGRAMME PARTENAIRE B2B · 69 WILAYAS",
        title: "Devenez partenaire officiel EL DJOUAL DISTRIBUTION.",
        desc: "Rejoignez notre réseau de distribution Samsung en Algérie. Que vous soyez revendeur, distributeur régional ou entreprise à la recherche d’un fournisseur fiable depuis 2006, notre équipe commerciale vous accompagne durablement.",
        ctaPrimary: "Remplir le formulaire partenaire",
        ctaEmail: "Écrire au service commercial",
        p1Title: "Stock officiel & continuité",
        p1Desc: "Accès direct aux gammes Samsung Galaxy authentiques et accessoires certifiés avec garantie officielle 12 mois.",
        p2Title: "Conditions commerciales B2B",
        p2Desc: "Tarifs professionnels compétitifs, remises volume et devis rapides adaptés aux revendeurs et flottes d’entreprises.",
        p3Title: "Logistique nationale 69 Wilayas",
        p3Desc: "Approvisionnement sécurisé et expéditions rapides sur tout le territoire algérien, suivis par un interlocuteur dédié.",
        p4Title: "Près de 20 ans d’expertise",
        p4Desc: "Un partenaire établi depuis 2006 avec accompagnement commercial personnalisé et prise en charge SAV officielle."
      },
      partners: {
        eyebrow: "ILS NOUS FONT CONFIANCE",
        title: "Nos partenaires par secteur.",
        desc: "EL DJOUAL DISTRIBUTION accompagne les entreprises et les organisations dans leurs besoins en équipements Samsung à travers l’Algérie.",
        fAll: "Tous",
        fEnergy: "Énergie & Hydrocarbures",
        fTelecom: "Télécoms & Tech",
        fIndustry: "Industrie & Agro",
        fHealth: "Santé & Pharma",
        fMedia: "Médias"
      },
      contact: {
        eyebrow: "EL DJOUAL DISTRIBUTION · ALGÉRIE",
        title: "Un contact direct. Un réseau national.",
        status: "Livraison nationale · 69 wilayas",
        distLabel: "Distribution nationale",
        address: "Algérie<br>Livraison dans les 69 wilayas",
        gps: "Ouvrir l’itinéraire GPS",
        generalLabel: "Contact général",
        copy: "Copier",
        copied: "Copié ✓",
        copyFailed: "Copie impossible",
        salesLabel: "Service commercial",
        whatsapp: "Discuter sur WhatsApp maintenant",
        emailBtn: "Envoyer un e-mail directement",
        mapSubtitle: "Distributeur Samsung · Algérie",
        mapBtn: "Y aller avec Google Maps"
      },
      modal: {
        closeDetail: "Fermer les détails",
        closePromo: "Fermer la sélection",
        orderWhatsapp: "Demander un devis / Commander sur WhatsApp",
        orderEmail: "Demander par e-mail"
      },
      promo: {
        eyebrow: "À la une chez Eldjoual",
        title: "La sélection Galaxy.",
        cta: "Demander un devis",
        ctaEmail: "Demander par e-mail"
      },
      emailModal: {
        close: "Fermer la fenêtre e-mail",
        eyebrow: "CONTACT DIRECT PAR E-MAIL",
        title: "Envoyer un e-mail.",
        toLabel: "Destinataire :",
        subjectLabel: "Objet",
        bodyLabel: "Message",
        openGmail: "Envoyer via Gmail",
        openOutlook: "Envoyer via Outlook",
        openDefault: "App E-mail (mailto)"
      },
      aboutModal: {
        close: "Fermer À propos de nous",
        eyebrow: "À PROPOS DE NOUS · DEPUIS 2006",
        title: "EL DJOUAL DISTRIBUTION.",
        lead: "Distributeur spécialisé en téléphonie mobile Samsung en Algérie depuis près de 20 ans.",
        stat1: "Près de 20 ans d’expérience",
        stat2: "Wilayas desservies",
        stat3Val: "12 mois",
        stat3: "Garantie officielle & SAV",
        p1: "EL DJOUAL DISTRIBUTION est une entreprise spécialisée dans la distribution de produits de téléphonie mobile de la marque Samsung en Algérie. Depuis 2006, nous mettons notre expérience et notre connaissance du marché au service des professionnels, des entreprises et de nos partenaires commerciaux.",
        p2: "Nous proposons une offre adaptée aux besoins du marché, un accompagnement commercial personnalisé et un approvisionnement fiable en appareils Galaxy authentiques et accessoires officiels.",
        p3: "Forts de près de 20 ans d'expérience, nous poursuivons notre développement avec une ambition claire : renforcer notre présence sur le marché algérien et construire un réseau de distribution solide et durable, fondé sur la confiance, la proximité et la qualité de service.",
        v1: "Confiance",
        v2: "Proximité",
        v3: "Qualité de service",
        ctaPartner: "Devenir partenaire",
        ctaEmail: "Nous écrire par e-mail",
        ctaCatalogue: "Voir le catalogue"
      },
      footer: {
        tagline: "Distributeur Samsung en Algérie · Garantie 12 mois · Livraison 69 Wilayas.",
        attribution: 'Logo Samsung : <a href="https://commons.wikimedia.org/wiki/File:Samsung_Orig_Wordmark_BLACK_RGB.png" target="_blank" rel="noopener noreferrer">Samsung, via Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a> (couleurs adaptées).',
        explore: "Explorer",
        follow: "Suivez-nous",
        replay: "Revoir l'intro"
      },
      whatsapp: {
        nav: `Bonjour ${STORE.name}, j'ai une question.`,
        accessories: `Bonjour ${STORE.name}, je souhaite recevoir le catalogue accessoires.`,
        contact: `Bonjour ${STORE.name}, je souhaite obtenir des renseignements sur vos smartphones Samsung.`,
        footer: `Bonjour ${STORE.name}, j'aimerais vous contacter.`,
        phoneOrder: model => `Bonjour ${STORE.name}, je souhaite demander un devis et commander le ${model}.`,
        phoneQuote: model => `Bonjour ${STORE.name}, je souhaite demander un devis pour le ${model}.`
      },
      email: {
        generalSubject: `Demande d'information — ${STORE.name}`,
        generalBody: `Bonjour ${STORE.name},\n\nJe souhaite obtenir des informations sur vos produits Samsung Galaxy.\n\nCordialement,`,
        accessoriesSubject: `Demande du catalogue accessoires — ${STORE.name}`,
        accessoriesBody: `Bonjour ${STORE.name},\n\nJe souhaite recevoir votre catalogue accessoires Samsung ainsi que vos conditions tarifaires.\n\nCordialement,`,
        partnerSubject: `Demande de partenariat B2B — ${STORE.name}`,
        partnerBody: `Bonjour ${STORE.name},\n\nJe souhaite devenir partenaire commercial / revendeur.\n\nCordialement,`,
        phoneSubject: model => `Demande de devis — ${model}`,
        phoneBody: model => `Bonjour ${STORE.name},\n\nJe souhaite demander un devis et connaître la disponibilité pour le ${model}.\n\nCordialement,`
      },
      specLabels: {
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
      },
      sectorLabels: {
        energy: "Énergie & Hydrocarbures",
        telecom: "Télécoms & Tech",
        industry: "Industrie & Agro",
        health: "Santé & Pharma",
        media: "Médias"
      },
      slides: [
        {
          progressLabel: "DISTRIBUTEUR",
          kicker: "DISTRIBUTEUR OFFICIEL SAMSUNG ALGÉRIE",
          title: "EL DJOUAL DISTRIBUTION",
          subtitle: [
            "EL DJOUAL DISTRIBUTION est une entreprise spécialisée dans la distribution de produits de téléphonie mobile de la marque Samsung en Algérie. Depuis 2006, nous mettons notre expérience et notre connaissance du marché au service des professionnels, des entreprises et de nos partenaires commerciaux.",
            "Nous proposons une offre adaptée aux besoins du marché, un accompagnement commercial personnalisé.",
            "Forts de près de 20 ans d'expérience, nous poursuivons notre développement avec une ambition claire : renforcer notre présence sur le marché algérien et construire un réseau de distribution solide et durable, fondé sur la confiance, la proximité et la qualité de service."
          ],
          mission: "DISTRIBUTION NATIONALE • GARANTIE 12 MOIS • DEVIS SUR WHATSAPP ↗",
          loadLabel: "DISTRIBUTEUR OFFICIEL // ALGÉRIE"
        },
        {
          progressLabel: "GAMME GALAXY A",
          kicker: "SMARTPHONES SAMSUNG",
          title: "GAMME GALAXY A",
          subtitle: "A37 5G, A26 5G, A18, A17, A08, A07s, A07 • Garantie 12 Mois",
          mission: "SEPT MODÈLES GALAXY A • GARANTIE 12 MOIS",
          loadLabel: "GALAXY A // 7 MODÈLES"
        },
        {
          progressLabel: "69 WILAYAS",
          kicker: "LIVRAISON & APPROVISIONNEMENT B2B",
          title: "DISTRIBUTION NATIONALE",
          subtitle: "Livraison & Approvisionnement B2B sur 69 Wilayas",
          mission: "APPROVISIONNEMENT B2B • LIVRAISON NATIONALE ↗",
          loadLabel: "RÉSEAU NATIONAL // 69 WILAYAS"
        },
        {
          progressLabel: "ACCESSOIRES",
          kicker: "ÉQUIPEZ VOTRE QUOTIDIEN",
          title: "ACCESSOIRES ORIGINAUX",
          subtitle: "Écouteurs, Power Banks & Chargeurs Rapides",
          mission: "AUDIO • POWER BANKS • CHARGEURS RAPIDES",
          loadLabel: "ACCESSOIRES // GALAXY"
        }
      ],
      phones: {}
    },
    en: {
      meta: {
        title: "EL DJOUAL DISTRIBUTION — Samsung Galaxy Algeria",
        description: "EL DJOUAL DISTRIBUTION, Samsung distributor in Algeria. Galaxy lineup, models made in Algeria, 12-month warranty and delivery across all 69 wilayas."
      },
      intro: {
        sub: "EL DJOUAL DISTRIBUTION <span>• Algeria</span>",
        caption: "Samsung Galaxy • Algeria",
        skip: "Skip intro"
      },
      nav: {
        aria: "Main navigation",
        langAria: "Choose language",
        catalogue: "Catalogue",
        accessories: "Accessories",
        partners: "Partners",
        becomePartner: "Become a partner",
        selection: "Galaxy Lineup",
        contact: "Contact",
        whatsapp: "WhatsApp",
        email: "Email",
        emailDirect: "Send an email",
        openMenu: "Open menu",
        closeMenu: "Close menu"
      },
      hero: {
        eyebrow: "EL DJOUAL DISTRIBUTION // ALGERIA",
        cta: "Explore the catalogue",
        aboutBtn: "About us",
        missionLabel: "MISSION // ELDJOUAL",
        checkpoints: "CHECKPOINTS",
        prevAria: "Previous slide",
        nextAria: "Next slide",
        slideAria: "Show"
      },
      trust: {
        stockTitle: "In-stock availability",
        stockDesc: "Official Samsung products held in physical stock",
        deliveryTitle: "69 Wilayas Delivery",
        deliveryDesc: "Fast shipping across all of Algeria",
        replyTitle: "We’re here to help!",
        replyDesc: 'Reach us at <a class="ltr-num" href="tel:+213552856155">0552 85 61 55</a>',
        b2bTitle: "Competitive B2B Rates",
        b2bDesc: "Negotiated pricing for businesses & resellers",
        warrantyTitle: "12-Month Warranty",
        warrantyDesc: "Official warranty & after-sales service"
      },
      catalogue: {
        eyebrow: "Eldjoual Selection",
        title: "A Galaxy for every idea.",
        desc: "Explore the lineup, compare key specs, and find the device built for your needs.",
        explore: "Explore device",
        exploreAria: "Explore",
        orderWhatsapp: "Order on WhatsApp",
        orderEmail: "Request by email"
      },
      service: {
        distTitle: "Nationwide Distribution · 69 Wilayas",
        distDesc: "Fast, reliable delivery across Algeria, serving clients in all 69 wilayas.",
        warrantyTitle: "Official Warranty · 12 Months",
        warrantyDesc: "Your Samsung devices come with an official one-year warranty and dedicated support.",
        partnerTitle: "Samsung Distributor in Algeria",
        partnerDesc: "Authentic Samsung product supply tailored to the needs of businesses and resellers."
      },
      sav: {
        title: "Samsung After-Sales Service (SAV)",
        p1: "Samsung hardware is covered by a one-year parts and labor warranty, excluding damages described in our General Terms and Conditions of Sale.",
        p2: 'Devices must be returned directly to the following authorized repair center:<br><strong>MYME TELECOMMUNICATION</strong><br>Av. des Frères Abdeslami, Kouba<br>Tel: <span class="ltr-num">0780 10 01 00</span><br>Website: <a href="https://mymetelecom.com" target="_blank" rel="noopener noreferrer">mymetelecom.com</a>',
        p3: "Equipment must be returned in its original box along with a note including your contact details and a description of the issue."
      },
      accessories: {
        eyebrow: "ACCESSORIES & EQUIPMENT",
        title: "Complete your Galaxy experience.",
        desc: "Essential Samsung accessories to equip your teams and accompany every device.",
        c1Title: "Earphones & Audio",
        c1Desc: "Wired earphones, Bluetooth headsets & Galaxy Buds",
        c2Title: "Power Banks",
        c2Desc: "High-capacity external batteries & fast charging",
        c3Title: "Chargers & Cables",
        c3Desc: "25W/45W Super Fast Charging adapters & USB-C cables",
        c4Title: "Protective Cases",
        c4Desc: "Durable, sleek cases to protect your Galaxy devices",
        c5Title: "Screen Protectors",
        c5Desc: "Protective films and tempered glass to safeguard your screens",
        cta: "Request the accessories catalogue",
        ctaEmail: "Request by email"
      },
      becomePartner: {
        eyebrow: "B2B PARTNER PROGRAM · 69 WILAYAS",
        title: "Become an official EL DJOUAL DISTRIBUTION partner.",
        desc: "Join our Samsung distribution network in Algeria. Whether you are a reseller, regional distributor, or enterprise looking for a trusted supplier since 2006, our sales team is here to support your growth.",
        ctaPrimary: "Fill out the partner form",
        ctaEmail: "Email our sales team",
        p1Title: "Official stock & continuity",
        p1Desc: "Direct access to authentic Samsung Galaxy lineups and certified accessories with an official 12-month warranty.",
        p2Title: "B2B commercial terms",
        p2Desc: "Competitive trade pricing, volume discounts, and fast quotes tailored to resellers and corporate fleets.",
        p3Title: "69 Wilayas logistics",
        p3Desc: "Reliable supply and fast shipping across all of Algeria, supported by a dedicated account contact.",
        p4Title: "Nearly 20 years of expertise",
        p4Desc: "An established partner since 2006 providing personalized commercial support and official after-sales service."
      },
      partners: {
        eyebrow: "TRUSTED BY LEADERS",
        title: "Our partners by sector.",
        desc: "EL DJOUAL DISTRIBUTION supports companies and organizations across Algeria with their Samsung equipment needs.",
        fAll: "All",
        fEnergy: "Energy & Oil/Gas",
        fTelecom: "Telecoms & Tech",
        fIndustry: "Industry & Agri-Food",
        fHealth: "Health & Pharma",
        fMedia: "Media"
      },
      contact: {
        eyebrow: "EL DJOUAL DISTRIBUTION · ALGERIA",
        title: "Direct contact. A nationwide network.",
        status: "Nationwide delivery · 69 wilayas",
        distLabel: "Nationwide distribution",
        address: "Algeria<br>Delivery across all 69 wilayas",
        gps: "Open GPS directions",
        generalLabel: "General inquiries",
        copy: "Copy",
        copied: "Copied ✓",
        copyFailed: "Copy failed",
        salesLabel: "Sales department",
        whatsapp: "Chat on WhatsApp now",
        emailBtn: "Send an email directly",
        mapSubtitle: "Samsung Distributor · Algeria",
        mapBtn: "Open in Google Maps"
      },
      modal: {
        closeDetail: "Close details",
        closePromo: "Close selection",
        orderWhatsapp: "Request a quote / Order on WhatsApp",
        orderEmail: "Request by email"
      },
      promo: {
        eyebrow: "Featured at Eldjoual",
        title: "The Galaxy Lineup.",
        cta: "Request a quote",
        ctaEmail: "Request by email"
      },
      emailModal: {
        close: "Close email dialog",
        eyebrow: "DIRECT EMAIL CONTACT",
        title: "Send an email.",
        toLabel: "Recipient:",
        subjectLabel: "Subject",
        bodyLabel: "Message",
        openGmail: "Send via Gmail",
        openOutlook: "Send via Outlook",
        openDefault: "Mail App (mailto)"
      },
      aboutModal: {
        close: "Close About Us",
        eyebrow: "ABOUT US · SINCE 2006",
        title: "EL DJOUAL DISTRIBUTION.",
        lead: "Specialized Samsung mobile distributor in Algeria with nearly 20 years of experience.",
        stat1: "Nearly 20 years of expertise",
        stat2: "Wilayas covered nationwide",
        stat3Val: "12 mos",
        stat3: "Official warranty & SAV",
        p1: "EL DJOUAL DISTRIBUTION specializes in distributing Samsung mobile phones in Algeria. Since 2006, we have put our expertise and deep market knowledge at the service of professionals, businesses, and our commercial partners.",
        p2: "We provide an offering tailored to market needs, personalized commercial support, and reliable supply of authentic Galaxy smartphones and official accessories.",
        p3: "Backed by nearly 20 years of experience, we continue our growth with a clear ambition: strengthening our presence in the Algerian market and building a solid, lasting distribution network founded on trust, proximity, and quality of service.",
        v1: "Trust",
        v2: "Proximity",
        v3: "Service quality",
        ctaPartner: "Become a partner",
        ctaEmail: "Email us directly",
        ctaCatalogue: "View catalogue"
      },
      footer: {
        tagline: "Samsung Distributor in Algeria · 12-Month Warranty · Delivery across 69 Wilayas.",
        attribution: 'Samsung Logo: <a href="https://commons.wikimedia.org/wiki/File:Samsung_Orig_Wordmark_BLACK_RGB.png" target="_blank" rel="noopener noreferrer">Samsung, via Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a> (adapted colors).',
        explore: "Explore",
        follow: "Follow us",
        replay: "Replay intro"
      },
      whatsapp: {
        nav: `Hello ${STORE.name}, I have a question.`,
        accessories: `Hello ${STORE.name}, I would like to request the accessories catalogue.`,
        contact: `Hello ${STORE.name}, I would like information about your Samsung smartphones.`,
        footer: `Hello ${STORE.name}, I would like to get in touch.`,
        phoneOrder: model => `Hello ${STORE.name}, I would like to request a quote and order the ${model}.`,
        phoneQuote: model => `Hello ${STORE.name}, I would like to request a quote for the ${model}.`
      },
      email: {
        generalSubject: `Inquiry — ${STORE.name}`,
        generalBody: `Hello ${STORE.name},\n\nI would like to request information about your Samsung Galaxy products.\n\nBest regards,`,
        accessoriesSubject: `Accessories catalogue request — ${STORE.name}`,
        accessoriesBody: `Hello ${STORE.name},\n\nI would like to receive your Samsung accessories catalogue and pricing details.\n\nBest regards,`,
        partnerSubject: `B2B Partnership Inquiry — ${STORE.name}`,
        partnerBody: `Hello ${STORE.name},\n\nI would like to become a commercial partner / reseller.\n\nBest regards,`,
        phoneSubject: model => `Quote request — ${model}`,
        phoneBody: model => `Hello ${STORE.name},\n\nI would like to request a quote and availability for the ${model}.\n\nBest regards,`
      },
      specLabels: {
        screen: "Display",
        chip: "Chipset",
        camera: "Camera",
        battery: "Battery",
        storage: "Storage",
        network: "Network",
        condition: "Condition",
        feature: "Features",
        protection: "Protection",
        updates: "Updates",
        warranty: "Warranty",
        origin: "Origin",
        memory: "Memory & storage",
        connectivity: "Connectivity",
        software: "Software"
      },
      sectorLabels: {
        energy: "Energy & Oil/Gas",
        telecom: "Telecoms & Tech",
        industry: "Industry & Agri-Food",
        health: "Health & Pharma",
        media: "Media"
      },
      slides: [
        {
          progressLabel: "DISTRIBUTOR",
          kicker: "OFFICIAL SAMSUNG DISTRIBUTOR IN ALGERIA",
          title: "EL DJOUAL DISTRIBUTION",
          subtitle: [
            "EL DJOUAL DISTRIBUTION specializes in distributing Samsung mobile phones in Algeria. Since 2006, we have put our expertise and deep market knowledge at the service of professionals, businesses, and our commercial partners.",
            "We provide an offering tailored to market needs along with personalized commercial support.",
            "Backed by nearly 20 years of experience, we continue our growth with a clear ambition: strengthening our presence in the Algerian market and building a solid, lasting distribution network founded on trust, proximity, and quality of service."
          ],
          mission: "NATIONWIDE DISTRIBUTION • 12-MONTH WARRANTY • WHATSAPP QUOTES ↗",
          loadLabel: "OFFICIAL DISTRIBUTOR // ALGERIA"
        },
        {
          progressLabel: "GALAXY A SERIES",
          kicker: "SAMSUNG SMARTPHONES",
          title: "GALAXY A SERIES",
          subtitle: "A37 5G, A26 5G, A18, A17, A08, A07s, A07 • 12-Month Warranty",
          mission: "SEVEN GALAXY A MODELS • 12-MONTH WARRANTY",
          loadLabel: "GALAXY A // 7 MODELS"
        },
        {
          progressLabel: "69 WILAYAS",
          kicker: "B2B DELIVERY & SUPPLY",
          title: "NATIONWIDE DISTRIBUTION",
          subtitle: "B2B Delivery & Supply across all 69 Wilayas",
          mission: "B2B SUPPLY • NATIONWIDE DELIVERY ↗",
          loadLabel: "NATIONAL NETWORK // 69 WILAYAS"
        },
        {
          progressLabel: "ACCESSORIES",
          kicker: "EQUIP YOUR EVERYDAY",
          title: "ORIGINAL ACCESSORIES",
          subtitle: "Earphones, Power Banks & Super Fast Chargers",
          mission: "AUDIO • POWER BANKS • FAST CHARGERS",
          loadLabel: "ACCESSORIES // GALAXY"
        }
      ],
      phones: {
        "a26-5g": {
          badge: "12-MONTH WARRANTY · GALAXY A26 5G",
          condition: "New · 12-month warranty",
          price: "Price on request",
          summary: "A smooth Super AMOLED display, 5G speed, and an OIS camera built for everyday performance.",
          specs: {
            screen: '6.7" FHD+ Super AMOLED · 120 Hz',
            chip: "Exynos 1380",
            camera: "50 MP OIS + 8 MP ultra-wide + 2 MP macro",
            battery: "5,000 mAh · 25 W charging",
            storage: "128 GB or 256 GB · microSD",
            network: "5G",
            protection: "IP67",
            updates: "Up to 6 Android generations",
            warranty: "12-month warranty"
          }
        },
        "a17": {
          badge: "12-MONTH WARRANTY · GALAXY A17",
          condition: "New · 12-month warranty",
          price: "Price on request",
          summary: "A large Super AMOLED display, long-lasting battery, and the everyday Galaxy essentials.",
          specs: {
            screen: '6.7" FHD+ Super AMOLED · 90 Hz',
            chip: "MediaTek Helio G99 (4G version)",
            camera: "50 MP + 5 MP ultra-wide + 2 MP macro",
            battery: "5,000 mAh · 25 W charging",
            storage: "128 GB or 256 GB · microSD",
            network: "4G LTE",
            protection: "IP54",
            updates: "Up to 6 Android generations",
            warranty: "12-month warranty"
          }
        },
        "a07": {
          badge: "12-MONTH WARRANTY · GALAXY A07",
          condition: "New · 12-month warranty",
          price: "Price on request",
          summary: "An accessible Galaxy with a large 90 Hz screen and dependable 5,000 mAh battery life.",
          specs: {
            screen: '6.7" HD+ PLS LCD · 90 Hz',
            chip: "MediaTek Helio G99",
            camera: "50 MP + 2 MP depth",
            battery: "5,000 mAh · 25 W charging",
            storage: "64 GB or 128 GB · microSD",
            network: "4G LTE",
            protection: "IP54",
            updates: "Up to 6 Android generations",
            warranty: "12-month warranty"
          }
        },
        "a37-5g": {
          badge: "MADE IN ALGERIA · 12-MONTH WARRANTY",
          condition: "New · 12-month warranty",
          price: "Price on request",
          summary: "120 Hz Super AMOLED display, Exynos performance, and IP68 durability with 5G connectivity.",
          specs: {
            screen: '6.7" FHD+ Super AMOLED · 120 Hz · 1,900 nits · Gorilla Glass Victus+',
            chip: "Exynos 1480 (4 nm)",
            memory: "6/8/12 GB RAM · 128/256 GB UFS 3.1",
            camera: "50 MP OIS + 8 MP ultra-wide + 5 MP · 12 MP selfie · 4K video",
            battery: "5,000 mAh · 45 W charging",
            protection: "IP68",
            network: "5G · eSIM",
            software: "Android 16 · One UI 8.5",
            updates: "6 years of updates",
            origin: "Made in Algeria",
            warranty: "12-month warranty"
          }
        },
        "a18": {
          badge: "MADE IN ALGERIA · 12-MONTH WARRANTY",
          condition: "New · 12-month warranty",
          price: "Price on request",
          summary: "Large Super AMOLED screen, octa-core processor, and practical features for daily work.",
          specs: {
            screen: '6.7" FHD+ Super AMOLED · 90 Hz · Gorilla Glass 3',
            chip: "Octa-core 6 nm · MediaTek Helio G99+",
            memory: "4/6/8 GB RAM · 128/256 GB",
            camera: "50 MP + 5 MP ultra-wide + 2 MP · 13 MP selfie",
            battery: "5,000 mAh · 25 W charging",
            protection: "IP64",
            connectivity: "NFC",
            software: "Android 17 · One UI 9",
            updates: "6 years of updates",
            origin: "Made in Algeria",
            warranty: "12-month warranty"
          }
        },
        "a08": {
          badge: "MADE IN ALGERIA · 12-MONTH WARRANTY",
          condition: "New · 12-month warranty",
          price: "Price on request",
          summary: "Large 90 Hz display, dual camera, and high-capacity battery built to last.",
          specs: {
            screen: '6.7" HD+ PLS LCD · 90 Hz',
            chip: "MediaTek Helio G99+ (6 nm)",
            memory: "4/6 GB RAM · 64/128 GB · microSD",
            camera: "50 MP + 2 MP · 8 MP selfie",
            battery: "6,000 mAh · 25 W charging",
            protection: "IP64",
            software: "Android 17 · One UI 9",
            updates: "6 years of updates",
            origin: "Made in Algeria",
            warranty: "12-month warranty"
          }
        },
        "a07s": {
          badge: "MADE IN ALGERIA · 12-MONTH WARRANTY",
          condition: "New · 12-month warranty",
          price: "Price on request",
          summary: "An accessible Galaxy experience with a 90 Hz screen and expandable storage.",
          specs: {
            screen: '6.7" HD+ PLS LCD · 90 Hz',
            chip: "MediaTek Helio G99+ (6 nm)",
            memory: "4/6 GB RAM · 64/128 GB · microSD",
            camera: "50 MP + 2 MP · 8 MP selfie",
            battery: "5,000 mAh · 25 W charging",
            protection: "IP54",
            software: "Android 16 · One UI 8.5",
            updates: "6 years of updates",
            origin: "Made in Algeria",
            warranty: "12-month warranty"
          }
        }
      }
    },
    ar: {
      meta: {
        title: "EL DJOUAL DISTRIBUTION — موزع سامسونج غالاكسي في الجزائر",
        description: "EL DJOUAL DISTRIBUTION، موزع سامسونج في الجزائر. تشكيلة Galaxy، موديلات مصنوعة في الجزائر، ضمان 12 شهراً وتوصيل إلى 69 ولاية."
      },
      intro: {
        sub: "EL DJOUAL DISTRIBUTION <span>• الجزائر</span>",
        caption: "سامسونج غالاكسي • الجزائر",
        skip: "تخطي المقدمة"
      },
      nav: {
        aria: "القائمة الرئيسية",
        langAria: "اختر اللغة",
        catalogue: "الكتالوج",
        accessories: "الإكسسوارات",
        partners: "شركاؤنا",
        becomePartner: "كن شريكاً لنا",
        selection: "تشكيلة Galaxy",
        contact: "اتصل بنا",
        whatsapp: "واتساب",
        email: "البريد",
        emailDirect: "إرسال بريد إلكتروني",
        openMenu: "فتح القائمة",
        closeMenu: "إغلاق القائمة"
      },
      hero: {
        eyebrow: "EL DJOUAL DISTRIBUTION // الجزائر",
        cta: "تصفح الكتالوج",
        aboutBtn: "من نحن",
        missionLabel: "الهدف // الجوال للتوزيع",
        checkpoints: "المحطات",
        prevAria: "الشريحة السابقة",
        nextAria: "الشريحة التالية",
        slideAria: "عرض"
      },
      trust: {
        stockTitle: "مخزون متوفر",
        stockDesc: "منتجات سامسونج أصلية متوفرة في المخزون",
        deliveryTitle: "التوصيل إلى 69 ولاية",
        deliveryDesc: "شحن سريع وموثوق عبر كامل التراب الوطني",
        replyTitle: "نحن في خدمتكم!",
        replyDesc: 'تواصلوا معنا على <a class="ltr-num" href="tel:+213552856155">0552 85 61 55</a>',
        b2bTitle: "أسعار B2B تنافسية",
        b2bDesc: "أسعار مدروسة للمحترفين والشركات والموزعين",
        warrantyTitle: "ضمان 12 شهراً",
        warrantyDesc: "ضمان رسمي وخدمة ما بعد البيع معتمدة"
      },
      catalogue: {
        eyebrow: "تشكيلة الجوال",
        title: "هاتف Galaxy لكل احتياج.",
        desc: "استكشف الأجهزة، قارن المواصفات الأساسية، واختر الهاتف الأنسب لعملك ويومياتك.",
        explore: "استكشف الجهاز",
        exploreAria: "استكشاف",
        orderWhatsapp: "اطلب عبر واتساب",
        orderEmail: "اطلب عبر البريد"
      },
      service: {
        distTitle: "توزيع وطني · 69 ولاية",
        distDesc: "توصيل سريع وموثوق في كافة أنحاء الجزائر لخدمة عملائنا عبر 69 ولاية.",
        warrantyTitle: "ضمان رسمي · 12 شهراً",
        warrantyDesc: "تتمتع أجهزتكم من سامسونج بضمان رسمي لمدة سنة كاملة ومرافقة مخصصة.",
        partnerTitle: "موزع سامسونج في الجزائر",
        partnerDesc: "تموين بمنتجات سامسونج أصلية مصمم لتلبية احتياجات الشركات والموزعين."
      },
      sav: {
        title: "خدمة ما بعد البيع (SAV) سامسونج",
        p1: "أجهزة سامسونج مضمونة لمدة سنة كاملة (قطع الغيار واليد العاملة)، باستثناء الأضرار الموضحة في شروط البيع العامة.",
        p2: 'يُرجى إرجاع الجهاز مباشرة إلى مركز الصيانة المعتمد التالي:<br><strong>MYME TELECOMMUNICATION</strong><br>شارع الإخوة عبد السلامي، القبة<br>الهاتف: <span class="ltr-num">0780 10 01 00</span><br>الموقع: <a href="https://mymetelecom.com" target="_blank" rel="noopener noreferrer">mymetelecom.com</a>',
        p3: "يجب إرجاع الجهاز في علبته الأصلية مرفقاً برسالة تتضمن بيانات الاتصال الخاصة بكم ووصفاً للعطل."
      },
      accessories: {
        eyebrow: "الإكسسوارات والتجهيزات",
        title: "أكمل تجربة Galaxy الخاصة بك.",
        desc: "أساسيات سامسونج لتجهيز فرقكم ومرافقة كل جهاز بأفضل أداء وحماية.",
        c1Title: "سماعات وصوتيات",
        c1Desc: "سماعات سلكية، بلوتوث و Galaxy Buds",
        c2Title: "بطاريات خارجية (Power Banks)",
        c2Desc: "بطاريات احتياطية عالية السعة مع شحن سريع",
        c3Title: "شواحن وكوابل",
        c3Desc: "محولات شحن فائق السرعة 25W/45W وكوابل USB-C",
        c4Title: "أغطية الحماية",
        c4Desc: "أغطية متينة وأنيقة لحماية أجهزة Galaxy الخاصة بكم",
        c5Title: "واقيات الشاشة",
        c5Desc: "أفلام وزجاج مقوى للحفاظ على شاشات هواتفكم الذكية",
        cta: "اطلب كتالوج الإكسسوارات",
        ctaEmail: "اطلب عبر البريد الإلكتروني"
      },
      becomePartner: {
        eyebrow: "برنامج الشراكة B2B · 69 ولاية",
        title: "كن شريكاً رسمياً لـ EL DJOUAL DISTRIBUTION.",
        desc: "انضم إلى شبكة توزيع سامسونج في الجزائر. سواء كنت بائع تجزئة، موزعاً جهوياً أو شركة تبحث عن مموّن موثوق منذ عام 2006، فريقنا التجاري يرافقك بثقة واستمرارية.",
        ctaPrimary: "املأ استمارة الشراكة",
        ctaEmail: "راسل المصلحة التجارية",
        p1Title: "مخزون رسمي واستمرارية",
        p1Desc: "وصول مباشر إلى تشكيلة سامسونج Galaxy الأصلية والإكسسوارات المعتمدة مع ضمان رسمي لمدة 12 شهراً.",
        p2Title: "شروط تجارية B2B مميزة",
        p2Desc: "أسعار تنافسية للمحترفين، تخفيضات للكميات وعروض أسعار سريعة للموزعين وأساطيل الشركات.",
        p3Title: "لوجستيك وطني عبر 69 ولاية",
        p3Desc: "تموين آمن وشحن سريع إلى كافة أنحاء التراب الجزائري مع متابعة من مستشار تجاري مخصص.",
        p4Title: "قرابة 20 عاماً من الخبرة",
        p4Desc: "شريك راسخ منذ 2006 يوفر مرافقة تجارية مخصصة وخدمة ما بعد البيع رسمية."
      },
      partners: {
        eyebrow: "يثقون بنا",
        title: "شركاؤنا حسب القطاع.",
        desc: "ترافق EL DJOUAL DISTRIBUTION الشركات والمؤسسات في تلبية احتياجاتها من تجهيزات سامسونج عبر كامل الجزائر.",
        fAll: "الكل",
        fEnergy: "الطاقة والمحروقات",
        fTelecom: "الاتصالات والتكنولوجيا",
        fIndustry: "الصناعة والأغذية",
        fHealth: "الصحة والصيدلة",
        fMedia: "الإعلام"
      },
      contact: {
        eyebrow: "EL DJOUAL DISTRIBUTION · الجزائر",
        title: "تواصل مباشر. شبكة وطنية.",
        status: "توصيل وطني · 69 ولاية",
        distLabel: "التوزيع الوطني",
        address: "الجزائر<br>التوصيل إلى 69 ولاية",
        gps: "فتح المسار عبر GPS",
        generalLabel: "الاتصال العام",
        copy: "نسخ",
        copied: "تم النسخ ✓",
        copyFailed: "تعذر النسخ",
        salesLabel: "المصلحة التجارية",
        whatsapp: "تحدث معنا عبر واتساب الآن",
        emailBtn: "إرسال بريد إلكتروني مباشرة",
        mapSubtitle: "موزع سامسونج · الجزائر",
        mapBtn: "افتح في خرائط جوجل"
      },
      modal: {
        closeDetail: "إغلاق التفاصيل",
        closePromo: "إغلاق التشكيلة",
        orderWhatsapp: "اطلب عرض سعر / اطلب عبر واتساب",
        orderEmail: "اطلب عبر البريد الإلكتروني"
      },
      promo: {
        eyebrow: "المميز لدى الجوال",
        title: "تشكيلة Galaxy.",
        cta: "اطلب عرض سعر",
        ctaEmail: "اطلب عبر البريد"
      },
      emailModal: {
        close: "إغلاق نافذة البريد",
        eyebrow: "التواصل المباشر عبر البريد الإلكتروني",
        title: "إرسال بريد إلكتروني.",
        toLabel: "المستلم:",
        subjectLabel: "الموضوع",
        bodyLabel: "الرسالة",
        openGmail: "إرسال عبر Gmail",
        openOutlook: "إرسال عبر Outlook",
        openDefault: "تطبيق البريد (mailto)"
      },
      aboutModal: {
        close: "إغلاق نافذة من نحن",
        eyebrow: "من نحن · منذ 2006",
        title: "EL DJOUAL DISTRIBUTION.",
        lead: "موزع متخصص في هواتف سامسونج الذكية في الجزائر بخبرة تقارب 20 عاماً.",
        stat1: "قرابة 20 عاماً من الخبرة",
        stat2: "ولاية مغطاة بالتوصيل الوطني",
        stat3Val: "12 شهراً",
        stat3: "ضمان رسمي وخدمة ما بعد البيع",
        p1: "تُعد EL DJOUAL DISTRIBUTION شركة متخصصة في توزيع منتجات الهواتف المحمولة من علامة سامسونج في الجزائر. منذ عام 2006، نضع خبرتنا ومعرفتنا العميقة بالسوق في خدمة المهنيين والشركات وشركائنا التجاريين.",
        p2: "نقدم عرضاً متكيفاً مع احتياجات السوق، مرافقة تجارية مخصصة، وتمويناً موثوقاً بأجهزة Galaxy الأصلية والإكسسوارات الرسمية.",
        p3: "بفضل ما يقارب 20 عاماً من الخبرة، نواصل تطورنا بطموح واضح: تعزيز حضورنا في السوق الجزائرية وبناء شبكة توزيع قوية ومستدامة، تقوم على الثقة والقرب وجودة الخدمة.",
        v1: "الثقة",
        v2: "القرب من العميل",
        v3: "جودة الخدمة",
        ctaPartner: "كن شريكاً لنا",
        ctaEmail: "راسلنا عبر البريد الإلكتروني",
        ctaCatalogue: "تصفح الكتالوج"
      },
      footer: {
        tagline: "موزع سامسونج في الجزائر · ضمان 12 شهراً · توصيل إلى 69 ولاية.",
        attribution: 'شعار سامسونج: <a href="https://commons.wikimedia.org/wiki/File:Samsung_Orig_Wordmark_BLACK_RGB.png" target="_blank" rel="noopener noreferrer">Samsung عبر Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a> (ألوان معدّلة).',
        explore: "استكشاف",
        follow: "تابعونا",
        replay: "إعادة عرض المقدمة"
      },
      whatsapp: {
        nav: `مرحباً ${STORE.name}، لدي استفسار.`,
        accessories: `مرحباً ${STORE.name}، أود الحصول على كتالوج الإكسسوارات.`,
        contact: `مرحباً ${STORE.name}، أرغب في الحصول على معلومات حول هواتف سامسونج.`,
        footer: `مرحباً ${STORE.name}، أود التواصل معكم.`,
        phoneOrder: model => `مرحباً ${STORE.name}، أود طلب عرض سعر وطلب هاتف ${model}.`,
        phoneQuote: model => `مرحباً ${STORE.name}، أود طلب عرض سعر لهاتف ${model}.`
      },
      email: {
        generalSubject: `استفسار — ${STORE.name}`,
        generalBody: `مرحباً ${STORE.name}،\n\nأرغب في الحصول على معلومات حول منتجات سامسونج غالاكسي.\n\nمع التحية،`,
        accessoriesSubject: `طلب كتالوج الإكسسوارات — ${STORE.name}`,
        accessoriesBody: `مرحباً ${STORE.name}،\n\nأود استلام كتالوج إكسسوارات سامسونج والأسعار التجارية.\n\nمع التحية،`,
        partnerSubject: `طلب شراكة تجارية B2B — ${STORE.name}`,
        partnerBody: `مرحباً ${STORE.name}،\n\nأرغب في أن أصبح شريكاً تجارياً / موزعاً معكم.\n\nمع التحية،`,
        phoneSubject: model => `طلب عرض سعر — ${model}`,
        phoneBody: model => `مرحباً ${STORE.name}،\n\nأود طلب عرض سعر ومعرفة توفر هاتف ${model}.\n\nمع التحية،`
      },
      specLabels: {
        screen: "الشاشة",
        chip: "المعالج",
        camera: "الكاميرا",
        battery: "البطارية",
        storage: "التخزين",
        network: "الشبكة",
        condition: "الحالة",
        feature: "الميزات",
        protection: "الحماية",
        updates: "التحديثات",
        warranty: "الضمان",
        origin: "بلد الصنع",
        memory: "الذاكرة والتخزين",
        connectivity: "الاتصال",
        software: "النظام"
      },
      sectorLabels: {
        energy: "الطاقة والمحروقات",
        telecom: "الاتصالات والتكنولوجيا",
        industry: "الصناعة والأغذية",
        health: "الصحة والصيدلة",
        media: "الإعلام"
      },
      slides: [
        {
          progressLabel: "الموزع",
          kicker: "الموزع الرسمي لسامسونج في الجزائر",
          title: "EL DJOUAL DISTRIBUTION",
          subtitle: [
            "تُعد EL DJOUAL DISTRIBUTION شركة متخصصة في توزيع منتجات الهواتف المحمولة من علامة سامسونج في الجزائر. منذ عام 2006، نضع خبرتنا ومعرفتنا العميقة بالسوق في خدمة المهنيين والشركات وشركائنا التجاريين.",
            "نقدم عرضاً متكيفاً مع احتياجات السوق ومرافقة تجارية مخصصة.",
            "بفضل ما يقارب 20 عاماً من الخبرة، نواصل تطورنا بطموح واضح: تعزيز حضورنا في السوق الجزائرية وبناء شبكة توزيع قوية ومستدامة، تقوم على الثقة والقرب وجودة الخدمة."
          ],
          mission: "توزيع وطني • ضمان 12 شهراً • عروض أسعار عبر واتساب ↗",
          loadLabel: "موزع رسمي // الجزائر"
        },
        {
          progressLabel: "سلسلة GALAXY A",
          kicker: "هواتف سامسونج الذكية",
          title: "سلسلة GALAXY A",
          subtitle: "A37 5G و A26 5G و A18 و A17 و A08 و A07s و A07 • ضمان 12 شهراً",
          mission: "سبعة موديلات من GALAXY A • ضمان 12 شهراً",
          loadLabel: "GALAXY A // 7 موديلات"
        },
        {
          progressLabel: "69 ولاية",
          kicker: "التوصيل والتموين للشركات B2B",
          title: "توزيع وطني شامل",
          subtitle: "توصيل وتموين B2B عبر 69 ولاية في الجزائر",
          mission: "تموين B2B • توصيل وطني سريع ↗",
          loadLabel: "الشبكة الوطنية // 69 ولاية"
        },
        {
          progressLabel: "الإكسسوارات",
          kicker: "جهّز يومياتك بأفضل جودة",
          title: "إكسسوارات أصلية",
          subtitle: "سماعات، بطاريات خارجية وشواحن سريعة",
          mission: "صوتيات • بطاريات خارجية • شواحن سريعة",
          loadLabel: "الإكسسوارات // GALAXY"
        }
      ],
      phones: {
        "a26-5g": {
          badge: "ضمان 12 شهراً · GALAXY A26 5G",
          condition: "جديد · ضمان 12 شهراً",
          price: "السعر عند الطلب",
          summary: "شاشة Super AMOLED سلسة، اتصال 5G، وكاميرا مثبتة بصرياً للاستخدام اليومي.",
          specs: {
            screen: '6.7" FHD+ Super AMOLED · 120 Hz',
            chip: "Exynos 1380",
            camera: "50 MP OIS + 8 MP زاوية واسعة + 2 MP ماكرو",
            battery: "5000 mAh · شحن سريع 25 W",
            storage: "128 أو 256 جيجابايت · microSD",
            network: "5G",
            protection: "IP67",
            updates: "حتى 6 أجيال من أندرويد",
            warranty: "ضمان 12 شهراً"
          }
        },
        "a17": {
          badge: "ضمان 12 شهراً · GALAXY A17",
          condition: "جديد · ضمان 12 شهراً",
          price: "السعر عند الطلب",
          summary: "شاشة Super AMOLED كبيرة، بطارية تدوم طويلاً، وأساسيات Galaxy الموثوقة.",
          specs: {
            screen: '6.7" FHD+ Super AMOLED · 90 Hz',
            chip: "MediaTek Helio G99 (نسخة 4G)",
            camera: "50 MP + 5 MP زاوية واسعة + 2 MP ماكرو",
            battery: "5000 mAh · شحن سريع 25 W",
            storage: "128 أو 256 جيجابايت · microSD",
            network: "4G LTE",
            protection: "IP54",
            updates: "حتى 6 أجيال من أندرويد",
            warranty: "ضمان 12 شهراً"
          }
        },
        "a07": {
          badge: "ضمان 12 شهراً · GALAXY A07",
          condition: "جديد · ضمان 12 شهراً",
          price: "السعر عند الطلب",
          summary: "هاتف Galaxy بسعر مناسب مع شاشة 90 Hz كبيرة وبطارية بسعة 5000 mAh.",
          specs: {
            screen: '6.7" HD+ PLS LCD · 90 Hz',
            chip: "MediaTek Helio G99",
            camera: "50 MP + 2 MP للعمق",
            battery: "5000 mAh · شحن سريع 25 W",
            storage: "64 أو 128 جيجابايت · microSD",
            network: "4G LTE",
            protection: "IP54",
            updates: "حتى 6 أجيال من أندرويد",
            warranty: "ضمان 12 شهراً"
          }
        },
        "a37-5g": {
          badge: "صُنع في الجزائر · ضمان 12 شهراً",
          condition: "جديد · ضمان 12 شهراً",
          price: "السعر عند الطلب",
          summary: "شاشة Super AMOLED بتردد 120 Hz، أداء Exynos القوي، ومقاومة IP68 مع دعم 5G.",
          specs: {
            screen: '6.7" FHD+ Super AMOLED · 120 Hz · 1900 شمعة · Gorilla Glass Victus+',
            chip: "Exynos 1480 (4 nm)",
            memory: "6/8/12 جيجابايت RAM · 128/256 جيجابايت UFS 3.1",
            camera: "50 MP OIS + 8 MP زاوية واسعة + 5 MP · سيلفي 12 MP · فيديو 4K",
            battery: "5000 mAh · شحن سريع 45 W",
            protection: "IP68",
            network: "5G · eSIM",
            software: "Android 16 · One UI 8.5",
            updates: "6 سنوات من التحديثات",
            origin: "صُنع في الجزائر",
            warranty: "ضمان 12 شهراً"
          }
        },
        "a18": {
          badge: "صُنع في الجزائر · ضمان 12 شهراً",
          condition: "جديد · ضمان 12 شهراً",
          price: "السعر عند الطلب",
          summary: "شاشة Super AMOLED كبيرة، معالج ثماني النواة، ومزايا عملية للعمل اليومي.",
          specs: {
            screen: '6.7" FHD+ Super AMOLED · 90 Hz · Gorilla Glass 3',
            chip: "ثماني النواة 6 nm · MediaTek Helio G99+",
            memory: "4/6/8 جيجابايت RAM · 128/256 جيجابايت",
            camera: "50 MP + 5 MP زاوية واسعة + 2 MP · سيلفي 13 MP",
            battery: "5000 mAh · شحن سريع 25 W",
            protection: "IP64",
            connectivity: "NFC",
            software: "Android 17 · One UI 9",
            updates: "6 سنوات من التحديثات",
            origin: "صُنع في الجزائر",
            warranty: "ضمان 12 شهراً"
          }
        },
        "a08": {
          badge: "صُنع في الجزائر · ضمان 12 شهراً",
          condition: "جديد · ضمان 12 شهراً",
          price: "السعر عند الطلب",
          summary: "شاشة 90 Hz كبيرة، كاميرا مزدوجة، وبطارية فائقة السعة تدوم طويلاً.",
          specs: {
            screen: '6.7" HD+ PLS LCD · 90 Hz',
            chip: "MediaTek Helio G99+ (6 nm)",
            memory: "4/6 جيجابايت RAM · 64/128 جيجابايت · microSD",
            camera: "50 MP + 2 MP · سيلفي 8 MP",
            battery: "6000 mAh · شحن سريع 25 W",
            protection: "IP64",
            software: "Android 17 · One UI 9",
            updates: "6 سنوات من التحديثات",
            origin: "صُنع في الجزائر",
            warranty: "ضمان 12 شهراً"
          }
        },
        "a07s": {
          badge: "صُنع في الجزائر · ضمان 12 شهراً",
          condition: "جديد · ضمان 12 شهراً",
          price: "السعر عند الطلب",
          summary: "تجربة Galaxy ميسّرة مع شاشة 90 Hz ومساحة تخزين قابلة للتوسيع.",
          specs: {
            screen: '6.7" HD+ PLS LCD · 90 Hz',
            chip: "MediaTek Helio G99+ (6 nm)",
            memory: "4/6 جيجابايت RAM · 64/128 جيجابايت · microSD",
            camera: "50 MP + 2 MP · سيلفي 8 MP",
            battery: "5000 mAh · شحن سريع 25 W",
            protection: "IP54",
            software: "Android 16 · One UI 8.5",
            updates: "6 سنوات من التحديثات",
            origin: "صُنع في الجزائر",
            warranty: "ضمان 12 شهراً"
          }
        }
      }
    }
  };

  let currentLang = "fr";
  let activePartnerSector = "all";
  let openPhoneIndex = null;

  const getDict = () => TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const getByPath = (obj, path) => path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  const getLocalizedPhone = phone => {
    const override = getDict().phones[phone.id];
    if (!override) return phone;
    return { ...phone, ...override, specs: { ...phone.specs, ...override.specs } };
  };
  const getLocalizedSlides = () => HERO_SLIDES.map((slide, index) => ({
    ...slide,
    ...(getDict().slides[index] || {})
  }));

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const waLink = (message, number = STORE.whatsapp) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  const mailtoLink = (subject, body, address = STORE.email) => `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailComposeLink = (address, subject, body) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(address)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const outlookComposeLink = (address, subject, body) => `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(address)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const WHATSAPP_ICON = '<svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20l1.2-5A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8.2 8.2c.2-.5.5-.7.8-.7h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.6.7a.5.5 0 0 0 0 .6c.4.7 1.1 1.5 1.8 1.9.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.3.6-.1.4-.4.8-.8 1.1-.4.3-.9.4-1.4.3-.9-.1-2-.7-3.1-1.7-1.1-.9-1.8-2-2.1-2.9-.2-.6-.1-1.1.1-1.5Z"/></svg>';
  const EMAIL_ICON = '<svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>';
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
  function renderHero(keepIndex = false) {
    const slides = getLocalizedSlides();
    const dict = getDict();
    const activeIndex = keepIndex ? heroIndex : 0;
    $("#heroSlides").innerHTML = slides.map((slide, index) => `
      <article class="hero-slide hero-scene-${slide.scene} ${index === activeIndex ? "is-active" : ""}"
        role="group" aria-roledescription="diapositive" aria-label="${slide.title}" aria-hidden="${index !== activeIndex}">
        <div class="hero-image-layer" style="background-image:url('${slide.image}')"></div>
        <div class="hero-art-tone" aria-hidden="true"></div>
        <div class="hero-character" aria-hidden="true">
          <img src="${slide.foreground}" alt="" loading="${index === 0 ? "eager" : "lazy"}">
        </div>
      </article>
    `).join("");

    $("#heroProgress").innerHTML = slides.map((slide, index) => `
      <button class="progress-track ${index === activeIndex ? "is-active" : ""}" type="button"
        data-slide="${index}" aria-label="${dict.hero.slideAria} ${slide.kicker}" aria-current="${index === activeIndex}">
        <span class="progress-number">0${index + 1}</span>
        <span class="progress-name">${slide.progressLabel}</span>
        <span class="progress-fill"></span>
      </button>
    `).join("");

    showHero(activeIndex, false);
    startHeroTimer();
  }

  function showHero(index, animate = true) {
    const slides = getLocalizedSlides();
    heroIndex = (index + slides.length) % slides.length;
    const slide = slides[heroIndex];
    $$(".hero-slide").forEach((element, itemIndex) => {
      const active = itemIndex === heroIndex;
      element.classList.toggle("is-active", active);
      element.setAttribute("aria-hidden", String(!active));
    });
    $("#heroKicker").textContent = slide.kicker;
    $("#heroTitle").textContent = slide.title;
    const subtitleEl = $("#heroSubtitle");
    if (Array.isArray(slide.subtitle)) {
      subtitleEl.className = "hero-subtitle hero-bio w-full max-w-5xl space-y-2.5 text-sm sm:text-base text-white/90 leading-relaxed bg-black/30 backdrop-blur-sm border-l-2 border-[#0381FE] p-4 sm:p-5 my-4";
      subtitleEl.innerHTML = slide.subtitle.map(paragraph => `<p>${paragraph}</p>`).join("");
    } else {
      subtitleEl.className = "hero-subtitle";
      subtitleEl.textContent = slide.subtitle;
    }
    $("#heroMission").textContent = slide.mission;
    $("#heroLoadLabel").textContent = slide.loadLabel;
    $("#heroLoadStep").textContent = `0${heroIndex + 1} / 0${slides.length}`;
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

  function renderShowcase(animate = true) {
    const dict = getDict();
    const specLabels = dict.specLabels || SPEC_LABELS;
    if (hasGsap && window.ScrollTrigger) {
      window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
    $("#phoneShowcase").innerHTML = PHONES.map((rawPhone, index) => {
      const phone = getLocalizedPhone(rawPhone);
      const reversed = index % 2 === 1;
      const highlights = ["screen", "chip", "camera", "battery"];
      return `
        <article class="phone-section ${reversed ? "is-reversed" : ""}" data-phone-section="${phone.id}">
          <div class="phone-stage" data-tilt>
            <div class="phone-ambient"></div>
            <img class="phone-product-image ${phone.imageScale || "scale-100"}" src="${phone.image}" alt="${phone.model}" loading="${phone.id === "a37-5g" ? "eager" : "lazy"}">
            <button class="phone-image-trigger" type="button" data-open-phone="${index}" aria-label="${dict.catalogue.exploreAria} ${phone.model}"></button>
          </div>
          <div class="phone-copy">
            <p class="model-badge">${phone.badge}</p>
            <button class="phone-title-button" type="button" data-open-phone="${index}">${phone.model}</button>
            <p class="phone-summary">${phone.summary}</p>
            <dl class="spec-summary">
              ${highlights.map(key => `
                <div><dt>${specLabels[key] || SPEC_LABELS[key] || key}</dt><dd>${phone.specs[key]}</dd></div>
              `).join("")}
            </dl>
            <div class="phone-purchase">
              <p class="phone-price">${phone.price}</p>
              <button class="button button-dark" type="button" data-open-phone="${index}">${dict.catalogue.explore} <span aria-hidden="true">↗</span></button>
              <a class="button button-outline" href="${waLink(dict.whatsapp.phoneOrder(phone.model), STORE.commercialWhatsapp)}" target="_blank" rel="noopener">${WHATSAPP_ICON}${dict.catalogue.orderWhatsapp} <span aria-hidden="true">↗</span></a>
              <a class="button button-email" href="${mailtoLink(dict.email.phoneSubject(phone.model), dict.email.phoneBody(phone.model), STORE.commercialEmail)}">${EMAIL_ICON}${dict.catalogue.orderEmail} <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    initProductMotion(animate);
  }

  function renderPartnerGrid(sector = activePartnerSector) {
    activePartnerSector = sector;
    const dict = getDict();
    const grid = $("#partnerGrid");
    const partners = sector === "all" ? PARTNERS : PARTNERS.filter(partner => partner.sector === sector);
    grid.innerHTML = partners.map(partner => `
      <article class="partner-tile" data-sector="${partner.sector}">
        <div class="partner-logo-frame">
          <img class="partner-logo-image" src="assets/partners/${partner.logo}" alt="" aria-hidden="true" loading="lazy">
        </div>
        <h3 class="partner-name">${partner.name}</h3>
        <p class="partner-sector-tag">${dict.sectorLabels[partner.sector] || partner.label}</p>
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

  function initProductMotion(animate = true) {
    const sections = $$(".phone-section");

    if (animate && hasGsap && !reducedMotion) {
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
  function populatePhoneModal(index) {
    const rawPhone = PHONES[index];
    if (!rawPhone) return;
    const phone = getLocalizedPhone(rawPhone);
    const dict = getDict();
    const specLabels = dict.specLabels || SPEC_LABELS;

    $("#detailBadge").textContent = phone.badge;
    $("#detailTitle").textContent = phone.model;
    $("#detailCondition").textContent = phone.condition;
    $("#detailPrice").textContent = phone.price;
    $("#detailSpecs").innerHTML = Object.entries(phone.specs).map(([key, value]) => `
      <div class="spec-row"><dt>${specLabels[key] || SPEC_LABELS[key] || key}</dt><dd>${value}</dd></div>
    `).join("");
    $("#detailWhatsApp").href = waLink(dict.whatsapp.phoneQuote(phone.model), STORE.commercialWhatsapp);
    const detailEmail = $("#detailEmail");
    if (detailEmail) {
      detailEmail.href = mailtoLink(dict.email.phoneSubject(phone.model), dict.email.phoneBody(phone.model), STORE.commercialEmail);
    }
    const image = $("#detailImage");
    image.className = `studio-image ${phone.imageScale || "scale-100"}`;
    image.src = phone.image;
    image.alt = phone.model;
  }

  function openPhone(index) {
    if (!PHONES[index]) return;
    closePromo();
    openPhoneIndex = index;
    lastFocus = document.activeElement;

    populatePhoneModal(index);
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
    openPhoneIndex = null;
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
    const dict = getDict();
    $("#promoPhones").innerHTML = PROMO_PHONES.map(rawPhone => {
      const phone = getLocalizedPhone(rawPhone);
      return `
      <article class="promo-card">
        <div class="promo-image-wrap"><img class="promo-image ${phone.imageScale || "scale-100"}" src="${phone.image}" alt="${phone.model}" loading="lazy"></div>
        <p class="eyebrow">${phone.condition}</p>
        <h3>${phone.model}</h3>
        <p>${phone.specs.screen} · ${phone.specs.chip} · ${phone.specs.camera}</p>
        <p class="price">${phone.price}</p>
        <div class="promo-card-actions">
          <a class="button button-whatsapp" href="${waLink(dict.whatsapp.phoneQuote(phone.model), STORE.commercialWhatsapp)}" target="_blank" rel="noopener">${WHATSAPP_ICON}${dict.promo.cta} <span aria-hidden="true">↗</span></a>
          <a class="button button-email" href="${mailtoLink(dict.email.phoneSubject(phone.model), dict.email.phoneBody(phone.model), STORE.commercialEmail)}">${EMAIL_ICON}${dict.promo.ctaEmail} <span aria-hidden="true">↗</span></a>
        </div>
      </article>
    `;
    }).join("");
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
      closeEmailModal();
      closeAboutModal();
      closePhone();
      closePromo();
      if ($("#mobileMenu").classList.contains("is-open")) setMobileMenuOpen(false, true);
      return;
    }
  });

  // About Us popup modal opened from the hero button.
  function openAboutModal() {
    closeEmailModal();
    closePhone();
    closePromo();
    if ($("#mobileMenu").classList.contains("is-open")) setMobileMenuOpen(false);
    lastFocus = document.activeElement;
    setModalOpen($("#aboutModal"), true);
    $("#closeAbout").focus();
  }

  function closeAboutModal() {
    const modal = $("#aboutModal");
    if (!modal || !modal.classList.contains("is-open")) return;
    setModalOpen(modal, false);
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function initAboutModal() {
    const modal = $("#aboutModal");
    const trigger = $("#openAbout");
    if (!modal || !trigger) return;

    trigger.addEventListener("click", openAboutModal);
    $("#closeAbout").addEventListener("click", closeAboutModal);
    $("#closeAbout").addEventListener("pointerdown", event => {
      if (event.button === 0) {
        event.preventDefault();
        closeAboutModal();
      }
    });
    modal.addEventListener("pointerdown", event => {
      if (event.button === 0 && event.target === modal) closeAboutModal();
    });
    modal.addEventListener("click", event => {
      if (event.target === modal) closeAboutModal();
    });
    const catalogueBtn = $("#aboutCatalogueBtn");
    if (catalogueBtn) {
      catalogueBtn.addEventListener("click", () => closeAboutModal());
    }
  }

  // Quick email compose modal (ensures Email buttons work even without a desktop mailto client).
  let currentEmailRecipient = STORE.email;
  let copyEmailTimer;

  function syncEmailModalLinks() {
    const subject = $("#emailModalSubject").value.trim();
    const body = $("#emailModalBody").value;
    $("#emailOpenGmail").href = gmailComposeLink(currentEmailRecipient, subject, body);
    $("#emailOpenOutlook").href = outlookComposeLink(currentEmailRecipient, subject, body);
    $("#emailOpenDefault").href = mailtoLink(subject, body, currentEmailRecipient);
  }

  function openEmailModal(to, subject, body) {
    closeAboutModal();
    closePhone();
    closePromo();
    if ($("#mobileMenu").classList.contains("is-open")) setMobileMenuOpen(false);
    lastFocus = document.activeElement;
    currentEmailRecipient = to || STORE.email;
    $("#emailModalTo").textContent = currentEmailRecipient;
    $("#emailModalSubject").value = subject || "";
    $("#emailModalBody").value = body || "";
    syncEmailModalLinks();
    setModalOpen($("#emailModal"), true);
    $("#emailModalSubject").focus();
  }

  function closeEmailModal() {
    const modal = $("#emailModal");
    if (!modal || !modal.classList.contains("is-open")) return;
    setModalOpen(modal, false);
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function parseMailtoHref(href) {
    const raw = href.slice(7);
    const [addressPart, queryPart = ""] = raw.split("?");
    const params = new URLSearchParams(queryPart);
    return {
      to: decodeURIComponent(addressPart || STORE.email),
      subject: params.get("subject") || getDict().email.generalSubject,
      body: params.get("body") || getDict().email.generalBody
    };
  }

  function initEmailModal() {
    const modal = $("#emailModal");
    if (!modal) return;

    $("#emailModalSubject").addEventListener("input", syncEmailModalLinks);
    $("#emailModalBody").addEventListener("input", syncEmailModalLinks);
    $("#closeEmailModal").addEventListener("click", closeEmailModal);
    $("#closeEmailModal").addEventListener("pointerdown", event => {
      if (event.button === 0) {
        event.preventDefault();
        closeEmailModal();
      }
    });
    modal.addEventListener("pointerdown", event => {
      if (event.button === 0 && event.target === modal) closeEmailModal();
    });
    modal.addEventListener("click", event => {
      if (event.target === modal) closeEmailModal();
    });

    $("#copyEmailAddress").addEventListener("click", async () => {
      const btn = $("#copyEmailAddress");
      const dict = getDict();
      window.clearTimeout(copyEmailTimer);
      try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
          await navigator.clipboard.writeText(currentEmailRecipient);
        } else if (!copyWithFallback(currentEmailRecipient)) {
          throw new Error("Copy failed");
        }
        btn.textContent = dict.contact.copied;
      } catch (error) {
        btn.textContent = dict.contact.copyFailed;
      }
      copyEmailTimer = window.setTimeout(() => {
        btn.textContent = getDict().contact.copy;
      }, 2000);
    });

    document.addEventListener("click", event => {
      const link = event.target.closest('a[href^="mailto:"]');
      if (!link || link.id === "emailOpenDefault") return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const { to, subject, body } = parseMailtoHref(link.getAttribute("href"));
      openEmailModal(to, subject, body);
    });
  }

  function setMobileMenuOpen(open, restoreFocus = false) {
    const menu = $("#mobileMenu");
    const toggle = $("#mobileMenuToggle");
    const dict = getDict();
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    menu.toggleAttribute("inert", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? dict.nav.closeMenu : dict.nav.openMenu);
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
    const dict = getDict();
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
      button.textContent = dict.contact.copied;
    } catch (error) {
      console.error("Impossible de copier le numéro de téléphone.", error);
      button.textContent = dict.contact.copyFailed;
    }
    copyResetTimer = window.setTimeout(() => {
      button.textContent = getDict().contact.copy;
    }, 2000);
  }

  function updateWhatsAppLinks() {
    const dict = getDict();
    $("#navWhatsApp").href = waLink(dict.whatsapp.nav);
    $("#mobileWhatsApp").href = waLink(dict.whatsapp.nav);
    $("#accessoriesWhatsApp").href = waLink(dict.whatsapp.accessories, STORE.commercialWhatsapp);
    $("#contactWhatsapp").href = waLink(dict.whatsapp.contact);
    $("#footerWhatsapp").href = waLink(dict.whatsapp.footer);

    const generalMail = mailtoLink(dict.email.generalSubject, dict.email.generalBody, STORE.email);
    const accessoriesMail = mailtoLink(dict.email.accessoriesSubject, dict.email.accessoriesBody, STORE.commercialEmail);
    const partnerMail = mailtoLink(dict.email.partnerSubject, dict.email.partnerBody, STORE.commercialEmail);

    const setHref = (selector, href) => {
      const el = $(selector);
      if (el) el.href = href;
    };
    setHref("#navEmail", generalMail);
    setHref("#mobileEmail", generalMail);
    setHref("#contactEmailBtn", generalMail);
    setHref("#footerEmail", generalMail);
    setHref("#aboutEmailBtn", generalMail);
    setHref("#accessoriesEmail", accessoriesMail);
    setHref("#becomePartnerEmail", partnerMail);
  }

  function applyLanguage(lang, { persist = true, initial = false } = {}) {
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

    const toggle = $("#mobileMenuToggle");
    if (toggle) {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", isOpen ? dict.nav.closeMenu : dict.nav.openMenu);
    }

    $$(".lang-btn").forEach(btn => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    if (persist) {
      try {
        localStorage.setItem("eldjoualLang", currentLang);
      } catch (error) {
        // Ignore storage restrictions.
      }
    }

    updateWhatsAppLinks();
    renderHero(!initial);
    renderShowcase(initial);
    renderPartnerGrid(activePartnerSector);
    renderPromo();
    if (openPhoneIndex !== null) populatePhoneModal(openPhoneIndex);
    if (hasGsap && window.ScrollTrigger) window.ScrollTrigger.refresh();
  }

  function initLanguageSwitcher() {
    $$(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.dataset.lang && btn.dataset.lang !== currentLang) {
          applyLanguage(btn.dataset.lang);
        }
      });
    });

    let savedLang = "fr";
    try {
      const stored = localStorage.getItem("eldjoualLang");
      if (stored && TRANSLATIONS[stored]) savedLang = stored;
    } catch (error) {
      // Default to French when storage is unavailable.
    }
    applyLanguage(savedLang, { persist: false, initial: true });
  }

  function initStickyHeader() {
    const header = $("#siteHeader");
    if (!header) return;
    const syncHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    if (lenis) lenis.on("scroll", syncHeader);
  }

  function initStoreContact() {
    $("#copyPhone").addEventListener("click", copyPhoneNumber);
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
  initStoreContact();
  initAboutModal();
  initEmailModal();
  initPartnerFilters();
  initSmoothScroll();
  initLanguageSwitcher();
  initStickyHeader();
  playIntro();
})();
