const menu = document.querySelector(".menu");
const nav = document.querySelector("menu");
const param = document.querySelector(".parameters");
const settings = document.querySelector(".header-settings");
const linkArrow = document.querySelector(".link-arrow");
const links = document.querySelector(".nav-links");

menu.addEventListener("click", (event) =>{
    event.stopPropagation();
    nav.classList.toggle('mobile-menu');
})

param.addEventListener("click", (event) =>{
    event.stopPropagation();
    settings.classList.toggle('settings');
})

linkArrow.addEventListener("click", (event) =>{
    event.stopPropagation();
    links.classList.toggle('links');
})

document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
        nav.classList.remove('mobile-menu');
    }
    if (!settings.contains(event.target)) {
        settings.classList.remove('settings');
    }
    if (!links.contains(event.target)) {
        links.classList.remove('links');
    }
});