function IdadeConvertida(diasTotais) {
    const diasPorAno = 365;
    const diasPorMes = 30;
    var anos = Math.floor(diasTotais / diasPorAno);
    var diasRestantes = diasTotais % diasPorAno;
    var meses = Math.floor(diasRestantes / diasPorMes);
    var dias = diasRestantes % diasPorMes;
    return {
        anos: anos,
        meses: meses,
        dias: dias
    };
}
function mostrarIdade() {
    var dias = parseInt(prompt("Digite a idade em dias:"), 10);
    var resultado = IdadeConvertida(dias);
    console.log("A idade é: " + resultado.anos + " anos, " + resultado.meses + " meses e " + resultado.dias + " dias.");
}
mostrarIdade();