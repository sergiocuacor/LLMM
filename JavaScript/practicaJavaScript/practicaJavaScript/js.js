function actualizarTextoComoActuar() {
    let divComoActuar = document.getElementById("divComoActuar");
    let checkFiebre = document.getElementById("fiebre").checked; // El .checked es un booleano
    let checkTos = document.getElementById("tos").checked;
    let checkRespirar = document.getElementById("respirar").checked;
    let checkGrave = document.getElementById("grave").checked;

    divComoActuar.classList.add("estiloAzulNegrita");

    if ((checkFiebre || checkTos) && (checkRespirar || checkGrave)) {

        divComoActuar.innerText = " Llama al teléfono 112. Se trata de un teléfono de URGENCIAS. Su buen uso depende de todos.     No llames si no es totalmente necesario";

    } else if (checkFiebre || checkTos) {

        divComoActuar.innerText = "Quédate en casa y llama al teléfono habilitado en tu Comunidad Autónoma";

    } else {
        divComoActuar.innerText = "";
    }



}

function incluirTituloEnDiv() {
    let divParaTodos = document.getElementById("paraTodos");
    let titulo = document.createElement("h2");

    titulo.innerText = "a. ¿Cómo puedo protegerme?";


    titulo.setAttribute("onmouseover", "anadirAlH2()"); //Como hago que la función anadirAlH2() solo se ejecute 1 vez
    titulo.setAttribute("onmouseout", "vaciarDiv()");
    divParaTodos.appendChild(titulo);
}

function anadirAlH2() {

    let divParaTodos = document.getElementById("paraTodos");
    let titulo = document.getElementsByTagName("h2")[0];

    titulo.classList.add("estiloTituloH2");

// o titulo.setAttribute("class", "estiloTituloH2");

    let parrafo1 = document.createElement("p");
    parrafo1.innerText = "i. Lávate las manos frecuentemente con agua y jabón.";
    divParaTodos.appendChild(parrafo1);

    let parrafo2 = document.createElement("p");
    parrafo2.innerText = "ii. Al toser o estornudar, cúbrete la boca y la nariz con el codo flexionado o con un pañuelo desechable y tíralo a la basura.";
    divParaTodos.appendChild(parrafo2);

    let parrafo3 = document.createElement("p");
    parrafo3.innerText = "iii. Evita tocarte los ojos, la nariz y la boca, y que las manos facilitan la transmisión.";
    divParaTodos.appendChild(parrafo3);

}

function vaciarDiv() { //Esto no funciona bien

    let divParaTodos = document.getElementById("paraTodos");

    let titulo = document.getElementsByTagName("h2")[0];

    titulo.classList.remove("estiloTituloH2");
// o titulo.removeAttribute("class", "estiloTituloH2");


    
        let parrafo = divParaTodos.getElementsByTagName("p");
        
        // divParaTodos.removeChild(parrafo[2]);
        // divParaTodos.removeChild(parrafo[1]);
        // divParaTodos.removeChild(parrafo[0]);

        

        divParaTodos.removeChild(divParaTodos.lastChild);
        divParaTodos.removeChild(divParaTodos.lastChild);
        divParaTodos.removeChild(divParaTodos.lastChild);

    }

    

