/* 2. Desarrolla una función que solicite al usuario su edad y luego decida si es mayor de edad o
no, mostrándoselo al usuario mediante un mensaje de confirmación.*/

function ejercicio2(){
    let edad =  Number(prompt("Por favor, introduzca su edad"));
   
        if(edad <18){
            confirm("Usted es menor de edad");
    
        }else if(edad >=18){
            confirm("Usted es mayor de edad");
        } else{
            alert("Debe introducir un número")
        }
    
}