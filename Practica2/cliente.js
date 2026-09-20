const productos = [
  // Bebidas Calientes
  { id: "001", nombre: "Espresso", precio: 45.00, stock: 20, categoria: "Bebidas Calientes", tipo: "Bebida" },
  { id: "002", nombre: "Café Americano", precio: 50.00, stock: 25, categoria: "Bebidas Calientes", tipo: "Bebida" },
  { id: "003", nombre: "Latte", precio: 60.00, stock: 20, categoria: "Bebidas Calientes", tipo: "Bebida" },
  { id: "004", nombre: "Cappuccino", precio: 60.00, stock: 20, categoria: "Bebidas Calientes", tipo: "Bebida" },
  { id: "005", nombre: "Chocolate Caliente", precio: 65.00, stock: 15, categoria: "Bebidas Calientes", tipo: "Bebida" },
  { id: "006", nombre: "Chocolate Mexicano", precio: 70.00, stock: 15, categoria: "Bebidas Calientes", tipo: "Bebida" },

  // Bebidas Frías
  { id: "007", nombre: "Mango Dragonfruit Refresher", precio: 60.00, stock: 20, categoria: "Bebidas Frías", tipo: "Bebida" },
  { id: "008", nombre: "Strawberry Acai Refresher", precio: 60.00, stock: 20, categoria: "Bebidas Frías", tipo: "Bebida" },
  { id: "009", nombre: "Pink Drink", precio: 65.00, stock: 15, categoria: "Bebidas Frías", tipo: "Bebida" },
  { id: "010", nombre: "Toasted Vanilla Shaken Espresso Helado", precio: 65.00, stock: 15, categoria: "Bebidas Frías", tipo: "Bebida" },
  { id: "011", nombre: "Brown Sugar Shaken Espresso Helado", precio: 65.00, stock: 15, categoria: "Bebidas Frías", tipo: "Bebida" },

  // Alimentos
  { id: "012", nombre: "Baguette Suprema", precio: 80.00, stock: 10, categoria: "Alimentos", tipo: "Alimento" },
  { id: "013", nombre: "Ensalada César", precio: 70.00, stock: 8, categoria: "Alimentos", tipo: "Alimento" },
  { id: "014", nombre: "Sándwich de Pavo y Panela", precio: 75.00, stock: 14, categoria: "Alimentos", tipo: "Alimento" },
  { id: "015", nombre: "Dona de caramelo", precio: 30.00, stock: 25, categoria: "Alimentos", tipo: "Alimento" },
  { id: "016", nombre: "Pastel de Zanahoria", precio: 60.00, stock: 6, categoria: "Alimentos", tipo: "Alimento" },

  // Tazas
  { id: "017", nombre: "Taza Blanca Clásica", precio: 280.00, stock: 15, categoria: "Tazas", tipo: "Souvenir" },
  { id: "018", nombre: "Taza Azul Cristal Edición Limitada", precio: 340.00, stock: 10, categoria: "Tazas", tipo: "Souvenir" },
  { id: "019", nombre: "Taza Acero Inoxidable", precio: 390.00, stock: 12, categoria: "Tazas", tipo: "Souvenir" },
  { id: "020", nombre: "Taza España \"Been There Series\"", precio: 320.00, stock: 8, categoria: "Tazas", tipo: "Souvenir" },

  // Termos
  { id: "021", nombre: "Termo azul 600ml", precio: 450.00, stock: 10, categoria: "Termos", tipo: "Souvenir" },
  { id: "022", nombre: "Termo Japón \"Been There Series\"", precio: 520.00, stock: 5, categoria: "Termos", tipo: "Souvenir" },
  { id: "023", nombre: "Termo New Era Collection", precio: 490.00, stock: 7, categoria: "Termos", tipo: "Souvenir" },
  { id: "024", nombre: "Termo México 20 años", precio: 480.00, stock: 9, categoria: "Termos", tipo: "Souvenir" },

  // Vasos
  { id: "025", nombre: "Vaso Reutilizable", precio: 120.00, stock: 30, categoria: "Vasos", tipo: "Souvenir" },
  { id: "026", nombre: "Vaso Transparente", precio: 250.00, stock: 18, categoria: "Vasos", tipo: "Souvenir" },
  { id: "027", nombre: "Vaso con Gema de Esmeralda", precio: 380.00, stock: 11, categoria: "Vasos", tipo: "Souvenir" },
  { id: "028", nombre: "Vaso Holográfico", precio: 350.00, stock: 14, categoria: "Vasos", tipo: "Souvenir" }
];

const listaPedidos = [];

function consultarProductos() {
  console.log("=== MENÚ DE PRODUCTOS ===");
  productos.forEach((prod) => {
    console.log(`[ID: ${prod.id}] ${prod.nombre} -$${prod.precio} MXN (${prod.categoria})`);
  });
  console.log("=========================\n");
}

function crearPedido(nombreCliente, idsProductos) {
  if (!nombreCliente || !idsProductos || idsProductos.length === 0) {
    console.log("Debe ingresar su nombre y al menos un ID de producto.");
    console.log("Ejemplo: crearPedido('Su nombre', ['001', '002'])");
    return;
  }

  const productosSeleccionados = [];
  let total = 0;

  // buscar los productos ingresados por el cliente
  idsProductos.forEach((id) => {
    const producto = productos.find((p) => p.id === id);
    if (producto) {
      productosSeleccionados.push(producto);
      total += producto.precio;
    } else {
      console.log(`Producto con ID "${id}" no encontrado.`);
    }
  });

  if (productosSeleccionados.length === 0) {
    console.log("No se pudo procesar el pedido, ningún ID ingresado fue válido.");
    return;
  }

  const nuevoPedido = {
    folio: `PED-${listaPedidos.length + 1}`,
    cliente: nombreCliente,
    items: productosSeleccionados,
    total: total
  };

  listaPedidos.push(nuevoPedido);

  console.log(`\n¡PEDIDO REGISTRADO EXITOSAMENTE!`);
  console.log(`Cliente: ${nuevoPedido.cliente} | Folio: ${nuevoPedido.folio}`);
  console.log(`Total a pagar: $${nuevoPedido.total} MXN\n`);
}


// listar pedidos
function listarPedidos() {
  console.log("=== HISTORIAL DE PEDIDOS ===");
  if (listaPedidos.length === 0) {
    console.log("No hay pedidos registrados.");
    return;
  }

  listaPedidos.forEach((pedido) => {
    console.log(`Folio: ${pedido.folio} | Cliente: ${pedido.cliente} | Total: $${pedido.total} MXN`);
    console.log("Productos:");
    pedido.items.forEach((item) => {
      console.log(` - ${item.nombre}:$${item.precio} MXN`);
    });
    console.log("----------------------------");
  });
}


// indicaciones de uso
console.log("BIENVENIDO A STARBUCKS");
console.log("Instrucciones de uso:");
console.log("1. Escriba 'consultarProductos()' para ver el menú.");
console.log("2. Escriba 'crearPedido(\"Su nombre\", [\"001\", \"002\"])' para realizar tu pedido.");
console.log("3. Escriba 'listarPedidos()' para ver el historial.");
console.log("--------------------------------------------------\n");