// eventos con el teclado

// tenemos un formulario 
const busqueda = document.querySelector('.busqueda');

// keydown  - cuando presionas una tecla 
// keyup - Cuando sueltas la tecla
// blur - cuando sales del input - ideal para validación

// También hay eventos para cortar copiar y pegar
// cut
// copy
// paste
// input - cuando se ejecutan todas las que aquí se muestran, incluyendo cortar, pegar y copiar

busqueda.addEventListener('input',  leerInput);
function leerInput(e) {
    console.log('*********************')
    console.log(e); // Mucha información...
    console.log(e.type); // Te dira sobre que elemento estamos trabajando...
    console.log(e.target); // el input completo...
    console.log(e.target.value) // lo que el usuario escribe...
    console.log('*********************')
}
