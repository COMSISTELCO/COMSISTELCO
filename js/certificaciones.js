document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-certificacion');
    const btnAbrir = document.getElementById('btnAbrir-certificacion');
    const btnCerrar = document.getElementById('btnCerrar-certificacion');
    const imagen = document.getElementById('imagenModalCertificacion');
  
    // Solo se abre al hacer click
    btnAbrir.addEventListener('click', () => {
      imagen.src = '../img/nosotros/certificaciones/certificaciones.png'; // Cambia por tu imagen real
      modal.style.display = 'flex';
    });
  
    // Cierra el modal al hacer click en la X
    btnCerrar.addEventListener('click', () => {
      modal.style.display = 'none';
      imagen.src = '';
    });
  });
  