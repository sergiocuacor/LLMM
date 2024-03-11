function ejercicio5() {

    let array = [];

    do  {
        input = Number(prompt("Introduzca un número."));
        
        if (isNaN(input)) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    console.warn(array[i]);

                }
            }
        } else{
            array.push(input);
        }
    } while(!isNaN(input));
}