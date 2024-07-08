import loadHome from "./modules/home.js";
import loadAbout from "./modules/about.js";
import loadContact from "./modules/contact.js";

const homeButton = document.querySelector("#home");
const aboutButton = document.querySelector('#about');
const contactButton = document.querySelector('#contact')


homeButton.addEventListener("click", () => {
    loadHome()
})

aboutButton.addEventListener("click", () => {
    loadAbout()
})

contactButton.addEventListener("click", () => {
    loadContact()
})