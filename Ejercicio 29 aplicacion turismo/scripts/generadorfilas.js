function crearFila(image_uri, title, subcategoria, address) {
    const NO_DISPONIBLE = 'https://t3.ftcdn.net/jpg/06/16/17/88/360_F_616178874_agCV247F4wqVeTYryzef1aEw1avJy2ys.jpg';

    // Crear el contenedor principal para el monumento
    let divMonumento = document.createElement("div");
    divMonumento.classList.add("monumento"); // Añadir la clase "monumento" al div
    document.querySelector("#monumentos").appendChild(divMonumento); // Añadir el divMonumento al contenedor principal de monumentos

    // Crear el contenedor de la imagen
    let divImagen = document.createElement("div");
    divImagen.classList.add("imagen"); // Añadir la clase "imagen" al div
    divMonumento.appendChild(divImagen); // Añadir el divImagen al divMonumento

    // Crear y añadir la imagen del monumento
    let imgMonumento = document.createElement("img");
    if (image_uri == null) {
        imgMonumento.src = NO_DISPONIBLE; // Establecer la fuente de la imagen
    } else {
        imgMonumento.src = image_uri; // Establecer la fuente de la imagen
    }

    divImagen.appendChild(imgMonumento); // Añadir la imagen al divImagen

    // Crear el contenedor de la descripción
    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("descripcion"); // Añadir la clase "descripcion" al div
    divMonumento.appendChild(divDescripcion); // Añadir el divDescripcion al divMonumento

    // Crear y añadir el nombre del monumento
    let divNombre = document.createElement("div");
    divNombre.classList.add("nombre"); // Añadir la clase "nombre" al div
    divNombre.appendChild(document.createTextNode(title)); // Añadir el texto del nombre al divNombre
    divDescripcion.appendChild(divNombre); // Añadir el divNombre al divDescripcion

    // Crear y añadir el estilo arquitectónico del monumento
    let divTipo = document.createElement("div");
    divTipo.classList.add("tipo"); // Añadir la clase "tipo" al div
    divTipo.appendChild(document.createTextNode(subcategoria)); // Añadir el texto del estilo arquitectónico al divTipo
    divDescripcion.appendChild(divTipo); // Añadir el divTipo al divDescripcion

    // Crear y añadir el precio del monumento
    let divPrecio = document.createElement("div");
    divPrecio.classList.add("precio"); // Añadir la clase "precio" al div
    divPrecio.appendChild(document.createTextNode(address)); // Añadir el texto del precio al divPrecio
    divDescripcion.appendChild(divPrecio); // Añadir el divPrecio al divDescripcion


}
