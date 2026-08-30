# FUCHSINO bilingual website — browser-safe language switch

German is the default site at `/` and English is under `/en/`.

## Language switch fix (v3)

The language control now uses normal direct HTML links instead of JavaScript/localStorage.
This makes DE ↔ EN switching work reliably when:
- JavaScript is disabled or blocked
- browser storage is restricted
- pages are opened locally after extracting the ZIP
- the site is served normally from fuchsino.de
- mobile/desktop layouts are used

Every German page links directly to its exact English counterpart and every English page links directly back to German.
The active language is shown in the switch itself.

Validation performed:
- 14 bilingual HTML pages checked
- 386 local href/src/srcset references checked
- 0 broken local references
- no language-switcher JavaScript dependency remains
