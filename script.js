
/* ==================================
   FRANCIS MAUNDU PORTFOLIO JAVASCRIPT
   ================================== */

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU AFTER NAVIGATION

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});


// AUTOMATIC TYPING ANIMATION

const titles = [
    "Frontend Developer",
    "Backend Developer",
    "Blogger",
    "Graphics Designer",
    "IT Administrator"
];

const typingText = document.getElementById("typingText");

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentTitle = titles[titleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent =
        currentTitle.substring(0, characterIndex);

    let speed = deleting ? 45 : 90;

    if (!deleting && characterIndex === currentTitle.length) {

        deleting = true;
        speed = 1500;

    }

    if (deleting && characterIndex === 0) {

        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
