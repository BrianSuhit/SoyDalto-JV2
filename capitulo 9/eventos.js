// 📍 Eventos en JavaScript
// Permiten reaccionar ante acciones del usuario o del sistema

// ✅ addEventListener()
// Escucha un evento y ejecuta una función cuando ocurre
document.addEventListener("click", () => {
  console.log("Se hizo clic en el documento");
});

// ✅ event.type
// Devuelve el tipo de evento que se ejecutó
document.addEventListener("keydown", (event) => {
  console.log("Tipo de evento:", event.type); // ej: "keydown"
});

// ✅ event.target
// Devuelve el elemento que originó el evento
document.addEventListener("click", (event) => {
  console.log("Click en:", event.target);
});

// ✅ event.currentTarget
// Devuelve el elemento que está ejecutando el listener
document.querySelector("button").addEventListener("click", function(event) {
  console.log("Botón:", event.currentTarget);
});

// ✅ event.stopPropagation()
// Detiene la propagación del evento (evita que siga subiendo o bajando)
document.getElementById("hijo").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Clic solo en hijo (no se propaga)");
});

// ✅ removeEventListener()
// Elimina un listener previamente agregado
function saludar() {
  console.log("Hola");
}
document.addEventListener("click", saludar);
// Luego se puede eliminar así:
// document.removeEventListener("click", saludar);
