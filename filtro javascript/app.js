import Cliente from "./cliente.js";
import ClienteProvider from "./clienteProvider.js";
import { alerta } from "./funciones_export.js";

const $ = (selector) => document.getElementById(selector);

const cliente_id = $("cliente_id");
const cliente_nombre = $("cliente_nombre");
const cliente_apellido = $("cliente_apellido");
const cliente_telefono = $("cliente_telefono");
const cliente_correo = $("cliente_correo");
const cliente_fecha = $("cliente_fecha");
const cliente_nacionalidad = $("cliente_nacionalidad");

const clienteProvider = new ClienteProvider();

const clientes_formulario = $("clientes_formulario");
const boton_listar = $("boton_listar");
const formulario_modificar = $("formulario_modificar");
const buscador = $("buscador");

clientes_formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    guardar_cliente();
})

function guardar_cliente() {
    const cliente = new Cliente(
        cliente_id.value,
        cliente_nombre.value,
        cliente_apellido.value,
        cliente_telefono.value,
        cliente_correo.value,
        cliente_fecha.value,
        cliente_nacionalidad.value
    ); 
    clienteProvider.registrarCliente(cliente);
    console.log(clienteProvider.clientes);
}

boton_listar.addEventListener("click", () => {
    listar_clientes();
})

function listar_clientes() {
    $("grupo_listado").innerHTML = clienteProvider.listarClientes();
}

window.rellenar = rellenar_formulario
function rellenar_formulario(codigo){
    const cliente_buscado = clienteProvider.obtenerCliente(codigo);

    $("modificar_id").value = cliente_buscado.identificacion;
    $("modificar_nombre").value = cliente_buscado.nombre;
    $("modificar_apellido").value = cliente_buscado.apellido;
    $("modificar_telefono").value = cliente_buscado.telefono;
    $("modificar_correo").value = cliente_buscado.correo;
    $("modificar_fecha").value = cliente_buscado.fecha_nacimiento;
    $("modificar_nacionalidad").value = cliente_buscado.nacionalidad;

    $("grupo_modificar").style.display = "block"
}

formulario_modificar.addEventListener("submit", (e) => {
    e.preventDefault();
    modificar_formulario();
})

function modificar_formulario(){
    if (confirm("Desea modificar el cliente?")){
        const codigo = $("modificar_id").value
        const cliente = new Cliente(
        codigo,
        $("modificar_nombre").value,
        $("modificar_apellido").value,
        $("modificar_telefono").value,
        $("modificar_correo").value,
        $("modificar_fecha").value,
        $("modificar_nacionalidad").value
        );
        clienteProvider.modificarCliente(codigo, cliente);
        alerta("Cliente modificado", 3);
        console.log(clienteProvider.clientes);
        listar_clientes();
    }
}

window.borrar = borrar_formulario;

function borrar_formulario(codigo){
    if (confirm("Desea eliminar el cliente?")){
        clienteProvider.eliminarCliente(codigo);
        alerta("Cliente eliminado", 3);
        console.log(clienteProvider.clientes);
        listar_clientes();
    }
}

buscador.addEventListener("input", () => {
    if (buscador.value == ""){
        listar_clientes();
        return
    }
    const listaFiltrada = clienteProvider.filtrarClientePor(buscador.value);
    $("grupo_listado").innerHTML = listaFiltrada;
})

function cerrar_pestana () {
    $("grupo_modificar").style.display = "none";
    $("modificar_id").value = "";
    $("modificar_nombre").value = "";
    $("modificar_apellido").value = "";
    $("modificar_telefono").value = "";
    $("modificar_correo").value = "";
    $("modificar_fecha").value = "";
    $("modificar_nacionalidad").value = "";
}

window.cerrar_pestana = cerrar_pestana