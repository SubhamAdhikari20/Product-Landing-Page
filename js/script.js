function toggleMenu() {
    const menu = document.querySelector("nav .right");
    const menuIcon = document.querySelector(".menu-icon");
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
}