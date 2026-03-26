// Todos los eventos utilizan el método en el document de addEventListener

// Por lo tanto la sintaaxis es de las sig forma
// document.addEventListener
// Seguido del evento que estamos escuchando

console.log(1)
    document.addEventListener('DOMContentLoaded', () => {
        console.log(2);
    }) // todos los eventos que hay disponibles
console.log(3);