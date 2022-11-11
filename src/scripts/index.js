import { renderFiltered } from "./filters.js";
import { openMenu, scrollCategory } from "./functional.js";
import { rederOptions, renderCompanyCards } from "./render.js";

function replaceTo() {
    const replaceButtons = document.querySelectorAll('.bttn-dflt');
    replaceButtons.forEach(elt => {
        elt.addEventListener('click', (e) => {
            if (elt.innerHTML == 'Login') {
                window.location.replace("./src/pages/Login/login.html");
            } else {
                window.location.replace("./src/pages/register/register.html");
            }
        })
    });
}

setTimeout(() => rederOptions(), 1000);

replaceTo();
renderFiltered();
renderCompanyCards();
openMenu();
scrollCategory();