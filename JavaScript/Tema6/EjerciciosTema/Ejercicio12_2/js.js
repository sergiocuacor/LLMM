/* Siguiendo con la página creada en el ejercicio 11, se va a trabajar con el cambio de estilo.
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
negro y aparecerá un borde punteado rojo.
o Se dará color de fondo rosa a los elementos de la lista ordenada y el texto
aumentará de tamaño.
o El título será de color azul claro y cursiva.
 Cuando se pulse el botón 3, todos los elementos volverán a sus estilos originales,
es decir, dejarán de tener estilo. */

function boton1(){
    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.classList.add("efectosParrafo1");
    for(var i = 0; i < 3; i++){
        let elementoLista = document.getElementsByTagName("li")[i];        
        elementoLista.classList.add("efectosLi1");
    }
    let titulo = document.getElementsByTagName("h1")[0];
    titulo.classList.add("efectosTitulo1");
}

function boton2(){
    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.classList.add("efectosParrafo2");
    for(var i = 0; i < 3; i++){
        let elementoLista = document.getElementsByTagName("li")[i];        
        elementoLista.classList.add("efectosLi2");
    }
    let titulo = document.getElementsByTagName("h1")[0];
    titulo.classList.add("efectosTitulo2");
}
function boton3(){
    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.classList.add("resetearEfectos");
    for(var i = 0; i < 3; i++){
        let elementoLista = document.getElementsByTagName("li")[i];        
        elementoLista.classList.add("resetearEfectos");
    }
    let titulo = document.getElementsByTagName("h1")[0];
    titulo.classList.add("resetearEfectos");
}

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
