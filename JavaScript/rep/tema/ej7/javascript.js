/*
EJERCICIO 7
 Prueba todos los ejemplos del apartado de arrays, sacando por consola el
resultado de cada cambio.
 Si se explica algún caso que no esté en los ejemplos incluirlo también.

 Implementa una función que incluya en un array la siguiente lista: tela, bies, hilo,
tijeras, máquina de coser, botón. Después, utilizando las funciones vistas:
o Elimina el bies. Muestra el array por consola.
o Añade, entre hilo y tijeras, hilo torzal. Muéstralo de nuevo por consola.
o Quita tijeras y sustitúyelas por cúter rotatorio y mesa de corte. Una vez
mas, muestra el array por consola.
o Crea, a partir del primer array, dos nuevos donde el primero incluya los
tres primeros elementos del original y el segundo del cuarto al sexto.
o En el segundo de los nuevos array creados:
 Incluye, en la primera posición, remalladora.
 Incluye, en la penúltima posición, cinta métrica.
o Muestra por consola el contenido de los tres arrays.
*/

function gestionarArray(){
/*  Implementa una función que incluya en un array la siguiente lista: tela, bies, hilo,
tijeras, máquina de coser, botón. Después, utilizando las funciones vistas: */
let array = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];
console.log(array);

let copiaArray1 = array.slice(0, 3);
let copiaArray2 = array.slice(3, 6);

// o Elimina el bies. Muestra el array por consola.
array.splice(1,1);
console.log(array);

// o Añade, entre hilo y tijeras, hilo torzal. Muéstralo de nuevo por consola.
array.splice(2,0, "hilo torzal");
console.log(array);

// o Quita tijeras y sustitúyelas por cúter rotatorio y mesa de corte. Una vez mas, muestra el array por consola.
array.splice(3, 1, "cúter rotatorio", "mesa de corte");
console.log(array);

/* o Crea, a partir del primer array, dos nuevos donde el primero incluya los
tres primeros elementos del original y el segundo del cuarto al sexto. */
console.log(copiaArray1);
console.log(copiaArray2);

/*
o En el segundo de los nuevos array creados:
 Incluye, en la primera posición, remalladora.
 Incluye, en la penúltima posición, cinta métrica.
o Muestra por consola el contenido de los tres arrays. */
copiaArray2.splice(0,0, "remalladora");
copiaArray2.splice(3, 0, "cinta métrica");
console.log(copiaArray2);
}
gestionarArray();




// ALTERNATIVA

function manipularArrayCostura() {
    // Crear el array inicial
    let costura = ['tela', 'bies', 'hilo', 'tijeras', 'máquina de coser', 'botón'];
    console.log("Array inicial:", costura);

    // Crear dos nuevos arrays a partir del original
    let primerArray = costura.slice(0, 3);
    let segundoArray = costura.slice(3, 6);
    console.log("Primer nuevo array:", primerArray);
    console.log("Segundo nuevo array:", segundoArray);

    // Eliminar el bies
    costura.splice(costura.indexOf('bies'), 1);
    console.log("Después de eliminar bies:", costura);

    // Añadir hilo torzal entre hilo y tijeras
    costura.splice(costura.indexOf('hilo') + 1, 0, 'hilo torzal');
    console.log("Después de añadir hilo torzal:", costura);

    // Sustituir tijeras por cúter rotatorio y mesa de corte
    let indexTijeras = costura.indexOf('tijeras');
    costura.splice(indexTijeras, 1, 'cúter rotatorio', 'mesa de corte');
    console.log("Después de sustituir tijeras:", costura);

    // Modificar el segundo array nuevo
    segundoArray.unshift('remalladora');
    segundoArray.splice(segundoArray.length - 1, 0, 'cinta métrica');
    console.log("Segundo array modificado:", segundoArray);

    // Mostrar los tres arrays
    console.log("Array original final:", costura);
    console.log("Primer array nuevo final:", primerArray);
    console.log("Segundo array nuevo final:", segundoArray);
}

// Llamar a la función
manipularArrayCostura();