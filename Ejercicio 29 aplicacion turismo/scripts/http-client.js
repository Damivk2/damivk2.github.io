function doGetHTTPRequest(url, callbackFunction, callbackErrorFunction) {
    // Construir la URL completa con el puerto y el recurso especificados
    fetch(url)
        .then(response => {
            // Verificar si la respuesta es correcta (código 200-299)
            if (response.ok) {
                return response.text(); // Convertir la respuesta a texto
            } else {
                // Lanzar un error si la respuesta no es correcta
                throw new Error(`Tenemos una movida con lo que nos has pedido ${response.status}`);
            }
        })
        .then(data => {
            // Llamar a la función de callback con los datos recibidos
            callbackFunction(data);
        })
        .catch(error => {
            // Llamar a la función de manejo de errores con el error encontrado
            callbackErrorFunction(error);
        });
}
