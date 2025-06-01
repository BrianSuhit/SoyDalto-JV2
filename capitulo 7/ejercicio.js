// let alto = window.screen.availHeight;
// let ancho = window.screen.availWidth;

// comprar = confirm(`el alto es: ${alto}, el ancho es: ${ancho}`);

// if (comprar) 
// {
//     alert("compra realizada exitosamente");
// }
// else
// {
//     alert("compra cancelada");
// }


let href = window.location.href;
let host = window.location.host;
let pathname = window.location.pathname;
let protocol = window.location.protocol;

let html = `protocolo: <b>${protocol}</b></b><br>`;
html += `hostname: <b>${host}</b></b><br>`;
html += `pathname: <b>${pathname}</b></b><br>`;
html += `URL completa: <b>${href}</b></b><br>`;

document.writeln(html);
