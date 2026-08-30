# FUCHSINO website

The website uses one set of HTML pages. German is the default language and English is loaded dynamically from the central `lang.js` language file.

- No duplicate `/en/` pages are used.
- The DE / EN switch works on the same URL and remembers the visitor's selection.
- English can be opened directly with `?lang=en`.
- Product, legal, navigation, accessibility labels, metadata, and inquiry email wording are translated by the same language system.

## Contact + language update
- Added `kontakt.html` and connected Contact/quote links from the home, product and legal pages.
- German/English still use the same URL; the language changes only through `lang.js` and is saved in `localStorage`.
- Added the supplied German and UK flag images to the language toggle.
- Product pages open `kontakt.html` with the relevant product preselected.
