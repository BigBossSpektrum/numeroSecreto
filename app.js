let numeroSecreto = 0;
let intentos = 0;
let listaNumeroGenerado = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText = texto;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Adivina el numero secreto de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento('p','El numero secreto es Mayor')        
        } else {
            asignarTextoElemento('p','El numero secreto es menor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensajes de inicio
    //Generar numero aleatorio
    //Reiniciar numeros de intentos
    condicionesIniciales();
    //Desabilitar boton de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    //Si ya se sortearon todos los numeros
    if (listaNumeroGenerado.length === numeroMaximo) {
        asignarTextoElemento('p', 'Todos los numeros han sido sorteados');
    } else {
        //Si el numero generado ya existe, volvemos a llamar al generador de numero
        if (listaNumeroGenerado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroGenerado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
condicionesIniciales();
