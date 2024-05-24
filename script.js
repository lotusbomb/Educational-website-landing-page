import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

let navbar = document.querySelector('.header .navbar');

document.getElementById('menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');

document.getElementById('login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}


// Initialize Swiper
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20, // Space between slides
    centeredSlides: true, // Center slides
    grabCursor: true, // Show grab cursor
    autoplay: {
        delay: 7500, // Delay between transitions (ms)
        disableOnInteraction: false, // Continue autoplay after user interactions
    },
    loop: true, // Enable continuous loop mode
    breakpoints: {
        0: {
            slidesPerView: 1, // Number of slides to show at viewport width 0px and above
        },
        768: {
            slidesPerView: 2, // Number of slides to show at viewport width 768px and above
        },
        991: {
            slidesPerView: 3, // Number of slides to show at viewport width 991px and above
        },
    },
});
