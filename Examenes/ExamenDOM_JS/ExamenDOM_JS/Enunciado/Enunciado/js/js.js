function incluirSeccion() {
    //darle estilo al section
    let seccion = document.createElement("section");
    seccion.classList.add("estiloSeccion");
    document.body.appendChild(seccion);

    let listaDesordenada = document.createElement("ul");
    listaDesordenada.classList.add("estiloLista");
    seccion.appendChild(listaDesordenada);

    let caravana = document.createElement("li");
    caravana.innerText = "Caravana:";
    caravana.classList.add("titulosLista");
    listaDesordenada.appendChild(caravana);

    let listaCaravana = document.createElement("ul");
    caravana.appendChild(listaCaravana);

    let mantenimientoCar = document.createElement("li");
    mantenimientoCar.innerText = "Mantenimiento mecánico";
    mantenimientoCar.classList.add("elementosLista");
    listaCaravana.appendChild(mantenimientoCar);

    let itvCar = document.createElement("li");
    itvCar.innerText = "ITV pasada";
    itvCar.classList.add("elementosLista");
    listaCaravana.appendChild(itvCar);

    let seguroCar = document.createElement("li");
    seguroCar.innerText = "Seguro";
    seguroCar.classList.add("elementosLista");
    listaCaravana.appendChild(seguroCar);

    let parkingCar = document.createElement("li");
    parkingCar.innerText = "Parking";
    parkingCar.classList.add("elementosLista");
    listaCaravana.appendChild(parkingCar)

    let revisionesCar = document.createElement("li");
    revisionesCar.innerText = "Revisiones del conjunto";
    revisionesCar.classList.add("elementosLista");
    listaCaravana.appendChild(revisionesCar);

    let adaptarCar = document.createElement("li");
    adaptarCar.innerText = "Adaptar vehículo para remolcar";
    adaptarCar.classList.add("elementosLista");
    listaCaravana.appendChild(adaptarCar);





    let autoCaravana = document.createElement("li");
    autoCaravana.innerText = "Autocaravana:";
    autoCaravana.classList.add("titulosLista");
    listaDesordenada.appendChild(autoCaravana);

    let listaAuto = document.createElement("ul");
    autoCaravana.appendChild(listaAuto);

    let filtrosAuto = document.createElement("li");
    filtrosAuto.innerText = "Filtos (Aire, aceite, otross)";
    filtrosAuto.classList.add("elementosLista");
    listaAuto.appendChild(filtrosAuto);

    let mantenimientoAuto = document.createElement("li");
    mantenimientoAuto.innerText = "Mantenimiento mecánico";
    mantenimientoAuto.classList.add("elementosLista");
    listaAuto.appendChild(mantenimientoAuto);

    let itvAuto = document.createElement("li");
    itvAuto.innerText = "ITV Pasada";
    itvAuto.classList.add("elementosLista");
    listaAuto.appendChild(itvAuto);

    let impuestoAuto = document.createElement("li");
    impuestoAuto.innerText = "Impuesto de circulación";
    impuestoAuto.classList.add("elementosLista");
    listaAuto.appendChild(impuestoAuto);

    let seguroAuto = document.createElement("li");
    seguroAuto.innerText = "Seguro";
    seguroAuto.classList.add("elementosLista");
    listaAuto.appendChild(seguroAuto);

    let vehiculoAuto = document.createElement("li");
    vehiculoAuto.innerText = "Vehículo o medio de transporte extra";
    vehiculoAuto.classList.add("elementosLista");
    listaAuto.appendChild(vehiculoAuto);

}

function verificarChecks() {

    let naturaleza = document.getElementById("naturaleza").checked;

    let ciudad = document.getElementById("ciudad").checked;

    let espacio = document.getElementById("espacio").checked;

    if ((naturaleza && ciudad) || (naturaleza && ciudad && espacio)) {
        confirm("Aclárate!!");
    } else if ((espacio && naturaleza) || naturaleza) {
        confirm("Alquila una autocaravana");
    } else if ((ciudad && espacio) || ciudad) {
        confirm("No es para ti");
    }

    let divResultado = document.getElementById("resultado");
    divResultado.classList.add("textoResultado");
    let infoAparece = false;
    if (naturaleza || ciudad || espacio) {
        if(!infoAparece){
            divResultado.innerText = "Ponte en contacto con nosotros para mayor información. Estamos en C/Hierro nº4 Salamanca o en el teléfono 923654321";
        }
        
        infoAparece= true;
    
    } else{
        divResultado.innerHTML = "";
    }

}

let eventoCapturado = false;

function realizarEfectosPregunta(){
    let pregunta = document.getElementById("pregunta");
    if(!eventoCapturado){
        let info1 = document.getElementById("info1");
        let info2 = document.getElementById("info2");
        
        info1.classList.add("estilosPregunta");
        info2.classList.add("estilosPregunta");
        
        info1.style.color = "red";
        info1.style.backgroundColor = "white";
        eventoCapturado = true;
    }
    
}