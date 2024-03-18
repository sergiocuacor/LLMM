/* 1. (3pt) Implementa una función, llamada ejercicio1, que:
a. Pida al usuario un número N.
b. Cree un array, llamado personas, en el que se almacenarán N nombres de personas.
Estos nombres se pedirán al usuario de uno en uno.
c. Muestre el array por consola. (Hasta aquí, 0,5pt)
d. Mientras queden nombres en el array (2pt):
i. Pida un número P, entre 0 y N, al usuario.
ii. Si en la posición P del array hay nombre:
1. Elimine dicha posición.
2. Muestre, por consola, el siguiente warning “Quedan X nombres”, siendo X
el número de nombres que quedan almacenados en el array.
iii. Si, por el contrario, la posición P no existiera, muestre, por consola, el error “No
hay ningún nombre almacenado en la posición P”.
e. Cuando se eliminen todos los nombres, informe al usuario con el texto: “Se han
eliminado todos los nombres”. (0,5pt)
f. La función tiene que valer para cualquier número de entrada.
g. No hace falta incluir control de tipo de dato de los valores introducidos por el usuario, se
dará por sentado que introducirá siempre el valor solicitado( sea un número o nombres
diferentes). */


function ejercicio1() {

    let numero = Number(prompt("Introduzca un número:"));

    let personas = [];

    for (let i = 0; i < numero; i++) {
        let nombre = prompt("Introduzca un nombre");
        personas[i] = nombre;
    }

    console.log(personas);

    while (personas.length > 0) {
        let numP = Number(prompt("Introduzca un número entre 0 y " + numero - 1));
        if (numP >= 0 && numP < personas.length) {

            personas.splice(numP, 1);
            
            
            console.warn("Quedan " + personas.length + " nombres");

        } else {
            console.error("No hay ningún nombre almacenado en la posición " + numP);
        }
    }

    alert("Se han eliminado todos los nombres");

}

ejercicio1();