// 📍 Eventos del Teclado
// Se activan cuando el usuario interactúa con el teclado

// ✅ keydown
// Ocurre cuando se presiona una tecla (antes de soltarla)
document.addEventListener("keydown", (e) => {
  console.log("Tecla presionada:", e.key);
});

// ✅ keyup
// Ocurre cuando se suelta una tecla después de presionarla
document.addEventListener("keyup", (e) => {
  console.log("Tecla soltada:", e.key);
});

// ⚠️ keypress (obsoleto para muchas teclas)
// Ocurre solo con caracteres imprimibles (no se activa con Shift, Esc, etc.)
// Actualmente se recomienda usar keydown en su lugar
document.addEventListener("keypress", (e) => {
  console.log("Tecla presionada (keypress):", e.key);
});
