/* 6. Crea una función que pida un número al usuario y le indique si éste es par o impar */

function ejercicio6(){

let numero = Number(prompt("Introduzca un número: "));
if(isNaN(numero)){
    alert("No has introducido un número");
}else if(numero % 2 === 0){
    alert("El número es par");
} else {
    alert("El número es impar");
} 



}