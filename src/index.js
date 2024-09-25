// Importando a biblioteca readline-sync 
const readline = require('readline-sync');

// Função para capturar dados da mesa
function capturarDados() {
    const numeroPessoas = readline.questionInt('Digite o número de pessoas à mesa: ');
    const valorTotal = readline.questionFloat('Digite o valor total da conta: ');
    const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');
    return { numeroPessoas, valorTotal, metodoPagamento };
}

// Função para calcular o valor com desconto
function calcularValorComDesconto(valorTotal, metodoPagamento) {
    if (metodoPagamento.toLowerCase() === 'dinheiro' || metodoPagamento.toLowerCase() === 'pix') {
        return valorTotal * 0.9; // 10% de desconto
    }
    return valorTotal;
}

// Função para exibir o resultado
function exibirResultado({ numeroPessoas, valorTotal, metodoPagamento }) {
    const valorFinal = calcularValorComDesconto(valorTotal, metodoPagamento);
    const valorPorPessoa = valorFinal / numeroPessoas;

    console.log("");
    console.log(`Número de pessoas na mesa: ${numeroPessoas}`);
    console.log(`Valor total da conta: R$${valorTotal.toFixed(2)}`);
    console.log(`Forma de pagamento: ${metodoPagamento}`);
    console.log(`Valor total a ser pago: R$${valorFinal.toFixed(2)}`);
    console.log(`Valor por pessoa: R$${valorPorPessoa.toFixed(2)}`);
}

// Execução do programa
const dados = capturarDados();
exibirResultado(dados);
