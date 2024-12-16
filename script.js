console.log("script.js is loaded");

let slideIndex = 0;
showSlides();

function showSlides() {
    console.log("showSlides function is running");
    let slides = document.getElementsByClassName("news-slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    } else {
        console.error("No slides found with class 'news-slide'");
    }

    setTimeout(showSlides, 5000);
}
