(function () {
  'use strict';

  const MOBILE_MAX = 880;

  function initMobileNavigation() {
    const header = document.querySelector('.site-header');
    const shell = header?.querySelector('.nav-shell');
    const sourceNav = shell?.querySelector('.main-nav, .nav-links');
    if (!header || !shell || !sourceNav || document.querySelector('.mobile-menu-overlay')) return;

    let menuButton = shell.querySelector('.menu-toggle');
    if (!menuButton) {
      menuButton = document.createElement('button');
      menuButton.type = 'button';
      menuButton.className = 'menu-toggle mobile-menu-created';
      menuButton.innerHTML = '<span></span><span></span><span></span>';
      shell.appendChild(menuButton);
    }

    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.id = 'mobileMenuOverlay';
    overlay.setAttribute('aria-hidden', 'true');

    const panel = document.createElement('div');
    panel.className = 'mobile-menu-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', document.documentElement.lang.startsWith('en') ? 'Mobile navigation' : 'Mobile Navigation');

    const top = document.createElement('div');
    top.className = 'mobile-menu-top';

    const mark = document.createElement('a');
    mark.className = 'mobile-menu-brand';
    const brand = shell.querySelector('.brand');
    mark.href = brand?.getAttribute('href') || 'index.html';
    mark.setAttribute('aria-label', brand?.getAttribute('aria-label') || 'FUCHSINO');
    const brandImage = brand?.querySelector('img');
    if (brandImage) {
      const cloneImage = brandImage.cloneNode(true);
      cloneImage.removeAttribute('loading');
      cloneImage.className = 'mobile-menu-logo';
      mark.appendChild(cloneImage);
    } else {
      mark.textContent = 'FUCHSINO';
    }

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'mobile-menu-close';
    closeButton.setAttribute('aria-label', document.documentElement.lang.startsWith('en') ? 'Close menu' : 'Menü schließen');
    closeButton.innerHTML = '<span></span><span></span>';

    top.append(mark, closeButton);

    const content = document.createElement('div');
    content.className = 'mobile-menu-content';

    const intro = document.createElement('p');
    intro.className = 'mobile-menu-eyebrow';
    intro.textContent = 'FUCHSINO';

    const links = document.createElement('nav');
    links.className = 'mobile-menu-links';
    links.setAttribute('aria-label', sourceNav.getAttribute('aria-label') || 'Navigation');

    const footer = document.createElement('div');
    footer.className = 'mobile-menu-footer';
    footer.innerHTML = '<span>RA-4 PHOTO PAPER</span><span aria-hidden="true">•</span><span>PRINTING SUPPLIES</span>';

    content.append(intro, links, footer);
    panel.append(top, content);
    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    menuButton.setAttribute('aria-controls', overlay.id);
    menuButton.setAttribute('aria-haspopup', 'dialog');
    menuButton.setAttribute('aria-expanded', 'false');

    function syncLabels() {
      const english = document.documentElement.lang.startsWith('en');
      menuButton.setAttribute('aria-label', english ? 'Open menu' : 'Menü öffnen');
      closeButton.setAttribute('aria-label', english ? 'Close menu' : 'Menü schließen');
      panel.setAttribute('aria-label', english ? 'Mobile navigation' : 'Mobile Navigation');
    }

    function rebuildLinks() {
      links.replaceChildren();
      const sourceLinks = Array.from(sourceNav.querySelectorAll('a[href]'));
      sourceLinks.forEach((source, index) => {
        const link = source.cloneNode(true);
        link.removeAttribute('style');
        link.classList.remove('btn', 'btn-primary', 'btn-secondary', 'btn-small');
        link.classList.add('mobile-menu-link');
        link.style.setProperty('--mobile-link-index', String(index));
        if (source.matches('[aria-current="page"], .active')) link.classList.add('is-current');
        links.appendChild(link);
      });
    }

    function isOpen() {
      return overlay.classList.contains('is-open');
    }

    function openMenu() {
      rebuildLinks();
      syncLabels();
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      menuButton.setAttribute('aria-expanded', 'true');
      document.body.classList.add('mobile-menu-open');
      sourceNav.classList.remove('open');
      requestAnimationFrame(() => closeButton.focus({ preventScroll: true }));
    }

    function closeMenu(returnFocus) {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      menuButton.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('mobile-menu-open', 'menu-open');
      sourceNav.classList.remove('open');
      if (returnFocus) menuButton.focus({ preventScroll: true });
    }

    menuButton.addEventListener('click', function () {
      if (window.innerWidth > MOBILE_MAX) return;
      isOpen() ? closeMenu(false) : openMenu();
    });

    closeButton.addEventListener('click', () => closeMenu(true));
    overlay.addEventListener('click', function (event) {
      const link = event.target.closest('.mobile-menu-link');
      if (link) closeMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) closeMenu(true);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > MOBILE_MAX && isOpen()) closeMenu(false);
    }, { passive: true });

    document.addEventListener('fuchsino:languagechange', function () {
      syncLabels();
      rebuildLinks();
    });

    document.body.classList.add('mobile-nav-ready');
    syncLabels();
    rebuildLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNavigation, { once: true });
  } else {
    initMobileNavigation();
  }
})();
