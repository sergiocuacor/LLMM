function comprobarCheckbox() {


    let fiebre = document.getElementById("fiebre").checked; //Le ponemos el atributo checked. Si está marcado true, si no false
    let tos = document.getElementById("tos").checked;
    let respirar = document.getElementById("respirar").checked;
    let grave = document.getElementById("grave").checked;

    let divComoActuar = document.getElementById("divComoActuar");
    divComoActuar.classList.add("estiloTexto");

    if ((fiebre || tos) && (respirar || grave)) {
        divComoActuar.innerText = "i. Llama al teléfono 112. Se trata de un teléfono de URGENCIAS. Su buen uso depende de todos No llames si no es totalmente necesario";
    } else if ((fiebre || tos)) {
        divComoActuar.innerText = "i. Quédate en casa y llama al teléfono habilitado en tu Comunidad Autónoma";
    } else {
        divComoActuar.innerText = "";
    }

}

function incluirTitulo() {

    let paraTodos = document.getElementById("paraTodos");
    let titulo = document.createElement("h2");
    titulo.innerText = "a. ¿Cómo puedo protegerme?";
    paraTodos.appendChild(titulo);

    titulo.setAttribute("onmouseover", "anadirLineas()");
    titulo.setAttribute("onmouseout", "quitarLineas()");

    //mirar el blur
}

function anadirLineas() {
    let paraTodos = document.getElementById("paraTodos");
    let titulo = document.getElementsByTagName("h2")[0];

    let parrafo1 = document.createElement("p");
    parrafo1.innerText = "i. Lávate las manos frecuentemente con agua y jabón.    ";
    let parrafo2 = document.createElement("p");
    parrafo2.innerText = "ii. Al toser o estornudar, cúbrete la boca y la nariz con el codo flexionado o con un pañuelo desechable y tíralo a la basura.";
    let parrafo3 = document.createElement("p");
    parrafo3.innerText = "iii. Evita tocarte los ojos, la nariz y la boca, y que las manos facilitan la transmisión.";

    titulo.classList.add("estiloH2");

    paraTodos.appendChild(parrafo1);
    paraTodos.appendChild(parrafo2);
    paraTodos.appendChild(parrafo3);

}

function quitarLineas() {
    let paraTodos = document.getElementById("paraTodos");

    let parrafos = document.getElementsByTagName("p");
    
    let titulo = document.getElementsByTagName("h2")[0];

    titulo.classList.remove("estiloH2");

    paraTodos.removeChild(paraTodos.lastChild);
    paraTodos.removeChild(paraTodos.lastChild);
    paraTodos.removeChild(paraTodos.lastChild);

/*   
while (paraTodos.lastChild && paraTodos.lastChild.tagName === "P") {
           paraTodos.removeChild(paraTodos.lastChild);
       }
*/
}