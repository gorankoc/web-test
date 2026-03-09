- Poštivajući separation of concerns service - container - content no class no BEM
- Component scope: .hero article { } .hero h2 { }
- Veliki dio pravila je zbog sigurnosti.
- frontend koji razumije backend output

- accessibility:
alt
label
aria-current
keyboard navigation


- js:
    ne document.querySelector(".menu").onclick
- nego
  - button data-toggle="nav"
        document.querySelector('[data-toggle="nav"]')
            .addEventListener("click", toggleNav);
- Jer CSS klase se mijenjaju, ali data-* hookovi ostaju.



css/
base.css
layout.css
theme.css

components/
hero.css
cards.css
menu.css
footer.css

pages/
home.css

: 90 posto je u components


export function initHero() {
const hero = document.querySelector(".hero");
if (!hero) return; }

JS discipline

data attributes
nema inline eventa
clean init pattern


Nikad ne stiliziraj bez parent komponente.
article p  

nego ovako:
.news article p {


.hero
.hero-content
.hero-cta

hero {
position: relative;
padding: 6rem 0;
}

.hero-content {
max-width: 600px;
}

.hero h1 {
margin-bottom: 1rem;
}

- mozda bolje da sam koristio grid više nego li flexbox radi veće kontrole i manje weappera tj. contrainer-a
- Senior frontend devovi često dodaju veći container za velike ekrane:

css/
base.scss
layout.scss
theme.scss

components/
hero.scss
brands.scss
news.scss
contact-form.scss
map.scss
