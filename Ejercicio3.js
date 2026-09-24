function convertirAKelvin(celsius) {
    return celsius + 273.15;
}

function convertirAFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let cantidadDias = Number(prompt("¿Cuántos días?:"));
let sumaTemperaturas = 0;

for (let i = 1; i <= cantidadDias; i++) {
    let celsius = Number(prompt("Temperatura día " + i + " (°C):"));

    let kelvin = convertirAKelvin(celsius);
    let fahrenheit = convertirAFahrenheit(celsius);

    console.log(
        "Día " + i + ": " +
        celsius + " °C = " +
        kelvin + " K = " +
        fahrenheit + " °F"
    );

    sumaTemperaturas = sumaTemperaturas + celsius;
}

let promedio = calcularPromedio(sumaTemperaturas, cantidadDias);

console.log("Promedio: " + promedio + " °C");