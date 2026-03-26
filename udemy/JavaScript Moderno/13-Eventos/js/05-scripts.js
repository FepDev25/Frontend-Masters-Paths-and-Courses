// eventos al hacer scroll

window.addEventListener('scroll', () => {
    console.log('scrolling...');

    // Detectar el Scrolling vertical
    // const pxScroll = window.scrollY;
    // console.log(pxScroll);

    // Detectar un elemento al dar scroll...
    const premium = document.querySelector('.premium');
    // Este método te da el tamaño de un elemento y su ubicación respecto a la ubicación actual
    const ubicacion = premium.getBoundingClientRect(); 

    if(ubicacion.top < 100) {
        console.log('Ya esta visible');
    } else {
        console.log('Aún no esta visible..')
    }
})