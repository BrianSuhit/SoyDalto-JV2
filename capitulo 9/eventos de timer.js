// 📍 Timers (Temporizadores)
// Permiten ejecutar código después de un tiempo determinado o de forma repetida

// ✅ setTimeout()
// Ejecuta una función una sola vez después de cierto tiempo (en milisegundos)
setTimeout(() => {
  console.log("⌛ Pasaron 2 segundos");
}, 2000);

// ✅ setInterval()
// Ejecuta una función repetidamente cada cierto tiempo (en milisegundos)
const intervalo = setInterval(() => {
  console.log("⏰ Esto se repite cada 1 segundo");
}, 1000);

// ✅ clearTimeout()
// Cancela la ejecución de un setTimeout antes de que se ejecute
const timeoutID = setTimeout(() => {
  console.log("❌ Esto no se verá");
}, 3000);
clearTimeout(timeoutID); // Lo cancelamos antes de que se ejecute

// ✅ clearInterval()
// Detiene un intervalo que estaba repitiéndose con setInterval
setTimeout(() => {
  clearInterval(intervalo); // Detenemos el intervalo luego de 5 segundos
  console.log("🛑 Intervalo detenido");
}, 5000);
