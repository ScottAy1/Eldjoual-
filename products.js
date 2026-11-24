/* ==========================================================
   products.js — catalogue + config (edit freely)
   Prix = PLACEHOLDERS en DZD : remplacez par vos vrais prix.
   ========================================================== */
const STORE = {
  name: "Eldjoual",               // nom du magasin
  whatsapp: "213550000000",       // format international, sans +
  address: "Cité 5 Juillet, Bab Ezzouar, Alger",
  hours: "Sam–Jeu : 09h00 – 20h00 · Ven : 14h00 – 19h00"
};

/* Champs : condition = "Neuf Scellé" | "Cabas" | "Occasion"
   stock = "En stock" | "Stock limité" — promo.off = remise en DZD */
const PRODUCTS = [
  { id: "a57", brand: "Samsung", name: "Samsung Galaxy A57 5G", star: true,
    image: "assets/phones/samsung-a57.png",
    condition: "Neuf Scellé", stock: "En stock", promo: { off: 4000 },
    screen: '6,7" Super AMOLED+ 120Hz (1900 nits)',
    cpu: "Exynos 1680 (4 nm)",
    camera: "50MP OIS + 12MP UW + 5MP",
    battery: "5000 mAh · 45W",
    extras: ["6,9 mm · Gorilla Glass Victus+ & alu", "IP68", "Android 16 / One UI 8.5 · 6 ans de MAJ"],
    variants: [{ label: "8/256Go", price: 89900 }, { label: "12/256Go", price: 99900 }],
    colors: [{ name: "Noir", hex: "#1c1f26" }, { name: "Bleu glacier", hex: "#8fb4e8" }, { name: "Lavande", hex: "#b9a6e0" }] },

  { id: "a37", brand: "Samsung", name: "Samsung Galaxy A37 5G",
    image: "assets/phones/samsung-a37.png",
    condition: "Neuf Scellé", stock: "Stock limité", promo: { off: 3000 },
    screen: '6,7" Super AMOLED 120Hz',
    cpu: "Exynos 1480",
    camera: "50MP OIS + 8MP UW + 5MP",
    battery: "5000 mAh · 45W",
    extras: ["IP68", "Stockage UFS 3.1"],
    variants: [{ label: "6/128Go", price: 62900 }, { label: "8/256Go", price: 72900 }],
    colors: [{ name: "Gris", hex: "#4b5160" }, { name: "Menthe", hex: "#9fd8c3" }, { name: "Blanc", hex: "#eceff4" }] },

  { id: "s26u", brand: "Samsung", name: "Samsung Galaxy S26 Ultra",
    image: "assets/phones/samsung-s26-ultra.png",
    condition: "Neuf Scellé", stock: "Stock limité",
    screen: '6,9" Dynamic AMOLED 2X QHD+ 120Hz',
    cpu: "Snapdragon 8 Elite Gen 5 for Galaxy",
    camera: "200MP + 50MP UW + 50MP 5x + 10MP 3x",
    battery: "5000 mAh · 60W",
    extras: ["S Pen intégré", "Cadre titane · IP68", "Galaxy AI · 7 ans de MAJ"],
    variants: [{ label: "12/256Go", price: 289000 }, { label: "12/512Go", price: 319000 }, { label: "16/1To", price: 389000 }],
    colors: [{ name: "Noir titane", hex: "#2a2c30" }, { name: "Gris titane", hex: "#8a8d93" }, { name: "Bleu nuit", hex: "#2f3f63" }] },

  { id: "s25fe", brand: "Samsung", name: "Samsung Galaxy S25 FE",
    image: "assets/phones/samsung-s25-fe.png",
    condition: "Cabas", stock: "En stock", promo: { off: 6000 },
    screen: '6,7" Dynamic AMOLED 2X 120Hz',
    cpu: "Exynos 2400",
    camera: "50MP OIS + 12MP UW + 8MP 3x",
    battery: "4900 mAh · 45W",
    extras: ["IP68", "Galaxy AI · 7 ans de MAJ"],
    variants: [{ label: "8/128Go", price: 109000 }, { label: "8/256Go", price: 119000 }],
    colors: [{ name: "Marine", hex: "#27385c" }, { name: "Blanc", hex: "#eceff4" }, { name: "Jade", hex: "#7fb8a4" }] }
];

/* Livraison : "Wilaya:Zone" — zones A/B/C/D, tarifs en DZD (placeholders) */
const ZONES = {
  A: { stop: 400, home: 600, time: "24h" },
  B: { stop: 500, home: 800, time: "24–48h" },
  C: { stop: 600, home: 1000, time: "48–72h" },
  D: { stop: 900, home: 1400, time: "3–5 jours" }
};
const WILAYAS = ("Adrar:D|Chlef:B|Laghouat:C|Oum El Bouaghi:B|Batna:B|Béjaïa:B|Biskra:C|Béchar:D|Blida:A|Bouira:B|Tamanrasset:D|Tébessa:C|Tlemcen:B|Tiaret:B|Tizi Ouzou:B|Alger:A|Djelfa:C|Jijel:B|Sétif:B|Saïda:C|Skikda:B|Sidi Bel Abbès:B|Annaba:B|Guelma:B|Constantine:B|Médéa:B|Mostaganem:B|M'Sila:C|Mascara:B|Ouargla:D|Oran:B|El Bayadh:C|Illizi:D|Bordj Bou Arréridj:B|Boumerdès:A|El Tarf:B|Tindouf:D|Tissemsilt:B|El Oued:C|Khenchela:B|Souk Ahras:B|Tipaza:A|Mila:B|Aïn Defla:B|Naâma:C|Aïn Témouchent:B|Ghardaïa:C|Relizane:B|Timimoun:D|Bordj Badji Mokhtar:D|Ouled Djellal:C|Béni Abbès:D|In Salah:D|In Guezzam:D|Touggourt:C|Djanet:D|El M'Ghair:C|El Meniaa:C")
  .split("|").map(s => { const [name, zone] = s.split(":"); return { name, zone }; });
