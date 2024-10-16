//console.log("Esto es un mensaje desde java script")
//alert("Esto es un mensaje desde Java Script")

const display = document.getElementById("display");
var numero1 = 0;
var numero2 = 0;
let sOperador;

function agregarNumero(numero) {
    if (display.textContent === "0") {
        display.textContent = numero;
        if (numero === ".") {
            display.textContent = "0" + numero;
        }
    }
    else {
        if (display.textContent.includes(".") && numero === ".") {
            alert("No puedes agregar mas comas décimales.")
        }
        else {
            display.textContent += numero;
        }
    }
}

function operacion(operador) {
    sOperador = operador;
    numero1 = Number(display.textContent);
    if (operador === "masmenos") {
        numero1=numero1*(-1);
        display.textContent = String(numero1);
    }
    else if (operador === "+") {
        numero2 = numero1;
        limpiar();
    }
    else if (operador === "-") {
        numero2 = numero1;
        limpiar();
    }
    else if (operador === "*") {
        numero2 = numero1;
        limpiar();
    }
    else if (operador === "/") {
        numero2 = numero1;
        limpiar();
    }
    else if(operador ==="porcentaje"){
        numero2 = numero1;
        limpiar();
    }
}

function resultado() {
    let resultado;
    numero1 = Number(display.textContent);
    if (sOperador === "+") {
        resultado = numero1 + numero2;
        display.textContent = String(resultado);
        numero1 = Number(resultado);
    }
    else if (sOperador === "-") {
        resultado = numero2 - numero1;
        display.textContent = String(resultado);
        numero1 = Number(resultado);
    }
    else if (sOperador === "*") {
        resultado = numero2 * numero1;
        display.textContent = String(resultado);
        numero1 = Number(resultado);
    }
    else if (sOperador === "/") {
        if (numero1 === 0) {
            alert("No se puede dividir por 0")
        }
        else {
            resultado = numero2 / numero1;
            display.textContent = String(resultado);
            numero1 = Number(resultado);
        }
    }
    else if (sOperador === "porcentaje") {
        resultado = numero2 * numero1/100;
        display.textContent = String(resultado);
        numero1 = Number(resultado);
    }
}

function BorrarUltimo(){
    if(display.textContent.length >= 1){
            display.textContent= String(display.textContent).slice(0,-1);
        }
}
function limpiar() {
    display.textContent = 0;
    display.innerHTML = 0;
}