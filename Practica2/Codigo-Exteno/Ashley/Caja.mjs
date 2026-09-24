// Caja.mjs
// ===================================================
//   Caja: interfaz para revisar y cobrar pedidos
// ===================================================

import { cargarPedidos, listarPedidos, calcularDesglose, cerrarPedido } from "../Funcionalidad/Pedidos.mjs";

function renderizarPedidos() {
    const contenedor = document.getElementById("listaPedidosCaja");
    const totalGeneralEl = document.getElementById("totalGeneralCaja");

    if (!contenedor || !totalGeneralEl) return;

    contenedor.innerHTML = "";

    const pedidos = listarPedidos();
    let totalGeneral = 0;

    if (pedidos.length === 0) {
        contenedor.innerHTML = "<p>No hay pedidos registrados todavía.</p>";
        totalGeneralEl.textContent = "Total acumulado: $0 MXN";
        return;
    }

    for (const pedido of pedidos) {
        const { subtotal, iva, total } = calcularDesglose(pedido.id);
        totalGeneralAcumulado += total;

        const bloque = document.createElement("div");
        bloque.className = "pedido-caja";

        const items = pedido.items
            .map(({ producto: {name}, cantidad}) => `${name} x${cantidad}`)
            .join(", ");

        bloque.innerHTML = `
            <p><strong>Pedido #${pedido.id}</strong> — ${pedido.estado}</p>
            <p>${items || "Sin productos"}</p>
            <div class="desglose-pedido">
                <p>Subtotal> $${subtotal.toFixed(2)} MXN</p>
                <p>IVA (16%): $${iva.toFixed(2)} MXN</p>
                <p><strong>Total> $${total.toFixed(2)} MXN</strong></p>
            <div>
            ${
                pedido.estado === "abierto"
                    ? `<button type="button" data-accion="cobrar" data-id="${pedido.id}">Marcar como pagado</button>`
                    : ""
            }
        `;

        contenedor.appendChild(bloque);
    }

    totalGeneralEl.textContent = `Total acumulado: $${totalGeneralAcumulado.toFixed(2)} MXN`;
}

function manejarClicPedidos(evento) {
    const boton = evento.target.closest("button[data-accion='cobrar']");
    if (!boton) return;

    cerrarPedido(Number(boton.dataset.id));
    renderizarPedidos();
}

// Punto de entrada para la pantalla caja.html
export function inicializarCaja() {
    cargarPedidos();
    renderizarPedidos();

    const contenedor = document.getElementById("listaPedidosCaja");
    if (contenedor) contenedor.addEventListener("click", manejarClicPedidos);
}