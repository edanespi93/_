import { animate } from "./animations.js";
import { ContactForm } from "./contacto.js";

const d=document,
$btnMenu=d.querySelector(".menu-btn"),
$menu=d.querySelector(".menu");
ScrollReveal().reveal('home');
ScrollReveal().reveal('.me', {delay: 500});
ScrollReveal().reveal('.proyectos', {delay: 500});
ScrollReveal().reveal('.contacto', {delay: 500});

d.addEventListener("DOMContentLoaded",e=>{
  animate();
  ContactForm();
$btnMenu.addEventListener("click",e=>{
  $btnMenu.firstElementChild.classList.toggle("none");
  $btnMenu.lastElementChild.classList.toggle("none");
  $menu.classList.toggle("is-active")
})
d.addEventListener("click",e=>{
  if(!e.target.matches(".menu a"))return false;
 $btnMenu.firstElementChild.classList.remove("none");
  $btnMenu.lastElementChild.classList.add("none");
  $menu.classList.remove("is-active")

})

})