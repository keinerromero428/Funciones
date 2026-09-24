function calcularInteres(saldo, porcentaje) {
    return saldo * porcentaje / 100;
}

function mostrarInversion(capital, meses) {
    let saldo = capital;

    for (let i = 1; i <= meses; i++) {
        let interes = calcularInteres(saldo, 2);
        saldo = saldo + interes;

        console.log("Mes " + i + ": " + saldo);
    }

    return saldo;
}

let capital = Number(prompt("Capital inicial:"));
let meses = Number(prompt("Número de meses:"));

let saldoFinal = mostrarInversion(capital, meses);
let gananciaTotal = saldoFinal - capital;

console.log("Ganancia total: " + gananciaTotal);