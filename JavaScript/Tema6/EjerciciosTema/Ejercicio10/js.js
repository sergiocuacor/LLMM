/*Implementa una función llamada calcularPrecioFinal que:
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
o Se mostrará al usuario el precio final mediante un alert().*/



function calcularPrecioFinal(precioArticulo, tipoIVA) {
    var importeFinal = 0;
    if (tipoIVA == "G") {
        importeFinal = precioArticulo * 1.21;
    } else if (tipoIVA == "R") {
        importeFinal = precioArticulo * 1.10;
    } else if (tipoIVA == "S") {
        importeFinal = precioArticulo * 1.04;
    } else {
        alert("Introduzca un tipo válido");
    }
    return importeFinal;
}

function pagar() {
    var precioArticulo;
    var tipoIVA;
    precioArticulo = parseFloat(prompt("Introduzca el precio del artículo: ")); // parseamos a float porque prompt devuelve Strings
    tipoIVA = prompt("Dígame el tipo de IVA del artículo: ");
    var importeFinal = calcularPrecioFinal(precioArticulo, tipoIVA);
    alert("El importe final es: " + importeFinal);
    alert(`El importe final es: ${importefinal}`); //forma alternativa sacar números
}

function calcularPrecioFinalAlt(precioArticulo, tipoIVA) { //version alternativa
    var importeFinal = 0;
    switch (tipoIVA) {

        case "G":
            importeFinal = precioArticulo * 1.21;

            break;
        case "R":
            importeFinal = precioArticulo * 1.10;

            break;
        case "S":
            importeFinal = precioArticulo * 1.04;

            break;
    }
    return importeFinal;
}