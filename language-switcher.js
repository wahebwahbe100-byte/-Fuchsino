(function () {
  'use strict';

  var STORAGE_KEY = 'fuchsinoLanguage';
  var SUPPORTED_LANGUAGES = { de: true, en: true };
  var switchers = document.querySelectorAll('.language-switcher');

  if (!switchers || !switchers.length) return;

  function toArray(list) {
    return Array.prototype.slice.call(list || []);
  }

  switchers = toArray(switchers);

  function normalizeLanguage(value) {
    var lang = String(value || '').replace(/^\s+|\s+$/g, '').toLowerCase().split('-')[0];
    return SUPPORTED_LANGUAGES[lang] ? lang : 'de';
  }

  function currentLanguage() {
    return normalizeLanguage(document.documentElement.getAttribute('lang'));
  }

  function readSavedLanguage() {
    try {
      var raw = String(window.localStorage.getItem(STORAGE_KEY) || '')
        .replace(/^\s+|\s+$/g, '')
        .toLowerCase()
        .split('-')[0];
      return SUPPORTED_LANGUAGES[raw] ? raw : null;
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // The language links still work when storage is disabled/restricted.
    }
  }

  function resolveUrl(href) {
    var link = document.createElement('a');
    link.href = href;
    return link;
  }

  function buildDestination(option) {
    var href = option.getAttribute('href');
    var target;
    var current;

    if (!href) return null;

    try {
      target = resolveUrl(href);
      current = resolveUrl(window.location.href);

      // Keep query parameters between equivalent translated pages.
      if (!target.search && current.search) {
        target.search = current.search;
      }

      // Preserve anchors only where translated pages intentionally share IDs.
      if (option.getAttribute('data-preserve-hash') === 'true' && !target.hash && current.hash) {
        target.hash = current.hash;
      }

      return target.href || href;
    } catch (error) {
      return href;
    }
  }

  function getTrigger(switcher) {
    return switcher.querySelector('.language-trigger');
  }

  function closeSwitcher(switcher, restoreFocus) {
    var trigger = getTrigger(switcher);
    switcher.classList.remove('is-open');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus && trigger && trigger.focus) trigger.focus();
  }

  function closeAll(except) {
    var i;
    for (i = 0; i < switchers.length; i += 1) {
      if (switchers[i] !== except) closeSwitcher(switchers[i], false);
    }
  }

  function openSwitcher(switcher, focusFirst) {
    var trigger = getTrigger(switcher);
    var firstOption;

    closeAll(switcher);
    switcher.classList.add('is-open');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');

    if (focusFirst) {
      firstOption = switcher.querySelector('.language-option');
      if (firstOption && firstOption.focus) firstOption.focus();
    }
  }

  function findActiveOption(options, lang) {
    var i;
    for (i = 0; i < options.length; i += 1) {
      if (normalizeLanguage(options[i].getAttribute('data-lang')) === lang) return options[i];
    }
    return null;
  }

  function syncSwitcher(switcher) {
    var lang = currentLanguage();
    var trigger = getTrigger(switcher);
    var code = trigger ? trigger.querySelector('.lang-code') : null;
    var triggerFlag = trigger ? trigger.querySelector('.flag img') : null;
    var options = toArray(switcher.querySelectorAll('.language-option[data-lang]'));
    var active = findActiveOption(options, lang);
    var activeFlag = active ? active.querySelector('.flag img') : null;
    var i;
    var isActive;

    for (i = 0; i < options.length; i += 1) {
      isActive = normalizeLanguage(options[i].getAttribute('data-lang')) === lang;
      if (isActive) {
        options[i].classList.add('is-active');
        options[i].setAttribute('aria-current', 'true');
      } else {
        options[i].classList.remove('is-active');
        options[i].removeAttribute('aria-current');
      }
    }

    if (code) code.textContent = lang.toUpperCase();

    if (triggerFlag && activeFlag) {
      triggerFlag.setAttribute('src', activeFlag.getAttribute('src'));
      triggerFlag.setAttribute('alt', '');
    }

    closeSwitcher(switcher, false);
  }

  function isHistoryTraversal() {
    try {
      if (window.performance && typeof window.performance.getEntriesByType === 'function') {
        var entries = window.performance.getEntriesByType('navigation');
        if (entries && entries.length && entries[0].type === 'back_forward') return true;
      }

      // Older browser fallback (TYPE_BACK_FORWARD = 2).
      if (window.performance && window.performance.navigation && window.performance.navigation.type === 2) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  function applySavedPreference() {
    var saved = readSavedLanguage();
    var option;
    var destination;

    if (!saved || saved === currentLanguage() || isHistoryTraversal()) return false;

    option = document.querySelector('.language-option[data-lang="' + saved + '"]');
    if (!option) return false;

    destination = buildDestination(option);
    if (!destination || destination === window.location.href) return false;

    // replace() avoids adding an unwanted automatic redirect step to history.
    window.location.replace(destination);
    return true;
  }

  function elementIsInsideLanguageSwitcher(element) {
    while (element && element !== document) {
      if (element.nodeType === 1 && element.classList && element.classList.contains('language-switcher')) {
        return true;
      }
      element = element.parentNode;
    }
    return false;
  }

  function bindOption(option, index, options, switcher) {
    option.addEventListener('click', function (event) {
      var lang = normalizeLanguage(option.getAttribute('data-lang'));
      var destination = buildDestination(option);

      saveLanguage(lang);
      closeSwitcher(switcher, false);

      // Keep the normal <a href> navigation as a fallback if resolving fails.
      if (!destination) return;

      event.preventDefault();
      if (destination === window.location.href) return;
      window.location.assign(destination);
    }, false);

    option.addEventListener('keydown', function (event) {
      var key = event.key || event.keyCode;
      var nextIndex = null;

      if (key === 'ArrowDown' || key === 40) nextIndex = (index + 1) % options.length;
      else if (key === 'ArrowUp' || key === 38) nextIndex = (index - 1 + options.length) % options.length;
      else if (key === 'Home' || key === 36) nextIndex = 0;
      else if (key === 'End' || key === 35) nextIndex = options.length - 1;

      if (nextIndex !== null) {
        event.preventDefault();
        if (options[nextIndex] && options[nextIndex].focus) options[nextIndex].focus();
        return;
      }

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        event.preventDefault();
        closeSwitcher(switcher, true);
      }
    }, false);
  }

  // Remember an explicit choice on future direct visits, while Back/Forward
  // continues to show the page the visitor actually navigated to.
  if (applySavedPreference()) return;

  function bindSwitcher(switcher) {
    var trigger = getTrigger(switcher);
    var menu = switcher.querySelector('.language-menu');
    var options = toArray(switcher.querySelectorAll('.language-option[data-lang]'));
    var i;

    if (!trigger || !menu || !options.length) return;

    syncSwitcher(switcher);

    trigger.addEventListener('click', function (event) {
      event.stopPropagation();
      if (switcher.classList.contains('is-open')) closeSwitcher(switcher, false);
      else openSwitcher(switcher, false);
    }, false);

    trigger.addEventListener('keydown', function (event) {
      var key = event.key || event.keyCode;
      if (key !== 'ArrowDown' && key !== 'ArrowUp' && key !== 40 && key !== 38) return;

      event.preventDefault();
      openSwitcher(switcher, true);

      if ((key === 'ArrowUp' || key === 38) && options.length) {
        options[options.length - 1].focus();
      }
    }, false);

    for (i = 0; i < options.length; i += 1) {
      bindOption(options[i], i, options, switcher);
    }
  }

  var switcherIndex;
  for (switcherIndex = 0; switcherIndex < switchers.length; switcherIndex += 1) {
    bindSwitcher(switchers[switcherIndex]);
  }

  document.addEventListener('click', function (event) {
    if (!elementIsInsideLanguageSwitcher(event.target)) closeAll(null);
  }, false);

  document.addEventListener('keydown', function (event) {
    var key = event.key || event.keyCode;
    var i;

    if (key !== 'Escape' && key !== 'Esc' && key !== 27) return;

    for (i = 0; i < switchers.length; i += 1) {
      if (switchers[i].classList.contains('is-open')) {
        event.preventDefault();
        closeSwitcher(switchers[i], true);
        return;
      }
    }
  }, false);

  // BFCache can restore an old open-menu/active state; resync on return.
  window.addEventListener('pageshow', function () {
    var i;
    for (i = 0; i < switchers.length; i += 1) syncSwitcher(switchers[i]);
  }, false);
}());
