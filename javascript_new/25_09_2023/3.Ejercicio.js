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
}

function cambiarfondo() {
  const formulario = document.querySelectorAll('textarea');
  formulario.forEach(elemento => elemento.style.backgroundColor = 'lightblue')
}

function eliminarElemento(){
  const formulario = document.getElementById('miFormulario');
  const hijo_formulario = formulario.children;
  formulario.removeChild(hijo_formulario[hijo_formulario.length-1])
  formulario.removeChild(hijo_formulario[hijo_formulario.length-1])
}

// Obtener el botón de "Agregar Campo" y agregar un manejador de eventos
const botonAgregarCampo = document.getElementById('agregarCampo');
botonAgregarCampo.addEventListener('click', agregarCampo);

const botonCambiarFondo = document.getElementById('fondo');
botonCambiarFondo.addEventListener('click', cambiarfondo);

const botonEliminar = document.getElementById('eliminar');
botonEliminar.addEventListener('click', eliminarElemento)
