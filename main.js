const navbarLogin = document.querySelector(".navbar-item--login");
const navbarRegister = document.querySelector(".navbar-item--register");
const modal = document.querySelector(".modal");
const tabLogin = document.querySelector(".tab-login");
const tabRegister = document.querySelector(".tab-register");
const loginForm = document.querySelector(".login-form");
const loginRegister = document.querySelector(".register-form");
const form = document.querySelector(".form");


navbarLogin.addEventListener("click",()=>{
    modal.classList.toggle("hidden")
    tabLogin.classList.toggle("current")
    tabRegister.classList.toggle("hidden")
})





// console.log(navbarLogin,navbarRegister,modal,tabLogin,tabRegister)