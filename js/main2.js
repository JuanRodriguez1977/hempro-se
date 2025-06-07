// PRODUCTOS
const productos = [
    // Primera Categoria (Tramites Legales)//
    {
        id: "001",
        titulo: "RUT",
        imagen: "https://www.portafolio.co/files/article_new_multimedia/uploads/2020/02/20/5e4eb96b3ae34.jpeg",
        categoria: {
            nombre: "Tramites Legales",
            id: "001"
        },
        precio: 50000
    },
    {
        id: "002",
        titulo: "Camara de Comercio",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7mkoICC3Mly_MKLzWuPQICcDx5kgeLeepw&s",
        categoria: {
            nombre: "Camara de Comercio",
            id: "001"
        },
        precio: 50000
    },
    {
        id: "003",
        titulo: "Concepto Uso de Suelos",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQ3pQlhteouG5sv0rRZqKkp5nfNlyZ9BVJw&s",
        categoria: {
            nombre: "Concepto Uso de Suelos",
            id: "001"
        },
        precio: 50000
    },
    {
        id: "004",
        titulo: "Bomberos",
        imagen: "https://bogota.gov.co/sites/default/files/inline-images/escudo_0.png",
        categoria: {
            nombre: "Bomberos",
            id: "001"
        },
        precio: 50000
    },
    {
        id: "005",
        titulo: "Derechos de Autor",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/1200px-Copyright.svg.png",
        categoria: {
            nombre: "Derechos de Autor",
            id: "001"
        },
        precio: 50000
    },
    {
        id: "006",
        titulo: "Sanidad",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQ3pQlhteouG5sv0rRZqKkp5nfNlyZ9BVJw&s",
        categoria: {
            nombre: "Sanidad",
            id: "001"
        },
        precio: 50000
    },
    // SEGUNDA CATEGORIA (Implementos para establecimiento) //
    {
        id: "007",
        titulo: "Recarga Extintor ABC-Multiproposito",
        imagen: "https://www.swsafety.com.co/wp-content/uploads/2020/12/extintor-multiproposito-ABC.jpg",
        categoria: {
            nombre: "Implementos para tu establecimiento comercial",
            id: "002"
        },
        precio: 25000
    },
    {
        id: "008",
        titulo: "Mantenimiento Preventivo Extintor 10L Solkaflam",
        imagen: "https://fullmineria.com/wp-content/uploads/2020/11/Extintor-Solkaflam.jpeg",
        categoria: {
            nombre: "Mantenimiento Preventivo Extintor 10L Solkaflam",
            id: "002"
        },
        precio: 35000
    },
    {
        id: "009",
        titulo: "Botiquin Tipo-A",
        imagen: "https://equidiagnosticos.com/wp-content/uploads/2020/02/tipo_a_morral-scaled.jpg",
        categoria: {
            nombre: "Botiquin",
            id: "002"
        },
        precio: 30000
    },
    {
        id: "010",
        titulo: "Señalización preventiva corriente (Unidad)",
        imagen: "https://cdn.prod.website-files.com/6178652e090a8bb556224c8c/6228fee269b992bbb0e215e7_Seguridad-industrial-letrero-emergencia.jpg",
        categoria: {
            nombre: "Señalización Preventiva",
            id: "002"
        },
        precio: 3000
    },
    {
        id: "011",
        titulo: "Señalización foto luminiscente (Unidad)",
        imagen: "https://argeza.com.co/wp-content/uploads/2020/02/fotoluminiscente-a.jpg",
        categoria: {
            nombre: "Señalización foto luminiscente (Unidad)",
            id: "002"
        },
        precio: 15000
    },
    //Tercera Categoria (Capacitaciones)//
    {
        id: "012",
        titulo: "Curso Manipulación de Alimentos",
        imagen: "https://assets.isu.pub/document-structure/230607051957-a491f859a1a7d8e24b5e0904019b74e7/v1/0ef7c39d3ae5f2a7cb95214f001fb898.jpeg",
        categoria: {
            nombre: "CAPACITACIONES",
            id: "003"
        },
        precio: 40000
    },
        {
        id: "012",
        titulo: "Capacitación",
        imagen: "https://static.eldiario.es/clip/2a7f4eb8-8593-4a08-8a80-c6908e06ec8a_16-9-aspect-ratio_default_0.jpg",
        categoria: {
            nombre: "Capacitaciones",
            id: "003"
        },
        precio: 100000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
