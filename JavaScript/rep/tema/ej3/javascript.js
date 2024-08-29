/*  
EJERCICIO 3
 Realiza los cambios necesarios en el archivo javascript.js del ejercicio 1 para que se
muestren alertas con la información que se genere en cada paso:
 Incluir un título en el documento HTML que capture el evento onclick:
o Añadir el atributo del elemento h1: onclick="mostrarVariables();"
 Crear la función mostrarVariables en el fichero .js de la siguiente manera:
function mostrarVariables() { }
 Ya dentro de la función:
o Mostrar una alerta con el valor de la variable variable1(sin declararla primero).
alert('Variable1: ' + variable1);
o Asignar a la variable(sin declarar primero) variable2 el valor null y mostrarlo
seguidamente mediante una alerta.
o Declarar la variable variable1 y en la misma sentencia asignarle el valor 34.
Mostrarlo después mediante una alerta.
o Asignar a la variable(sin declarar primero) variable3 el valor 15,9 y
seguidamente mostrar una alerta con la multiplicación de variable1 y
variable3. (variable1*variable3)
o Asignar a variable3 la cadena de texto “ahora soy un texto”. Mostrarlo
seguidamente mediante una alerta.

o En la siguiente alerta mostrar la multiplicación de variable3 y 35.
o Crear el objeto del ejemplo y mostrar uno de sus valores mediante una alerta.
***IMPORTANTE: Aunque en este ejemplo hayamos creado o declarado variables en
cualquier punto, lo correcto es declararlas al comienzo de la función que la contenga.

*/
alert("¡Hola Mundo 2!");

function mostrarVariables() {
    let variable1;
    let variable2;
    let variable3;
    alert("Variable 1: " + variable1);

    variable2 = null;

    alert("Variable 2: " + variable2);

    variable1 = 34;

    alert("Variable 1: " + variable1);
    variable2;

    variable3 = 15.9;
    alert(variable1 * variable3);
    variable3 = "ahora soy un texto";
    alert(variable3);

    alert(variable3 * 35);

}
