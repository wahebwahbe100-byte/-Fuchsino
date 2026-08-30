(() => {
  const switchers = document.querySelectorAll('.language-switcher');
  if (!switchers.length) return;

  const closeAll = (except) => {
    switchers.forEach((switcher) => {
      if (switcher === except) return;
      switcher.classList.remove('is-open');
      switcher.querySelector('.language-trigger')?.setAttribute('aria-expanded', 'false');
    });
  };

  switchers.forEach((switcher) => {
    const trigger = switcher.querySelector('.language-trigger');
    const menu = switcher.querySelector('.language-menu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const opening = !switcher.classList.contains('is-open');
      closeAll(opening ? switcher : null);
      switcher.classList.toggle('is-open', opening);
      trigger.setAttribute('aria-expanded', String(opening));
    });

    switcher.querySelectorAll('.language-option').forEach((option) => {
      option.addEventListener('click', (event) => {
        const lang = option.dataset.lang;
        if (lang) {
          try { localStorage.setItem('fuchsinoLanguage', lang); } catch (_) {}
        }
        if (option.dataset.preserveHash === 'true' && location.hash) {
          const href = option.getAttribute('href');
          if (href && !href.includes('#')) {
            event.preventDefault();
            location.href = href + location.hash;
          }
        }
      });
    });
  });

  document.addEventListener('click', () => closeAll());
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAll();
  });
})();
