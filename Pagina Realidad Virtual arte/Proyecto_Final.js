document.addEventListener("DOMContentLoaded", function () {
    const imagenes = [
        "Imagenes/Arte 1.jpg",
        "Imagenes/Arte 2.jpg",
        "Imagenes/Arte 3.jpg",
        "Imagenes/Arte 4.jpg",
        "Imagenes/Arte 5.jpg",
        "Imagenes/Arte 6.jpg",
        "Imagenes/Arte 7.jpg",
        "Imagenes/Arte 8.jpg",
        "Imagenes/Arte 9.jpg",
        "Imagenes/Arte 10.jpg"
        // Agrega aquí más rutas de imágenes según sea necesario
    ];

    const elementosObra = document.querySelectorAll(".obra-arte");
    const contenedorImagen = document.querySelector(".carrusel-imagenes");
    const elementoImagen = document.createElement("img");
    let indiceActual = 0;

    // Aplica un estilo fijo a las imágenes
    elementoImagen.style.width = "50%";
    elementoImagen.style.height = "auto";

    contenedorImagen.appendChild(elementoImagen);

    function mostrarImagen(indice) {
        // Cambia la imagen actual
        elementoImagen.src = imagenes[indice];
        elementoImagen.alt = "Obra de arte";
    }

    function siguienteImagen() {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarImagen(indiceActual);
    }
    elementosObra.forEach((obra, indice) => {
        obra.addEventListener("click", () => {
            // Marca la imagen como seleccionada
            obra.classList.toggle("seleccionada");
        });
    });

    // Muestra la primera imagen
    mostrarImagen(indiceActual);

    // Cambia la imagen cada 4 segundos (4000 milisegundos)
    setInterval(siguienteImagen, 4000);
});
