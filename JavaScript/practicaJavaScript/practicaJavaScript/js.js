function actualizarTextoComoActuar() {
    let divComoActuar = document.getElementById("divComoActuar");
    let checkFiebre = document.getElementById("fiebre").checked; // El .checked es un booleano
    let checkTos = document.getElementById("tos").checked;
    let checkRespirar = document.getElementById("respirar").checked;
    let checkGrave = document.getElementById("grave").checked;

    divComoActuar.classList.add("estiloAzulNegrita");

    if ((checkFiebre || checkTos) && (checkRespirar || checkGrave)) {

        divComoActuar.innerText = " Llama al tlf 112..";

    } else if (checkFiebre || checkTos) {

        divComoActuar.innerText = "Quédate en casa..";

    } else {
        divComoActuar.innerText = "";
    }



}

function incluirTituloEnDiv() {
    let divParaTodos = document.getElementById("paraTodos");
    let titulo = document.createElement("h2");

    titulo.innerText = "a. ¿Cómo puedo protegerme?";
    

    titulo.setAttribute("onmouseover", "añadirAlH2");

    
    divParaTodos.appendChild(titulo);
}

function añadirAlH2() {

    let titulo = document.getElementsByTagName("h2")[0];

    let parrafo1 = document.createElement("p");
    parrafo1.innerText = "i. Lávate las manos frecuentemente con agua y jabón.";

    let parrafo2 = document.createElement("p");
    parrafo2.innerText = "ii. Al toser o estornudar, cúbrete la boca y la nariz con el codo flexionado o con un pañuelo desechable y tíralo a la basura.";

    let parrafo3 = document.createElement("p");
    parrafo3.innerText = "iii. Evita tocarte los ojos, la nariz y la boca, y que las manos facilitan la transmisión.";

    titulo.appendChild(parrafo1);
    titulo.appendChild(parrafo2);
    titulo.appendChild(parrafo3);


}