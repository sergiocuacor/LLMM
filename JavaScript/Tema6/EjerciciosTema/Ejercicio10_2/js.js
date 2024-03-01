


function crearLista() {
    var lista = document.createElement("ol");

    document.body.appendChild(lista);


    var uno = document.createElement("li");
    uno.innerText = "Uno";
    
    var dos = document.createElement("li");
    dos.innerText = "Dos";

    var tres = document.createElement("li");
    tres.innerText = "Tres";

    lista.appendChild(uno);
    
    lista.appendChild(dos);
    
    lista.appendChild(tres);
}

function sustituirElemento(){

    var lista = document.getElementsByTagName("ol")[0];

    var antiguoElemento = document.getElementsByTagName("li")[2];

    var nuevoElemento = document.createElement("li");

    nuevoElemento.innerText = "Cuatro";
    
    lista.replaceChild(nuevoElemento,antiguoElemento);
    
}

function anadirParrafo(){

    var tercerElemento = document.getElementsByTagName("li")[2];

    var parrafo = document.createElement("p");
    
    parrafo.innerText = "Soy hijo de Cuatro";

    tercerElemento.appendChild(parrafo);

}

function cambiarTitulo(){

    var titulo = document.getElementsByTagName("h1")[0];

    titulo.innerText = "He creado una lista";

    document.body.appendChild(titulo);
}