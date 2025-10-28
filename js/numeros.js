// Animación de los números
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".contador");
  const duracionTotal = 2000; // todos los contadores terminan en 2 segundos

  // Función de easing (cuadrática, más lenta al inicio)
  const easeOutQuad = t => t * (2 - t);

  const animarContadores = () => {
    const tiempoInicio = performance.now();

    const actualizar = tiempoActual => {
      const progreso = Math.min((tiempoActual - tiempoInicio) / duracionTotal, 1);

      counters.forEach(contador => {
        const target = +contador.dataset.target;
        // Si target pequeño, usamos easing más pronunciado
        const valor = target <= 30
          ? Math.floor(target * easeOutQuad(progreso))
          : Math.floor(target * progreso);
        contador.innerText = valor;
      });

      if (progreso < 1) {
        requestAnimationFrame(actualizar);
      } else {
        counters.forEach(c => c.innerText = c.dataset.target);
      }
    };

    requestAnimationFrame(actualizar);
  };

  const seccion = document.querySelector(".estadisticas");
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animarContadores();
      observer.unobserve(seccion);
    }
  }, { threshold: 0.3 });

  observer.observe(seccion);
});

