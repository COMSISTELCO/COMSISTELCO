const slides = document.querySelectorAll('.carousel img');
let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Mostrar la primera imagen
showSlide(currentIndex);

// Cambiar imagen automáticamente cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 6000);