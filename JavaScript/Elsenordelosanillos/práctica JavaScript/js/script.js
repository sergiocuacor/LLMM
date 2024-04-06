function cambiarFondo(divId){

let texto = document.getElementById(divId);

texto.classList.add("colorFondoTexto");

}
function resetearFondo(divId){

let texto = document.getElementById(divId);

texto.classList.remove("colorFondoTexto");
}

function anadirFilaLibros(){

let tbody = document.getElementsByTagName("tbody")[0];

let fila = document.createElement("tr");
tbody.appendChild(fila);

let primerLibro = document.createElement("td");
primerLibro.innerText = prompt("Libro 1:");
fila.appendChild(primerLibro);

let segundoLibro = document.createElement("td");
segundoLibro.innerText = prompt("Libro 2:");
fila.appendChild(segundoLibro);

let tercerLibro = document.createElement("td");
tercerLibro.innerText = prompt("Libro 3:");
fila.appendChild(tercerLibro);

let cuartoLibro = document.createElement("td");
cuartoLibro.innerText = prompt("Libro 4:");
fila.appendChild(cuartoLibro);

}
