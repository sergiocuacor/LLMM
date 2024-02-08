
function pedirNombre(){
    let nombre = prompt("Por favor, introduzca su nombre");

    if (nombre == null || nombre == "") {
        console.error("Error: nombre vacío");
        alert("Por favor, introduzca un valor válido");
      } else {
        let confirma = confirm("¿Es " + nombre + " correcto?");
        if (confirma) {
          console.log("El nombre es correcto");
          alert("Bienvenido");
        } else {
          console.warn("No se sabe su nombre");
        }
      }

      
}