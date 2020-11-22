let mobileMenuBtn = document.querySelector(".nav-mobile-menu");
let mobileMenu = document.querySelector(".nav-header")
console.log(mobileMenuBtn)
console.log(mobileMenu)

mobileMenuBtn.addEventListener("click",activeMenu)

function activeMenu() {
    
    mobileMenuBtn.classList.toggle("active-menu")
    if (mobileMenuBtn.classList.toggle("active-menu")) {
        mobileMenu.classList.remove("active-menu")
    }if (mobileMenuBtn.classList.toggle("active-menu")) {
        mobileMenu.classList.add("active-menu")
    }

}