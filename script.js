<script>
    // Function to start the carousel
    function startCarousel(carousel) {
        const images = carousel.querySelectorAll('.carousel-image');
        let currentIndex = 0;

        setInterval(() => {
            // Hide the current image
            images[currentIndex].style.display = 'none';

            // Move to the next image
            currentIndex = (currentIndex + 1) % images.length;

            // Show the next image
            images[currentIndex].style.display = 'block';
        }, 3000); // Change every 3 seconds
    }

    // Initialize all carousels on the page
    document.addEventListener('DOMContentLoaded', () => {
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => startCarousel(carousel));
    });
</script>
