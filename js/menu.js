//const hamburger = document.querySelector(".hamburger");
//const navMenu = document.querySelector(".list-nav");

//hamburger.addEventListener("click", () =>{
 //hamburger.classList.toggle("active");
 // navMenu.classList.toggle("active");
//});

//document.querySelectorAll(".list-nav-li").forEach(n => n.addEventListener("click" , () => {
//  hamburger.classList.remove("active");
//  navMenu.classList.remove("active");
//}));


const button = document.querySelector('.menu__button')

button.addEventListener('click', funcaoCallback)

function funcaoCallback() {
  const menuNav = document.querySelector('.nav')
  menuNav.classList.toggle('menu-active')
  
  button.textContent === "x"
    ? button.textContent = "X"
    : button.textContent = "x"
}


