function ejercicio1() {


    let numero = Number(prompt("Introduce un número:"));


    let personas = [];

    for (var i = 0; i < numero; i++) {

        let nombre = prompt(("Introduce un nombre:"));
        personas[i] = nombre;

    }

    console.log(personas);

    do {

        let P = Number(prompt("Introduzca el número P:"));

        if (P >= 0 && P <= numero) {

            personas.splice(P, 1);
            console.warn("Quedan " + personas.length + "nombres.")
        } else {
            console.error("No hay ningún nombre almacenado en la posición P");
        }


    } while (personas.length > 0);

    alert("Se han eliminado todos los nombres");


}
ejercicio1();






function ejercicio2() {

    let array = [];
    let suma = 0;
    let denominador = 0;
    for (var i = 0; i < 10; i++) {
        let numero = Number(prompt("Introduzca un número:"));

        array[i] = numero;
        suma += array[i];
        denominador++;
    }
    console.log(array);

    let media = suma / denominador;

    let confirmacion = confirm("¿La media de los números introducidos es " + media + "?");
    if (confirmacion) {
        return true;
    } else {
        return false;
    }
}
ejercicio2();







/*
EJERCICIO 3

-Lo primero que hacemos es declarar una función de nombre contador.

-Después declaramos e inicializamos dos variables (palabra1 y palabra2) de tipo const que le pedirán al usuario una palabra, y almacenarán este valor.

-Dentro de la función contador, se crea una variable const palabraMayor que almacenará una function que recibirá dos parámetros,
y a continuación se define qué hará está función.


-La primera condición se cumple si la longitud de la palabra1 es mayor que la de la palabra2 (palabra1.length > palabra2.length).
En este caso, se lanzará un alert al usuario que informará de que la palabra1 tiene más letras que la palabra2.

-Si la condición anterior no se cumple, se evaluará si la longitud de la palabra2 es mayor que la de la palabra1.
Si se cumple, se lanzará un alert informando.

-Si la condición anterior tampoco se cumple, la longitud de palabra1 y de palabra2 será la misma (palabra1.length === palabra2.length),
y se lanzará otro alert informando al usuario de que tienen el mismo número de letras.

-Después se cierra la función.

-Por último, se realiza una llamada a esta función que acabamos de definir, cuyo nombre declaramos en la cuarta línea (palabraMayor) y recibe dos parámetros,
palabra1 y palabra2, cuyos valores le hemos pedido al usuario mediante un prompt en las líneas 2 y 3, y se ejecutará el código que hemos definido anteriormente.



*Por tanto, cuando llamemos a la función contador() se le pedirá al usuario dos palabras y después se llamará la función palabraMayor dentro de la misma función. */



function ejercicio4() {

    let eleccion = Number(prompt("Pulse 1 si quiera ejecutar la función del ejercicio1, 2 si quiere ejecutar ejercicio2, o 3 si quiere parar el programa"));

    if (eleccion === 1) {
        ejercicio1();
        console.error("La ejecución ha terminado");
    } else if (eleccion === 2) {
        ejercicio2();
        if (true) { /// comprobar si es (true) o es (ejercicio2)
            console.log("Todo ha terminado bien");
        }
    } else {

    }
}
ejercicio4();






