function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");

  items.forEach(item => {
      const top = item.getBoundingClientRect().top;
      const trigger = window.innerHeight - 120;

      if (top < trigger) {
          item.classList.add("visible");
      }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
