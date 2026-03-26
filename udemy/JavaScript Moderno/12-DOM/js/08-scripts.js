// Veamos lo que se conoce como Traversing the DOM

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

// Los diferentes elementos se les conoce como Nodos y se listan asi
console.log("ChildNodes:")
console.log(navegacion.childNodes);
// también existe algo llamado Children
console.log("Children:")
console.log(navegacion.children)

// childNodes muestra hasta los espacios en blanco, children muestra solo los elementos

// informacion que se encuentra en un nodo
console.log("navegacion.children[0].nodeType: " + navegacion.children[0].nodeType) // Tipo de Node, 1 es un elemento
console.log("navegacion.children[0].nodeName: " + navegacion.children[0].nodeName) // Que etiqueta es...

// seleccionando el primero card:
const card = document.querySelector('.card');
console.log("Primer card:")
console.log(card);

console.log("card.nodeType: " + card.nodeType);
console.log("card.nodeName: " + card.nodeName);

// 1 - Elemento
// 2 - Atributo
// 3 - Text node
// 8 - Commentario
// 9 - Documento
// 10 - doctype

// se puede seleccionar un elemento y navegar en sus diferentes elementos
console.log("card.children:")
console.log(card.children);

// acceder al div con la clase de info
console.log("card.children[1]:")
console.log(card.children[1]);

// accedera  los elementos hijos de ese info
console.log("card.children[1].children:")
console.log(card.children[1].children[1]);

// Acceder al titulo
console.log("card.children[1].children[1].textContent:")
console.log(card.children[1].children[1].textContent);

// Modificar ese titulo con un traversing
console.log("Modificando el texto con traversing")
card.children[1].children[1].textContent = 'Cambiando el Texto con traversing...'

// cambiar el texto que dice concierto por algo más
card.children[1].children[0].textContent = 'Batman vs Superman: El Origen de la Justicia';


// acceder a esa imagen
console.log("Accediendo a la imagen con traversing:")
console.log(card.children);
console.log(card.children[0]);
console.log(card.children[0].src);

// Cambiar la imagen...
card.children[0].src = 'img/hacer2.jpg';
console.log("Imagen cambiada:")
console.log(card.children[0].src);

// suponer que de en la navegación queremos acceder al primer o último enlace

console.log("Accediendo al último enlace:")
console.log(navegacion.lastChild);
console.log("Accediendo al último enlace con lastElementChild:")
console.log(navegacion.lastElementChild);

// Si desesa acceder al primero
console.log("Accediendo al primer enlace:")
console.log(navegacion.firstChild)
console.log("Accediendo al primer enlace con firstElementChild:")
console.log(navegacion.firstElementChild);

// Cambiar el primer texto
navegacion.firstElementChild.textContent = 'Nuevo Enlace 1'
navegacion.lastElementChild.textContent = 'Nuevo Enlace 2'

// seleccionar un elemento hijo e ir navegando hacia el padre

// seleccionar el primer enlace
console.log("Seleccionando el primer enlace:")
const enlace = document.querySelector('a');
console.log(enlace);

console.log("Accediendo al padre del enlace:")
console.log(enlace.parentNode)
console.log("Accediendo al padre del enlace con parentElement:")
console.log(enlace.parentElement)

// También se puede ir al padre del padre
console.log("Accediendo al padre del padre del enlace:")
console.log(enlace.parentElement.parentElement)


// también es posible de hacer traversing a elementos que estan en el mismo nivel
console.log("Accediendo a los elementos hermanos del enlace:")
console.log(enlace);
console.log("enlace.nextSibling: " + enlace.nextSibling);
console.log("enlace.nextElementSibling: " + enlace.nextElementSibling);
console.log("enlace.nextElementSibling.nextElementSibling: " + enlace.nextElementSibling.nextElementSibling);

console.log("card.nextElementSibling: " + card.nextElementSibling);


// También hay como ir en otra dirección, es decir, hacia el elemento anterior
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log("Seleccionando el último card:")
console.log(ultimoCard)
console.log("Accediendo al card anterior al último card:")
console.log(ultimoCard.previousElementSibling);
