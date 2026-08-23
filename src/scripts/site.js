// Leanna Corporan's Bakehouse - site interactivity.
// Progressive enhancement: every feature checks for its DOM before binding.

const ready = (fn) => {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
};

ready(() => {
  initHeader();
  initMobileMenu();
  initReveal();
  initCarousel();
  initFilters();
  initQuickView();
  initBuilder();
  initNewsletter();
  initContactForm();
  initPrefill();
});

/* ------------------------------------------------------------- header */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --------------------------------------------------------- mobile menu */
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('mobile-close');
  if (!toggle || !menu) return;

  const open = () => {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const shut = () => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', open);
  close?.addEventListener('click', shut);
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', shut));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) shut();
  });
}

/* --------------------------------------------------------------- reveal */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  items.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------- carousel */
function initCarousel() {
  const root = document.getElementById('testimonial-carousel');
  if (!root) return;
  const slides = Array.from(root.querySelectorAll('.testimonial-slide'));
  const dots = Array.from(root.querySelectorAll('.carousel-dots button'));
  if (!slides.length) return;

  let index = 0;
  let timer;

  const go = (i) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle('is-active', n === index));
    dots.forEach((d, n) => d.classList.toggle('is-active', n === index));
  };
  const play = () => {
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 6000);
  };
  const stop = () => clearInterval(timer);

  dots.forEach((dot) =>
    dot.addEventListener('click', () => {
      go(Number(dot.dataset.index));
      play();
    })
  );
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', play);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', play);
  play();
}

/* --------------------------------------------------------------- filters */
function initFilters() {
  document.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const group = btn.closest('[role="tablist"]');
      if (!group) return;
      group.querySelectorAll('[data-filter]').forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
      });
      const filter = btn.dataset.filter;
      const grid = group.nextElementSibling;
      if (!grid) return;
      grid.querySelectorAll('[data-category]').forEach((item) => {
        item.hidden = filter !== 'all' && item.dataset.category !== filter;
      });
    });
  });
}

/* ------------------------------------------------------------ quick view */
function initQuickView() {
  const backdrop = document.getElementById('quickview');
  if (!backdrop) return;
  const img = document.getElementById('qv-image');
  const tag = document.getElementById('qv-tag');
  const name = document.getElementById('qv-name');
  const desc = document.getElementById('qv-desc');
  const price = document.getElementById('qv-price');
  const order = document.getElementById('qv-order');

  const open = () => {
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const shut = () => {
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-quickview]').forEach((btn) => {
    btn.addEventListener('click', () => {
      img.src = btn.dataset.image;
      img.alt = btn.dataset.alt;
      tag.textContent = btn.dataset.cat;
      name.textContent = btn.dataset.name;
      desc.textContent = btn.dataset.desc;
      price.textContent = `${btn.dataset.price} ${btn.dataset.pricenote || ''}`.trim();
      order.href = `/contact/?item=${encodeURIComponent(btn.dataset.name)}`;
      open();
    });
  });

  document.getElementById('quickview-close')?.addEventListener('click', shut);
  document.getElementById('quickview-close2')?.addEventListener('click', shut);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) shut();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) shut();
  });
}

/* -------------------------------------------------------- cake builder */
function initBuilder() {
  const builder = document.getElementById('cake-builder');
  if (!builder) return;

  const prices = {
    size: { 6: 85, 8: 115, 10: 150 },
    flavor: { vanilla: 0, chocolate: 0, 'red-velvet': 5 },
    filling: { raspberry: 0, caramel: 8, 'cream-cheese': 0 },
  };
  const labels = {
    size: { 6: '6 inch', 8: '8 inch', 10: '10 inch' },
    flavor: { vanilla: 'Vanilla', chocolate: 'Chocolate', 'red-velvet': 'Red Velvet' },
    filling: { raspberry: 'Raspberry', caramel: 'Caramel', 'cream-cheese': 'Cream Cheese' },
  };
  const state = { size: '6', flavor: 'vanilla', filling: 'raspberry' };

  const sum = (group) => builder.querySelector(`[data-summary="${group}"]`);
  const priceEl = builder.querySelector('[data-summary="price"]');
  const cta = document.getElementById('builder-cta');

  const render = () => {
    sum('size').textContent = labels.size[state.size];
    sum('flavor').textContent = labels.flavor[state.flavor];
    sum('filling').textContent = labels.filling[state.filling];
    const total =
      prices.size[state.size] + prices.flavor[state.flavor] + prices.filling[state.filling];
    priceEl.textContent = `$${total}`;

    const cake = `${labels.size[state.size]} ${labels.flavor[state.flavor].toLowerCase()} cake with ${labels.filling[state.filling].toLowerCase()} filling`;
    cta.href = `/contact/?cake=${encodeURIComponent(cake)}`;
  };

  builder.querySelectorAll('.option-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const group = pill.closest('.option-row').dataset.group;
      state[group] = pill.dataset.value;
      pill.parentElement.querySelectorAll('.option-pill').forEach((p) => {
        p.classList.toggle('is-active', p === pill);
      });
      render();
    });
  });

  render();
}

/* ---------------------------------------------------------- newsletter */
function initNewsletter() {
  const STORAGE = 'lc_newsletter_done';
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const done = () => localStorage.getItem(STORAGE) === '1';

  document.querySelectorAll('[data-newsletter]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const note = form.querySelector('[data-form-note]');
      if (!emailOk(input.value)) {
        if (note) {
          note.textContent = 'Please enter a valid email address.';
          note.hidden = false;
        }
        input.focus();
        return;
      }
      localStorage.setItem(STORAGE, '1');
      if (note) {
        note.textContent = 'Thanks! Your 10% off code is on its way to your inbox.';
        note.hidden = false;
      }
      input.value = '';
      if (form.closest('.popup-backdrop')) {
        setTimeout(() => closePopup(), 1600);
      }
    });
  });

  // popup timing
  const popup = document.getElementById('newsletter-popup');
  if (popup && !done()) {
    const timer = setTimeout(() => openPopup(), 6000);
    document.getElementById('popup-close')?.addEventListener('click', () => {
      clearTimeout(timer);
      closePopup();
    });
    popup.addEventListener('click', (e) => {
      if (e.target === popup) closePopup();
    });
  }

  function openPopup() {
    popup.classList.add('is-open');
    popup.setAttribute('aria-hidden', 'false');
  }
  function closePopup() {
    popup.classList.remove('is-open');
    popup.setAttribute('aria-hidden', 'true');
  }
}

/* --------------------------------------------------------- contact form */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const mark = (input, valid) => {
    input.closest('.field')?.classList.toggle('is-invalid', !valid);
    return valid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    const okName = mark(name, name.value.trim().length > 0);
    const okEmail = mark(email, emailOk(email.value));
    const okMessage = mark(message, message.value.trim().length > 0);

    if (!okName || !okEmail || !okMessage) {
      status.className = 'form-status';
      status.textContent = '';
      return;
    }

    status.className = 'form-status is-success';
    status.textContent =
      "Thank you! Your order request has been sent. Leanna will be in touch within one business day.";
    form.reset();
    form.querySelectorAll('.field').forEach((f) => f.classList.remove('is-invalid'));
  });

  // clear error state on input
  form.querySelectorAll('input, textarea').forEach((el) => {
    el.addEventListener('input', () => el.closest('.field')?.classList.remove('is-invalid'));
  });
}

/* -------------------------------------------------------------- prefill */
function initPrefill() {
  const message = document.getElementById('message');
  if (!message || message.value.trim()) return;
  const params = new URLSearchParams(window.location.search);
  const item = params.get('item');
  const cake = params.get('cake');
  if (cake) message.value = `I would like to order a ${cake}.\n\n`;
  else if (item) message.value = `I would like to order: ${item}.\n\n`;
}
