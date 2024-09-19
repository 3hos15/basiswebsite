// JavaScript Document
console.log("hi");

let deButton = document.querySelector("section button");
let hamburger = document.querySelector("header section");
let deNav = document.querySelector("header section section");

deButton.onclick = toggleMenu;

function toggleMenu() {
    deNav.classList.toggle("menuOpen");
    hamburger.classList.toggle("menuOpen")
}
