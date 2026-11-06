(() => {
  const target = document.querySelector('.product-origin-layout > div:first-child');
  if (!target) return;

  const pageLang = document.documentElement.lang || 'en';
  const hungarian = pageLang === 'hu';
  const nested = !hungarian;
  const source = nested ? '../assets/amara-room-orchestration-v1.png' : 'assets/amara-room-orchestration-v1.png';
  const ALT_LABELS = {
    hu: 'Névtelen holografikus asszisztensek egy közös kocka körül',
    en: 'Anonymous holographic assistants around a shared cube',
    de: 'Anonyme holografische Assistenten um einen gemeinsamen Würfel',
    fr: 'Assistants holographiques anonymes autour d’un cube partagé',
    es: 'Asistentes holográficos anónimos alrededor de un cubo compartido',
    it: 'Assistenti olografici anonimi attorno a un cubo condiviso',
    pt: 'Assistentes holográficos anónimos em redor de um cubo partilhado',
    ru: 'Анонимные голографические ассистенты вокруг общего куба',
    tr: 'Ortak bir küpün etrafında anonim holografik asistanlar',
    id: 'Asisten holografis anonim di sekitar kubus bersama',
    ja: '共有キューブの周りにいる匿名のホログラフィックアシスタント',
    ko: '공유 큐브 주변의 익명 홀로그램 어시스턴트',
    zh: '围绕共享立方体的匿名全息助手'
  };
  const BUTTON_LABELS = {
    hu: 'Illusztráció nagyítása',
    en: 'Enlarge illustration',
    de: 'Illustration vergrößern',
    fr: 'Agrandir l’illustration',
    es: 'Ampliar ilustración',
    it: 'Ingrandisci illustrazione',
    pt: 'Ampliar ilustração',
    ru: 'Увеличить иллюстрацию',
    tr: 'İllüstrasyonu büyüt',
    id: 'Perbesar ilustrasi',
    ja: 'イラストを拡大',
    ko: '일러스트 확대',
    zh: '放大插图'
  };
  const alt = ALT_LABELS[pageLang] || ALT_LABELS.en;
  const label = BUTTON_LABELS[pageLang] || BUTTON_LABELS.en;

  const button = document.createElement('button');
  button.className = 'origin-room-art';
  button.type = 'button';
  button.setAttribute('aria-label', label);
  button.innerHTML = `<img src="${source}" alt="${alt}">`;
  button.addEventListener('click', () => {
    const dialog = document.querySelector('[data-platform-art-lightbox]');
    const image = dialog?.querySelector('[data-platform-art-image]');
    if (!dialog || !image) return;
    image.src = source;
    image.alt = alt;
    dialog.showModal();
  });
  target.append(button);

  const purchase = document.querySelector('.release-section');
  if (!purchase) return;

  const CTA_LABELS = {
    hu: 'Vásárlás',
    en: 'Purchase',
    de: 'Kaufen',
    fr: 'Acheter',
    es: 'Comprar',
    it: 'Acquista',
    pt: 'Comprar',
    ru: 'Купить',
    tr: 'Satın al',
    id: 'Beli',
    ja: '購入する',
    ko: '구매하기',
    zh: '购买'
  };
  const ctaLabel = CTA_LABELS[pageLang] || CTA_LABELS.en;
  const addPurchaseCta = (container) => {
    if (!container || container.querySelector('.section-purchase-cta')) return;
    const cta = document.createElement('a');
    cta.className = 'section-purchase-cta';
    cta.href = '#purchase';
    cta.textContent = ctaLabel;
    container.append(cta);
  };

  addPurchaseCta(document.querySelector('.product-details.room-clarifier'));
  addPurchaseCta(document.querySelector('.product-origin-copy'));
})();
