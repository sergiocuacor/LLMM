/* 4. Escribe una función que declare un array de nombres y agregue, al final del mismo, un
nuevo nombre que pida al usuario por pantalla. Sacará por consola, a modo de error, el
array completo. */

function ejercicio4(){
    let nombres = ["Sergio", "Pablo", "Diego", "David"];
    let nuevoNombre = prompt("Introduzca un nombre");

    nombres.push(nuevoNombre);
    console.error(nombres);
}