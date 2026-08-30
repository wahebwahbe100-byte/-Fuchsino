(() => {
  'use strict';

  const STORAGE_KEY = 'fuchsinoLanguage';
  const SUPPORTED_LANGUAGES = new Set(['de', 'en']);
  const switchers = Array.from(document.querySelectorAll('.language-switcher'));

  if (!switchers.length) return;

  const normalizeLanguage = (value) => {
    const lang = String(value || '').trim().toLowerCase().split('-')[0];
    return SUPPORTED_LANGUAGES.has(lang) ? lang : 'de';
  };

  const currentLanguage = () => normalizeLanguage(document.documentElement.lang);

  const readSavedLanguage = () => {
    try {
      const raw = String(localStorage.getItem(STORAGE_KEY) || '').trim().toLowerCase().split('-')[0];
      return SUPPORTED_LANGUAGES.has(raw) ? raw : null;
    } catch (_) {
      return null;
    }
  };

  const saveLanguage = (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      // Switching still works when storage is disabled (private/restricted mode).
    }
  };

  const buildDestination = (option) => {
    const href = option.getAttribute('href');
    if (!href) return null;

    let target;
    let current;
    try {
      target = new URL(href, document.baseURI);
      current = new URL(window.location.href);
    } catch (_) {
      return href;
    }

    // Keep query parameters between equivalent translated pages.
    if (!target.search && current.search) {
      target.search = current.search;
    }

    // Only preserve anchors on pages whose DE/EN versions share the same IDs.
    if (option.dataset.preserveHash === 'true' && !target.hash && current.hash) {
      target.hash = current.hash;
    }

    return target.href;
  };

  const closeSwitcher = (switcher, restoreFocus = false) => {
    const trigger = switcher.querySelector('.language-trigger');
    switcher.classList.remove('is-open');
    trigger?.setAttribute('aria-expanded', 'false');
    if (restoreFocus) trigger?.focus();
  };

  const closeAll = (except = null) => {
    switchers.forEach((switcher) => {
      if (switcher !== except) closeSwitcher(switcher);
    });
  };

  const openSwitcher = (switcher, focusFirst = false) => {
    closeAll(switcher);
    const trigger = switcher.querySelector('.language-trigger');
    switcher.classList.add('is-open');
    trigger?.setAttribute('aria-expanded', 'true');

    if (focusFirst) {
      switcher.querySelector('.language-option')?.focus();
    }
  };

  const syncSwitcher = (switcher) => {
    const lang = currentLanguage();
    const trigger = switcher.querySelector('.language-trigger');
    const code = trigger?.querySelector('.lang-code');
    const triggerFlag = trigger?.querySelector('.flag img');
    const options = Array.from(switcher.querySelectorAll('.language-option[data-lang]'));
    const active = options.find((option) => normalizeLanguage(option.dataset.lang) === lang);

    options.forEach((option) => {
      const isActive = normalizeLanguage(option.dataset.lang) === lang;
      option.classList.toggle('is-active', isActive);
      if (isActive) option.setAttribute('aria-current', 'true');
      else option.removeAttribute('aria-current');
    });

    if (code) code.textContent = lang.toUpperCase();

    const activeFlag = active?.querySelector('.flag img');
    if (triggerFlag && activeFlag) {
      triggerFlag.src = activeFlag.src;
      triggerFlag.alt = '';
    }

    closeSwitcher(switcher);
  };

  const isHistoryTraversal = () => {
    try {
      return performance.getEntriesByType('navigation')?.[0]?.type === 'back_forward';
    } catch (_) {
      return false;
    }
  };

  const applySavedPreference = () => {
    const saved = readSavedLanguage();
    if (!saved || saved === currentLanguage() || isHistoryTraversal()) return false;

    const option = document.querySelector(`.language-option[data-lang="${saved}"]`);
    if (!option) return false;

    const destination = buildDestination(option);
    if (!destination || destination === window.location.href) return false;

    // replace() avoids adding an unwanted redirect step to browser history.
    window.location.replace(destination);
    return true;
  };

  // Remember an explicit DE/EN choice on future direct visits, while still
  // allowing Back/Forward to show the page the user actually navigated to.
  if (applySavedPreference()) return;

  switchers.forEach((switcher) => {
    const trigger = switcher.querySelector('.language-trigger');
    const menu = switcher.querySelector('.language-menu');
    const options = Array.from(switcher.querySelectorAll('.language-option[data-lang]'));

    if (!trigger || !menu || !options.length) return;

    syncSwitcher(switcher);

    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      if (switcher.classList.contains('is-open')) closeSwitcher(switcher);
      else openSwitcher(switcher);
    });

    trigger.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      event.preventDefault();
      openSwitcher(switcher, true);
      if (event.key === 'ArrowUp') options.at(-1)?.focus();
    });

    options.forEach((option, index) => {
      option.addEventListener('click', (event) => {
        const lang = normalizeLanguage(option.dataset.lang);
        const destination = buildDestination(option);

        saveLanguage(lang);
        closeSwitcher(switcher);

        // Keep the plain <a href> behavior as fallback if URL parsing fails.
        if (!destination) return;

        event.preventDefault();
        if (destination === window.location.href) return;
        window.location.assign(destination);
      });

      option.addEventListener('keydown', (event) => {
        let nextIndex = null;

        if (event.key === 'ArrowDown') nextIndex = (index + 1) % options.length;
        else if (event.key === 'ArrowUp') nextIndex = (index - 1 + options.length) % options.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = options.length - 1;

        if (nextIndex !== null) {
          event.preventDefault();
          options[nextIndex]?.focus();
          return;
        }

        if (event.key === 'Escape') {
          event.preventDefault();
          closeSwitcher(switcher, true);
        }
      });
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.language-switcher')) closeAll();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const open = switchers.find((switcher) => switcher.classList.contains('is-open'));
    if (!open) return;
    event.preventDefault();
    closeSwitcher(open, true);
  });

  // BFCache can restore an old open-menu/active state; resync on return.
  window.addEventListener('pageshow', () => {
    switchers.forEach(syncSwitcher);
  });
})();
