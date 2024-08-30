/*
Añade la función comprobarOperadores al fichero JavaScript de tu proyecto. Tendrá que
mostrar por pantalla lo siguiente:
 Habiendo declarado las variables var1 y var2 como cadenas de texto con
valor(comparar diferentes resultados, se puede meter todo en un mismo alert):
o var1==var2.
o var1!=var2.
o var1<var2.
o var1>var2.
o var1<=var2.
o var1>=var2.
 Ahora, siendo var3 un valor numérico, y var4 una cadena cuyo texto son números,
compara los resultados si pones lo siguiente:
o var3==var4.
o var3===var4.
 Siendo var5, var6 y var7 valores numéricos:
o Mostrar el resultado de var5<var6 y var6<var7.
o Mostrar el resultado de var5<=var6 y var6>var7.
o Asignar a var7 !true y mostrarlo.
*/

function comprobarOperadores() {
    // Declaración de variables
    var var1 = "Hola";
    var var2 = "Mundo";
    var var3 = 5;
    var var4 = "5";
    var var5 = 10;
    var var6 = 20;
    var var7 = 30;

    // Comparaciones de cadenas
    let resultadoCadenas = 
        "var1 == var2: " + (var1 == var2) + "\n" +
        "var1 != var2: " + (var1 != var2) + "\n" +
        "var1 < var2: " + (var1 < var2) + "\n" +
        "var1 > var2: " + (var1 > var2) + "\n" +
        "var1 <= var2: " + (var1 <= var2) + "\n" +
        "var1 >= var2: " + (var1 >= var2);

    alert("Comparaciones de cadenas:\n" + resultadoCadenas);

    // Comparaciones de número y cadena numérica
    let resultadoNumCadena = 
        "var3 == var4: " + (var3 == var4) + "\n" +
        "var3 === var4: " + (var3 === var4);

    alert("Comparaciones de número y cadena numérica:\n" + resultadoNumCadena);

    // Comparaciones de valores numéricos
    let resultadoNumeros = 
        "var5 < var6 && var6 < var7: " + (var5 < var6 && var6 < var7) + "\n" +
        "var5 <= var6 && var6 > var7: " + (var5 <= var6 && var6 > var7);

    alert("Comparaciones de valores numéricos:\n" + resultadoNumeros);

    // Asignación y muestra de !true a var7
    var7 = !true;
    alert("var7 después de asignar !true: " + var7);
}