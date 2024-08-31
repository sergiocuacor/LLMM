/*
EJERCICIO 11
Crea un documento HTML que contenga únicamente un título.
 Utilizando las propiedades y métodos DOM que hemos visto, introduce en el
documento creado una lista ordenada con los valores Uno, Dos y Tres.
 Una vez creada la lista y mostrada en el documento, sustituye el elemento Tres por
un elemento que muestre el valor Cuatro.
 Dentro del elemento Cuatro, añadirle un hijo de tipo párrafo con el texto “Soy hijo
de Cuatro”.
 Cambiar el contenido del título por “He creado una lista”*/

let listaOrdenada = document.createElement("ol");

let primerElemento = document.createElement("li");
primerElemento.innerText = "Uno";
listaOrdenada.appendChild(primerElemento);
let segundoElemento = document.createElement("li");
segundoElemento.innerText = "Dos";
listaOrdenada.appendChild(segundoElemento);
let tercerElemento = document.createElement("li");
tercerElemento.innerText = "Tres";
listaOrdenada.appendChild(tercerElemento);

document.body.appendChild(listaOrdenada);

let cuartoElemento = document.createElement("li");
cuartoElemento.innerText = "Cuatro";
listaOrdenada.replaceChild(cuartoElemento, tercerElemento);
let parrafoHijoCuatro = document.createElement("p");
parrafoHijoCuatro.innerText = "Soy hijo de Cuatro";
cuartoElemento.appendChild(parrafoHijoCuatro);

let titulo = document.getElementsByTagName("h1")[0];
titulo.innerText = "He creado una lista";


