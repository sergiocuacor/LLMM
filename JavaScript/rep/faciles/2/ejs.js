function convertir(){

let cantidad = parseFloat(document.getElementById('cantidad').value);
let conversion = document.getElementById('conversion').value;
let resultadoDiv = document.getElementById('resultadoDiv');

console.log("Cantidad: "+ cantidad);
console.log("Tipo conversión: "+conversion);
console.log("Resultado: "+ resultadoDiv.textContent);
const tasaEURaUSD = 1.10;

let resultado;

if(conversion === 'EURaUSD'){
    resultado = (cantidad * tasaEURaUSD ).toFixed(2)+ " dólares";
} else {
    resultado = (cantidad / tasaEURaUSD).toFixed(2) + " euros";
}
resultadoDiv.innerText = resultado;
console.log("Resultado: "+ resultadoDiv.textContent);
}