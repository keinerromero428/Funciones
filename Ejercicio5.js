function clasificarNumero(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

function contarNumeros(cantidad) {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;

    for (let i = 1; i <= cantidad; i++) {
        let numero = Number(prompt("Número " + i + ":"));
        let tipo = clasificarNumero(numero);

        if (tipo === "positivo") {
            positivos++;
        } else if (tipo === "negativo") {
            negativos++;
        } else {
            ceros++;
        }
    }

    console.log("Positivos: " + positivos);
    console.log("Negativos: " + negativos);
    console.log("Ceros: " + ceros);
}

contarNumeros(20);