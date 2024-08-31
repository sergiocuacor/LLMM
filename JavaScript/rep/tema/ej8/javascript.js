/*
EJERCICIO 8
Teniendo en cuenta que se puede utilizar la función prompt() para pedir valor por pantalla
al usuario, utiliza las diferentes estructuras de control para lo siguiente:
 Crea un array con el nombre de los doce meses. Muéstralos por pantalla o por
consola uno a uno.
 Pide al usuario que introduzca un número. Calcula el factorial de ese número y
mostrarlo por pantalla. ** prompt() recoge cadenas siempre, por lo que utiliza la
función Number() para pasarlo a valor numérico.
 Pide al usuario que introduzca su edad, y dependiendo del valor que introduzca
muestra por pantalla una recomendación de Netflix:
o Si es menor de 6 años: Patrulla Canina.
o Si está entre 7 y 13 años: Alexa y Katie.
o Si tiene entre 13 y 18: Anne with an E
o Si tiene entre 19 y 35: Stranger Things
o Si tiene más de 35: Sherlock
 Crea un bucle del que solo se salga si el usuario mete un número comprendido
entre 45 y 72. */

function ejercicio8() {

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }


    let numero = Number(prompt("Introduzca un número: "));
    let factorial = 1;
    for (var i = numero; i > 0; i--) {
        factorial *= i;
    }
    alert("El factorial de " + numero + " es: " + factorial);

    let edad;

    do {
        edad = Number(prompt("Introduzca su edad :"));
        if (edad < 6) {
            alert("Patrulla canina");
        } else if (edad >= 7 && edad < 13) {
            alert("Alexa y Katie");
        } else if (edad >= 13 && edad < 18) {
            alert("Anne with an E");
        } else if (edad >= 19 && edad < 35) {
            alert("Stranger Things");
        } else {
            alert("Sherlock");
        }
    } while (edad < 45 || edad > 72);
}




// ALTERNATIVA

// 1. Array de meses
function mostrarMeses() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (let mes of meses) {
        console.log(mes);
    }
}

// 2. Cálculo del factorial
function calcularFactorial() {
    let numero = Number(prompt("Introduce un número para calcular su factorial:"));

    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, introduce un número válido no negativo.");
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${numero} es ${factorial}`);
}

// 3. Recomendación de Netflix
function recomendarNetflix() {
    let edad = Number(prompt("Introduce tu edad:"));

    if (isNaN(edad)) {
        console.log("Por favor, introduce una edad válida.");
        return;
    }

    if (edad < 6) {
        console.log("Recomendación: Patrulla Canina");
    } else if (edad >= 7 && edad <= 13) {
        console.log("Recomendación: Alexa y Katie");
    } else if (edad > 13 && edad <= 18) {
        console.log("Recomendación: Anne with an E");
    } else if (edad > 18 && edad <= 35) {
        console.log("Recomendación: Stranger Things");
    } else {
        console.log("Recomendación: Sherlock");
    }
}

// 4. Bucle hasta número entre 45 y 72
function bucleNumero() {
    let numero;
    do {
        numero = Number(prompt("Introduce un número entre 45 y 72:"));
        if (isNaN(numero)) {
            console.log("Por favor, introduce un número válido.");
        } else if (numero < 45 || numero > 72) {
            console.log("El número debe estar entre 45 y 72.");
        }
    } while (numero < 45 || numero > 72);

    console.log(`Has introducido el número ${numero}, que está entre 45 y 72.`);
}

// Llamadas a las funciones
mostrarMeses();
calcularFactorial();
recomendarNetflix();
bucleNumero();