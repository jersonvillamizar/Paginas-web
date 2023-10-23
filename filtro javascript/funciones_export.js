export {alerta};

function alerta(msg, type, funcion_ejecutar = () => {}, duracion = 5000){
    const types = {
        1: {
            background: "red",
            color: "white"
        },
        2: {
            background: "green",
            color: "white"
        },
        3: {
            background: "blue",
            color: "white"
        }
    }
    Toastify({
        text: msg,
        duration: duracion,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: funcion_ejecutar, // Callback after click
        style: types[type]
      }).showToast();
      
}