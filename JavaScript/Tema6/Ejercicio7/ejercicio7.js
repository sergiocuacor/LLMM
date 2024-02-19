/*  Implementa una función que incluya en un array la siguiente lista: tela, bies, hilo,
tijeras, máquina de coser, botón. Después, utilizando las funciones vistas:
o Elimina el bies. Muestra el array por consola.
o Añade, entre hilo y tijeras, hilo torzal. Muéstralo de nuevo por consola.
o Quita tijeras y sustitúyelas por cúter rotatorio y mesa de corte. Una vez
mas, muestra el array por consola.
o Crea, a partir del primer array, dos nuevos donde el primero incluya los
tres primeros elementos del original y el segundo del cuarto al sexto.
o En el segundo de los nuevos array creados:
 Incluye, en la primera posición, remalladora.
 Incluye, en la penúltima posición, cinta métrica.
o Muestra por consola el contenido de los tres arrays.*/

function modificarArray(){

let array = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];

//Elimina el bies. Muestra el array por consola.
array.splice(1, 1);
console.log(array);

//Añade, entre hilo y tijeras, hilo torzal. Muéstralo de nuevo por consola.
array.splice(2, 0, "hilo torzal");
console.log(array);

/*Quita tijeras y sustitúyelas por cúter rotatorio y mesa de corte. Una vez
mas, muestra el array por consola.*/
array.splice(3,1,"cúter rotatorio", "mesa de corte");
console.log(array);

//primero incluya los tres primeros del elementos del original
let nuevoArray1 = array.slice(0,3);
console.log(nuevoArray1);


}