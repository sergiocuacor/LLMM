/*EJERCICIO 14
Crear una página HTML con un formulario que pida el nombre de usuario, la contraseña, la
edad, el sexo mediante radiobuttons y que tenga botones de limpiar y enviar formulario:
 Una vez que la página haya terminado de cargar, mostrar un mensaje por pantalla
que pregunte al usuario si es mayor de edad.
o En caso de que lo sea, introducir un nuevo campo llamado nº cuenta
debajo del campo edad.
 Cuando el foco se ponga en el campo contraseña, el borde del campo cambia de
color.
Cuando el ratón pase por encima de cualquier nombre de los campos del
formulario, se cambiará el tamaño de letra a una mayor.
 Cuando se envíe un formulario, se capturará el evento para que, antes de enviarlo
definitivamente, se pida confirmación al usuario:
- En caso de que cancele no se hará nada.
- En caso de que acepte el envío, realizarlo. Busca la manera en que se
lanzaría de nuevo el envío del formulario.*/
window.onload = function(){
    preguntarEdad(); //Cuando carga la página, llamamos a preguntarEdad()

    let formulario = document.getElementsByTagName("form")[0];//Obtenemos el formulario
    formulario.onsubmit = confirmarEnvio;// Le decimos al navegador que cuando se ejecute formulario.onsubmit, confirmarEnvio sea el encargado de manejar el evento. NO ES UNA LLAMADA A LA FUNCIÓN
}

function confirmarEnvio(event){

    let confirmacion = confirm("¿Estás seguro de que quieres enviar el formulario?");
    if (confirmacion) {
        event.target.submit(); //Si el usuario confirma, enviamos el formulario
    }
    // Si el usuario cancela, simplemente no hacemos nada y el formulario no se envía. 
}


function preguntarEdad() {
    let mayorEdad = confirm("¿Eres mayor de edad?");

    if (mayorEdad) {
        let formulario = document.getElementsByTagName("form")[0];// Obtenemos el formulario
        let edad = document.getElementsByTagName("input")[2];//Obtenemos la edad
        let labelCuenta = document.createElement("label");//Creamos un label
        labelCuenta.setAttribute("for", "cuenta");
        labelCuenta.innerText = "nº Cuenta:";
        let inputCuenta = document.createElement("input");
        inputCuenta.setAttribute("type", "number");
        inputCuenta.setAttribute("id", "cuenta");
        
        formulario.insertBefore(inputCuenta, edad.nextSibling.nextSibling);
        //el primer nextSibling nos coloca detrás de edad, si queremos colocarnos debajo tenemos que saltar el br, con un segundo nextSibling
        
        
        formulario.insertBefore(labelCuenta, inputCuenta); //Insertamos el label antes del input
    }
}

function cambiarBorde(){

    let inputContraseña = document.getElementsByTagName("input")[1];

    inputContraseña.classList.add("bordeRojo");

}
function aumentarLetra(){

    for(var i = 0; i < 10; i++){

    let nombreCampos = document.getElementsByTagName("label")[i];
    nombreCampos.classList.add("letraGrande");
    }
}