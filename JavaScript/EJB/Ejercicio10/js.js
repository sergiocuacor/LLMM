function ejercicio10(){
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let pregunta= prompt("¿Qué operación quieres realizar? (suma, resta, multiplicación, división)");

let resultado;

switch (pregunta) {
  case "suma":
    resultado = numero1 + numero2;
    alert("El resultado de la suma es: "+ resultado);
    break;
  case "resta":
    resultado = numero1 - numero2;
    alert("El resultado de la resta es: "+ resultado);
    break;
  case "multiplicación":
    resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: "+ resultado);
    break;
  case "división":
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
      alert("El resultado de la división es: "+ resultado);
    } else {
      alert("Error: No se puede dividir por cero.");
    }
    break;
  default:
    alert("Operación no válida. Por favor, seleccione suma, resta, multiplicación o división.");
    break;
}


}