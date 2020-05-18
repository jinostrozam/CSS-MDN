// var miTitulo = document.querySelector('h1');
// miTitulo.innerHTML = 'Hello world!';

var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/perro-chico.jpg') {
      miImage.setAttribute('src','images/cachorro.jpg');
    } else {
      miImage.setAttribute('src', 'images/perro-chico.jpg');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Todos los perritos se van al cielo, ' +miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Todos los perritos se van al cielo,' + nombreAlmacenado
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}