// All used selectors
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const themeLine = document.querySelector(".theme-line");
const moon = document.querySelector(".moon-container");
const root = document.documentElement;

//all event listener
burger.addEventListener("click", burgerToggler);

moon.addEventListener("click", themeToggler);
themeLine.addEventListener("click", themeToggler);


//all the function

//hamburger animaiton
function burgerToggler(){
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle-burger');
}

//change the theme of the website
function themeToggler(){
    moon.classList.toggle("moon-container-active");

    if(root.style.getPropertyValue("--bgColor") === "#0F2027"){
        root.style.setProperty("--bgColor","#ece9e6");
        root.style.setProperty("--textColor","black");

    }else {
        root.style.setProperty("--bgColor","#0F2027");
        root.style.setProperty("--textColor","white"); 
    }
}