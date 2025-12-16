const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.carousel-slides');
const dotsContainer = document.querySelector('.carousel-dots');

let currentGroup = 0;
let slidesPerGroup = 3;
let totalGroups = 0;
let autoPlayInterval = null;

// Crear dots
function createDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalGroups; i++) {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToGroup(i));
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll('button');
  dots.forEach(d => d.classList.remove('active'));
  if (dots[currentGroup]) dots[currentGroup].classList.add('active');
}

// ---- FIX REAL AQUÍ ----
function moveToGroup(groupIndex) {
  currentGroup = groupIndex;

  const windowWidth = document.querySelector(".carousel-window").offsetWidth;
  track.style.transform = `translateX(-${windowWidth * currentGroup}px)`;

  updateDots();
  resetAutoPlay();
}

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

function initCarousel() {
  // Responsive
  slidesPerGroup = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 3;

  totalGroups = Math.ceil(slides.length / slidesPerGroup);

  createDots();
  moveToGroup(0);
  startAutoPlay();
}

window.addEventListener('resize', initCarousel);
initCarousel();
