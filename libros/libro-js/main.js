const $ = (idElemento) => document.getElementById(idElemento)
const inputs = document.querySelectorAll(".valorInput")

const tituloLibro = $("tituloLibro")
const fechaLibro = $("fechaLibro")
const autorLibro = $("autorLibro")
const prestadoLibro = $("prestadoLibro")
const prestadoALibro = $("prestadoALibro")
const criterioBusqueda = $("criterioBusqueda")
const contenedorAutorBuscador = $("contenedorAutorBuscador")
const contenedorTituloBuscador = $("contenedorTituloBuscador")
const contenedorEstadoBuscador = $("contenedorEstadoBuscador")
const valorInputReferencia = $("prestado")
const contenedorPrestar = $("contenedorPrestar")
const personaPresta = $("personaPresta")
let ID_LIBRO = null

const informacionCriterio = obtenerCriteriosLocal() ?? {
  criterio: null,
  valor: null
}

const espacioParaLibros = $("contenedorLibros")

const LIBROS_JSON = obtenerLibrosLocal() === null ? [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel Garcia Marquez",
    fechaPublicacion: "1996-08-23",
    prestado: false,
    prestadoA: null
  },
  {
    id: 2,
    titulo: "Los guardianes de la galaxia",
    autor: "Jerson Villamizar",
    fechaPublicacion: "2006-10-09",
    prestado: true,
    prestadoA: "Brayan Villamizar"
  },
  {
    id: 3,
    titulo: "Libro otro",
    autor: "Un autor",
    fechaPublicacion: "2002-05-20",
    prestado: false,
    prestadoA: null
  },
  {
    id: 4,
    titulo: "Aprendiendo javascript",
    autor: "Midudev",
    fechaPublicacion: "2000-09-10",
    prestado: true,
    prestadoA: "Jhoan Villamizar"
  }
] 
: obtenerLibrosLocal()

function mostrarInformacion (libros = LIBROS_JSON) {
  limpiar(espacioParaLibros)

  libros.forEach((elemento, index, array) => {
    const botonPrestar = `<button onclick="guardarId(${elemento.id})">🆕</button>`
    const botonDevolver = `<button onclick="devolverLibro(${elemento.id})">🔙</button>`
    const htmlLibro = `
      <div class="librosContenedor">
        <small>Libro: ${elemento.id}</small>
        <button onclick="eliminarLibro(${elemento.prestado}, ${elemento.id})">❌</button>
        ${elemento.prestado ? botonDevolver : botonPrestar}
        <h2>${elemento.titulo}</h2>
        <p>${elemento.autor}</p>
        <p>${elemento.fechaPublicacion}</p>
      </div>
    `
    espacioParaLibros.innerHTML += htmlLibro
  })
}

function devolverLibro (id) {
  const posicion = LIBROS_JSON.findIndex(elemento => elemento.id === id)
  LIBROS_JSON[posicion].prestado = false
  LIBROS_JSON[posicion].prestadoA = null
  renderizadoInicial()
  guardarEnLocal()
}

function guardarId(id) {
  ID_LIBRO = id
  contenedorPrestar.style.display = "block"
}

function asignarPersona () {
  if (personaPresta.value.trim() === '' || personaPresta.value.length <= 2) {
    alertaError("Persona que presta")
    return
  }
  const posicion = LIBROS_JSON.findIndex(elemento => elemento.id === ID_LIBRO)
  LIBROS_JSON[posicion].prestado = true
  LIBROS_JSON[posicion].prestadoA = personaPresta.value
  cerrarModal()
  guardarEnLocal()
  renderizadoInicial()
}

function cerrarModal () {
  contenedorPrestar.style.display = "none"
  personaPresta.value = ''
}

prestadoLibro.addEventListener("click", (e) => {
  prestadoALibro.disabled = !prestadoLibro.checked
})

criterioBusqueda.addEventListener("input", () => {
  informacionCriterio.criterio = criterioBusqueda.value
  renderizarContenedorCondicional()
})

function renderizarContenedorCondicional () {
  mostrarInformacion()
  if (informacionCriterio.criterio === "todos") {
    ocultarContenedorBuscador(contenedorAutorBuscador)
    ocultarContenedorBuscador(contenedorTituloBuscador)
    ocultarContenedorBuscador(contenedorEstadoBuscador)
    informacionCriterio.valor = null
    guardarCriterioLocal()
    return
  }

  if (informacionCriterio.criterio === "autor") {
    mostrarContenedorBuscador(contenedorAutorBuscador)
    ocultarContenedorBuscador(contenedorTituloBuscador)
    ocultarContenedorBuscador(contenedorEstadoBuscador)
  }

  if (informacionCriterio.criterio === "prestado") {
    ocultarContenedorBuscador(contenedorAutorBuscador)
    ocultarContenedorBuscador(contenedorTituloBuscador)
    mostrarContenedorBuscador(contenedorEstadoBuscador)
  }

  if (informacionCriterio.criterio === "titulo") {
    ocultarContenedorBuscador(contenedorAutorBuscador)
    mostrarContenedorBuscador(contenedorTituloBuscador)
    ocultarContenedorBuscador(contenedorEstadoBuscador)
  }
}

function buscarPeliculaPorTexto () {
  console.log(informacionCriterio.valor)
  if (typeof informacionCriterio.valor === 'boolean') {
    const nuevosLibros = LIBROS_JSON.filter(elemento => elemento[informacionCriterio.criterio] === informacionCriterio.valor)
    mostrarInformacion(nuevosLibros)
    return
  }
  if (informacionCriterio.valor.trim() === '') {
    mostrarInformacion()
    return
  }
  const nuevosLibros = LIBROS_JSON.filter(elemento => RegExp(`.*${informacionCriterio.valor.toLowerCase()}.*`).test(elemento[informacionCriterio.criterio].toLowerCase())
  )
  mostrarInformacion(nuevosLibros)
}

inputs.forEach(input => {
  input.addEventListener("input", () => {
    const esTexto = input.type === 'text'
    informacionCriterio.valor = esTexto ? input.value : valorInputReferencia.checked
    buscarPeliculaPorTexto()
    guardarCriterioLocal()
  })
})


function mostrarContenedorBuscador (contenedorBuscador) {
  contenedorBuscador.style.display = "block";
}

function ocultarContenedorBuscador (contenedorBuscador) {
  contenedorBuscador.style.display = "none"
}

function crearLibro() {
  const valorTitulo = tituloLibro.value
  const valorFecha = fechaLibro.value
  const valorAutor = autorLibro.value
  const valorPrestado = prestadoLibro.checked
  const valorAPrestar = prestadoALibro.value
  
  if (valorTitulo.trim() === '' || valorTitulo.length <= 2) {
    console.log("Entroooooo")
    alertaError("Título")
    return
  }
  if (valorFecha.trim() === '') {
    alertaError("Fecha", true)
    return
  }
  if (valorAutor.trim() === '' || valorAutor.length <= 2) {
    alertaError("autor")
    return
  }

  if (valorPrestado && (valorAPrestar.trim() === '' || valorAPrestar.length <= 2)) {
    alertaError("La persona a la que se va a prestar")
    return
  }

  const nuevoLibro = {
    id: LIBROS_JSON[LIBROS_JSON.length - 1].id + 1,
    titulo: valorTitulo,
    autor: valorAutor,
    fechaPublicacion: valorFecha,
    prestado: valorPrestado,
    prestadoA: valorAPrestar ? valorAPrestar : null
  }

  LIBROS_JSON.push(nuevoLibro)
  guardarEnLocal()
  
  mostrarInformacion()
  reiniciarValores()
}

function reiniciarValores () {
  tituloLibro.value = ''
  fechaLibro.value = ''
  autorLibro.value = ''
  prestadoLibro.checked = false
  prestadoALibro.value = ''
}

function eliminarLibro (prestado, id) {
  if (prestado) {
    alert("El libro se encuentra en prestamo por ese motivo no puede eliminarse")
    return
  }

  const posicion = LIBROS_JSON.findIndex(elemento => elemento.id === id)
  LIBROS_JSON.splice(posicion, 1)

  renderizadoInicial()
  guardarEnLocal()
}

function limpiar(elementoHtml) {
  elementoHtml.innerHTML = ''
}

function alertaError(campo, soloCampo, caracteres = 2) {
  alert(soloCampo ? `El ${campo} no debe estar vacío` : `El ${campo} no debe estar vacío y debe ser mayor a ${caracteres} caracteres`)
}

function guardarEnLocal () {
  localStorage.setItem("libros", JSON.stringify(LIBROS_JSON))
}

function obtenerLibrosLocal () {
  return JSON.parse(localStorage.getItem("libros"))
}

function guardarCriterioLocal () {
  localStorage.setItem("criterio", JSON.stringify(informacionCriterio))
}

function obtenerCriteriosLocal () {
  return JSON.parse(localStorage.getItem("criterio"))
}



function renderizadoInicial () {
  if (informacionCriterio.valor == null || informacionCriterio.criterio == null) {
    mostrarInformacion()
    return
  }
  renderizarContenedorCondicional()
  buscarPeliculaPorTexto()
  criterioBusqueda.value = informacionCriterio.criterio
  const inputSeleccionado = $(informacionCriterio.criterio)
  inputSeleccionado.type == 'text' ? inputSeleccionado.value = informacionCriterio.valor : informacionCriterio.checked = informacionCriterio.valor
}

renderizadoInicial()