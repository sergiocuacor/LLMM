function juegoAdivinanzas() {
    let palabra = prompt("Usuario 1: Introduce una palabra");
    let caracteres = [];
    
    let huecos = [];
    for (let i = 0; i < palabra.length; i++) { //recorremos la palabra letra a letra
        caracteres[i] = palabra[i];
        huecos[i] = " _ ";
         
    //  caracteres.push(palabra[i]);
    //  huecos.push(" _ ");
    }
    let adivinanza = alert("Usuario 2, adivina la palabra: " + huecos);




    let numIntentos = 0;
    let palabraAdivinada = false;


    for (var i = 0; i < 10; i++) {
        var letra = prompt("Introduce una letra. Adivinanza: " + huecos);
        do{
            if(letra.length == 1){
                //Recorremos la palabra para ver si la letra coincide con alguna posición
                for(var i = 0; i < palabra.length; i++){ 
                    if(letra == palabra[i]){
                        huecos[i] = letra;
                        
                    }
                    console.log("palabra " +palabra);
                    console.log("huecos "+huecos);
                    if(palabra ===huecos){
                        alert("Usuario 2: Has acertado!");
                    }
                }
                numIntentos++;
            } else{
                alert("Debe introducir una letra");
            }
        } while(letra.length != 1);
        console.log(numIntentos);
        console.log(letra.length);
        
    }

    
}