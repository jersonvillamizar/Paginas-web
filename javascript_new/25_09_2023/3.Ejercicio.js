// Función para agregar un nuevo campo (etiqueta y caja de texto) al formulario
function agregarCampo() {
  const formulario = document.getElementById('miFormulario');

  // Crear una nueva etiqueta <label>

  const label = document.createElement('label');
  label.textContent = 'Etiqueta ' + (formulario.children.length/2 + 1) + ': ';

  // Crear una nueva caja de texto <input>
  const input = document.createElement('textarea');
  
  // Agregar la etiqueta y la caja de texto al formulario
  formulario.appendChild(label);
  formulario.appendChild(input);
  input.classList.add('sin_color');
}

// Obtener el botón de "Agregar Campo" y agregar un manejador de eventos
const botonAgregarCampo = document.getElementById('agregarCampo');
botonAgregarCampo.addEventListener('click', agregarCampo);




