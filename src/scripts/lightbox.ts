// Full-size photo viewer, shared by the news timeline (NewsList.astro) and the
// "Life in the lab" gallery (NewsGallery.astro). Built once, on first use.

export interface LightboxPhoto {
  src: string;
  alt: string;
  // Gallery photos come from different news items, so each carries its own
  // title; a news item's photos share the one passed to openLightbox().
  title?: string;
  credit?: string;
}

let photos: LightboxPhoto[] = [];
let at = 0;
let setTitle = '';
let opener: HTMLElement | null = null;
let viewer: ReturnType<typeof build> | undefined;

function icon(d: string): string {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
}

function build() {
  const el = document.createElement('div');
  el.className = 'lightbox';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.innerHTML =
    `<button class="lightbox-close" type="button" aria-label="Close">${icon('M6 6 L18 18 M18 6 L6 18')}</button>` +
    `<button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous photo">${icon('M15 4 L7 12 L15 20')}</button>` +
    `<button class="lightbox-nav lightbox-next" type="button" aria-label="Next photo">${icon('M9 4 L17 12 L9 20')}</button>` +
    '<figure><img alt="" /><figcaption></figcaption></figure>';
  document.body.appendChild(el);

  const parts = {
    el,
    img: el.querySelector('img')!,
    caption: el.querySelector('figcaption')!,
    close: el.querySelector<HTMLButtonElement>('.lightbox-close')!,
    prev: el.querySelector<HTMLButtonElement>('.lightbox-prev')!,
    next: el.querySelector<HTMLButtonElement>('.lightbox-next')!,
  };

  parts.close.addEventListener('click', close);
  parts.prev.addEventListener('click', () => step(-1));
  parts.next.addEventListener('click', () => step(1));
  // Backdrop click closes; clicks on the image itself do not.
  el.addEventListener('click', (e) => { if (e.target === el) close(); });
  document.addEventListener('keydown', (e) => {
    if (!el.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });

  return parts;
}

function render() {
  if (!viewer) return;
  const pic = photos[at];
  viewer.img.src = pic.src;
  viewer.img.alt = pic.alt;
  const title = pic.title || setTitle;
  const many = photos.length > 1;
  viewer.caption.textContent = (many ? `${title} · ${at + 1} / ${photos.length}` : title) +
    (pic.credit ? ` · Photo: © ${pic.credit}` : '');
  viewer.prev.hidden = !many;
  viewer.next.hidden = !many;
}

function step(d: number) {
  at = (at + d + photos.length) % photos.length;
  render();
}

function close() {
  if (!viewer) return;
  viewer.el.classList.remove('is-open');
  document.body.style.overflow = '';
  if (opener) { opener.focus(); opener = null; }
}

export function openLightbox(images: LightboxPhoto[], index: number, title = '') {
  viewer ??= build();
  photos = images;
  at = index;
  setTitle = title;
  opener = document.activeElement as HTMLElement | null;
  render();
  viewer.el.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  viewer.close.focus();
}
