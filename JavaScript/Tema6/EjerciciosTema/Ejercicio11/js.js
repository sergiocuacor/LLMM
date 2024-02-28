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
   elementoLista.innerText = datos[i];
   lista.appendChild(elementoLista);
}
document.body.appendChild(lista);

}



function sustituirElementoTres(){

    let lista = document.getElementsByTagName("ol")[0];

    let nuevoElemento = document.createElement("li"); 
		
	nuevoElemento.innerText = "Cuatro";  

    let elementoAntiguo=  document.getElementsByTagName("li")[2];

    lista.replaceChild(nuevoElemento, elementoAntiguo);
    
}

function añadirHijoACuatro(){

    let lista = document.getElementsByTagName("ol")[0];

    let parrafo = document.createElement("p");

    parrafo.innerText = "Soy hijo de Cuatro";

    let elementoCuatro = document.getElementsByTagName("li")[2];

    elementoCuatro.appendChild(parrafo);

}

function cambiarTitulo(){
 let titulo = document.getElementById("tituloPrincipal");

 titulo.innerText = "He creado una lista";

}

function mostrarElementos(){
    console.log(document);

    let encabezado = document.getElementById("encabezado1");
    console.log("encabezado");
    let lista = document.getElementsByTagName("ol");
    console.log("lista");
}