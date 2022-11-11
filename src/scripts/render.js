import { getAllCompanies } from "./requests.js";
import { getFromStorage } from "./storage.js";

export async function rederOptions() {
    const tagSelect = document.getElementById('companie_sector');
    const myArray = getFromStorage('@companies:sectors');
    myArray.forEach(elt => {
        const tagOption = document.createElement('option');
        tagOption.classList.add("sector-option");
        tagOption.value = elt;
        tagOption.innerText = elt;
        tagSelect.appendChild(tagOption);
    });
}

export async function renderCompanyCards(kay) {
    const tagContainer = document.getElementById('cards_container');
    tagContainer.innerHTML = '';
    const array = await getAllCompanies(kay);
    array.forEach(elt => {
        tagContainer.insertAdjacentHTML(
            'beforeend', `
            <div class="card">
                <h2 class="grey-1 text-2 name">${elt.name}</h2>
                <div class="info-box">
                    <span class="grey-1 text-5 opening-hours">${elt.opening_hours
                    }</span>
                    <p class="brand-1 text-5 sectors-description">${elt.sectors.description}</p>
                </div>
            </div>
                    `,
        );
    });
}

