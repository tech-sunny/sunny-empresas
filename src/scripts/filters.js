import { renderCompanyCards } from "./render.js";

export function renderFiltered() {
    const companiesForm = document.getElementById('companie_sector');
    companiesForm.addEventListener('change', (e) => {
        e.preventDefault();
        renderCompanyCards(companiesForm.value)
    })
}
