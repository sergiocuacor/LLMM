/*
EJERCICIO 9
 Prueba, en la consola del navegador, los dos ejemplos de las sentencias break y
continue.
 Define una función donde se pida, repetidamente, al usuario que introduzca un
color. Utiliza las sentencias break y continue donde corresponda:
o Si el color introducido es el rojo, la ejecución saldrá del bucle.
o Si el color indicado es el verde, se volverá al comienzo del bloque sin
ejecutar las sentencias siguientes.
o Si se trata de cualquier otro color, se incluirá éste en un array. Si el color
ya estuviera se repite.
o Tras terminar la ejecución del bucle se mostrará por pantalla el número de
veces que el usuario ha introducido un color y todos los valores
almacenados en el array.
*/

function ejercicio9() {
    let colores = [];
    let contadorEntradas = 0;

    while (true) {
        let color = prompt("Por favor, introduzca un color");
        contadorEntradas++;

        if (color === "rojo") {
            console.log("Se ha elegido el color rojo. Saliendo del bucle..");
            break;
        }

        if (color === "verde") {
            console.log("Se ha elegido el color verde. Volviendo al inicio del bucle.");
            continue;
        }

        if (colores.includes(color)) {
            console.log(color + " ya está en el array.");
        } else {
            console.log(color + " se ha añadido al array.");
            colores.push(color);
        }
    }
    alert("Número total de entradas: " + contadorEntradas);
    alert("Colores en el array: " + colores);
}

