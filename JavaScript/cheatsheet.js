// length: Utilizado para obtener o establecer la cantidad de elementos en una matriz o la longitud de una cadena. 
let array = [1, 2, 3, 4, 5];
console.log(array.length); // Output: 5

let string = "Hola";
console.log(string.length); // Output: 4

// sort: Utilizado para ordenar los elementos de un arreglo. */

let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange']



// push: Utilizado para agregar uno o más elementos al final de un arreglo.
let array1 = [1, 2, 3];
array1.push(4);
console.log(array1); // Output: [1, 2, 3, 4]
var deportes = ["futbol", "baloncesto", "balonmano", "tenis"];
deportes.push("padel");

// pop: Utilizado para eliminar el último elemento de un arreglo y devolverlo.
let array2 = [1, 2, 3, 4];
let removedElement = array2.pop();
console.log(removedElement); // Output: 4
console.log(array2); // Output: [1, 2, 3]

// slice: Utilizado para crear una copia superficial de una porción de un arreglo.
let array3 = [1, 2, 3, 4, 5];
let newArray = array3.slice(1, 4);  //El que está en la posición 1 (2) y hasta el que tiene index 3 (4)
console.log(newArray); // Output: [2, 3, 4] 

let array4 = ['a', 'b', 'c', 'd', 'e'];
let slicedArray = array4.slice(2); // Obtener elementos a partir del índice 2
console.log(slicedArray); // Output: ['c', 'd', 'e']

let array5 = ['a', 'b', 'c', 'd', 'e'];
let slicedArray1 = array.slice(1, 4);
console.log(slicedArray1); // Output: ['b', 'c', 'd']

// splice: Utilizado para agregar, eliminar o reemplazar elementos en un arreglo.
// Para eliminar elementos:
let array6 = [1, 2, 3, 4, 5];
array.splice(2, 2); // Elimina 2 elementos a partir del índice 2
console.log(array); // Output: [1, 2, 5]

// Para agregar elementos:
let array7 = [1, 2, 3, 4, 5];
array.splice(2, 0, 6, 7); // Agrega 6 y 7 a partir del índice 2 sin eliminar ningún elemento
console.log(array); // Output: [1, 2, 6, 7, 3, 4, 5]

// Para reemplazar elementos:
let array8 = [1, 2, 3, 4, 5];
array.splice(2, 2, 'a', 'b', 'c'); // Reemplaza 2 elementos a partir del índice 2 con 'a', 'b' y 'c'
console.log(array); // Output: [1, 2, 'a', 'b', 'c', 5]