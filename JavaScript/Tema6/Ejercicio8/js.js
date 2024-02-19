function mostrarMeses(){
    var array = ["Enero", "Febrero", "Marzo"
    , "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

function calculoFactorial(){
    let pregunta = prompt("Introduce un numero")
    let numero = Number(pregunta); //Un number no puede tener .length
    var factorial = 1;
    for(var i = 1; i <= numero ; i++){
        factorial *= i;
        console.log(factorial);
    }
    
}

function recomendarSerie(){
    let pregunta = prompt("¿Cuál es tu edad?")
    let edad = Number(pregunta);

    if(edad < 6){
        alert("Patrulla canina");
    }
}