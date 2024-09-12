function converterTempo(segundosTotais) {
    var horas = Math.floor(segundosTotais / 3600);
    var segundosRestantes = segundosTotais % 3600;
    var minutos = Math.floor(segundosRestantes / 60);
    var segundos = segundosRestantes % 60;
    return {
        horas: horas,
        minutos: minutos,
        segundos: segundos
    };
}
function mostrarTempo() {
    var segundos = prompt("Digite a duração do evento em segundos:");
    segundos = parseInt(segundos);
    var resultado = converterTempo(segundos);
    console.log("O tempo é: " + resultado.horas + " horas, " + resultado.minutos + " minutos e " + resultado.segundos + " segundos.");
}
mostrarTempo();