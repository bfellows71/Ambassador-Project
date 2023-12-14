document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const body = document.body;

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('menu-open');
        body.classList.toggle('menu-open');
    });
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// show/hide scroll button
window.onscroll = function () {
    scrollFunction();
};

// scroll function
function scrollFunction() {
    var scrollToTopButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000); // 8 seconds
}







