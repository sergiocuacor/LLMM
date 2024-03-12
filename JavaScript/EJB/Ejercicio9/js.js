/* 9. Implementa un programa que pida al usuario el nombre, edad y ciudad de nacimiento de
10 personas. Esta información se almacenará en un array de objetos (cada objeto
representa a una persona con las propiedades nombre, edad y ciudad). Se mostrará al
usuario, mediante un alert, todas las ciudades del array y se le pedirá que elija una. Se
sacará por consola el nombre de todas las personas mayores de 25 años que viven en
dicha ciudad. */

function ejercicio9() {
    let personas = [];
    let ciudades = "";
    for (let i = 0; i < 10; i++) {

        let nombre = prompt("Nombre:");
        let edad = Number(prompt("Edad:"));
        let ciudad = prompt("Ciudad:");

        personas.push({ nombre, edad, ciudad });
        ciudades += ciudad + " ";
    }

    alert("Ciudades: "+ ciudades);
    let ciudadSeleccionada = prompt("Elige una");
    
    for(var i = 0; i < personas.length; i++){
        if((personas[i].edad > 25) && (personas[i].ciudad === ciudadSeleccionada)){
            console.log("Personas mayores de 25 que viven en "+ ciudadSeleccionada+" : "+ personas[i].nombre);
        }
    }
}