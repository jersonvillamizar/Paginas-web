function agregarCampo() {
    const formulario = document.getElementById('listado');
  
    var tareaTexto = document.getElementById("tareaTexto").value;
    if (tareaTexto.trim() === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    var nuevaTarea = document.createElement('div');
    nuevaTarea.classList.add("tarea");
    nuevaTarea.innerHTML = `<input type="checkbox" class="check" onclick="marcarTarea(this)">
                            <span class="texto" id="texto_marcado">${tareaTexto}</span>
                            <button class="delete-button" onclick="eliminarTarea(this)">Eliminar</button>`;

    document.getElementById("tareas").appendChild(nuevaTarea);
    document.getElementById("tareaTexto").value = "";
  }
  
  function marcarTarea(checkbox) {
    var tareaTexto = document.getElementById("texto_marcado");
    if (checkbox.checked) {
        tareaTexto.classList.add("checked");
    } else {
        tareaTexto.classList.remove("checked");
    }
}

function eliminarTarea(button) {
    var tarea = button.parentNode;
    tarea.remove();
}
  
  // Obtener el botón de "Agregar Campo" y agregar un manejador de eventos
  const botonAgregarCampo = document.getElementById('agregarCampo');
  botonAgregarCampo.addEventListener('click', agregarCampo);