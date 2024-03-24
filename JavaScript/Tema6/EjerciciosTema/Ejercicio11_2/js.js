/* Crea un documento HTML que contenga únicamente un título.
 Utilizando las propiedades y métodos DOM que hemos visto, introduce en el
documento creado una lista ordenada con los valores Uno, Dos y Tres.
 Una vez creada la lista y mostrada en el documento, sustituye el elemento Tres por
un elemento que muestre el valor Cuatro.
 Dentro del elemento Cuatro, añadirle un hijo de tipo párrafo con el texto “Soy hijo
de Cuatro”.
 Cambiar el contenido del título por “He creado una lista”*/

function crearLista() {

    let lista = document.createElement("ol");

    document.body.appendChild(lista);

    let datos = ["Uno", "Dos", "Tres"];

    for (var i = 0; i < datos.length; i++) {

        let elementoLista = document.createElement("li");
        elementoLista.innerText = datos[i];

        lista.appendChild(elementoLista);

    }
}


function sustituirElemento(){

let lista = document.getElementsByTagName("ol")[0];

let elementoTres = document.getElementsByTagName("li")[2];

let nuevoElemento = document.createElement("li");
nuevoElemento.innerText = "Cuatro";

lista.replaceChild(nuevoElemento, elementoTres);
}

function crearHijoDeCuatro(){

let elementoCuatro = document.getElementsByTagName("li")[2];

let parrafo = document.createElement("p");
parrafo.innerText = "Soy hijo de cuatro";

elementoCuatro.appendChild(parrafo);
}

function cambiarTitulo(){

let titulo = document.getElementsByTagName("h1")[0];

titulo.innerText = "He creado una lista";

}