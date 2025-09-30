const menuButton = document.querySelector(".header-menu");
const navList = document.querySelector(".nav--list");

menuButton.addEventListener("click", () => {
    if (navList.style.display == "" || navList.style.display == "none") {
        navList.style.display = "flex"
    } else {
        navList.style.display = "none"
    }
})