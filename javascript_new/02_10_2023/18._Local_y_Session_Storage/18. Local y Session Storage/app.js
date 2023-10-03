// Obtener elementos HTML
const nombreInput = document.getElementById('nombreInput');
const guardarBoton = document.getElementById('guardarBoton');
const mensaje = document.getElementById('mensaje');

// Evento para guardar el nombre en Local Storage
guardarBoton.addEventListener('click', function () {
    const nombre = nombreInput.value;

    if (nombre.trim() !== '') {
        // Guardar el nombre en Local Storage
        localStorage.setItem('nombre', nombre);

        // Mostrar un mensaje de confirmación
        mensaje.textContent = `¡Nombre "${nombre}" guardado en Local Storage!`;

        // Limpiar el campo de entrada
        nombreInput.value = '';
    } else {
        mensaje.textContent = 'Por favor, ingrese un nombre válido.';
    }
});

// Verificar si hay un nombre almacenado en Local Storage al cargar la página
window.addEventListener('load', function () {
    const nombreAlmacenado = localStorage.getItem('nombre');

    if (nombreAlmacenado) {
        mensaje.textContent = `Nombre almacenado en Local Storage: ${nombreAlmacenado}`;
    }
});
