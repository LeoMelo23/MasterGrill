const menu = document.querySelector("#menu-mobile")
const fechar = document.querySelector("#btn-close")
const btnMenu = document.querySelector("#btnMenu")


btnMenu.addEventListener("click", () => {
  menu.classList.add("translate-x-0")
  menu.classList.remove("translate-x-full")
 
})
fechar.addEventListener("click", () => {
  menu.classList.add("translate-x-full")
  menu.classList.remove("translate-x-0")
  
})

const media = window.matchMedia("(min-width: 768px)");

media.addEventListener("change", (e) => {
    if (e.matches) {
        menu.classList.remove("translate-x-0");
        menu.classList.add("translate-x-full");
      
    }
});

const header = document.querySelector("header");

function updateHeaderHeight(){
    document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
    );
}

updateHeaderHeight();
window.addEventListener("resize", updateHeaderHeight);