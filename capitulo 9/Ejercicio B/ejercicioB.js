let alumnos = [{
    nombre: "Lucas Dalto",
    email: "soydalto@gmail.com",
    materia: "Física 3"
},{
    nombre: "Karin Guerra",
    email: "karin@gmail.com",
    materia: "Física 1"
},{
    nombre: "Jorge Ramirez",
    email: "ramirez@gmail.com",
    materia: "Cálculo 2"
},{
    nombre: "Facundo Roberto",
    email: "robert@gmail.com",
    materia: "Literatura"
},{
    nombre: "marko",
    email: "marko@gmail.com",
    materia: "Recreo"
}]

const boton = document.querySelector("btn-confirmar");


// Bucle que recorre cada alumno dentro del array 'alumnos'
for (alumno in alumnos){

    // Se guarda el objeto completo del alumno actual
    let datos = alumnos[alumno];

    // Se extraen los datos específicos del alumno
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];

    // Se crea un bloque HTML con los datos del alumno usando template literals (``)
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>
    `;

    // Se agrega el bloque HTML generado al contenedor con clase "grid-container"
    // El operador += permite ir acumulando el contenido en vez de reemplazarlo
    document.querySelector(".grid-container").innerHTML += htmlCode;
}

// Se agrega un evento al botón para que ejecute una función al hacer click
boton.addEventListener("click", () => {

    // Se seleccionan todos los elementos que contienen la clase "semana"
    let elementos = document.querySelectorAll(".semana");

    // Se seleccionan todos los <select> con clase "semana-elegida"
    let semanasElegidas = document.querySelectorAll(".semana-elegida");

    // Se recorre cada elemento encontrado (tanto divs como selects)
    for (elemento in elementos){
        // Se guarda el div de la semana actual
        semana = elementos[elemento];

        // Se reemplaza su contenido por el valor elegido del select correspondiente
        semana.innerHTML = semanasElegidas[elemento].value;
    }
})
