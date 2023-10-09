let dicc = {}
const list = []

function ingresar(){
    let ingreso_portada_url = document.getElementById('ingreso_portada_url').value;
    let ingreso_titulo = document.getElementById('ingreso_titulo').value;
    let ingreso_autor = document.getElementById('ingreso_autor').value;
    let ingreso_año = document.getElementById('ingreso_año').value;
    let ingreso_disponible = document.getElementById('ingreso_disponible').value;
    let ingreso_prestado = document.getElementById('ingreso_prestado').value;

    if (ingreso_portada_url.lower() == "" || ingreso_titulo.lower() == "" || ingreso_autor.lower() == "" 
    || ingreso_año.lower() == "" || ingreso_disponible.lower() == "" || ingreso_prestado.lower() == "")
    {
        alert("Ha dejado un espacio en el registro vacio")
    }
    else{
        dicc = {
            portada_url: ingreso_portada_url,
            titulo: ingreso_titulo,
            autor: ingreso_autor,
            año: ingreso_año,
            disponible: ingreso_disponible,
            prestado: ingreso_prestado
        }
        list.push(dicc);
    }
}

function validarCampo(inputElement, mensajeElement) {
    let valor_invalido = inputElement.value.trim();

    if (valor_invalido !== "") {
        inputElement.classList.remove("invalid");
        inputElement.classList.add("valid");
        mensajeElement.textContent = "Válido";
        return "valido"
    } else {
        inputElement.classList.remove("valid");
        inputElement.classList.add("invalid");
        mensajeElement.textContent = "No válido";
    }
}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    validarCampo(document.getElementById("ingreso_titulo"), document.getElementById("titulo_mensaje"));
    validarCampo(document.getElementById("nombre"), document.getElementById("nombre_mensaje"));
});


document.getElementById("check_portada").addEventListener("click", function () {
    validarCampo(document.getElementById("nombre"), document.getElementById("nombre_mensaje"));
});

document.getElementById("check_titulo").addEventListener("click", function () {
    validarCampo(document.getElementById("ingreso_titulo"), document.getElementById("titulo_mensaje"));
});

document.getElementById("check_autor").addEventListener("click", function () {
    validarCampo(document.getElementById("nombre"), document.getElementById("nombre_mensaje"));
});

document.getElementById("check_año").addEventListener("click", function () {
    validarCampo(document.getElementById("nombre"), document.getElementById("nombre_mensaje"));
});

document.getElementById("check_autor").addEventListener("click", function () {
    validarCampo(document.getElementById("nombre"), document.getElementById("nombre_mensaje"));
});

document.getElementById("check_autor").addEventListener("click", function () {
    validarCampo(document.getElementById("nombre"), document.getElementById("nombre_mensaje"));
});

