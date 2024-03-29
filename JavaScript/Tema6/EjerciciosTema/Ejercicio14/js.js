window.onload = function preguntarEdad() {
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