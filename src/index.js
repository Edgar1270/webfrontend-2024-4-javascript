// Importando a biblioteca readline-sync 
let readline = require('readline-sync');

// Capturando o número de pessoas na mesa
let numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');
console.log(numeroPessoas);

// Capturando o valor total da conta
let valorTotal = readline.questionFloat('Digite o valor total da conta: ');
console.log(valorTotal);

// Capturando o método de pagamento
let metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');
console.log(metodoPagamento);

// Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
let desconto;

if (metodoPagamento.toLowerCase() === 'dinheiro' || metodoPagamento.toLowerCase() === 'pix') {
    desconto = valorTotal * 0.9;
    console.log("");
    console.log(`Número de pessoas na mesa: ${numeroPessoas}`);
    console.log(`Valor total da conta: R$${valorTotal.toFixed(2)}`);
    console.log(`Forma de pagamento: ${metodoPagamento}`);
    console.log(`Valor a ser pago com desconto de 10%: R$${desconto.toFixed(2)}`);
} else {
    console.log("");
    console.log(`Número de pessoas na mesa: ${numeroPessoas}`);
    console.log(`Valor total da conta: R$${valorTotal.toFixed(2)}`);
    console.log(`Forma de pagamento: ${metodoPagamento}`);
    console.log(`Valor total: R$${valorTotal.toFixed(2)}`);
}
