# FUCHSINO bilingual website

German remains the default site at `/`.
The complete English version is available under `/en/`.
A responsive DE/EN language selector is included on the home page, all three product pages, the privacy page, and the legal notice page.

- Added bilingual standalone contact pages: `kontakt.html` (DE) and `en/contact.html` (EN), with email form linked to info@fuchsino.de.

## Language switcher browser fix

The DE/EN selector was hardened for browser navigation and mobile use:
- synchronizes the active language with the actual page language
- remembers an explicit DE/EN choice in localStorage
- preserves query parameters and supported page anchors during language changes
- handles browser Back/Forward state without leaving a stale selector UI
- keeps direct links as a no-JavaScript fallback
- adds keyboard navigation and Escape handling
- prevents the mobile language menu from overflowing the viewport
- cache-busts the language switcher CSS/JS references (`?v=2`)

### v3 cross-browser compatibility fix
- rewrote the language selector without optional chaining (`?.`) or `Array.prototype.at()`
- avoids relying on the `URL` constructor and `Element.closest()` for navigation
- includes older Performance Navigation fallback for Back/Forward detection
- keeps plain DE/EN anchor links as the final fallback
- added CSS fallbacks for older browser engines
- normalized `defer` and bumped language assets to `?v=3` so browsers do not keep the broken cached script
- added a `<noscript>` language-link fallback, so DE/EN links remain accessible when JavaScript is disabled

## v4 layout stability fix
- Unified viewport meta on every HTML page to stop mobile zoom/scale changes between pages.
- Added stable scrollbar handling to prevent horizontal layout jumps on desktop.
- Disabled automatic mobile text resizing differences between pages.
- Added overflow protection for wide media/content.
