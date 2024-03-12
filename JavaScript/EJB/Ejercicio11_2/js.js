function juegoAdivinanzas() {
    let palabra = prompt("Usuario 1: Introduce una palabra");
    let huecos = [];

    
    for (let i = 0; i < palabra.length; i++) {
        //Rellenamos el array huecos de "_". Tendrá la misma longitud que palabra
        huecos[i] = "_";
    }

    /// creamos otra variable para mostrarle los huecos al usuario sin modificar el array huecos
    let muestraHuecosConEspacios = "";
    for (let i = 0; i < huecos.length; i++) {
        muestraHuecosConEspacios += huecos[i] + " ";
    }
    alert("Usuario 2, adivina la palabra: " + muestraHuecosConEspacios);

    let numIntentos = 0;
    let palabraAdivinada = false;

    while (!palabraAdivinada && numIntentos < 10) {
        muestraHuecosConEspacios = ""; // reseteamos muestraHuecosConEspacios para actualizar los huecos
        for (let i = 0; i < huecos.length; i++) {
            muestraHuecosConEspacios += huecos[i] + " ";
        }
        let letra = prompt("Introduce una letra. Adivinanza: " + muestraHuecosConEspacios);

        if (letra.length === 1) {
            let acierto = false;
            for (let i = 0; i < palabra.length; i++) {
                //si la letra está en la palabra y todavía es un hueco ( no ha sido acertada), hemos acertado

                
                if (palabra[i] === letra && huecos[i] === "_") {
                    huecos[i] = letra;
                    acierto = true;
                }
            }
            if (!acierto) {
                alert("Incorrecto!");
            }

            // Ponemos palabraAdivinada como true. Si al recorrer el array encontramos algún hueco
            // vacío, lo cambiamos a false y el bucle continuará iterando hasta que no haya huecos.
            palabraAdivinada = true;
            for (let i = 0; i < huecos.length; i++) {
                if (huecos[i] === "_") {
                    palabraAdivinada = false;
                    break; 
                }
            }

            numIntentos++;
        } else {
            alert("Tienes que introducir una letra");
        }
    }

    if (palabraAdivinada) {
        alert("¡Ganaste! La palabra era: " + palabra);
    } else {
        alert("Has agotado los 10 intentos. La palabra era: " + palabra);
    }
}
