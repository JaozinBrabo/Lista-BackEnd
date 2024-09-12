function calcularCustoConsumidor(custoFabrica) {
    const percentualDis = 0.28; 
    const percentualImp = 0.45; 
    const custoDistribuidor = custoFabrica * percentualDis;
    const custoImpostos = custoFabrica * percentualImp;
    const custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;
    return custoConsumidor;
}
function mostreCusto() {
    const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));
    const custoConsumidor = calcularCustoConsumidor(custoFabrica);
    console.log(`O custo ao consumidor é: R$ ${custoConsumidor.toFixed(2)}`);
}