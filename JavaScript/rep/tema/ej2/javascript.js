/*  
EJERCICIO 2
Modifica la página y los scripts del ejercicio 1 para que:
 Cuando se haga click sobre el título se llame a una función que:
o Pida al usuario que introduzca su nombre.
o Compruebe si el valor introducido por el usuario es un valor vacío, y en
caso de serlo, :
 Muestre un error por consola indicando que no se ha introducido
valor.
 Informe al usuario mediante un alert de que no ha escrito su
nombre.
o Por el contrario, si no es un valor vacío, pida confirmación del nombre
mostrándoselo. En caso de que el usuario confirme:
 Se mostrará un log por consola con el texto “El nombre es
correcto”.
 Se muestre un alert con el texto “Bienvenido”.
o Y como última opción, en caso de que el usuario no confirme su nombre,
se mostrará un warning por consola con el texto “No se sabe su nombre”.
*/

alert("¡Hola Mundo 2!");

function pedirNombre(){
    let nombre;
    let nombreValido = false;

    while(!nombreValido){
        nombre = prompt("Por favor, introduzca su nombre");
    if( nombre === null || nombre.length === 0){
        console.error("No se ha introducido un valor");
        alert("No ha escrito su nombre");
    } else{
        let confirmacion = confirm("El nombre introducido es "+ nombre+". ¿Es correcto?");
        if(confirmacion) {
            nombreValido = true;
            console.log("El nombre es correcto");
            alert("Bienvenido");
                   
        } else {
            console.warn("No se sabe su nombre");
        }
    }
    }
    
}