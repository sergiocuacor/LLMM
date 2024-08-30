/*
EJERCICIO 6
Implementa una función donde:
 Primero se creará un array vacío.
 Después se pedirá al usuario, repetidamente, que introduzca un número(que
podrá ser positivo, negativo o 0) y un nombre de persona.
 Cada vez se preguntará al usuario si se va a añadir el valor indicado:
o Si acepta que se añada:
 Si ha introducido un número mayor o igual que 0 se incluye el
nombre en el array en la posición indicada.
 Si el número es negativo, se añadirá al final del array sin
sobrescribir ninguno.
o Si no lo acepta:
 Si el número es mayor o igual que 0, se eliminará el valor del
elemento que se encuentre en la posición indicada ignorando el
introducido.
 Si es negativo, se eliminará el primero.
 La ejecución terminará cuando , en lugar de un número, se introduzca una cadena.
Antes de finalizar se mostrará el contenido final del array por consola.
*/

function ejercicio6(){
let array = [];
let numero, nombre, confirmacion;

do{
    numero = Number(prompt("Introduzca un número: "));
    nombre = prompt("Introduzca un nombre:");
    console.log(typeof numero);
    console.log(isNaN(numero));
    
    confirmacion = confirm("Se añadirá el nombre "+ nombre+ " en la posición "+ numero+".");
    if(confirmacion){
        numero >= 0 ? array[numero] = nombre : array.push(nombre);
        
    } else{
        numero >= 0 ? array.splice(numero,1) : array.splice(0,1);
    }
    console.log(array);
} while(!isNaN(numero));
}

// ALTERNATIVA

function gestionarArray() {
    let array = [];
    
    while (true) {
        let numero = prompt("Introduce un número (o una cadena para terminar):");
        
        // Verificar si se introdujo una cadena para terminar
        if (isNaN(numero)) {
            console.log("Contenido final del array:", array);
            break;
        }
        
        numero = parseInt(numero);
        let nombre = prompt("Introduce un nombre:");
        let añadir = confirm("¿Quieres añadir este valor?");
        
        if (añadir) {
            if (numero >= 0) {
                array[numero] = nombre;
            } else {
                array.push(nombre);
            }
        } else {
            if (numero >= 0) {
                delete array[numero]; 
                /* 
                delete NO elimina la posición del array, deja un hueco en esa posición, la length no cambiaría. 
                Suele ser más conveniente usar splice porque reorganiza el array, mientras que delete es útil cuando queremos dejar intacta la estructura del array
                */ 
            } else {
                array.shift(); // Elimina el primer elemento del array
            }
        }
    }
}
