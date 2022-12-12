const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
//Sliders for emotions
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length - 1) {
        next.classList.add("isDisabled");
    } else {
        next.classList.remove("isDisabled");
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    if (n === 1) {
        prev.classList.add("isDisabled");
    } else {
        prev.classList.remove("isDisabled");
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

const navMenu = document.querySelector(".nav-menu");

function mobileMenu() {
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navMenu.classList.remove("active");
}
