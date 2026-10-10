(() => {
  const lightbox = document.querySelector('[data-install-lightbox]');
  if (!lightbox || lightbox.dataset.galleryNavigationReady) return;
  lightbox.dataset.galleryNavigationReady = 'true';

  const labels = {
    hu: ['Előző kép', 'Következő kép'], en: ['Previous image', 'Next image'], de: ['Vorheriges Bild', 'Nächstes Bild'],
    es: ['Imagen anterior', 'Siguiente imagen'], fr: ['Image précédente', 'Image suivante'], id: ['Gambar sebelumnya', 'Gambar berikutnya'],
    it: ['Immagine precedente', 'Immagine successiva'], ja: ['前の画像', '次の画像'], ko: ['이전 이미지', '다음 이미지'],
    pt: ['Imagem anterior', 'Próxima imagem'], ru: ['Предыдущее изображение', 'Следующее изображение'], tr: ['Önceki görsel', 'Sonraki görsel'], zh: ['上一张图片', '下一张图片']
  };
  const [previousLabel, nextLabel] = labels[document.documentElement.lang] || labels.en;
  let player = null;
  let index = 0;
  const show = (delta = 0) => {
    if (!player) return;
    const images = [...player.querySelectorAll('.install-slide img')];
    if (!images.length) return;
    index = (index + delta + images.length) % images.length;
    const image = images[index];
    const fullImage = lightbox.querySelector('[data-install-lightbox-image]');
    fullImage.src = image.currentSrc || image.src;
    fullImage.alt = image.alt;
  };
  const makeButton = (className, label, glyph, delta) => {
    const button = document.createElement('button');
    button.className = `install-lightbox-nav ${className}`;
    button.type = 'button';
    button.setAttribute('aria-label', label);
    button.textContent = glyph;
    button.addEventListener('click', () => show(delta));
    return button;
  };
  lightbox.append(
    makeButton('install-lightbox-prev', previousLabel, '←', -1),
    makeButton('install-lightbox-next', nextLabel, '→', 1)
  );
  document.addEventListener('click', (event) => {
    const image = event.target.closest('[data-install-player] .install-slide img');
    if (!image) return;
    player = image.closest('[data-install-player]');
    index = [...player.querySelectorAll('.install-slide img')].indexOf(image);
  }, true);
  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(1); }
  });
})();
