function calcularMediaPonderada(n1, n2, n3) {
    const peso1 = 2;
    const peso2 = 3;
    const peso3 = 5;
    const somaPesos = peso1 + peso2 + peso3;
    const mediaPonderada = (n1 * peso1 + n2 * peso2 + n3 * peso3) / somaPesos; 
    return mediaPonderada;
}
function calcularNotaMedia() {
    const n1 = (prompt("Digite a primeira nota:"));
    const n2 = (prompt("Digite a segunda nota:"));
    const n3 = (prompt("Digite a terceira nota:"));
    const media = calcularMediaPonderada(n1, n2, n3);
    console.log(`A média final do aluno é: ${media.toFixed(2)}`);
}
calcularNotaMedia();