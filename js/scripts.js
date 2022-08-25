/* const stockProductos = [{
        id: 1,
        nombre: 'Altos Las Hormigas Gualtallary',
        precio: 261000,
        imagen: './img/producto0.jpg',
        Uva: "Malbec",
        Ubicacion: "Valle de UCO",
        Stock: 18,
    },
    {
        id: 2,
        nombre: 'Kaiken Mai',
        precio: 335000,
        imagen: './img/producto1.jpg',
        Uva: "Malbec",
        Ubicacion: "Mendoza Argentina",
    },
    {
        id: 3,
        nombre: 'Altos las Hormigas Reserva',
        precio: 160000,
        imagen: './img/producto2.jpg',
        Uva: "Malbec",
        Ubicacion: "Mendoza Argentina",
    },
    {
        id: 4,
        nombre: 'Kaiken Terror Malbec',
        precio: 91000,
        imagen: './img/producto3.jpg',
        Uva: "Mixto",
        Ubicacion: "Vista Flores-Mendoza",
    },
    {
        id: 5,
        nombre: 'Finca el Origen',
        precio: 65000,
        imagen: './img/producto4.jpg',
        Uva: "Malbec",
        Ubicacion: "Mendoza-Valle de Uco",
    }
] */



const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')


let carrito = []



document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})




//Alerta libreria
botonVaciar.addEventListener('click', () => {

    swal.fire({
        title: '¡¡Cuidado!!',
        text: 'Usted va a vaciar su carrito!',
        icon: 'warning',
        iconColor: "red",
        showCancelButton: true,

    }).then((result) => {

        if (result.isConfirmed) {
            carrito.length = 0
            actualizarCarrito()
            Swal.fire('Se vacio su carrito')
        }
    })
})


//Alerta libreria


//JSON.................................................................................

function mostrarProductos() {

    fetch('data.json')

        .then((response) => response.json())
        .then((stockProductos) => {
            stockProductos.forEach((producto) => {
                const div = document.createElement('div')
                div.classList.add('producto')
                div.className = "card d-flex col-2 "
                div.innerHTML = `
            <img src=${producto.imagen} alt= "" class="card-img-top">
            <h3>${producto.nombre}</h3>            
            <p class="precioProducto">Precio:$ ${producto.precio}</p>
            <button id="agregar${producto.id}" class="boton-agregar bg-danger">Comprar <i class="fas fa-shopping-cart"></i></button>
            `
                contenedorProductos.appendChild(div)


                const boton = document.getElementById(`agregar${producto.id}`)

                boton.addEventListener('click', () => {

                    agregarAlCarrito(producto.id)

                })

            })

        })

}

mostrarProductos();

//JSON.................................................................................


//asi estaba antes de json.............................................................

/* stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.className = "card d-flex col-2 "
    div.innerHTML = `
    <img src=${producto.imagen} alt= "" class="card-img-top">
    <h3>${producto.nombre}</h3>
    
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar bg-danger">Comprar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {

        agregarAlCarrito(producto.id)

    })
}) */


//asi estaba antes de json...........................................................

//AGREGO AL CARRITO
const agregarAlCarrito = (prodId) => {

    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    actualizarCarrito()

}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

}

//modal

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) => {
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
})