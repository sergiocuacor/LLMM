/*Crea un array con el nombre de los doce meses. Muéstralos por pantalla o por
consola uno a uno.*/

function mostrarMeses() {
    var array = ["Enero", "Febrero", "Marzo"
        , "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
/*Pide al usuario que introduzca un número. Calcula el factorial de ese número y
mostrarlo por pantalla. ** prompt() recoge cadenas siempre, por lo que utiliza la
función Number() para pasarlo a valor numérico.*/

function calculoFactorial() {
    let pregunta = prompt("Introduce un numero")
    let numero = Number(pregunta); //Un number no puede tener .length
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
        factorial *= i;
        console.log(factorial);
    }

}
/*Pide al usuario que introduzca su edad, y dependiendo del valor que introduzca
muestra por pantalla una recomendación de Netflix:
 Si es menor de 6 años: Patrulla Canina.
 Si está entre 7 y 13 años: Alexa y Katie.
 Si tiene entre 13 y 18: Anne with an E
 Si tiene entre 19 y 35: Stranger Things
 Si tiene más de 35: Sherlock*/

function recomendarSerie() {
    let pregunta = prompt("¿Cuál es tu edad?")
    let edad = Number(pregunta);

    if (edad < 6) {
        alert("Patrulla canina");
    } else if (edad >= 7 && edad <= 13) {
        alert("Alexa y Katie");
    } else if (edad > 13 && edad <= 18) {
        alert("Anne with an E");
    } else if (edad >= 19 && edad <= 35) {
        alert("Stranger Things");
    } else {
        alert("Sherlock");
    }
}


/*Crea un bucle del que solo se salga si el usuario mete un número comprendido
entre 45 y 72.*/

function bucleInfinito() {
    do {
        var numeroBucle = parseInt(prompt("Introduce un número"));
    } while (numeroBucle < 45 || numeroBucle > 72);
}