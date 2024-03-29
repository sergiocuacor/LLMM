/* Copiar el resultado del ejercicio 11 en otro fichero JavaScript. Sobre la copia realizar las
modificaciones necesarias para que, una vez creada la lista, se ejecute un bucle en el que se
realice lo siguiente:
 Si se trata de la primera iteración, que se pida por pantalla un texto y se añada
como nuevo elemento en la primera posición de la lista creada.
 A partir de la segunda iteración:
o Si se trata de una iteración par, que se pida por pantalla un texto y se
añada como nuevo elemento en la tercera posición de la lista.
o Si se trata de una iteración impar, que se cambie el elemento que se
encuentre en primera posición a la segunda.*/

function crearLista() {

    let datos = ["Uno", "Dos", "Tres"];
    let lista = document.createElement("ol");

    for (var i = 0; i < datos.length; i++) {
        let elementoLista = document.createElement("li"); //creamos una coleccion (como un array) elementoLista. en este caso, tendrá tres elementos
        elementoLista.innerText = datos[i];
        lista.appendChild(elementoLista);
    }
    
    document.body.appendChild(lista);

    for (var i = 0; i < 10; i++) {
        let texto = prompt("Introduzca un texto:");
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerText = texto;
        if (i === 0) {

            lista.insertBefore(nuevoElemento, lista.firstChild);
        }
        else if (i % 2 == 0) {

            lista.insertBefore(nuevoElemento, lista.children[2]);
        }
        else {

            lista.insertBefore(lista.firstChild, lista.children[1].nextSibling);
        }
        console.log(lista.children);
    }
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