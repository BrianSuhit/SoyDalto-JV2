// 📍 Eventos del Mouse
// Se activan con interacciones del puntero del mouse

// ✅ click
// Ocurre cuando se hace un solo clic
document.addEventListener("click", () => {
  console.log("Se hizo clic");
});

// ✅ dblclick
// Ocurre cuando se hace doble clic
document.addEventListener("dblclick", () => {
  console.log("Doble clic");
});

// ✅ mouseover
// Se dispara cuando el puntero entra en un elemento o en sus hijos
document.querySelector("div").addEventListener("mouseover", () => {
  console.log("Mouse sobre el div");
});

// ✅ mouseout
// Se dispara cuando el puntero sale de un elemento o de sus hijos
document.querySelector("div").addEventListener("mouseout", () => {
  console.log("Mouse salió del div");
});


// ------- Otros eventos -------

// ✅ contextmenu
// Ocurre con clic derecho (abre el menú contextual)
document.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // Previene el menú por defecto
  console.log("Clic derecho");
});

// ✅ mouseenter
// Se activa cuando el puntero entra en un elemento (no en hijos)
document.querySelector("div").addEventListener("mouseenter", () => {
  console.log("Mouse entró al div");
});

// ✅ mouseleave
// Se activa cuando el puntero sale completamente del elemento
document.querySelector("div").addEventListener("mouseleave", () => {
  console.log("Mouse salió completamente del div");
});

// ✅ mouseup
// Se dispara cuando se suelta un botón del mouse
document.addEventListener("mouseup", () => {
  console.log("Botón del mouse soltado");
});

// ✅ mousemove
// Se dispara mientras el mouse se mueve sobre un elemento
document.addEventListener("mousemove", () => {
  console.log("Moviendo el mouse");
});
