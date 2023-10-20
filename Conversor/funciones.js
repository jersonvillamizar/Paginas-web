export { weight, length, temperature, time }

function weight(value, entrada, salida) {
    let gramos = value

    if (entrada == "Lb") {
        gramos = value * 453.592

    } else if (entrada == "Kg") {
        gramos = value * 1000

    } else if (entrada == "@") {
        gramos = value * 11339.8

    } else if (entrada == "Oz") {
        gramos = value * 28.3495
    }

    let nuevo_valor = gramos

    if (salida == "Lb") {
        nuevo_valor = gramos / 453.592

    } else if (salida == "Kg") {
        nuevo_valor = gramos / 1000

    } else if (salida == "@") {
        nuevo_valor = gramos / 11339.8

    } else if (salida == "Oz") {
        nuevo_valor = gramos / 28.3495
    }

    if (nuevo_valor % 1 == 0) {
        return parseInt(nuevo_valor)
    }

    return parseFloat(nuevo_valor).toFixed(3)
}


function length(value, entrada, salida) {
    let codo = value

    if (entrada == "Yarda") {
        codo = value * 2.67

    } else if (entrada == "M") {
        codo = value * 2.22

    } else if (entrada == "Km") {
        codo = value * 2220

    } else if (entrada == "Milla") {
        codo = value * 3520
    }

    let nuevo_valor = value

    if (salida == "Yarda") {
        nuevo_valor = codo / 2.67

    } else if (salida == "M") {
        nuevo_valor = codo / 2.22

    } else if (salida == "Km") {
        nuevo_valor = codo / 2220

    } else if (salida == "Milla") {
        nuevo_valor = codo / 3520
    }

    if (nuevo_valor % 1 == 0) {
        return parseInt(nuevo_valor)
    }

    return parseFloat(nuevo_valor).toFixed(3)

}

function temperature(value, entrada, salida) {
    let celsius = value

    if (entrada == "K") {
        celsius = value - 273.15

    } else if (entrada == "R") {
        celsius = value * 1.8 + 491.67
    }

    let nuevo_valor = celsius

    if (salida == "K") {
        nuevo_valor = celsius + 273.15

    } else if (salida == "R") {
        nuevo_valor = celsius / 1.8 - 491.67
    }

    if (nuevo_valor % 1 == 0) {
        return parseInt(nuevo_valor)
    }

    return parseFloat(nuevo_valor).toFixed(3)
}

function time(value, entrada, salida) {
    let seg = value

    if (entrada == "Min") {
        seg = value * 60

    } else if (entrada == "Hora") {
        seg = value * 3600
    }

    let nuevo_valor = seg

    if (salida == "Min") {
        nuevo_valor = seg / 60

    } else if (salida == "Hora") {
        nuevo_valor = seg / 3600
    }

    if (nuevo_valor % 1 == 0) {
        return parseInt(nuevo_valor)
    }

    return parseFloat(nuevo_valor).toFixed(3)
}