/* =====================================================
   components.js — Shared HTML components injected
   into every page via JavaScript.

   TO EDIT NAVIGATION LINKS: edit the navLinks array
   TO EDIT FOOTER CONTENT: edit the footerData object
   TO EDIT CONTACT LINKS: edit the contactData object
   ===================================================== */

// -------------------------------------------------------
// SITE SETTINGS — edit name, title, contact details here
// -------------------------------------------------------
const SITE = {
  name: "Chris Upstone",
  initials: "CU",
  tagline: "Operator-Investor",
  email: "chris.upstone@iinet.net.au",
  linkedin: "https://www.linkedin.com/in/chrisupstone",
  location: "Perth, Western Australia",
  copyright: "Chris Upstone. All rights reserved."
};

// -------------------------------------------------------
// NAVIGATION — edit page labels and hrefs here
// -------------------------------------------------------
const navLinks = [
  { label: "Home",             href: "index.html" },
  { label: "About",            href: "about.html" },
  { label: "Track Record",     href: "track-record.html" },
  { label: "Board & Governance", href: "board.html" },
  { label: "Thinking",         href: "thinking.html" },
  { label: "Contact",          href: "contact.html" }
];

// -------------------------------------------------------
// SVG LOGO MARK — a geometric mark evoking infrastructure
// Two overlapping rectangles (transmission tower cross-
// section) with a connecting line — minimal, precise.
// -------------------------------------------------------
function logoMark() {
  return `<svg class="nav-logo__mark" viewBox="0 0 32 32" fill="none" aria-label="Chris Upstone logo mark" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/>
    <rect x="18" y="18" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/>
    <line x1="13.5" y1="13.5" x2="18.5" y2="18.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="28" cy="4" r="2.5" stroke="currentColor" stroke-width="1.5"/>
    <line x1="25.5" y1="5.5" x2="19" y2="9" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-dasharray="1 2"/>
  </svg>`;
}

// -------------------------------------------------------
// THEME TOGGLE
// -------------------------------------------------------
function themeToggleIcon(theme) {
  if (theme === 'dark') {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  }
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

// -------------------------------------------------------
// RENDER HEADER
// -------------------------------------------------------
function renderHeader() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const basePath = window.location.pathname.split('/').filter(Boolean).length > 1 ? '../' : '';
  const navHTML = navLinks.map(link => {
    const isActive = currentPage === link.href ? ' class="active"' : '';
    return `<li><a href="${basePath}${link.href}"${isActive}>${link.label}</a></li>`;
  }).join('');

  const mobileNavHTML = navLinks.map(link => {
    const isActive = currentPage === link.href ? ' class="active"' : '';
    return `<a href="${basePath}${link.href}"${isActive}>${link.label}</a>`;
  }).join('');

  return `
    <header class="site-header" role="banner">
      <div class="container">
        <nav class="nav-inner" aria-label="Primary navigation">
          <a href="${basePath}index.html" class="nav-logo" aria-label="${SITE.name} — Home">
            ${logoMark()}
            <span class="nav-logo__text">
              ${SITE.name}
              <span>${SITE.tagline}</span>
            </span>
          </a>
          <ul class="nav-links" role="list">
            ${navHTML}
          </ul>
          <div class="nav-actions">
            <button class="theme-toggle" data-theme-toggle aria-label="Switch to dark mode" title="Toggle light/dark mode">
              ${themeToggleIcon('light')}
            </button>
            <button class="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-nav">
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
    <nav class="nav-mobile" id="mobile-nav" aria-label="Mobile navigation">
      ${mobileNavHTML}
    </nav>
  `;
}

// -------------------------------------------------------
// RENDER FOOTER
// -------------------------------------------------------
function renderFooter() {
  const basePath = window.location.pathname.split('/').filter(Boolean).length > 1 ? '../' : '';
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <span class="footer-brand__name">${SITE.name}</span>
            <p class="footer-brand__tagline">Director, operator and investor across resources, ICT and infrastructure. Based in ${SITE.location}.</p>
          </div>
          <div class="footer-links">
            <div class="footer-col">
              <h4>Pages</h4>
              <ul role="list">
                ${navLinks.map(l => `<li><a href="${basePath}${l.href}">${l.label}</a></li>`).join('')}
              </ul>
            </div>
            <div class="footer-col">
              <h4>Connect</h4>
              <ul role="list">
                <li><a href="mailto:${SITE.email}" target="_blank" rel="noopener noreferrer">Email</a></li>
                <li><a href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} ${SITE.copyright}</p>
          <p>${SITE.location}</p>
        </div>
      </div>
    </footer>
  `;
}

// -------------------------------------------------------
// DARK MODE TOGGLE LOGIC
// -------------------------------------------------------
function initTheme() {
  const root = document.documentElement;
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);

  document.addEventListener('click', function(e) {
    const btn = e.target.closest('[data-theme-toggle]');
    if (!btn) return;
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    btn.innerHTML = themeToggleIcon(theme);
    btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!root.hasAttribute('data-theme')) {
      theme = e.matches ? 'dark' : 'light';
      root.setAttribute('data-theme', theme);
    }
  });
}

// -------------------------------------------------------
// MOBILE NAV TOGGLE
// -------------------------------------------------------
function initMobileNav() {
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.nav-toggle');
    if (!btn) return;
    const nav = document.getElementById('mobile-nav');
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    btn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  // Close on outside click
  document.addEventListener('click', function(e) {
    const nav = document.getElementById('mobile-nav');
    if (!nav) return;
    if (!e.target.closest('.nav-toggle') && !e.target.closest('#mobile-nav')) {
      nav.classList.remove('open');
      const btn = document.querySelector('.nav-toggle');
      if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    }
  });
}

// -------------------------------------------------------
// SCROLL REVEAL ANIMATION
// -------------------------------------------------------
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// -------------------------------------------------------
// HEADER HIDE-ON-SCROLL
// -------------------------------------------------------
function initScrollHeader() {
  let lastY = 0;
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 80) header.classList.add('site-header--hidden');
    else header.classList.remove('site-header--hidden');
    lastY = y;
  }, { passive: true });
}

// -------------------------------------------------------
// INIT — inject components and run inits
// -------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.outerHTML = renderHeader();
  if (footerEl) footerEl.outerHTML = renderFooter();
  initTheme();
  initMobileNav();
  initScrollReveal();
  initScrollHeader();
});
