/* Desarrolla una función que genere un número aleatorio entre 1 y 100 (busca por internet
    como generar dicho número) y pida al usuario que lo adivine. Si el usuario indica un
    número menor, se le mostrará por pantalla el mensaje “mas alto”, y si ingresa un número
    mayor, se le mostrará el mensaje “mas bajo”. La ejecución terminará cuando le usuario
    introduzca el número correcto. Si el usuario introduce un valor no numérico, se le
    mostrará por pantalla el mensaje “eso no es un número”.*/

function ejercicio8(){
// Si queremos que el rango sea de 0 a 100, le sumaremos 1 porque Math.random() nunca devuelve 1
 let numero = Math.floor(Math.random() * 101);
 console.log(numero);
 do{
    // Con var, el while es capaz de leer la variable que está dentro del do
    var respuesta = Number(prompt("Adivine el número")); 
    
    if(isNaN(respuesta)){
        alert("eso no es un número");
    } else if(respuesta < numero){
        alert("más alto");
    } else if ( respuesta > numero){
        alert("más bajo");
    } else{
        alert("acertaste!");
    }
 } while (respuesta != numero);
}