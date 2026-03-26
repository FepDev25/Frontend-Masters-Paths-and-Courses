// evento para formulario

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', e => {

    e.preventDefault(); // PreventDefault es evitar que el navegador realice la acción por default, en este caso ir al action
    // usualemente se usaria preventDefault para validar el formulario antes de enviarlo a un servidor

    // Crear consultas Ajax entre otras cosas
    console.log('enviando...');

    // Mucha información valiosa en este e...
    console.log(e);

    console.log(e.target.method) // el método del formulario, POST, GET, etc
    console.log(e.target.action) // la URL a la que se enviará el formulario
})