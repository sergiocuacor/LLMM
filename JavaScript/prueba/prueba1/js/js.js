function ejercicio1(){

    let numero = Number(prompt("Por favor, introduzca un número"));

    let personas = [];
    for(var i = 0; i < numero; i++){
        let nombre = prompt("Introduzca un nombre");
        personas.push(nombre);
    }
    console.log(personas);

    while (personas.length > 0){
        let P = Number(prompt("Introduzca un número entre 0 y "+ numero));

        if(P >= 0 && P < personas.length ){
            personas.splice(P,1);
            console.warn("Quedan "+ personas.length+ " nombres.")
        }
        else{
            console.error("No hay ningún nombre almacenado en la posición P");
        }
    }
    alert("Se han eliminado todos los nombres");
}