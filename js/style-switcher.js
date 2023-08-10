/*--------toggle style switcher-------------*/
const styleSwitchcrToggle = document.querySelector(".style-switcher-toggler");
styleSwitchcrToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})