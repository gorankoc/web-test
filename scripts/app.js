import { initNav } from './nav.js';
import { initMapLazy } from './map.js';
import { initForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initMapLazy();
    initForm();
});