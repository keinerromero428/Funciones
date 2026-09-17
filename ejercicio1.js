//Enunciado
//Leer un número y mostrar su tabla de multiplicar del 1 al 10. Cada línea debe mostrar el
//multiplicando, el multiplicador y el producto.


let numero = parseInt(prompt("Ingrese un número:"));

function multiplicar(a, b) {
    return a * b;
}

function mostrarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        let producto = multiplicar(numero, i);
        console.log(`${numero} x ${i} = ${producto}`);
    }

}

mostrarTablaMultiplicar(numero);

