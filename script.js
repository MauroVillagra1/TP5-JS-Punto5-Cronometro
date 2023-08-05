let cronometroInterval;
let segundos = 0;
let minutos = 0;
let horas = 0;

function actualizarCronometro() {
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;
        if (minutos == 60) {
            minutos = 0;
            horas++;
        }
    }

    const cronometro = document.getElementById('cronometro');
    cronometro.innerText = `${formatoDosDigitos(horas)}:${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;
}

function iniciarCronometro() {
    cronometroInterval = setInterval(actualizarCronometro, 1000);
}

function pausarCronometro() {
    clearInterval(cronometroInterval);
}

function resetCronometro() {
    clearInterval(cronometroInterval);
    segundos = 0;
    minutos = 0;
    horas = 0;
    const cronometro = document.getElementById('cronometro');
    cronometro.innerText = '00:00:00';
}

function formatoDosDigitos(numero) {
    return numero < 10 ? `0${numero}` : numero;
}
