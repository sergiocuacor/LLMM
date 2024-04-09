 function crearTabla(){

  let div = document.createElement("div");
  div.classList.add("divT");
  document.body.appendChild(div);

  let table = document.createElement("table");
  div.appendChild(table);

  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  th2.innerText = "prueeba";
  let th3 = document.createElement("th");
  th3.innerText = "prueeba";
  table.appendChild(th1);
  table.appendChild(th2);
  table.appendChild(th3);


  let tr1 = document.createElement("tr");
  let td11 = document.createElement("td");
  let td12 = document.createElement("td");
  let td13 = document.createElement("td");
  td11.innerText = "kdfjksjkfs";
  td12.innerText = "jfksjfk";
  td13.innerText = " JKDJKSF";
  table.appendChild(tr1);
  tr1.appendChild(td11);
  tr1.appendChild(td12);
  tr1.appendChild(td13);


  let tr2 = document.createElement("tr");
  let td21 = document.createElement("td");
  let td22 = document.createElement("td");
  let td23 = document.createElement("td");
  td21.innerText = "kdfjksjkfs";
  td22.innerText = "jfksjfk";
  td23.innerText = " JKDJKSF";
  table.appendChild(tr2);
  tr2.appendChild(td21);
  tr2.appendChild(td22);
  tr2.appendChild(td23);


  let tr3 = document.createElement("tr");
  let td31 = document.createElement("td");
  let td32 = document.createElement("td");
  let td33 = document.createElement("td");
  td31.innerText = "kdfjksjkfs";
  td32.innerText = "jfksjfk";
  td33.innerText = " JKDJKSF";
  table.appendChild(tr3);
  tr3.appendChild(td31);
  tr3.appendChild(td32);
  tr3.appendChild(td33);
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function masInfo(resultado){
    var container = document.createElement('section');
    container.style.backgroundColor = 'blue';
    container.style.textAlign = 'center';
    container.style.padding = '20px';

    var container = document.createElement('section');
    container.style.backgroundColor = 'blue';
    container.style.textAlign = 'center';
    container.style.padding = '20px';

    for (var i = 0; i < 4; i++) {
        var row = document.createElement('tr');
    
        for (var j = 0; j < 3; j++) {
          var cell = document.createElement('td');
          cell.style.padding = '10px';
          cell.style.border = '1px solid black';
    
          if (i == 0) {
            if (j == 0) {
              cell.innerHTML = 'Producto';
            } else if (j == 1) {
              cell.innerHTML = 'Precio';
            } else {
              cell.innerHTML = 'Cantidad';
            }
          } else {
            if (j == 0) {
              cell.innerHTML = 'Producto ' + i;
            } else if (j == 1) {
              cell.innerHTML = '$' + Math.floor(Math.random() * 100) + '.00';
            } else {
              cell.innerHTML = Math.floor(Math.random() * 10);
            }
          }

          row.appendChild(cell);
        }
    
        table.appendChild(row);
      }

      container.appendChild(table);
      document.body.appendChild(container);
 }

function alquila() {
    var checkboxNaturaleza = document.getElementById('naturaleza');
    var checkboxCiudad = document.getElementById('ciudad');
    var checkboxEspacio = document.getElementById('espacio');

    checkboxNaturaleza.addEventListener('change', mostrarAlerta);
    checkboxCiudad.addEventListener('change', mostrarAlerta);
    checkboxEspacio.addEventListener('change', mostrarAlerta);

        function mostrarAlerta() {
            var mensaje = '';

            if ((Naturaleza)|| ( Naturaleza && Espacio)){
            alquila.innerHTML = ("Alquila una autocaravana");
            }  else if ((Ciudad) || (Ciudad && Espacio)){
                alquila.innerHTML = ("No es para ti");
            } 
            if ((Naturaleza && Ciudad) || (Naturaleza  && Ciudad && Espacio)){
                alquila.innerHTML = ("Aclárate!!!!");
            }
        }
         alert(mensaje);
}

function info() {
    var info1 = document.getElementById('info1');
    var info2 = document.getElementById('info2');

    function clicEnH1(event) {
        event.stopPropagation();
        info1.classList.add('bordes-redondeados');
        info2.classList.add('bordes-redondeados', 'fondo-negro', 'texto-blanco');
        event.target.removeEventListener('click', clicEnH1);
    }

    var h1Info1 = info1.querySelector('h1');
    var h1Info2 = info2.querySelector('h1');
     
    h1Info1.addEventListener('click', clicEnH1);
    h1Info2.addEventListener('click', clicEnH1);    
}
