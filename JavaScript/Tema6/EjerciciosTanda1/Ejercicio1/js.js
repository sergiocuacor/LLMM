/* 1. Comprobar si un número es positivo o negativo
Realizar una función que:
a. Pida un número por pantalla.
b. Dependiendo de si el número es positivo, negativo o nulo, mostrará al usuario el
mensaje “El número es positivo”, “El número es negativo” o “El número es nulo”. */

function positivoNegativo() {
    let numero = prompt("Dime un número:");

    if (numero > 0) {
        alert("El número es positivo");
    } else if (numero == 0) {
        alert("El número es nulo")
    } else {
        alert("El número es negativo")
    }
}
