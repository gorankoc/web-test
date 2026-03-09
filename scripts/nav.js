export function initNav() {

    const toggle = document.querySelector('[data-toggle="nav"]');
    const nav = document.querySelector('.main-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {

        nav.classList.toggle('is-open');

        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));

    });

}