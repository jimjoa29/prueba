
// Boton de Hamburguer

const btnCerrar = document.querySelector('#btn-cerrar');
const btnAbrir = document.querySelector('.hamburguer-icon')
const hamburguer = document.querySelector('.hamburguer')

btnCerrar.addEventListener('click', cierraMenu)
btnAbrir.addEventListener('click', abrirMenu) //

   

function abrirMenu() {
    console.log('abrir menu')
    hamburguer.style.display = 'flex'
}

function cierraMenu() {
    console.log('cerrar menu')
    hamburguer.style.display = 'none'
}

// Cierre Boton de Hamburguer



// Carousel de testimonios

$('.carousel').carousel({
    interval: 5000
})

// Cierre Carousel de testimonios
