/* EJERCICIO 12
Siguiendo con la página creada en el ejercicio 11, se va a trabajar con el cambio de estilo.
Para llevar a cabo todos los cambios de estilo haz uso de clases, no asignes estilos de manera
individual.:
 Añade tres botones a la página: botón 1, botón 2 y botón 3.
 Cuando se pulse sobre el botón 1:
o Se cambiará el color del texto del párrafo a rojo y a negrita.
o Se dará color de fondo amarillo a los elementos de la lista ordenada y
cambiará su color de texto a azul.
o El título pasará a tener sombra naranja y rosa.
 Cuando se pulse el botón 2:
o Se cambiará el color del texto del párrafo a amarillo, el fondo pasará a ser
Desarrollo de Aplicaciones Web Lenguajes de Marcas
26
negro y aparecerá un borde punteado rojo.
o Se dará color de fondo rosa a los elementos de la lista ordenada y el texto
aumentará de tamaño.
o El título será de color azul claro y cursiva.
 Cuando se pulse el botón 3, todos los elementos volverán a sus estilos originales,
es decir, dejarán de tener estilo.
*/

function crearLista() {

    let datos = ["Uno", "Dos", "Tres"];

    let lista = document.createElement("ol");

    for (var i = 0; i < datos.length; i++) {
        let elementoLista = document.createElement("li"); //creamos una coleccion (como un array) elementoLista. en este caso, tendrá tres elementos
        elementoLista.innerText = datos[i];
        lista.appendChild(elementoLista);
    }
    document.body.appendChild(lista);

}



function sustituirElementoTres() {

    let lista = document.getElementsByTagName("ol")[0];

    let nuevoElemento = document.createElement("li");

    nuevoElemento.innerText = "Cuatro";

    let elementoAntiguo = document.getElementsByTagName("li")[2];

    lista.replaceChild(nuevoElemento, elementoAntiguo);

}

function añadirHijoACuatro() {

    let lista = document.getElementsByTagName("ol")[0];

    let parrafo = document.createElement("p");

    parrafo.innerText = "Soy hijo de Cuatro";

    let elementoCuatro = document.getElementsByTagName("li")[2];

    elementoCuatro.appendChild(parrafo);

}

function cambiarTitulo() {
    let titulo = document.getElementById("tituloPrincipal");

    titulo.innerText = "He creado una lista";

}

function mostrarElementos() {
    console.log(document);

    let encabezado = document.getElementById("encabezado1");
    console.log("encabezado");
    let lista = document.getElementsByTagName("ol");
    console.log("lista");
}

function ejecutarBotonUno() {

    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.classList.add("efectosParrafo1");

    let lista = document.getElementsByTagName("ol")[0];
    for (var i = 0; i < 3; i++) {
        let elementosLista = document.getElementsByTagName("li")[i];
        elementosLista.classList.add("efectosLista1");
    }
    let titulo = document.getElementsByTagName("h1")[0];
    titulo.setAttribute("class", "efectosTitulo1"); //esto es útil solo cuando no tiene otras clases todavía
}

function ejecutarBotonDos() {

    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.classList.add("efectosParrafo2");

    let lista = document.getElementsByTagName("ol")[0];

    for (var i = 0; i < 3; i++) {
        var elementosLista = document.getElementsByTagName("li")[i];
        elementosLista.classList.add("efectosLista2");
    }

    let titulo = document.getElementsByTagName("h1")[0];
    titulo.classList.add("efectosTitulo2");
}

function ejecutarBotonTres(){
    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.classList.add("efectosPorDefecto");

    let lista = document.getElementsByTagName("ol")[0];

    for (var i = 0; i < 3; i++) {
        var elementosLista = document.getElementsByTagName("li")[i];
        elementosLista.classList.add("efectosPorDefecto");
    }

    let titulo = document.getElementsByTagName("h1")[0];
    titulo.classList.add("efectosPorDefecto");
}