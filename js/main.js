const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const themeLine = document.querySelector(".theme-line");
const moon = document.querySelector(".moon-container");
burger.addEventListener("click", ()=> {
    nav.classList.toggle('nav-active');
})

moon.addEventListener("click", themeToggler);
themeLine.addEventListener("click", themeToggler);

function themeToggler(){
    moon.classList.toggle("moon-container-active");
}