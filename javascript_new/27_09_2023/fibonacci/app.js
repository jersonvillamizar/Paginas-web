// Obtener elementos HTML
const inputCantidad = document.getElementById('cantidad');
const botonGenerar = document.getElementById('generar');
const resultado = document.getElementById('resultado');

// Función para generar la secuencia Fibonacci
function generarFibonacci() {
    resultado.innerHTML = ''; // Limpiar la lista de resultados
    let n = parseInt(inputCantidad.value);
    let a = 0, b = 1;
    while (n > 0) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = a;
        resultado.appendChild(nuevoElemento);        
        const temp = a;
        a = b;
        b = temp + b;
        n--;
    }
}

// Agregar evento al botón "Generar"
botonGenerar.addEventListener('click', generarFibonacci);
