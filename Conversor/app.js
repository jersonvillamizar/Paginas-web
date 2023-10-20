import {weight, length , temperature, time} from "./funciones.js";
const $ = (idElemento) => document.getElementById(idElemento)

$("quantity_weight").addEventListener("input", calculate_weight);
$("option_weight").addEventListener("change", calculate_weight);
$("convers_weight").addEventListener("change", calculate_weight);

$("quantity_lenght").addEventListener("input", calculate_lenght);
$("option_lenght").addEventListener("change", calculate_lenght);
$("convers_lenght").addEventListener("change", calculate_lenght);

$("quantity_temperature").addEventListener("input", calculate_temperature);
$("option_temperature").addEventListener("change", calculate_temperature);
$("convers_temperature").addEventListener("change", calculate_temperature);

$("quantity_time").addEventListener("input", calculate_time);
$("option_time").addEventListener("change", calculate_time);
$("convers_time").addEventListener("change", calculate_time);

function calculate_weight(){
    let input_measure = $("option_weight").value;
    let exit_measure = $("convers_weight").value;
    let quantity = $("quantity_weight").value;

    let value = weight(quantity, input_measure, exit_measure);
    let i_exit = $("result_weight");
    i_exit.textContent = value + " " + exit_measure;
}

function calculate_lenght(){
    let input_measure = $("option_lenght").value;
    let exit_measure = $("convers_lenght").value;
    let quantity = $("quantity_lenght").value;

    let value = length(quantity, input_measure, exit_measure);
    let i_exit = $("result_lenght");
    i_exit.textContent = value + " " + exit_measure;
}

function calculate_temperature(){
    let input_measure = $("option_temperature").value;
    let exit_measure = $("convers_temperature").value;
    let quantity = $("quantity_temperature").value;

    let value = temperature(quantity, input_measure, exit_measure);
    let i_exit = $("result_temperature");
    i_exit.textContent = value + " " + exit_measure;
}

function calculate_time(){
    let input_measure = $("option_time").value;
    let exit_measure = $("convers_time").value;
    let quantity = $("quantity_time").value;

    let value = time(quantity, input_measure, exit_measure);
    let i_exit = $("result_time");
    i_exit.textContent = value + " " + exit_measure;
}