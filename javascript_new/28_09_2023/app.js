const inputDescuento = document.getElementById('descuento');
const inputPrecio = document.getElementById('bton_precio');
const resultados = document.getElementById('resultados');
const resultados_dos = document.getElementById('resultados_dos');


function calcularDescuento() {

    const precios = document.getElementsByClassName('precio');
    /* precios.forEach((precio) => {
        let numeros = parseInt(precio.value)
        console.log(numeros)
    }) */
    let numeros = [];
    for (let j=0; j<precios.length; j++){
        numeros[j] = parseInt(precios[j].value);
    }
    console.log(numeros);
    const descuento = parseFloat(inputDescuento.value);
    const preciosConDescuento = numeros.map(function(precio){
        const precioConDescuento = precio - (precio * (descuento/100));
        return precioConDescuento.toFixed(2); //reondear 2 decimales
    });

    resultados_dos.innerHTML = '<h2>Precios Con Descuento</h2>';
    preciosConDescuento.forEach((precio, index)=> {
        resultados_dos.innerHTML += `<p>Producto ${index + 1}: $${precio}</p>`;
    });
}

function limpiar() {
    document.getElementById('descuento').value = ""
}

function crearvalores() {
    let valores = parseInt(inputPrecio.value);
    console.log(valores);
    for (let i = 1; i < valores + 1; i++) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        label.textContent = `Precio Nº${i}:`;
        input.classList.add('precio');
        input.setAttribute('placeholder', 'Ingrese la Cantidad');
        resultados.appendChild(label);
        resultados.appendChild(input);    
    }
}




