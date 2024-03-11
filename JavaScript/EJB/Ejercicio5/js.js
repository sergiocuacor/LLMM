/* 5. Crea una función que cree un array y lo complete con números que vaya pidiendo al
usuario. Cuando el usuario introduzca una letra cualquiera, el programa recorrerá el array
creado y mostrará uno a uno, por consola a modo de warning, aquellos números que sean
pares.
*/


function ejercicio5() {

    let array = [];

    do {
        input = Number(prompt("Introduzca un número."));

        if (isNaN(input)) {  //Si el input no es un número recorremos el array y sacamos los pares por consola.
            for (var i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    console.warn(array[i]);
                }
            }
        } else { // Si es un número, lo metemos en el array.
            array.push(input);
        }
    } while (!isNaN(input)); //Mientras que el input sea un número
}