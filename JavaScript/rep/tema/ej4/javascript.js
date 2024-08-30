/*
EJERCICIO 4
Realiza los siguientes ejercicios en la consola del navegador:
 Comprueba, utilizando el operador typeof(), el tipo de dato de 3, “3”, tres y 3.6.
 Comprueba el resultado de las siguientes conversiones: parseInt(“345.87”),
parseFloat(“345.87”), parseInt(‘8 manzanas’) y Number(‘8 manzanas’).
 Comprueba el tipo de dato del resultado de las conversiones del punto anterior.
 Comprueba el resultado de convertir a booleano una cadena de caracteres y un
valor numérico.
*/

// 1. Comprobando tipos de datos con typeof
console.log(typeof 3);        // "number"
console.log(typeof "3");      // "string"
console.log(typeof tres);     // "undefined" (asumiendo que 'tres' no está definido)
console.log(typeof 3.6);      // "number"

// 2. Realizando conversiones
console.log(parseInt("345.87"));      // 345
console.log(parseFloat("345.87"));    // 345.87
console.log(parseInt('8 manzanas'));  // 8
console.log(Number('8 manzanas'));    // NaN

// 3. Comprobando tipos de datos de los resultados de las conversiones
console.log(typeof parseInt("345.87"));      // "number"
console.log(typeof parseFloat("345.87"));    // "number"
console.log(typeof parseInt('8 manzanas'));  // "number"
console.log(typeof Number('8 manzanas'));    // "number"

// 4. Convirtiendo a booleano una cadena de caracteres y un valor numérico
console.log(Boolean("Hola"));  // true
console.log(Boolean(""));      // false (cadena vacía)
console.log(Boolean(42));      // true
console.log(Boolean(0));       // false