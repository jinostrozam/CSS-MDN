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