// Select the element with the ID of "menu-btn" and assign it to the variable "menu"
let menu = document.querySelector('#menu-btn');
// Select the element with the class "navbar" within the element with the class "header" and assign it to the variable "navbar"
let navbar = document.querySelector('.header .navbar');

// Add an event listener to the "menu" element that toggles the "fa-times" class and the "active" class on the "menu" and "navbar" elements, respectively, when clicked
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Add an event listener to the window that removes the "fa-times" class and the "active" class from the "menu" and "navbar" elements, respectively, when scrolled
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Create a new instance of the Swiper class with the options specified for the home slider
var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Create a new instance of the Swiper class with the options specified for the room slider
var swiper = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

// Create a new instance of the Swiper class with the options specified for the gallery slider
var swiper = new Swiper(".gallery-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

// Create a new instance of the Swiper class with the options specified for the review slider
var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Select all elements with the class "box" within the "content" element of each element with the class "row" within the element with the class "faqs", and assign them to the variable "accordions"
let accordions = document.querySelectorAll('.faqs .row .content .box');

// Add an event listener to each "acco" element that removes the "active" class from all other "acco" elements,
/ Loop through each accordion element and attach an onclick event listener.
// When clicked, remove the 'active' class from all other accordion elements,
 acco.onclick = () =>{
        accordions.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
})
