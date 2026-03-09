
export function initForm() {
    const checkbox = document.querySelector("#privacy-consent");
    const resetBtn = document.querySelector("#form-reset");
    const form = document.querySelector(".contact-form");

    if (!checkbox || !resetBtn || !form) return;

    /* enable reset button when checkbox checked */

    checkbox.addEventListener("change", () => {
        resetBtn.disabled = !checkbox.checked;
    });

    /* reset checkbox state */

    form.addEventListener("reset", () => {

        setTimeout(() => {
            resetBtn.disabled = true;
        });

    });

}