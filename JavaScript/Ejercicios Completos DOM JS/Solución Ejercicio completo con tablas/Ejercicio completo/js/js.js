function centrarTitulo() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.setAttribute("class", "centrarH1");
}
function moverInfo() {
    let infoCine = document.getElementsByTagName("p")[0];
    let publicidad = document.getElementById("contenedorMapa");
    document.body.insertBefore(infoCine, publicidad);
}
function cambiarRedireccionPaginas() {
    let linksImagenes = document.getElementsByTagName("area");
    for (var i = 0; i < 4; i++) {
        linksImagenes[i].setAttribute("target", "_blank");
    }
}



function cambiarEstilosParis() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.classList.add("estilosH1Paris");
}
function realizarEfectosLondonYBerlin() {
    let h1 = document.getElementsByTagName("h1")[0];
    if (h1.classList.contains("estilosH1Paris")) {
        h1.classList.replace("estilosH1Paris", "estilosH1LondonBerlin");
    } else {

        if (!document.getElementById("textoFinPagina")) {
            let publicidad = document.getElementById("contenedorMapa");
            let texto = document.createElement("h4");
            texto.innerText = "¿No está bonito así?";
            texto.setAttribute("id", "textoFinPagina");
            publicidad.appendChild(texto);
        }
    }
}
function realizarEfectosNewYork(){
    let alerta = alert("Deja de marear");
    let h1 = document.getElementsByTagName("h1")[0];
    if (h1.classList.contains("estilosH1Paris")) {
        h1.classList.replace("estilosH1Paris", "estilosH1LondonBerlin");
    }
    if(document.getElementById("textoFinPagina")){ //Verificamos si está el texto
        let publicidad = document.getElementById("contenedorMapa");
        let texto = document.getElementById("textoFinPagina");
        publicidad.removeChild(publicidad.lastChild); // Eliminamos el último hijo
    }
}

