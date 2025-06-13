// 📍 Eventos de la Interfaz
// Se activan al interactuar con la interfaz del navegador o del documento

// ✅ error
// Ocurre cuando hay un error al cargar un recurso (por ejemplo, una imagen)
window.addEventListener("error", (e) => {
  console.log("❌ Error detectado:", e.message);
});

// ✅ load
// Ocurre cuando la página o un recurso (como una imagen) ha terminado de cargar
window.addEventListener("load", () => {
  console.log("✅ Página completamente cargada");
});

// ✅ beforeunload
// Se dispara justo antes de que el usuario abandone la página (permite mostrar advertencia)
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = ""; // Necesario para mostrar el diálogo de confirmación en algunos navegadores
});

// ✅ unload
// Ocurre cuando la página está siendo descargada completamente (ya no se usa mucho)
window.addEventListener("unload", () => {
  console.log("👋 Página descargada");
});

// ✅ resize
// Ocurre cuando el usuario cambia el tamaño de la ventana
window.addEventListener("resize", () => {
  console.log("📐 Tamaño de ventana cambiado");
});

// ✅ scroll
// Se dispara cuando se desplaza el contenido de un elemento (o del documento)
window.addEventListener("scroll", () => {
  console.log("🌀 Scroll detectado");
});

// ✅ select
// Se activa cuando el usuario selecciona texto en un input o textarea
document.querySelector("textarea")?.addEventListener("select", () => {
  console.log("✏️ Texto seleccionado");
});
