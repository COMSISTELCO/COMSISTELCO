const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.carousel-slides');
const dotsContainer = document.querySelector('.carousel-dots');

let currentGroup = 0;
let slidesPerGroup = 3;
let totalGroups = Math.ceil(slides.length / slidesPerGroup);
let autoPlayInterval = null;

// Crear dots dinámicamente
function createDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalGroups; i++) {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToGroup(i));
    dotsContainer.appendChild(dot);
  }
}

// Actualizar los dots activos
function updateDots() {
  const dots = Array.from(dotsContainer.children);
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentGroup]) dots[currentGroup].classList.add('active');
}

// Mover grupo (en bloques completos)
function moveToGroup(groupIndex) {
  currentGroup = groupIndex;
  const slideWidth = slides[0].getBoundingClientRect().width + 20; // ancho + margen
  track.style.transform = `translateX(-${slideWidth * slidesPerGroup * currentGroup}px)`;
  updateDots();
  resetAutoPlay();
}

// Autoplay (avanza automáticamente cada 8 segundos)
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    moveToGroup((currentGroup + 1) % totalGroups);
  }, 10000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

function resetAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}

// Inicializar carrusel
function initCarousel() {
  // Ajustar cantidad de slides según pantalla
  slidesPerGroup = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 3;
  totalGroups = Math.ceil(slides.length / slidesPerGroup);
  
  createDots();
  moveToGroup(0);
  startAutoPlay();
}

// Reiniciar al cambiar tamaño de ventana
window.addEventListener('resize', initCarousel);
initCarousel();
