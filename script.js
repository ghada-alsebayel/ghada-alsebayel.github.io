<script>
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("news-slide");
        let dots = document.getElementsByClassName("dot");

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Remove 'active' class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Display the current slide and mark the dot as active
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides();
    }
</script>
