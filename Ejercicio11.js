//Enunciado
//El programa genera un número secreto entre 1 y 100. El usuario tiene máximo 7 intentos para
//adivinarlo. Después de cada intento, el programa dice si el número secreto es mayor o menor.
//El juego termina cuando el usuario adivina o se le acaban los intentos. Si adivina, mostrar en
//cuántos intentos lo logró. Si pierde, mostrar cuál era el número.

function generarNumeroSecreto(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function evaluarIntento(intento, secreto) {
    if (intento === secreto) {
        return "correcto";
    } else if (intento > secreto) {
        return "mayor";
    } else {
        return "menor";
    }
}

let secreto = generarNumeroSecreto(1, 100);
let intentos = 0;
let resultado = "";

while (intentos < 7 && resultado !== "correcto") {
    intentos++;

    let intento = Number(prompt("Intento " + intentos + ":"));

    resultado = evaluarIntento(intento, secreto);

    if (resultado === "correcto") {
        console.log("¡Adivinaste en " + intentos + " intentos!");
    } else if (resultado === "mayor") {
        console.log("El número secreto es menor");
    } else {
        console.log("El número secreto es mayor");
    }
}

if (resultado !== "correcto") {
    console.log("Se acabaron los intentos. El número era: " + secreto);
}