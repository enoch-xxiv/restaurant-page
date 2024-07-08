import loadHome from "./modules/home.js";

const homeButton = document.querySelector("#home");

homeButton.addEventListener("click", () => {
    loadHome()
})