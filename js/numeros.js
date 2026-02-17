document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  function animate() {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      const digits = counter.textContent.length; // Mantiene ancho fijo según texto inicial
      let value = 0;

      const update = () => {
        value += target / 70;
        let num = String(Math.floor(value));

        // Mantiene los dígitos fijos según cada contador
        num = num.padStart(digits, "0");

        counter.textContent = num;

        if (value < target) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = String(target).padStart(digits, "0");
        }
      };

      update();
    });
  }

  const obs = new IntersectionObserver(e => {
    if (e[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  }, { threshold: 0.4 });

  obs.observe(document.querySelector(".stats-glass"));
});
