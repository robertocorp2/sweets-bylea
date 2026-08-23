const ready = (fn) => {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
};

ready(() => {
  initHeader();
  initMobileMenu();
  initReveal();
  initFilters();
  initContactForm();
  initPrefill();
});

function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('mobile-close');
  if (!toggle || !menu) return;
  const shut = () => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  toggle.addEventListener('click', () => {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });
  close?.addEventListener('click', shut);
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', shut));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) shut();
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  items.forEach((item) => observer.observe(item));
}

function initFilters() {
  document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.closest('[role="tablist"]');
      const grid = group?.nextElementSibling;
      if (!group || !grid) return;
      group.querySelectorAll('[data-filter]').forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      const filter = button.dataset.filter;
      grid.querySelectorAll('[data-category]').forEach((item) => {
        item.hidden = filter !== 'all' && item.dataset.category !== filter;
      });
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const locale = form.dataset.locale === 'es' ? 'es' : 'en';
  const emailOk = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  const mark = (input, valid) => {
    input.closest('.field')?.classList.toggle('is-invalid', !valid);
    return valid;
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');
    const valid = mark(name, name.value.trim().length > 0) && mark(email, emailOk(email.value)) && mark(message, message.value.trim().length > 0);
    if (!valid) {
      status.className = 'form-status is-error';
      status.textContent = locale === 'es' ? 'Revisa los campos marcados.' : 'Please review the highlighted fields.';
      return;
    }
    const eventDate = form.querySelector('#event-date')?.value || '';
    const phone = form.querySelector('#phone')?.value || '';
    const intro = locale === 'es' ? 'Hola Lea, me gustaría hablar sobre un pedido.' : 'Hi Lea, I would love to talk about an order.';
    const lines = [intro, `Name: ${name.value.trim()}`, `Email: ${email.value.trim()}`, phone && `Phone: ${phone}`, eventDate && `Event date: ${eventDate}`, `Details: ${message.value.trim()}`].filter(Boolean);
    const target = `${form.dataset.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(target, '_blank', 'noopener,noreferrer');
    status.className = 'form-status is-success';
    status.textContent = locale === 'es' ? 'WhatsApp se abrió con tu mensaje preparado.' : 'WhatsApp opened with your message ready to send.';
  });
  form.querySelectorAll('input, textarea').forEach((input) => input.addEventListener('input', () => input.closest('.field')?.classList.remove('is-invalid')));
}

function initPrefill() {
  const message = document.getElementById('message');
  if (!message || message.value.trim()) return;
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  const item = params.get('item');
  if (service) message.value = `I would like to ask about: ${service}.\n\n`;
  else if (item) message.value = `I would like to ask about: ${item}.\n\n`;
}
