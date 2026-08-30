(function() {
  'use strict';
  const STORAGE_KEY = 'fuchsino_language_v1';
  const TEXT_EN = {
  "Zum Inhalt springen": "Skip to content",
  "Startseite": "Home",
  "Produkte": "Products",
  "Ablauf": "Process",
  "Logistik": "Logistics",
  "Über uns": "About us",
  "Kontakt": "Contact",
  "Angebot anfordern": "Request a quote",
  "01 · RA-4 Fotopapier": "01 · RA-4 Photo Paper",
  "Fotopapier in Rollen": "Photo paper in rolls",
  "für professionelle Ergebnisse": "for professional results",
  "Hochwertiges RA-4 Fotopapier für Fotolabore, Studios und professionelle Druckanwendungen – mit zuverlässiger Qualität und überzeugender Farbwiedergabe.": "High-quality RA-4 photo paper for photo labs, studios and professional printing applications – with reliable quality and convincing colour reproduction.",
  "Konstante Farbtreue": "Consistent colour fidelity",
  "Glänzende & matte Oberflächen": "Glossy & matte surfaces",
  "Flexible Rollenbreiten": "Flexible roll widths",
  "Professionelle Anwendungen": "Professional applications",
  "Produkte ansehen": "View products",
  "02 · Export & Vertrieb": "02 · Export & Distribution",
  "Zuverlässige Versorgung": "Reliable supply",
  "für den Nahen Osten": "for the Middle East",
  "FUCHSINO verbindet hochwertige Fotopapier-Produkte mit sicherer Logistik, persönlicher Betreuung und planbaren Lieferlösungen für Geschäftskunden.": "FUCHSINO combines high-quality photo paper products with secure logistics, personal support and predictable delivery solutions for business customers.",
  "Sichere Schutzverpackung": "Secure protective packaging",
  "Planbare Lieferzeiten": "Predictable delivery times",
  "Großhandelslösungen": "Wholesale solutions",
  "Persönliche Betreuung": "Personal support",
  "Lieferung anfragen": "Request delivery",
  "Logistik ansehen": "View logistics",
  "03 · Beratung & Service": "03 · Advice & Service",
  "Die passende Lösung": "The right solution",
  "für Ihren Bedarf": "for your needs",
  "Von der Produktauswahl bis zur laufenden Versorgung begleiten wir Sie mit technischer Beratung, Qualitätskontrolle und verlässlichem Kundenservice.": "From product selection to ongoing supply, we support you with technical advice, quality control and reliable customer service.",
  "Individuelle Produktempfehlung": "Individual product recommendation",
  "Bedarfs- & Mengenplanung": "Demand & quantity planning",
  "Mehrstufige Qualitätskontrolle": "Multi-stage quality control",
  "Langfristige Partnerschaft": "Long-term partnership",
  "Beratung vereinbaren": "Arrange a consultation",
  "Über FUCHSINO": "About FUCHSINO",
  "Unsere Produkte": "Our products",
  "RA-4 Fotopapier in Rollen": "RA-4 photo paper in rolls",
  "Verschiedene Flächengewichte und Oberflächen für professionelle Fotolabore, Händler und anspruchsvolle Druckanwendungen.": "Different paper weights and surfaces for professional photo labs, dealers and demanding printing applications.",
  "RA-4 Photopapier luster//Glossy 6 Inch": "RA-4 Photo Paper Luster//Glossy 6 Inch",
  "RA-4 Photopapier luster//Glossy 12 Inch": "RA-4 Photo Paper Luster//Glossy 12 Inch",
  "RA-4 Photopapier luster//Glossy 24 Inch": "RA-4 Photo Paper Luster//Glossy 24 Inch",
  "Rollenbreite: 6 Inch": "Roll width: 6 Inch",
  "Rollenbreite: 12 Inch": "Roll width: 12 Inch",
  "Rollenbreite: 24 Inch": "Roll width: 24 Inch",
  "Oberfläche: Luster / Glossy": "Surface: Luster / Glossy",
  "Produkt ansehen": "View product",
  "Verfügbarkeit anfragen": "Ask about availability",
  "Zuverlässige Qualität": "Reliable quality",
  "Premium RA-4 Fotopapier mit stabiler Qualität für konstante professionelle Ergebnisse.": "Premium RA-4 photo paper with stable quality for consistent professional results.",
  "Export in den Nahen Osten": "Export to the Middle East",
  "Planbare Versorgung und sichere Distribution für Händler, Fotolabore und Geschäftskunden.": "Predictable supply and secure distribution for dealers, photo labs and business customers.",
  "Persönlicher Service": "Personal service",
  "Technische Beratung, schnelle Kommunikation und Lösungen passend zu Ihrem Bedarf.": "Technical advice, fast communication and solutions tailored to your needs.",
  "So arbeiten wir": "How we work",
  "Vom Bedarf bis zur zuverlässigen Lieferung": "From your needs to reliable delivery",
  "Ein klarer Ablauf schafft Planungssicherheit und sorgt dafür, dass Produkt, Menge und Logistik zu Ihrem Geschäft passen.": "A clear process creates planning certainty and ensures that product, quantity and logistics fit your business.",
  "Bedarf verstehen": "Understand your needs",
  "Wir klären Anwendung, Oberfläche, Flächengewicht, Rollenformat und gewünschte Mengen.": "We clarify the application, surface, paper weight, roll format and required quantities.",
  "Produkt auswählen": "Select the product",
  "Sie erhalten eine passende Empfehlung und transparente Informationen zur verfügbaren Lösung.": "You receive a suitable recommendation and transparent information about the available solution.",
  "Lieferung planen": "Plan delivery",
  "Verpackung, Menge, Lieferweg und Zeitrahmen werden gemeinsam und planbar abgestimmt.": "Packaging, quantity, shipping route and timeframe are coordinated with you in a predictable way.",
  "Langfristig betreuen": "Long-term support",
  "Auch nach der Lieferung bleiben wir Ansprechpartner für Folgebedarf und technische Fragen.": "Even after delivery, we remain your contact for repeat requirements and technical questions.",
  "Lagerung & Versand": "Storage & Shipping",
  "Sicher vom Lager bis zu Ihrem Fotolabor": "Safe from our warehouse to your photo lab",
  "Professionelle Verpackung, geschützte Palettierung und zuverlässige Logistik sorgen dafür, dass jede Fotopapierrolle in optimalem Zustand ankommt.": "Professional packaging, protected palletising and reliable logistics ensure that every photo paper roll arrives in optimal condition.",
  "Internationale Logistik": "International logistics",
  "Sorgfältig verpackte Ware für sichere und planbare Lieferungen.": "Carefully packaged goods for safe and predictable deliveries.",
  "Geschützte Palettierung": "Protected palletising",
  "Stabil gestapelte Rollen mit Transportschutz für längere Strecken.": "Securely stacked rolls with transport protection for longer routes.",
  "Professionelle Lagerung": "Professional storage",
  "Saubere, trockene und kontrollierte Lagerbedingungen für konstante Qualität.": "Clean, dry and controlled storage conditions for consistent quality.",
  "Qualitätskontrolle": "Quality control",
  "Mehrstufige Prüfung jeder Charge": "Multi-stage inspection of every batch",
  "Flexible Formate": "Flexible formats",
  "Rollenbreiten für professionelle Labore": "Roll widths for professional labs",
  "Sichere Logistik": "Secure logistics",
  "Schutzverpackung für internationale Sendungen": "Protective packaging for international shipments",
  "Ihr Partner für professionelles RA-4 Fotopapier": "Your partner for professional RA-4 photo paper",
  "FUCHSINO ist auf den Export und Vertrieb von hochwertigem RA-4 Fotopapier in Rollen spezialisiert.": "FUCHSINO specialises in the export and distribution of high-quality RA-4 photo paper in rolls.",
  "Wir arbeiten mit führenden Herstellern zusammen und bieten Fotolaboren und Händlern im Nahen Osten verlässliche Qualität, wettbewerbsfähige Konditionen und persönlichen Service.": "We work with leading manufacturers and offer photo labs and dealers in the Middle East reliable quality, competitive terms and personal service.",
  "Von der passenden Produktauswahl bis zur sicheren internationalen Lieferung begleiten wir Sie zuverlässig.": "From selecting the right product to secure international delivery, we support you reliably throughout the process.",
  "Jetzt kontaktieren": "Contact us now",
  "Wir beliefern Fotolabore und Händler mit hochwertigem RA-4 Fotopapier in Rollen für professionelle Anwendungen.": "We supply photo labs and dealers with high-quality RA-4 photo paper in rolls for professional applications.",
  "Schnelllinks": "Quick links",
  "FUCHSINO. Alle Rechte vorbehalten.": "FUCHSINO. All rights reserved.",
  "Datenschutz": "Privacy",
  "Impressum": "Legal notice",
  "Datenschutzhinweis": "Privacy notice",
  "Diese Website verwendet ausschließlich technisch notwendige Cookies bzw. lokale Speicherfunktionen, damit grundlegende Funktionen und die Sicherheit der Website gewährleistet werden. Es werden keine Statistik-, Marketing- oder Tracking-Cookies ohne Ihre Einwilligung gesetzt.": "This website only uses technically necessary cookies or local storage functions to ensure basic website functionality and security. No analytics, marketing or tracking cookies are set without your consent.",
  "Datenschutzerklärung": "Privacy policy",
  "Hinweis schließen": "Close notice",
  "← Zurück zu Unsere Produkte": "← Back to our products",
  "RA-4 Photopapier": "RA-4 Photo Paper",
  "Professionelles RA-4 Fotopapier in Rollen für Fotolabore, Händler und anspruchsvolle Druckanwendungen. Die 6-Inch-Ausführung kombiniert eine professionelle Luster-/Glossy-Oberfläche mit einer praxisgerechten Rollenbreite.": "Professional RA-4 photo paper in rolls for photo labs, dealers and demanding printing applications. The 6-inch version combines a professional luster/glossy surface with a practical roll width.",
  "Professionelles RA-4 Fotopapier in Rollen für Fotolabore, Händler und anspruchsvolle Druckanwendungen. Die 12-Inch-Ausführung kombiniert eine professionelle Luster-/Glossy-Oberfläche mit einer praxisgerechten Rollenbreite.": "Professional RA-4 photo paper in rolls for photo labs, dealers and demanding printing applications. The 12-inch version combines a professional luster/glossy surface with a practical roll width.",
  "Professionelles RA-4 Fotopapier in Rollen für Fotolabore, Händler und anspruchsvolle Druckanwendungen. Die 24-Inch-Ausführung kombiniert eine professionelle Luster-/Glossy-Oberfläche mit einer praxisgerechten Rollenbreite.": "Professional RA-4 photo paper in rolls for photo labs, dealers and demanding printing applications. The 24-inch version combines a professional luster/glossy surface with a practical roll width.",
  "Rollenbreite": "Roll width",
  "Oberfläche": "Surface",
  "Verfahren": "Process",
  "RA-4 Fotopapier": "RA-4 Photo Paper",
  "Anwendung": "Application",
  "Professionelle Fotolabore": "Professional photo labs",
  "Produkt anfragen": "Request product",
  "Für professionelle Anwendungen": "For professional applications",
  "Geeignet für professionelle Foto- und Laboranwendungen, bei denen eine konsistente Darstellung und eine hochwertige Oberfläche gefragt sind.": "Suitable for professional photo and lab applications where consistent reproduction and a high-quality surface are required.",
  "Beratung & Verfügbarkeit": "Advice & availability",
  "Weitere technische Spezifikationen, Verpackungseinheiten, verfügbare Längen und Liefermöglichkeiten erhalten Sie direkt auf Anfrage bei FUCHSINO.": "Further technical specifications, packaging units, available lengths and delivery options are available directly from FUCHSINO on request.",
  "Interesse an 6 Inch?": "Interested in 6 Inch?",
  "Interesse an 12 Inch?": "Interested in 12 Inch?",
  "Interesse an 24 Inch?": "Interested in 24 Inch?",
  "Kontaktieren Sie uns für Preis, Verfügbarkeit und Lieferdetails.": "Contact us for pricing, availability and delivery details."
};
  const ATTR_EN = {
  "FUCHSINO Startseite": "FUCHSINO home",
  "FUCHSINO Logo": "FUCHSINO logo",
  "Menü öffnen": "Open menu",
  "Hauptnavigation": "Main navigation",
  "FUCHSINO Leistungen": "FUCHSINO services",
  "Hochglänzende RA-4 Fotopapierrolle": "High-gloss RA-4 photo paper roll",
  "Vorteile": "Benefits",
  "Verpacktes Fotopapier und Logistik im Lager": "Packaged photo paper and warehouse logistics",
  "Qualitätsprüfung von professionellen Fotoabzügen": "Quality inspection of professional photo prints",
  "Hero-Slider Steuerung": "Hero slider controls",
  "Hero-Inhalt auswählen": "Select hero content",
  "RA-4 Fotopapier anzeigen": "Show RA-4 photo paper",
  "Export und Vertrieb anzeigen": "Show export and distribution",
  "Beratung und Service anzeigen": "Show advice and service",
  "Vorheriger Slide": "Previous slide",
  "Nächster Slide": "Next slide",
  "RA-4 Photopapier luster//Glossy 6 Inch ansehen": "View RA-4 Photo Paper Luster//Glossy 6 Inch",
  "RA-4 Photopapier luster//Glossy 12 Inch ansehen": "View RA-4 Photo Paper Luster//Glossy 12 Inch",
  "RA-4 Photopapier luster//Glossy 24 Inch ansehen": "View RA-4 Photo Paper Luster//Glossy 24 Inch",
  "Kontakt zu FUCHSINO": "Contact FUCHSINO",
  "RA-4 Photopapier luster//Glossy 6 Inch": "RA-4 Photo Paper Luster//Glossy 6 Inch",
  "RA-4 Photopapier luster//Glossy 12 Inch": "RA-4 Photo Paper Luster//Glossy 12 Inch",
  "RA-4 Photopapier luster//Glossy 24 Inch": "RA-4 Photo Paper Luster//Glossy 24 Inch",
  "Internationale Logistik": "International logistics",
  "Geschützte Palettierung": "Protected palletising",
  "Professionelle Lagerung": "Professional storage",
  "Sprache ändern": "Change language",
  "Sprache auswählen": "Select language",
  "Datenschutzhinweis": "Privacy notice",
  "Hinweis schließen": "Close notice"
};
  const META_EN = {
  "index.html": {
    "title": "RA-4 Photo Paper & Photo Paper Rolls | FUCHSINO",
    "description": "FUCHSINO supplies professional RA-4 photo paper in rolls for photo labs and dealers – with reliable quality, advice and export to the Middle East.",
    "og_title": "RA-4 Photo Paper & Photo Paper Rolls | FUCHSINO",
    "og_description": "Professional RA-4 photo paper in rolls for photo labs and dealers – reliable quality, advice and international logistics.",
    "twitter_description": "Professional RA-4 photo paper in rolls with reliable logistics and personal advice.",
    "image_alt": "FUCHSINO RA-4 photo paper in rolls"
  },
  "product-6-inch.html": {
    "title": "RA-4 Photo Paper Luster//Glossy 6 Inch | FUCHSINO",
    "description": "RA-4 Photo Paper Luster//Glossy 6 Inch for professional photo labs and dealers. Product information and enquiries at FUCHSINO."
  },
  "product-12-inch.html": {
    "title": "RA-4 Photo Paper Luster//Glossy 12 Inch | FUCHSINO",
    "description": "RA-4 Photo Paper Luster//Glossy 12 Inch for professional photo labs and dealers. Product information and enquiries at FUCHSINO."
  },
  "product-24-inch.html": {
    "title": "RA-4 Photo Paper Luster//Glossy 24 Inch | FUCHSINO",
    "description": "RA-4 Photo Paper Luster//Glossy 24 Inch for professional photo labs and dealers. Product information and enquiries at FUCHSINO."
  }
};
  const FLAGS = { de: 'lang-de.svg', en: 'lang-gb.svg' };

  function getLanguage() {
    try { return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'de'; } catch (_) { return 'de'; }
  }
  function setLanguage(language) {
    try { localStorage.setItem(STORAGE_KEY, language === 'en' ? 'en' : 'de'); } catch (_) {}
    window.location.reload();
  }
  const language = getLanguage();
  const switcher = document.getElementById('languageSwitcher');
  const button = document.getElementById('languageSwitcherButton');
  const menu = document.getElementById('languageSwitcherMenu');
  const flag = document.getElementById('languageCurrentFlag');
  const code = document.getElementById('languageCurrentCode');
  const options = Array.from(document.querySelectorAll('.language-option[data-language]'));

  function setOpen(open) {
    if (!switcher || !button) return;
    switcher.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  }
  function updateSwitcher() {
    if (flag) flag.src = FLAGS[language];
    if (code) code.textContent = language.toUpperCase();
    if (button) button.setAttribute('aria-label', language === 'en' ? 'Change language' : 'Sprache ändern');
    if (menu) menu.setAttribute('aria-label', language === 'en' ? 'Select language' : 'Sprache auswählen');
    options.forEach(option => option.classList.toggle('is-active', option.dataset.language === language));
  }
  button?.addEventListener('click', function(event) { event.stopPropagation(); setOpen(!switcher.classList.contains('is-open')); });
  options.forEach(option => option.addEventListener('click', function() {
    const next = option.dataset.language === 'en' ? 'en' : 'de';
    if (next === language) return setOpen(false);
    setLanguage(next);
  }));
  document.addEventListener('click', event => { if (switcher && !switcher.contains(event.target)) setOpen(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setOpen(false); });

  function replaceTrimmed(value, replacement) {
    const start = value.search(/\S/);
    if (start === -1) return value;
    const trailing = value.length - value.trimEnd().length;
    return value.slice(0, start) + replacement + (trailing ? value.slice(value.length - trailing) : '');
  }
  function translateTextNode(node) {
    if (!node || !node.nodeValue || !node.parentElement) return;
    if (node.parentElement.closest('.language-switcher, script, style, noscript, textarea')) return;
    const key = node.nodeValue.trim();
    if (key && Object.prototype.hasOwnProperty.call(TEXT_EN, key)) node.nodeValue = replaceTrimmed(node.nodeValue, TEXT_EN[key]);
  }
  function translateAttributes(root) {
    const elements = [];
    if (root?.nodeType === 1) elements.push(root);
    if (root?.querySelectorAll) elements.push(...root.querySelectorAll('[aria-label], [title], [placeholder], [alt]'));
    elements.forEach(element => {
      if (element.closest?.('.language-switcher')) return;
      ['aria-label','title','placeholder','alt'].forEach(attribute => {
        const value = element.getAttribute?.(attribute);
        if (value && Object.prototype.hasOwnProperty.call(ATTR_EN, value)) element.setAttribute(attribute, ATTR_EN[value]);
      });
    });
  }
  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) return translateTextNode(root);
    if (![Node.ELEMENT_NODE, Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE].includes(root.nodeType)) return;
    if (root.nodeType === Node.ELEMENT_NODE && root.closest?.('.language-switcher')) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
    translateAttributes(root);
  }
  function updateMetadata() {
    document.documentElement.lang = language === 'en' ? 'en-GB' : 'de-DE';
    document.documentElement.dir = 'ltr';
    if (language !== 'en') return;
    const filename = location.pathname.split('/').pop() || 'index.html';
    const meta = META_EN[filename] || (filename === '' ? META_EN['index.html'] : null);
    if (!meta) return;
    document.title = meta.title;
    const genericOgTitle = meta.og_title || meta.title;
    const genericOgDescription = meta.og_description || meta.description;
    const genericTwitterDescription = meta.twitter_description || meta.description;
    const updates = [
      ['meta[name="description"]', meta.description],
      ['meta[property="og:title"]', genericOgTitle],
      ['meta[property="og:description"]', genericOgDescription],
      ['meta[name="twitter:title"]', genericOgTitle],
      ['meta[name="twitter:description"]', genericTwitterDescription],
      ['meta[property="og:locale"]', 'en_GB'],
      ['meta[property="og:image:alt"]', meta.image_alt || 'FUCHSINO RA-4 photo paper in rolls']
    ];
    updates.forEach(([selector, value]) => document.querySelector(selector)?.setAttribute('content', value));
  }

  updateSwitcher();
  updateMetadata();
  if (language === 'en') {
    translateTree(document.body);
    const observer = new MutationObserver(mutations => mutations.forEach(mutation => mutation.addedNodes.forEach(node => translateTree(node))));
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
