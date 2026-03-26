// creación de HTML desde JavaScript

// crear un nuevo enlace
const enlace = document.createElement('A');
enlace.textContent = 'Mi enlace Youtube'; // agrega el texto del enlace
enlace.href = 'https://www.youtube.com/watch?v=JMS9lbGMyCU'; // agregar la ruta del enlace
enlace.classList.add('enlace'); // se puede agregarle una clase
enlace.setAttribute('data-enlace', 'nuevo-enlace') // agregar un atributo personalizado
// obtener la navegacion y agregar el enlace al final de esta
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);
console.log(enlace);


// crear un card

// crear los 3 parrafos.
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');
// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');
// Tercer parrafo
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por pesrona';
parrafo3.classList.add('precio');
// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);
// crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
// Crear el Card
const card = document.createElement('div');
card.classList.add('card');
// asignar imagen al card
card.appendChild(imagen);
// el info
card.appendChild(info);
// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // al inicio info

console.log(parrafo1);
console.log(parrafo2);