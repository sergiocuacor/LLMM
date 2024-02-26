/* Crea un documento HTML que contenga únicamente un título.
 Utilizando las propiedades y métodos DOM que hemos visto, introduce en el
documento creado una lista ordenada con los valores Uno, Dos y Tres.
 Una vez creada la lista y mostrada en el documento, sustituye el elemento Tres por
un elemento que muestre el valor Cuatro.
 Dentro del elemento Cuatro, añadirle un hijo de tipo párrafo con el texto “Soy hijo
de Cuatro”.
 Cambiar el contenido del título por “He creado una lista”*/

var lista = document.createElement("ol");

document.body.appendChild(lista);

var elemento1 = document.createElement("li");

elemento2.innerHTML = "Uno";
lista.appendChild(elemento1);

var elemento2 = document.createElement("li");

elemento2.innerHTML = "Dos";

lista.appendChild(elemento2);

elemento3.innerHTML = "Tres";

var elemento3 = document.createElement("li");

lista.appendChild(elemento3);


