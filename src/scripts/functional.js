export function openMenu() {
    const menuToggle = document.querySelector('.menu-fill');
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const toggleMenu = document.querySelector('.redirect-box')
            toggleMenu.classList.toggle('show-menu');
            if (toggleMenu.classList.contains('show-menu')) {
                document.querySelector('.main-content').style.marginTop = '100px'
                document.querySelector('.home-header').style.border = 'none';
                menuToggle.style.backgroundImage = "url(./src/assets/close.png)"
            }else{
                document.querySelector('.main-content').style.marginTop = '87px'
                document.querySelector('.home-header').style.borderBottom = '1px solid var(--opct-grey200)';
                menuToggle.style.backgroundImage = "url(./src/assets/menu.png)"
            }
        });
}

export function scrollCategory() {
    const scrollBttn = document.querySelector('.icon-bttn');
    const scrollBttnInv = document.querySelector('.icon-bttn-inv');
    const myScrollTag = document.getElementById("sector_area");
    scrollBttn.addEventListener('click', (e) => {
        e.preventDefault();
        myScrollTag.scrollBy({
            left: 260,
            behavior: 'smooth'
          });
    });
    scrollBttnInv.addEventListener('click', (e) => {
        e.preventDefault();
        myScrollTag.scrollBy({
            left: -260,
            behavior: 'smooth'
          });
    });    
}
