// Como eliminar elementos del DOM

// Hay 2 formas de eliminar, una es eliminar un elemento por si mismo y la otra es eliminarlo desde el padre

console.log('Eliminando elementos del DOM...');
const primerEnlace = document.querySelector('a');
console.log(primerEnlace);
primerEnlace.remove();
console.log('Primer enlace eliminado:');

// La otra forma es por el padre..
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
const borrar = navegacion.children[2]
navegacion.removeChild(borrar);
