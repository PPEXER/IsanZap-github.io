document.addEventListener("DOMContentLoaded", () => {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentIndex = 0;

    function showSlide(index) {
        sliderItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentIndex);
});
