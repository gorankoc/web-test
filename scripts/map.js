export function initMapLazy() {

    const map = document.querySelector('[data-map]');

    if (!map) return;

    const iframe = map.querySelector('iframe');

    if (!iframe) return;

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const src = iframe.dataset.src;

            if (src) {
                iframe.src = src;
            }

            obs.unobserve(entry.target);

        });

    });

    observer.observe(map);

}