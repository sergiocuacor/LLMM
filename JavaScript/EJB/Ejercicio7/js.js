/* 7. Implementa una función que muestre, por consola, la tabla de multiplicar de un número
solicitado al usuario.*/


function ejercicio7(){
    let numero = Number(prompt("Introduzca un número: "));
    for(var i = 0; i < 11; i++){
        let resultado = numero * i;
        console.log( numero +" * "+ i + " = "+ resultado);

    }
}