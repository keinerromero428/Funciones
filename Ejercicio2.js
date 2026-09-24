function calcularCubo(numero) {
    return numero * numero * numero;
}

function calcularCuartaParte(numero) {
    return numero / 4;
}

let sumaCubos = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt("Número " + i + ":"));

    let cubo = calcularCubo(numero);
    let cuartaParte = calcularCuartaParte(numero);

    console.log(
        "Número: " + numero +
        " | Cubo: " + cubo +
        " | Cuarta parte: " + cuartaParte
    );

    sumaCubos = sumaCubos + cubo;
}

console.log("Suma de los cubos: " + sumaCubos);