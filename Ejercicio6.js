function calcularHorasExtra(horas) {
    if (horas > 40) {
        return horas - 40;
    }

    return 0;
}

function calcularSalarioSemanal(horas) {
    let horasExtra = calcularHorasExtra(horas);
    let horasNormales = horas - horasExtra;

    let salarioNormal = horasNormales * 12000;
    let salarioExtra = horasExtra * 15000;

    return salarioNormal + salarioExtra;
}

let cantidadObreros = Number(prompt("¿Cuántos obreros?:"));
let totalNomina = 0;

for (let i = 1; i <= cantidadObreros; i++) {
    let horas = Number(prompt("Horas obrero " + i + ":"));

    let salario = calcularSalarioSemanal(horas);

    console.log("Obrero " + i + ": " + salario);

    totalNomina = totalNomina + salario;
}

console.log("Total nómina: " + totalNomina);