/* ==========================================================
   app.js — logique de la boutique (dépend de products.js)
   Sections : 1 Utilitaires · 2 Cartes · 3 Filtres · 4 Comparer
              5 Modale promo · 6 Livraison · 7 Thème · 8 Init
   ========================================================== */

/* ---------- 1. Utilitaires & état ---------- */
const $ = (s, r = document) => r.querySelector(s);
const fmt = n => n.toLocaleString('fr-FR') + ' DZD';
const wa = txt => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(txt)}`;
const byId = id => PRODUCTS.find(p => p.id === id);

const state = { q: '', filter: 'all', sort: '', compare: [], sel: {} };
PRODUCTS.forEach(p => state.sel[p.id] = { v: 0, c: 0 });   // variante + couleur choisies

const price = p => p.variants[state.sel[p.id].v].price;
const minPrice = p => Math.min(...p.variants.map(v => v.price));

/* Message WhatsApp pré-rempli selon la variante/couleur choisie */
function orderMsg(p) {
  const s = state.sel[p.id];
  return `Bonjour ${STORE.name}, je souhaite réserver : ${p.name} ${p.variants[s.v].label}, ${p.colors[s.c].name} (${p.condition}) à ${fmt(price(p))}.`;
}
const condClass = c => c.startsWith('Neuf') ? 'chip-new' : c === 'Cabas' ? 'chip-cabas' : 'chip-occ';
const stockClass = s => s === 'Stock limité' ? 'chip-low' : 'chip-ok';

/* ---------- 2. Cartes produit ---------- */
function cardHTML(p) {
  const s = state.sel[p.id], inCmp = state.compare.includes(p.id);
  return `
  <article class="tile p-5 flex flex-col gap-4 ${p.star ? 'sm:col-span-2 lg:col-span-1 ring-2 ring-brand' : ''}" data-id="${p.id}">
    <div class="flex gap-2 flex-wrap">
      <span class="chip ${condClass(p.condition)}">${p.condition}</span>
      <span class="chip ${stockClass(p.stock)}">${p.stock}</span>
      ${p.star ? '<span class="chip" style="background:var(--hot);color:#fff;border-color:transparent">Star produit</span>' : ''}
    </div>
    <div class="grid place-items-center py-2 product-media"><img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy"></div>
    <div>
      <h3 class="text-xl font-bold leading-tight">${p.name}</h3>
      <p class="text-sm text-mute mt-1">${p.screen}<br>${p.cpu} · ${p.battery}</p>
    </div>
    <div class="flex gap-2 flex-wrap">
      ${p.variants.map((v, i) => `<button class="opt" data-act="variant" data-i="${i}" aria-pressed="${i === s.v}">${v.label}</button>`).join('')}
    </div>
    <div class="flex gap-2 items-center">
      ${p.colors.map((c, i) => `<button class="sw" data-act="color" data-i="${i}" style="background:${c.hex}" title="${c.name}" aria-label="${c.name}" aria-pressed="${i === s.c}"></button>`).join('')}
      <span class="text-xs text-mute ml-1">${p.colors[s.c].name}</span>
    </div>
    <p class="display text-2xl font-extrabold mt-auto">${fmt(price(p))}</p>
    <div class="flex gap-2">
      <a class="btn btn-wa flex-1 text-sm" target="_blank" rel="noopener" href="${wa(orderMsg(p))}">Réserver sur WhatsApp</a>
      <button class="btn btn-ghost text-sm" data-act="compare" aria-pressed="${inCmp}">${inCmp ? '✓ Ajouté' : 'Comparer'}</button>
    </div>
  </article>`;
}

/* Délégation d'événements : une seule écoute pour toute la grille */
$('#grid').addEventListener('click', e => {
  const btn = e.target.closest('[data-act]'); if (!btn) return;
  const card = btn.closest('[data-id]'), p = byId(card.dataset.id), s = state.sel[p.id];
  if (btn.dataset.act === 'variant') s.v = +btn.dataset.i;
  if (btn.dataset.act === 'color') s.c = +btn.dataset.i;
  if (btn.dataset.act === 'compare') return toggleCompare(p.id);
  card.outerHTML = cardHTML(p);          // re-rend uniquement cette carte (prix + lien WhatsApp)
});

/* ---------- 3. Recherche, filtres, tri ---------- */
function renderGrid() {
  const q = state.q.toLowerCase().trim();
  let list = PRODUCTS.filter(p => {
    const hay = (p.name + ' ' + p.condition + ' ' + p.variants.map(v => v.label).join(' ')).toLowerCase();
    const okF = state.filter === 'all' ||
      (state.filter === 'samsung' && p.brand === 'Samsung') ||
      (state.filter === 'neuf' && p.condition.startsWith('Neuf')) ||
      (state.filter === 'cabas' && p.condition === 'Cabas');
    return okF && hay.includes(q);
  });
  if (state.sort) list.sort((a, b) => (minPrice(a) - minPrice(b)) * (state.sort === 'asc' ? 1 : -1));
  $('#grid').innerHTML = list.map(cardHTML).join('');
  $('#empty').classList.toggle('hidden', list.length > 0);
}
$('#search').addEventListener('input', e => { state.q = e.target.value; renderGrid(); });
$('#sort').addEventListener('change', e => { state.sort = e.target.value; renderGrid(); });
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('[data-f]'); if (!b) return;
  state.filter = b.dataset.f;
  document.querySelectorAll('#filters .pill').forEach(x => x.setAttribute('aria-pressed', x === b));
  renderGrid();
});

/* ---------- 4. Comparateur (2 téléphones max) ---------- */
function toggleCompare(id) {
  const i = state.compare.indexOf(id);
  if (i > -1) state.compare.splice(i, 1);
  else { if (state.compare.length === 2) state.compare.shift(); state.compare.push(id); } // remplace le plus ancien
  renderGrid(); updateCmpBar();
}
function updateCmpBar() {
  const n = state.compare.length;
  $('#cmpBar').classList.toggle('hidden', n === 0);
  $('#cmpBar').classList.toggle('flex', n > 0);
  $('#cmpTxt').textContent = n === 2 ? '2 téléphones sélectionnés' : 'Choisissez un 2ᵉ téléphone';
  $('#cmpOpen').disabled = n < 2; $('#cmpOpen').style.opacity = n < 2 ? .4 : 1;
}
$('#cmpClear').onclick = () => { state.compare = []; renderGrid(); updateCmpBar(); };
$('#cmpOpen').onclick = () => {
  if (state.compare.length < 2) return;
  const [a, b] = state.compare.map(byId);
  const rows = [['Écran', 'screen'], ['Processeur', 'cpu'], ['Appareil photo', 'camera'], ['Batterie', 'battery']];
  $('#cmpBody').innerHTML = `<table class="w-full text-sm min-w-[32rem]">
    <tr><th></th><th>${a.name}</th><th>${b.name}</th></tr>
    ${rows.map(([l, k]) => `<tr><td class="text-mute">${l}</td><td>${a[k]}</td><td>${b[k]}</td></tr>`).join('')}
    <tr><td class="text-mute">Prix</td><td class="font-bold">Dès ${fmt(minPrice(a))}</td><td class="font-bold">Dès ${fmt(minPrice(b))}</td></tr>
    <tr><td></td>${[a, b].map(p => `<td><a class="btn btn-wa text-sm" target="_blank" rel="noopener" href="${wa(orderMsg(p))}">Réserver</a></td>`).join('')}</tr></table>`;
  $('#cmpDlg').showModal();
};

/* ---------- 5. Modale promo Samsung ---------- */
function renderPromo() {
  const deals = PRODUCTS.filter(p => p.promo).sort((a, b) => (b.star || 0) - (a.star || 0)).slice(0, 3); // A57 en premier
  $('#promoBody').innerHTML = deals.map(p => {
    const old = p.variants[0].price, now = old - p.promo.off;
    const msg = `Bonjour ${STORE.name}, je suis intéressé par l'offre ${p.name} ${p.variants[0].label} à ${fmt(now)}.`;
    return `<div class="tile p-5 flex flex-col gap-3 ${p.star ? 'ring-2 ring-brand' : ''}">
      <div class="flex justify-between items-center"><span class="chip ${condClass(p.condition)}">${p.condition}</span>${p.star ? '<span class="chip chip-low">Star</span>' : ''}</div>
      <div class="grid place-items-center h-44"><img src="${p.image}" alt="${p.name}" class="product-image promo-image"></div>
      <h3 class="font-bold text-lg leading-tight">${p.name}</h3>
      <ul class="text-sm text-mute space-y-1"><li>${p.screen}</li><li>${p.camera}</li><li>${p.battery}</li></ul>
      <div class="mt-auto"><s class="text-mute text-sm">${fmt(old)}</s><p class="display text-2xl font-extrabold text-hot">${fmt(now)}</p></div>
      <a class="btn btn-wa text-sm" target="_blank" rel="noopener" href="${wa(msg)}">Réserver sur WhatsApp</a></div>`;
  }).join('');
}
const openPromo = () => $('#promoDlg').showModal();
$('#openPromo').onclick = openPromo;

/* ---------- 6. Estimateur de livraison ---------- */
$('#wilaya').innerHTML = '<option value="">Choisir ma wilaya</option>' +
  WILAYAS.map((w, i) => `<option value="${i}">${String(i + 1).padStart(2, '0')} – ${w.name}</option>`).join('');
$('#wilaya').addEventListener('change', e => {
  if (e.target.value === '') { $('#shipOut').textContent = 'Sélectionnez une wilaya.'; return; }
  const w = WILAYAS[e.target.value], z = ZONES[w.zone];
  $('#shipOut').innerHTML = `<div class="grid grid-cols-2 gap-3 text-ink">
    <div class="tile p-4"><p class="text-xs text-mute">Stop-Desk</p><p class="font-bold text-lg">${fmt(z.stop)}</p></div>
    <div class="tile p-4"><p class="text-xs text-mute">Domicile</p><p class="font-bold text-lg">${fmt(z.home)}</p></div></div>
    <p class="mt-3">Livraison estimée vers ${w.name} : <b class="text-ink">${z.time}</b></p>`;
});

/* ---------- 7. Thème clair / sombre ---------- */
$('#themeBtn').onclick = () => {
  const dark = document.documentElement.classList.toggle('dark');
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
};

/* ---------- 8. Init ---------- */
document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => {
  if (e.target === d || e.target.closest('[data-close]')) d.close();   // clic sur fond ou ✕
}));
$('#fAddr').textContent = STORE.address; $('#fHours').textContent = STORE.hours;
$('#waFloat').href = wa(`Bonjour ${STORE.name}, j'ai une question.`);
let heroIndex = 0;
const heroProducts = ['a57', 'a37', 's26u', 's25fe'].map(byId);
function showHero(index, animate = true) {
  heroIndex = (index + heroProducts.length) % heroProducts.length;
  const p = heroProducts[heroIndex], img = $('#heroImage');
  if (animate) img.classList.add('is-changing');
  setTimeout(() => {
    img.src = p.image;
    img.alt = p.name;
    $('#heroName').textContent = p.name.replace(/^Samsung\s*/, '');
    $('#heroPrice').textContent = fmt(minPrice(p));
    img.onload = () => img.classList.remove('is-changing');
    if (img.complete) img.classList.remove('is-changing');
  }, animate ? 180 : 0);
  document.querySelectorAll('.hero-dot').forEach((dot, i) =>
    dot.setAttribute('aria-current', i === heroIndex ? 'true' : 'false'));
}
$('#heroDots').innerHTML = heroProducts.map((p, i) =>
  `<button class="hero-dot" type="button" aria-label="Afficher ${p.name}" aria-current="${i === 0}"></button>`).join('');
$('#heroDots').addEventListener('click', e => {
  const dot = e.target.closest('.hero-dot');
  if (dot) showHero([...dot.parentElement.children].indexOf(dot));
});
$('#heroPrev').onclick = () => showHero(heroIndex - 1);
$('#heroNext').onclick = () => showHero(heroIndex + 1);
showHero(0, false);
let heroTimer = setInterval(() => showHero(heroIndex + 1), 4500);
$('#heroSlider').addEventListener('mouseenter', () => clearInterval(heroTimer));
$('#heroSlider').addEventListener('mouseleave', () => {
  heroTimer = setInterval(() => showHero(heroIndex + 1), 4500);
});
renderPromo(); renderGrid(); updateCmpBar();

// Popup auto : 2,5 s après le chargement, une fois par session
try {
  if (!sessionStorage.getItem('promoSeen')) {
    setTimeout(() => { openPromo(); sessionStorage.setItem('promoSeen', '1'); }, 2500);
  }
} catch (e) {}
