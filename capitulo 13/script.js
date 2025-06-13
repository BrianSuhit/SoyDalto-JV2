// Ejemplo de serialización y deserialización de un objeto en JavaScript
const persona = { nombre: "Paula", edad: 25, profesion: "maestra de ingles" };
const json = JSON.stringify(persona); // serializa
const obj = JSON.parse(json);        // deserializa

console.log(obj);
console.log(obj.nombre); // Paula
console.log(obj.edad);   // 25
console.log(obj.profesion); // maestra de ingles