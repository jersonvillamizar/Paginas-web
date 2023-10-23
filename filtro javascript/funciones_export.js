export {alerta};

function alerta(msg, type, funcion_ejecutar = () => {}, duracion = 5000){
    const types = {
        1: {
            background: "red",
            color: "white"
        },
        2: {
            background: "green",
            color: "white"
        },
        3: {
            background: "blue",
            color: "white"
        }
    }
    Toastify({
        text: msg,
        duration: duracion,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: funcion_ejecutar, // Callback after click
        style: types[type]
      }).showToast();
}

// Función para realizar la compra
function comprarJuego(clienteId, juegoId, clientes, juegos) {
    // Buscar el cliente y el juego por sus respectivos IDs
    const cliente = clientes.find(cliente => cliente.identificacion === clienteId);
    const juego = juegos.find(juego => juego.id_juego === juegoId);
  
    if (!cliente || !juego) {
      console.log("Cliente o juego no encontrado. Compra cancelada.");
      return;
    }
  
    // Calcular impuestos
    const valorAntesIVA = juego.valor_juego;
    const iva = valorAntesIVA * 0.16;
    const impuestoEspecial = valorAntesIVA * 0.04;
  
    // Calcular el costo total
    const costoTotal = valorAntesIVA + iva + impuestoEspecial;
  
    // Realizar la compra
    cliente.juegos += 1; // Incrementar el número de juegos del cliente
    cliente.puntos += juego.puntos_juego; // Añadir puntos de fidelización
    // Otras operaciones, como la actualización del resumen de compra, pueden agregarse aquí
  
    `<p> Compra realizada por ${cliente.nombre} ${cliente.apellido}: </p>
    <p> - Juego adquirido: ${juego.nombre_juego} 
    - Valor antes del IVA: $${valorAntesIVA}
    - Impuesto IVA (16%): $${iva}
    - Impuesto especial (4%): $${impuestoEspecial}
    - Costo total: $${costoTotal}
    - Puntos de fidelización acumulados: ${cliente.puntos}`
  }