function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }
    
    const imc = peso / (altura * altura);
    const imcValor = document.getElementById('imc-valor');
    const descricao = document.getElementById('descricao');
    
    imcValor.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
    
    let faixa;
    if (imc < 18.5) {
        faixa = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        faixa = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        faixa = 'Sobrepeso';
    } else {
        faixa = 'Obesidade';
    }
    
    descricao.textContent = `Classificação: ${faixa}`;
}
