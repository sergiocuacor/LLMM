window.onload = () => {
    document.getElementById("botonPeticion").addEventListener("click", realizarPeticionesAjax, false);
    document.getElementById("botonPeticionErrores").addEventListener("click", realizarPeticionesAjaxErrores, false);
};

/**
 * Función para crear una petición Ajax y enviarla al servidor.
 * Para las prueba se va a utilizar la API REST jsonplaceholder, que gestiona tareas, 
 * se pueden obtener todas las tareas existentes, 
 * obtener una tarea utilizando su identificador, añadir una nueva tarea, 
 * actualizar una tarea o eliminar una tarea existente.
 */
function realizarPeticionesAjax() {
    let request = new XMLHttpRequest();
    //Indicamos  la función que se va a ejecutar cada vez que 
    //cambie el estado de la petición
    request.onreadystatechange = accionEstado;
    //Se establece la comunicación con el servidor
    request.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    //Por último se envía la petición
    request.send();

    /*
    Si se tratara de una petición POST, podría ser como sigue:
        Establecer conexión:
            request.open("POST", "https://jsonplaceholder.typicode.com/users", true);
        *Añadir la cabecera que informará al servidor del formato en que van los datos enviados
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        *Enviar la petición:
            request.send("nombre=Sonia&apellido=Gutierrez");
    */
}

/**
 * Función que se va a ejecutar cada vez que se produzca un cambio de estado en la petición.
 * La situación de la resupesta mas interesante de cara a ejecutar código adicional:
 *      readyState = 4 y
 *      status = 200
 */
function accionEstado() {
    if (this.readyState == 4 && this.status == 200) {
        //Cuando ya se ha procesado la petición, el servidor ha devuelto los datos pedidos
        //y el resultado de la petición es OK (200), realizamos los cambios pertinentes
        let parrafo = document.getElementById("parrafo1");
        parrafo.innerHTML = this.responseText;

        let datosUsuarios = JSON.parse(this.responseText);

        console.log(datosUsuarios);


        parrafo.innerText = "";

        for (let index = 0; index < datosUsuarios.length; index++) {
            parrafo.innerText += datosUsuarios[index].name+ " " + datosUsuarios[index].email + "\n"
        }

    }
}

