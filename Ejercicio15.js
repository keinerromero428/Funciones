function contarDivisores(numero) {
    let divisores = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }

    return divisores;
}

function esPrimo(numero) {
    return contarDivisores(numero) === 2;
}

let limite = Number(prompt("Límite:"));
let cantidadPrimos = 0;

for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
        console.log(i);
        cantidadPrimos++;
    }
}

console.log("Cantidad de primos: " + cantidadPrimos);