let slideIndex = 0;
showSlides(); // Call the function when the script loads

function showSlides() {
    let slides = document.getElementsByClassName("news-slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Remove 'active' class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and mark the corresponding dot as active
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    } else {
        console.error("No slides found with class 'news-slide'");
    }

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
