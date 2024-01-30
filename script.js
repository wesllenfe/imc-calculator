const calcular = document.getElementById("calcular");

function calcularIMC() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if (nome && !isNaN(altura) && !isNaN(peso)) {
        const valorIMC = calcularValorIMC(peso, altura);
        const classificacao = getClassificacaoIMC(valorIMC);

        resultado.textContent = `Olá, ${nome}! Seu IMC é ${valorIMC.toFixed(
            2
        )} e você está ${classificacao}`;
    } else {
        resultado.textContent = "Preencha todos os campos com valores válidos!";
    }
}

function calcularValorIMC(peso, altura) {
    return peso / (altura * altura);
}

function getClassificacaoIMC(valorIMC) {
    if (valorIMC < 18.5) {
        return "abaixo do peso.";
    } else if (valorIMC < 25) {
        return "com peso ideal. Parabéns!";
    } else if (valorIMC < 30) {
        return "levemente acima do peso";
    } else if (valorIMC < 35) {
        return "com obesidade grau I";
    } else if (valorIMC < 40) {
        return "com obesidade grau II";
    } else {
        return "com obesidade grau III. Cuidado!";
    }
}

calcular.addEventListener("click", calcularIMC);
