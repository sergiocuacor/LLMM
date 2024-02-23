/*Define una función donde se pida, repetidamente, al usuario que introduzca un
color. Utiliza las sentencias break y continue donde corresponda:
o Si el color introducido es el rojo, la ejecución saldrá del bucle.
o Si el color indicado es el verde, se volverá al comienzo del bloque sin
ejecutar las sentencias siguientes.
o Si se trata de cualquier otro color, se incluirá éste en un array. Si el color
ya estuviera se repite.
o Tras terminar la ejecución del bucle se mostrará por pantalla el número de
veces que el usuario ha introducido un color y todos los valores
almacenados en el array.*/

function bucleColores(){

    let color;
    var otrosColores = [];
    let verde = 0;
    let rojo = 0;
    for(var i = 0; i < 10; i++){
        color = prompt("Introduce un color");
        if(color == "rojo"){
            rojo++;
            break;
        } else if(color == "verde"){
            verde++
            continue;
        } else{
            otrosColores[i] = color;
        }
    }

    alert("El usuario ha introducido: rojo "+rojo+" veces, verde "+ verde+" veces, otros colores: "+ otrosColores);
}