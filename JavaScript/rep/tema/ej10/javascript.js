/*
EJERCICIO 10
 Implementa una función llamada calcularPrecioFinal que:
o Reciba como parámetro el precio de un artículo y el tipo de IVA que se le
va a aplicar.
o Para el tipo de IVA se pasará una G si se trata del tipo General, una R si se
trata del reducido y una S si se trata del súper reducido.
o La función realizará el cálculo, aplicando el IVA que corresponda
dependiendo del tipo indicado, y devolverá el importe final con el
impuesto ya aplicado.
 La ejecución de la función se desencadenará cuando el usuario pulse el botón
Pagar. Para ello:
o Se capturará en el botón el evento onclick, que cuando ocurra dicho
evento se llamará a una función inicial llamada pagar.
o La función Pagar no tendrá argumentos ni devolverá ningún valor.
o Ésta función pedirá al usuario(recuerda, prompt()) que introduzca el precio
del artículo, y después le pedirá el tipo de IVA.
o Con esos dos valores llamará a la función calcularPrecioFinal.
o Se mostrará al usuario el precio final mediante un alert().
*/

function pagar(){
    let precio = Number(prompt("Por favor, introduzca el precio del artículo"));
    let tipoIVA = prompt("Por favor, introduzca el tipo de IVA del artículo (G | R | S):");

    calcularPrecioFinal(precio, tipoIVA);
}

function calcularPrecioFinal(precio, tipoIVA){
    let importeFinal;
    switch(tipoIVA){
        case "G":
            importeFinal = precio * 1.21;
            alert("Importe final: "+ importeFinal);
            return importeFinal;
        case "R":
            importeFinal = precio * 1.10;
            alert("Importe final: "+ importeFinal);
            return importeFinal;
        case "S":
            importeFinal = precio * 1.04;
            alert("Importe final: "+ importeFinal);
            return importeFinal;
        default:
            alert("ERROR: Debe introducir un tipo de IVA válido.");
    }
}