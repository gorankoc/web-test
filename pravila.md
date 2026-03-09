1) Osnovni cilj
   • HTML neka bude maksimalno stabilan i predvidljiv (CMS ga generira / puni dinamički).
   • Dizajn i ponašanja rješavati prvenstveno kroz CSS i JS, uz minimalne promjene markup-a.

• Svaka sekcija/komponenta mora biti samostalna, ponovljivo renderirana i sigurna za multi-
site / multi-lang.

2) HTML pravila
   2.1 Semantika i struktura
   • Koristiti semantičke tagove gdje god ima smisla:
   main, header, section, article, nav, footer, figure, img, h1–h6, p, em, strong, ul/ol/li, a,
   button, form, label, input, textarea.
   • Jedan H1 po stranici (naslov stranice). Unutar sekcija h2/h3 po hijerarhiji.
   • main wrapper standard:
   • <main class="wrapper">
   • (dogovoreni “global wrapper”)
   • Ne preskakati hijerarhiju naslova (h2 → h4 bez h3).
   2.2 Minimalni markupi, bez “wrapper spam-a”
   • Ne uvoditi nepotrebne omotače.
   • Ako treba pomoćni wrapper radi layouta: maksimalno 1 wrapper unutar sekcije
   (dogovoreno).
   2.3 Navigacija i meniji (cms_menu)
   • Navigacija obavezno:
   • <nav>
   • <ul>
   • <li><a></a></li>
   • </ul>
   • </nav>
   •
   • Podmeniji kao ugniježđeni ul unutar li.
   • Aktivna stavka: preferirati aria-current="page" na linku (ili data-active="1" ako CMS tako
   radi).

2.4 Slike
• Slike uvijek u:
• <figure><img ...></figure>
•
• alt obavezan (prazan alt alt="" samo za dekorativne slike).
• Ne stavljati tekst u sliku ako nije nužno (SEO + accessibility).
2.5 Linkovi i buttoni
• Akcija = <button>, navigacija = <a>.
• Nema href="#" bez sprječavanja defaulta (ako je placeholder, staviti pravi URL ili button).
• Eksterni linkovi: rel="noopener" uz target="_blank".
2.6 Forme
• Svaki input mora imati <label for="">.
• Errori i validacija moraju biti vidljivi i čitljivi (ARIA preporuka: aria-invalid, aria-describedby).
2.7 CMS dinamički sadržaj
• CMS output uvijek escape-at:
o tekst: htmlspecialchars()
o URL: whitelist + htmlspecialchars()
o HTML “trusted blocks”: samo iz provjerenih izvora (ili pročišćeno sanitizerom).
• Ne renderirati raw HTML iz baze bez kontrole.
3) CSS pravila
   3.1 Filozofija
   • CSS mora biti komponentan: svaka sekcija ima svoj blok stilova.
   • Ne pisati stilove “po slučaju”, nego po strukturi: section article h2 itd.
   • Klase koristiti samo kad je potrebno (npr. varijacije ili hook za JS).
   3.2 Struktura datoteka (preporuka)
   • css/base.css (reset/typography/variables)
   • css/layout.css (grid, wrapper, global spacing)
   • css/components/*.css (po komponenti: hero, cards, menu, footer...)
   • css/pages/*.css (po stranici samo ako baš mora)

• css/theme.css (boje/brand varijable)
3.3 Naming i scope
• Ako koristite klase: držati se jednog standarda (npr. “component-first”):
o .hero, .hero article, .hero figure
o .services, .services article
• Ne koristiti ID selektore za stil (ID samo za JS sidra / anchor).
• Ne stilizirati generički div div div bez parent scope-a (previše krhko).
3.4 Responsive
• Mobile-first: osnovni stilovi za mobitel, zatim media query.
• Breakpointi dogovoreni (primjer): 576 / 768 / 992 / 1200.
• Nikad fiksirati visine bez razloga (osim hero po dogovoru).
3.5 Performance
• Izbjegavati ogromne “global” selektore koji udaraju sve (* {}) osim minimalnog reseta.
• Preferirati transform/opacity za animacije (ne layout thrashing).
• Minificirati CSS za produkciju (build ili ručno).
4) JS pravila
   4.1 Osnovni princip
   • JS nije za layout (to je CSS). JS je za:
   o toggles (menu, accordion, modal),
   o validaciju i UX u formama,
   o lazy-load / tracking po potrebi,
   o CMS admin UX (ako se radi u adminu).

4.2 “Hookovi” za JS
• Ne vezati JS na dizajnerske klase (koje se mijenjaju).
• Koristiti data-* atribute:
o data-toggle="nav"
o data-modal-open="id"
o data-accordion="item"
• ID koristiti samo kad treba anchor ili unikatni element.

4.3 Organizacija JS-a
• Jedan globalni entry: scripts/app.js
• Komponente: scripts/components/*.js (nav, modal, carousel, form...)
• Svaka komponenta ima init funkciju i radi samo unutar svog scope-a.
4.4 Eventi i kompatibilnost
• Koristiti addEventListener, izbjegavati inline onclick="..." (osim ako E5 već ima taj pattern –
tada barem standardizirati).
• Kod učitavanja:
o DOMContentLoaded za init,
o delegacija eventa za dinamički sadržaj (CMS učitava blokove).

4.5 Sigurnost u JS-u
• Nikad ne ubacivati raw HTML u DOM bez sanitizacije.
• Ako se radi AJAX:
o koristiti CSRF token,
o server-side validacija obavezna.

4.6 Error handling
• Svaki fetch/ajax mora imati:
o try/catch
o fallback poruku korisniku
o log u konzolu samo u dev modu

5) Pravila integracije s E5 CMS-om
   • Sadržaj stranice se gradi iz:
   o layout template (header/footer)
   o CMS sekcija/komponenti (Option 2 – sections/components)
   • Komponenta mora imati:
   o PHP render (server-side)
   o minimalan HTML contract (stabilni tagovi / data-hookovi)
   o svoj CSS blok
   o opcionalno svoj JS modul

Multi-language
• Sve stringove kroz language layer (ne hardcode).
• Fallback jezik: ako nema prijevoda, pad na default.
Multi-site
• Nikad ne hardcode domain/putanje.
• Putanje kroz config varijable / konstante.
6) Obavezna “kvaliteta” prije predaje
   • HTML validan (bez duplih H1, bez broken nesting).
   • Responsive provjeren (mobitel + desktop).
   • Lighthouse basics: nema ogromnih slika, lazy-load gdje treba.
   • Accessibility: alt, label, fokus, navigacija tipkovnicom.
   • Nema inline stilova osim iznimno.




main
section
article
nav
figure
img
h1
h2
h3
p


maximum 1 wrapper inside section

is very good.

Example good structure:

section
└ wrapper
└ content


<section class="services">
  <h2>Services</h2>

  <article>
    <h3>Web Development</h3>
  </article>
</section>