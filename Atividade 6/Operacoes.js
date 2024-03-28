function realizarOperacoes() {
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));

    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const produto = numero1 * numero2;
    const divisao = numero1 / numero2;
    const resto = numero1 % numero2;

    alert(`Resultados:
    Soma: ${soma}
    Subtração: ${subtracao}
    Produto: ${produto}
    Divisão: ${divisao.toFixed(2)}
    Resto: ${resto}`);

    const confirmacao = confirm("Deseja realizar outra operação?");
    if (confirmacao) {
        realizarOperacoes();
    }
}
