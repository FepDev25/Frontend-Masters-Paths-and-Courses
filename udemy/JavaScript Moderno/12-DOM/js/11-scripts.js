// no siempre se hace traversing

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
// agregar event listener al btn flotante
btnFlotante.addEventListener('click', mostrarOcultarFooter);

// función para mostrar u ocultar el footer
function mostrarOcultarFooter() {
    if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}
