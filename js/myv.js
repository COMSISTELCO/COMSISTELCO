function abrirModalMyV() {
    const modal = document.getElementById("modal-myv");
    const img = document.getElementById("imgMyV");

    // Cambia por tu imagen correcta
    img.src = "../img/nosotros/myv/myv/myv1.png";

    modal.style.display = "flex";
}

function cerrarModalMyV() {
    const modal = document.getElementById("modal-myv");
    const img = document.getElementById("imgMyV");

    modal.style.display = "none";
    img.src = "";
}
