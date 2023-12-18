let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarClick() {
    console.log('O botão foi clicado!');
}

function alerta() {
    alert('Eu amo JS!');
}

function promptCidade() {
    let cidadeUsuario = prompt('Qual o nome da sua cidade?');
    alert(`Estive em ${cidadeUsuario} e lembrei de você!`);
}

function somaDoisValores() {
    let primeiroValor = parseInt(prompt('Digite o primeiro valor para a soma:'));
    let segundoValor = parseInt(prompt('Digite o segundo numero para a soma:'));
    alert(`Resultado: ${primeiroValor + segundoValor}`);
}