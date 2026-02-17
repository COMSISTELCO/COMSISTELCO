document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("waToggle");
  const panel = document.getElementById("waPanel");
  const close = document.getElementById("waClose");
  const logos = document.querySelectorAll(".wa-logo-rotator img");

  if (!toggle || !panel || !close) {
    console.warn("Widget WhatsApp: elementos no encontrados");
    return;
  }

  toggle.addEventListener("click", () => {
    const open = panel.style.display === "block";
    panel.style.display = open ? "none" : "block";

    logos.forEach(logo => {
      logo.style.animationPlayState = open ? "paused" : "running";
    });
  });

  close.addEventListener("click", () => {
    panel.style.display = "none";
    logos.forEach(logo => {
      logo.style.animationPlayState = "running";
    });
  });

});

