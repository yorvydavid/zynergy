// select nav trigger btn
const navTrigger = document.querySelector("#navTrigger");

// select navigation
const nav = document.querySelector("#nav");

// select the nav close btn
const navCloseBtn = document.querySelector("#navCloseBtn");

// select header
const header = document.querySelector("#header");

// add a click event listener to the nav trigger btn
navTrigger.addEventListener("click", () => {
// toggle the "is-apen" class an the navigtion element to apen/close the menu
nav.classList.toggle("is-open");
});

// add a click event listener to the nav close btn
navCloseBtn.addEventListener("click", () => {
    // remove the "is-open" class from the navigation element
    nav.classList.remove("is-open");
});

// add a scroll event listener to the window
window.addEventListener("scroll", () => {
    //get the current vertical scroll position
    const scrollY = window.scrollY;
    console.log(scrollY);

    // add or remove the active class from the header based on the scroll position
    scrollY > 50
    ? header.classList.add("is-active")
    : header.classList.remove("is-active");
});

// swiper
const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
// faq
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        const isOpen = item.classList.toggle("is-open");
        const iconClass = isOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line";
        const iconElement = item.querySelector("i");
        iconElement.classList = `${iconClass}`;
    });
});

// scroll reveal
const sr = ScrollReveal ({
    origin: "bottom",
    distance: "60px",
    duration: 3000,
    delay: 600,
    reset: true, //resets the animatians
});

// custom configuratons for specific elements
const revealFromTop = {
    origin: "top",
};

const revealWithInterval = {
    distance: "100px",
    interval: 100,
};

const revealFromLeft = {
    distance: "100px",
    origin: "left",
};

const revealFromRight = {
    distance: "100px",
    origin: "right",
};

const revealWithShortDistance = {
    distance: "60px", 
};

const revealWithDelay = {
    distance: "100px",
    delay: "400",
};

// banner 
sr.reveal(".banner__text", revealFromTop);
sr.reveal(".banner__image");

// brands
sr.reveal(".brands__title", revealWithDelay);
sr.reveal(".brands__img", revealWithInterval);

// benefits
sr.reveal(".benefits__title", revealWithShortDistance);
sr.reveal(".benefit__text", revealFromLeft);
sr.reveal(".benefit__img", revealFromRight);
sr.reveal(".benefit--2 .benefit__img", revealFromLeft);
sr.reveal(".benefit--2 .benefit__text", revealFromRight);

// testimonials
sr.reveal(".testimonials, .testimionials__container", {
    distance: "100px",
});

// services
sr.reveal(".services__title, .services__item", revealWithInterval);

// FAQ
sr.reveal(".faq__img", {
    distance: "100px",
    origin: "top",
    interval: 100,
});
sr.reveal(".faq__title, .faq__item", revealWithInterval);


// contact
sr.reveal(".contact__form-wrapper");
sr.reveal(".contact__img", revealFromTop);

// footer
sr.reveal(".footer");