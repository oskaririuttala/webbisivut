// Select Document object module items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item'); //Nav item, kuten koti, minusta, työni, yhteystietoni tässä tapauksessa


// Set Initial State of Menu
let showMenu = false;  // using let, because showMenu will vary between true and false, const would not. 

//Listener of menu button
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close'); //addinc 'close' -class
        menu.classList.add('show'); //everything else will show
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        //looping through all nav-items
        navItems.forEach(item => item.classList.add('show'));

        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close'); //now menuBtn should show
        menu.classList.remove('show'); //everything else will close
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        //looping through all nav-items
        navItems.forEach(item => item.classList.remove('show'));

        // Set menu state
        showMenu = false;
    }
}
