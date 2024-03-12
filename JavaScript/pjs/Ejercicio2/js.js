/* 2. (2,5pt) Desarrolla una función, llamada ejercicio2, que:
a. Pida por pantalla 10 números.
b. Almacene estos números en un array.
c. Calcule la media de los números introducidos. (Hasta aquí, 1,5pt)
d. Pida confirmación, al usuario, del resultado de la media calculada, mostrándole dicho
resultado. El mensaje mostrado será “¿La media de los números introducidos es X?”,
donde X será la media calculada.
e. Si el usuario confirma, la función ejercicio2 devolverá true.
f. Si el usuario indica que no, la función ejercicio2 devolverá false. (Hasta aquí 1pt)
*/

function ejercicio2() {

    let array = [];
    let suma = 0;


    for (var i = 0; i < 9; i++) {
        let numero = Number(prompt("Introduzca un número:"))
        array[i] = numero; // o array.push(numero);
        suma += array[i];

    }

    let media = suma / (array.length);

    let confirmacion = confirm("La media de los números introducidos es " + media + "?");

    if (confirmacion) {
        return true;
    } else {
        return false;
    }
}

ejercicio2();




function ejercicio2Alt() {

    let array = [];
    let suma = 0;
    do {

        let numero = Number(prompt("Introduzca un número:"))
        array.push(numero);
    } while (array.length != 10);

    for (var i = 0; i < array.length; i++) {

        suma += array[i];

    }

    let media = suma / (array.length);

    let confirmacion = confirm("La media de los números introducidos es " + media + "?");

    console.log(array);
    console.log(media);

    if (confirmacion) {
        return true;
    } else {
        return false;
    }
}

ejercicio2Alt();

