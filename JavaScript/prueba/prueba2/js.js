function ejercicio2(){

    let numeros = [];
    let suma = 0;
    let denominador = 0;
    for(var i = 0; i < 10; i++){

        let numero = Number(prompt("Introduce un número"));
        numeros.push(numero);
        
        suma += numero;
        denominador++
        console.log(denominador);
    }
    console.log(numeros);

    media = suma / denominador;

    let confirmacion = confirm("¿La media de los números introducidos es "+ media+ "?");

    if(confirmacion){
        return true;
    } else{
        return false;
    }
}