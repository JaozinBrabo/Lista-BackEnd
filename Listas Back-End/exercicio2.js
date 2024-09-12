function calcularExpressao(A, B, C) {
    if (A > 0 && B > 0 && C > 0) {
        const R = (A + B) ** 2;
        const S = (B + C) ** 2;
        const D = R + (S / 2);
        return D;
    }
  function main() {
    const A = (prompt("Digite o valor de A :"), 10);
    const B = (prompt("Digite o valor de B :"), 10);
    const C = (prompt("Digite o valor de C :"), 10);
    const resultado = calcularExpressao(A, B, C);
    console.log(`O valor de D é: ${resultado.toFixed(2)}`); 
  }   
main()
}