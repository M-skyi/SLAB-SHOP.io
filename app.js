let mobileMenuBtn = document.querySelector(".nav-mobile-menu");
let mobileMenu = document.querySelector(".nav-header")
let elNav = document.querySelector(".list-header")

mobileMenuBtn.addEventListener("click", activeMenu)

function activeMenu() {
    mobileMenuBtn.classList.toggle("active-menu")
    if (mobileMenuBtn.classList.toggle("active-menu")) {
        mobileMenu.classList.remove("active-menu")
    }
    if (mobileMenuBtn.classList.toggle("active-menu")) {
        mobileMenu.classList.add("active-menu")
    }
}
mobileMenu.addEventListener("click", function (e) {
    if (e.target == mobileMenu || e.target == elNav) {
        mobileMenu.classList.remove("active-menu")
        mobileMenuBtn.classList.remove("active-menu")
    }
})

$(".slider-block").slick({
    dots: true,
    arrows: true,
    autoplay: false,

})