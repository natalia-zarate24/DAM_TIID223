// Cliente.mjs
// ===================================================
//   Cliente: interfaz para consultar productos y pedidos
// ===================================================

import {
  existencias,
  obtenerProductos,
  cargarProductos,
  sembrarCatalogoInicial,
  productosCategoria,
} from "../David/Productos.mjs";
import {
  pedidos,
  cargarPedidos,
  crearPedido,
  agregarProductoAPedido,
  calcularTotal,
  cerrarPedido,
} from "../Funcionalidad/Pedidos.mjs";

let pedidoActual = null;

export function obtenerProductosDisponibles(){
  const todos = obtenerProductos();
  const disponibles = [];

  todos.forEach((prod) => {
    if (prod.stock > 0) {
      disponibles.push(prod);
    }
  });
  return disponibles;
}

export function obtenerMenuDinamico(){
  const disponibles = obtenerProductosDisponibles();

  return disponibles.map((prod) => {
    return {
      id: prod.id,
      nombre: prod.name.toUpperCase(),
      categoria: prod.category,
      tipo: prod.tipo,
      precioFormateado: `$${prod.price.toFixed(2)} MXN`,
      precioOriginal: prod.price,
      stock: prod.stock,
      disponibilidadTag: prod.stock <= 5 ? "¡Últimas piezas!" : "Disponible",
    };
  });
}

export function obtenerPromociones() {
  const disponibles = obtenerProductosDisponibles();

  //aplicar un 15% de descuento en categoría bebidas o postres
  return disponibles
    .filter((prod) => prod.category === "Bebidas" || prod.tipo === "Dulce")
    .map((prod) => {
      const descuento = 0.15;
      const precioConDescuento = prod.price * (1 - descuento);

      return {
        id: prod.id,
        nombre: prod.name,
        precioOriginal: prod.price,
        precioPromocion: Number(precioConDescuento.toFixed(2)),
        ahorro: Number((prod.price - precioConDescuento).toFixed(2)),
        mensajePromo: "¡15% de descuento en Bebidas y Dulces!",
      };
    });
}

// =============== Mostrar el catálogo disponible ===============

function renderizarCatalogo() {
  const contenedor = document.getElementById("catalogoCliente");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const menu = obtenerMenuDinamico();

  existencias.forEach((categoria) =>{
    const prodsCategoria = menu.filter(
      (prod) => prod.categoria === categoria.category
    );

    if (prodsCategoria.length === 0) return;

    const bloque = document.createElement("div");
    bloque.className = "bloque-categoria";
    bloque.innerHTML = `<h3>${categoria.category}</h3>`;

    // iterar sobre cada producto y agregarlo al DOM
    prodsCategoria.forEach((producto) => {
      const item = document.createElement("div");
      item.className = "producto-item producto-cliente";

      item.innerHTML = `
        <h4>${producto.nombre}</h4>
        <p class="precio">${producto.precioFormateado}</p>
        <small class="tag-stock">${producto.disponibilidadTag}</small>
        <button type="button" class="btn-comprar" data-id="${producto.id}">
            Agregar al pedido
        </button>
      `;

      bloque.appendChild(item);
    });

    contenedor.appendChild(bloque);
  });
}

// =============== Mostrar Promociones disponibles ===============

function renderizarPromociones() {
  const contenedor = document.getElementById("promocionesCliente");
  if (!contenedor) return;

  const promociones = obtenerPromociones();
  contenedor.innerHTML = "<h3>Promociones del día</h3>";

  if (promociones.length === 0) {
    contenedor.innerHTML += "<p>No hay promociones activas por el momento.</p>";
    return;
  }

  // dibujar la lista de promociones
  promociones.forEach((promo) => {
    const promoEl = document.createElement("div");
    promoEl.className = "promo-item";
    promoEl.innerHTML = `
      <strong>${promo.nombre}</strong> - ${promo.mensajePromo}<br>
      <span class="precio-antes">Antes: $${promo.precioOriginal} MXN</span> 
      <strong class="precio-ahora">Ahora: $${promo.precioPromocion} MXN</strong>
    `;
    contenedor.appendChild(promoEl);
  });
}

// =============== Mostrar el pedido en construcción ===============

function renderizarPedidoActual() {
  const lista = document.getElementById("listaPedidoCliente");
  const totalEl = document.getElementById("totalPedidoCliente");

  if (!lista || !totalEl) return;

  lista.innerHTML = "";

  if (!pedidoActual || pedidoActual.items.length === 0) {
    lista.innerHTML = "<p>Aún no has agregado productos.</p>";
    totalEl.textContent = "Total: $0 MXN";
    return;
  }

  for (const item of pedidoActual.items) {
    const fila = document.createElement("p");
    fila.textContent = `${item.producto.name} x${item.cantidad} - $${item.producto.price * item.cantidad} MXN`;
    lista.appendChild(fila);
  }

  totalEl.textContent = `Total: $${calcularTotal(pedidoActual.id)} MXN`;
}

// =============== Eventos ===============

function manejarClicCatalogo(evento) {
  const boton = evento.target.closest("button[data-id]");
  if (!boton) return;

  const idProducto = Number(boton.dataset.id);
  const producto = obtenerProductos().find((prod) => prod.id === idProducto);

  if (!producto) return;

  if (!pedidoActual) {
    pedidoActual = crearPedido();
  }

  agregarProductoAPedido(pedidoActual.id, producto, 1);
  renderizarPedidoActual();
}

function manejarConfirmarPedido() {
  if (!pedidoActual || pedidoActual.items.length === 0) {
    alert("Agrega al menos un producto antes de confirmar.");
    return;
  }

  const total = calcularTotal(pedidoActual.id);
  const idPedido = pedidoActual.id;

  cerrarPedido(idPedido);
  alert(`Pedido #${idPedido} enviado a caja. Total: $${total} MXN`);

  pedidoActual = null;
  renderizarPedidoActual();
}

// Punto de entrada para la pantalla cliente.html
export function inicializarCliente() {
  cargarProductos();
  sembrarCatalogoInicial();
  cargarPedidos();
  pedidoActual = pedidos.find((pedido) => pedido.estado === "abierto") || null;
  renderizarCatalogo();
  renderizarPromociones();
  renderizarPedidoActual();

  const catalogo = document.getElementById("catalogoCliente");
  const botonConfirmar = document.getElementById("btnConfirmarPedido");

  if (catalogo) catalogo.addEventListener("click", manejarClicCatalogo);
  if (botonConfirmar)
    botonConfirmar.addEventListener("click", manejarConfirmarPedido);
}
