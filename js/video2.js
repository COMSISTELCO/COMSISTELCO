const btn = document.getElementById('toggleVideoBtn');
const container = document.getElementById('videoContainer');
const iframe = document.getElementById('ytIframe');
const videoSrc = "https://www.youtube.com/embed/KyFScU_-t6c";

btn.addEventListener('click', () => {
    if (container.classList.contains('show-video')) {
        container.classList.remove('show-video');
        btn.innerHTML = '▶ Ver video';
        iframe.src = ""; // detiene el video totalmente
    } else {
        container.classList.add('show-video');
        btn.innerHTML = '✖ Ocultar video';
        iframe.src = videoSrc + "?autoplay=1&mute=1&rel=0";
    }
});




