// Array de Productos
const productos = [
    {
        id: "indu01",
        nombre: "POLERA OVERSIZE LETTERING NECK",
        imagen: "./img/remera01.webp",
        precio: 3000
    },
    {
        id: "indu02",
        nombre: "POLERA OVERSIZE PORTAL DE LA FORTUNA CAFE",
        imagen: "./img/remera02.webp",
        precio: 2500
    },
    {
        id: "indu03",
        nombre: "POLERA OVERSIZE PORTAL DE LA FORTUNA BLANCA",
        imagen: "./img/remera03.webp",
        precio: 2500
    },
    {
        id: "indu04",
        nombre: "POLERA OVERSIZE PORTAL DE LA FORTUNA VERDE",
        imagen: "./img/remera04.webp",
        precio: 2500
    },
    {
        id: "indu05",
        nombre: "POLERA OVERSIZE TEAM FORTUNA STONE WASH",
        imagen: "./img/remera05.webp",
        precio: 3000
    },
    {
        id: "indu06",
        nombre: "POLERÓN NEGRO OVERSIZE TEAM FORTUNA NEGRO",
        imagen: "./img/buzo02.webp",
        precio: 10000
    },
    {
        id: "indu07",
        nombre: "POLERÓN NEGRO SEAMS OVERSIZE DISCIPLINA",
        imagen: "./img/buzo01.webp",
        precio: 11500
    },
    {
        id: "indu08",
        nombre: "PANTALÓN CARPINTERO ULTRA BLACK",
        imagen: "./img/pantalon01.webp",
        precio: 8500
    }
];

let productosEnCarrito = [];
const contenedorIndu = document.querySelector("#contenedor-indu");
const contadorCarrito = document.querySelector("#contador-carrito");
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

function mostrarProductos() {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.classList.add("col-lg-3");
        div.innerHTML = `
            <div class="card shadow card-indu">
                <img src="${producto.imagen}" class="card-img-top img-indu" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title titulo-indu">${producto.nombre}</h5>
                    <p class="precio-indu">$${producto.precio}</p>
                    <button class="btn-card boton-agregar-indu" id="${producto.id}"><span>Agregar</span></button>
                </div>
            </div>
        `;

        contenedorIndu.append(div);
    });
};

function agregarProdAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregar = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const i = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[i].cantidad++;

    } else {
        productoAgregar.cantidad = 1;
        productosEnCarrito.push(productoAgregar);
    }

    actualizarContadorCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarContadorCarrito() {
    let contador = productosEnCarrito.reduce((acu, producto) => acu + producto.cantidad, 0);
    contadorCarrito.innerHTML = contador;
};


/************************************************************************************************************/
mostrarProductos();
const botonesAgregar = document.querySelectorAll(".boton-agregar-indu");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarContadorCarrito();
} else {
    productosEnCarrito = [];
}

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarProdAlCarrito);
});
