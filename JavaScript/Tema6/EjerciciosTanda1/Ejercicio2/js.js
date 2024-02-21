/* 2. Conversor Euros a Dólares
Realiza una página que muestre un formulario para la conversión de Euros a Dólares
Americanos y viceversa. */

function convertirMoneda() {
    const cantidad = document.getElementById('cantidad').value;
    const opcion = document.getElementById('opcion').value;
    const resultadoDiv = document.getElementById('resultadoDiv');


    const euroADolar = 1.1;
    const dolarAEuro = 0.9;


    let resultado = 0;

    if (opcion === 'EUROaDOLAR') {
        resultado = cantidad * euroADolar;
        resultadoDiv.innerHTML = `${cantidad} EUROS son ${resultado.toFixed(2)} DOLARES`;
    } else if (opcion === 'DOLARaEURO') {
        resultado = cantidad * dolarAEuro;
        redultadoDiv.innerHTML = `${cantidad} DÓLARES son ${resultado.toFixed(2)} EUROS`;
    }
}


