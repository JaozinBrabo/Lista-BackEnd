function idadeEmDias(anos, meses, dias) {
    const diasNoAno = 365;
    const diasPorMes = 30;
    const totalDias = (anos * diasNoAno) + (meses * diasPorMes) + dias;
    return totalDias;
}
function totalIdade() {
    const anos = (prompt("Digite a quantidade de anos:"));
    const meses = (prompt("Digite a quantidade de meses:"));
    const dias = (prompt("Digite a quantidade de dias:"));
    const totalDias = idadeEmDias(anos, meses, dias);
    console.log(`A idade em dias é: ${totalDias}`);
}
totalIdade();
