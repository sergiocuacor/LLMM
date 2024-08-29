/* Cálculo de números primos
Realiza una página para calcular los números primos entre 1 y un número menor que 100
que introduzca el usuario. Mostrar al usuario el resultado. */

/* NUMEROS PRIMOS: AQUELLOS QUE SOLO SON DIVISIBLES POR 1 Y POR ELLOS MISMOS */
function calcularNumerosPrimos(){

let numeroRangoSuperior = document.getElementById("numero").value; // Primero obtenemos el numero que utilizarmeos como limite superior para calcular numeros primos


while(numeroRangoSuperior <1 || numeroRangoSuperior > 100){
    alert("Por favor, introduzca un número entre 1 y 100");
}


let numeros = [];

for(var i = i; i < numeroRangoSuperior; i++){
numeros.push(i);    
    }
console.log("Números entre 1 y "+ numeroRangoSuperior+": "+numeros);

let numerosPrimos = [];

for(){

}
}

function esPrimo(numero){
    if(numero <= 1) return false; // Si es menor o igual a 1 no puede ser primo

    for(let i = 2; i < numero; i++){
        if(numero % i === 0) return false;
    }/* Si a partir del 2 encontramos un índice que de resto 0 significa que el número es divisible por él y por tanto no puede ser primo */



    return true;
}