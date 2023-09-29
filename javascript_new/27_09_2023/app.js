// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 10; // Número de intentos permitidos
let adivinado = false;

// Obtener elementos HTML
const inputNumero = document.getElementById('numero');
const resultado = document.getElementById('resultado');

// Función para verificar si el número es correcto
function verificarNumero() {
    const numeroUsuario = parseInt(inputNumero.value);
    if (numeroUsuario === numeroSecreto) {
        resultado.textContent = `¡Adivinaste! El número secreto era ${numeroSecreto}`;
        adivinado = true;
    } else if (numeroUsuario < numeroSecreto) {
        resultado.textContent = 'El número es mayor. Intenta de nuevo.';
    } else {
        resultado.textContent = 'El número es menor. Intenta de nuevo.';
    }
    intentos--;
    if (intentos === 0 && !adivinado) {
        resultado.textContent = `¡Te quedaste sin intentos! El número secreto era ${numeroSecreto}`;
        botonAdivinar.disabled = true;
    }
}

function limpiar() {
    document.getElementById('numero').value = ""
}