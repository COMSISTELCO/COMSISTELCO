document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#equiposCarousel .carousel-img");
    let current = 0;
  
    setInterval(() => {
      images[current].classList.remove("active");
      current = (current + 1) % images.length;
      images[current].classList.add("active");
    }, 5000); // cambia cada 5 segundos
  });