// * Sentencias de bloque.
if (condición) 
{
  // este bloque se ejecuta si se cumple la condición
}


// * Sentencias de control de flujo.
// las ya conocidas: if, else, switch, for, while, do-while, etc.


// * Sentencias de manejo de excepciones.
//Permiten capturar errores que puedan ocurrir durante la ejecución del programa, evitando que se detenga.
try 
{
    // Código que puede fallar
    let x = noExiste;
    throw "pito"; // Lanza una excepción personalizada
} 
catch (error) 
{
    console.log("Se produjo un error: " + error.message);
    typeof(error); // 
} 
finally 
{
    console.log("Este bloque siempre se ejecuta");
}