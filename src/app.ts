const mobileMenu = document.querySelector(".nav__menu") as HTMLElement;
const mobileMenuButton = document.querySelector(".nav__menu-btn") as HTMLButtonElement;
const mobileMenuLinks = Array.from(document.querySelectorAll(".nav__link") as NodeListOf<HTMLLinkElement>);

mobileMenuLinks[mobileMenuLinks.length - 1].addEventListener("keydown", (e) => {
    if (!window.matchMedia("(min-width: 52em)").matches) {
        if (!e.shiftKey && e.key === "Tab") {
            e.preventDefault();
            mobileMenuLinks[0].focus();
        }
    }
});

mobileMenuLinks[0].addEventListener("keydown", (e) => {
    if (!window.matchMedia("(min-width: 52em)").matches) {
        if (e.shiftKey && e.key === "Tab") {
            e.preventDefault();
            mobileMenuLinks[mobileMenuLinks.length - 1].focus();
        }
    }
});

let isMenuOpened = () => mobileMenuButton.getAttribute("aria-expanded") === "true";

const openMobileMenu = () => {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0 });

    mobileMenuButton.setAttribute("aria-expanded", "true");
};

const closeMobileMenu = () => {
    document.body.style.overflow = "";
    mobileMenuButton.setAttribute("aria-expanded", "false");
};

mobileMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    isMenuOpened() ? closeMobileMenu() : openMobileMenu();
});

mobileMenu.addEventListener("click", (event) => {
    event.stopPropagation();
});

window.addEventListener("click", () => {
    if (isMenuOpened()) closeMobileMenu();
});

window.addEventListener("resize", () => {
    if (isMenuOpened() && window.matchMedia("(min-width: 52em)").matches) closeMobileMenu();
});

window.addEventListener("keydown", (event) => {
    if (isMenuOpened() && event.key == "Escape") {
        closeMobileMenu();
        requestAnimationFrame(() => {
            mobileMenuButton.focus();
        });
    }
});
