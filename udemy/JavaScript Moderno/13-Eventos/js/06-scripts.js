// event Bubbling

// Event Bubling es cuando se presiona un evento pero ese evento se propaga por muchos otros dando resultados inesperados

// tenemos diferentes cards, con información
// 3 selectores
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// cada vez que se da click en un elemento, ese evento se propaga por los elementos padres, es decir, si damos click en el titulo, el evento se propaga a info y luego a card, dando como resultado 3 eventos de click, uno para cada elemento
cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click card');
})
infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click info');
})

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click titulo');
})
