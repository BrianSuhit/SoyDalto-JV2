// 📘 Introducción al objeto Window

// 🔹 Hereda de EventTarget, por eso puede usar eventos como addEventListener

// ✅ window.open()
// Abre una nueva pestaña o ventana
window.open("https://www.google.com", "_blank");

// ✅ window.close()
// Cierra la ventana actual (solo si fue abierta por JS)
window.close();

// ✅ window.closed
// Devuelve true si la ventana fue cerrada
console.log(window.closed);

// ✅ window.name
// Obtener o establecer el nombre de la ventana
window.name = "miVentana";
console.log(window.name);

// ✅ window.stop()
// Detiene la carga de recursos en la ventana actual
window.stop();

// ✅ alert(), prompt(), confirm()
alert("¡Hola!");
let nombre = prompt("¿Cómo te llamás?");
let confirmar = confirm("¿Estás seguro?");

// ✅ print()
// Abre el cuadro de diálogo para imprimir la página
print();


// 📐 Propiedades de posición y pantalla

// ✅ screen
console.log(window.screen); // Info de la pantalla

// ✅ screenLeft / screenTop
console.log(window.screenLeft); // Distancia al borde izquierdo
console.log(window.screenTop);  // Distancia al borde superior

// ✅ scrollX / scrollY
console.log(window.scrollX); // Cuánto se desplazó horizontalmente
console.log(window.scrollY); // Cuánto se desplazó verticalmente

// ✅ scroll()
window.scroll({ top: 100, left: 0, behavior: "smooth" });


// 🪟 Métodos para controlar la ventana (pueden no funcionar en pestañas normales)

// ✅ minimize() ⚠️ No es estándar ni funciona en todos los navegadores
// ✅ resizeBy() / resizeTo()
// Cambian el tamaño de la ventana (en ventanas abiertas por JS)
window.resizeBy(100, 100);
window.resizeTo(800, 600);

// ✅ moveBy() / moveTo()
// Mueven la ventana (solo si fue abierta por JS)
window.moveBy(100, 100);
window.moveTo(0, 0);


// 📍 Objeto window.location
// Se usa para acceder y modificar la URL del documento actual

// ✅ location.href
// Devuelve la URL completa de la página actual
console.log(window.location.href); // ej: https://www.ejemplo.com/pagina.html

// ✅ location.hostname
// Devuelve el nombre de dominio del servidor
console.log(window.location.hostname); // ej: "www.ejemplo.com"

// ✅ location.pathname
// Devuelve la ruta y archivo dentro del sitio
console.log(window.location.pathname); // ej: "/pagina.html"

// ✅ location.protocol
// Devuelve el protocolo utilizado
console.log(window.location.protocol); // ej: "https:" o "http:"

// ✅ location.assign()
// Carga una nueva URL (como hacer clic en un link)
window.location.assign("https://www.google.com");

// 👇 También podés usar:
// ✅ location.replace()
// Reemplaza la URL actual SIN guardar en el historial
// window.location.replace("https://www.google.com");

// ✅ location.reload()
// Recarga la página actual
// window.location.reload();
