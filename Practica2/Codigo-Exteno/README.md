# Integracion de codigo externo

## Asley
### Código en Bruto:
 
> El código en bruto es todo el codigo que se genero de manera individual

> Este código se realizo unicamente con el objetivo de cumpir con lo especificado en las actividades indicadas a cada uno de los integrantes

El codigo se dividio en dos parte, ya que *Ashley* fue la responsable de realizar el desarrollo de caja se encardo de realizar tanto un HTML de visualizacion como un Script que funcione con el contenido que se le asigno realizar

- Códigos:
  - **HTML**
    ````html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Sistema de Pedidos</title>
    </head>

    <body>

        <h1>Starbucks</h1>
        <h2>Pedidos del cliente</h2>

        <hr>

        <h3>Productos disponibles</h3>

        <p> Matcha Latte Helado - $100</p>
        <p> Caramel Frappuccino - $95</p>
        <p> Cheesecake de Fresa - $85</p>

        <hr>

        <h3>Lista de pedidos</h3>

        <div id="listaPedidos">
            <!-- Pedidos -->
        </div>

        <h3 id="total">Total acumulado: $0</h3>

        <script src="Caja.js"></script>

    </body>
    </html>
    ````

  - JavaScript
    ````JS
      let pedidos = [];
      let totalAcumulado = 0;

      // Agregar un pedido
      function agregarPedido(producto, precio) {
      let nuevoPedido = {
          producto: producto,
          precio: precio
      };

      pedidos.push(nuevoPedido);
      totalAcumulado += precio;
      }

      // Agregar productos a los pedidos del cliente
      agregarPedido("Matcha Latte Helado", 100);
      agregarPedido("Caramel Frappuccino", 95);
      agregarPedido("Cheesecake de Fresa", 85);

      let lista = document.getElementById("listaPedidos");
      let total = document.getElementById("total");

      // Mostrar los pedidos del cliente
      for (let i = 0; i < pedidos.length; i++) {
      let pedido = document.createElement("p");

      pedido.textContent =
          pedidos[i].producto + " - $" + pedidos[i].precio;

      lista.appendChild(pedido);
      }

      // Mostrar el total acumulado
      total.textContent = "Total acumulado: $" + totalAcumulado;
    ````


### Codigo integrado:


---
---


## David

### Código en Bruto:
 
> El código en bruto es todo el codigo que se genero de manera individual

> Este código se realizo unicamente con el objetivo de cumpir con lo especificado en las actividades indicadas a cada uno de los integrantes
