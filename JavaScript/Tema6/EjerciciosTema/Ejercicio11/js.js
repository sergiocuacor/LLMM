/* Crea un documento HTML que contenga únicamente un título.
 Utilizando las propiedades y métodos DOM que hemos visto, introduce en el
documento creado una lista ordenada con los valores Uno, Dos y Tres.
 Una vez creada la lista y mostrada en el documento, sustituye el elemento Tres por
un elemento que muestre el valor Cuatro.
 Dentro del elemento Cuatro, añadirle un hijo de tipo párrafo con el texto “Soy hijo
de Cuatro”.
 Cambiar el contenido del título por “He creado una lista”*/

function crearLista(){

let datos = ["Uno", "Dos", "Tres"];

let lista = document.createElement("ol");

for(var i = 0; i < datos.length; i++){
   let elementoLista = document.createElement("li"); //creamos una coleccion (como un array) elementoLista. en este caso, tendrá tres elementos
   elementoLista.innerText = datos[i]; // Le damos los valores "Uno", "Dos", "Tres" a los elementos li
   lista.appendChild(elementoLista); // Añadimos como hijos de lista("ol") a los elementos li
}
document.body.appendChild(lista); //Por último, ponemos a lista como hijo del body



}



function sustituirElementoTres(){

    let lista = document.getElementsByTagName("ol")[0];  //Obtenemos el ol, ya que las funciones no se leen entre sí. Como obtenemos colecciones, indicamos el índice.

    let nuevoElemento = document.createElement("li"); // Creamos un nuevo elemento y le añadimos el texto "Cuatro"
	nuevoElemento.innerText = "Cuatro";  

    let elementoAntiguo=  document.getElementsByTagName("li")[2]; //Obtenemos el elemento tres, que se encuentra en la posición 2

    lista.replaceChild(nuevoElemento, elementoAntiguo); //Sustituimos el elemento antiguo, que contiene "Tres", por el nuevo elemento "Cuatro".
    
}

function añadirHijoACuatro(){

    let elementoCuatro = document.getElementsByTagName("li")[2]; //Obtenemos el elemento que se encuentra en la posición 2, que contiene el texto "Cuatro".

    let parrafo = document.createElement("p"); //Creamos un parrafo
    parrafo.innerText = "Soy hijo de Cuatro"; //Le añadimos texto

    elementoCuatro.appendChild(parrafo); // Añadimos el párrafo como hijo de elementoCuatro

}

function cambiarTitulo(){
 let titulo = document.getElementById("tituloPrincipal"); // Obtenemos el título

 titulo.innerText = "He creado una lista"; // Le cambiamos el texto

}

function mostrarElementos(){
    console.log(document);

    let encabezado = document.getElementById("encabezado1");
    console.log("encabezado");
    let lista = document.getElementsByTagName("ol");
    console.log("lista");
}