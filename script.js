function calcularIMC() {
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const resultado = document.getElementById('resultado');
    const container = document.querySelector('.container');

    container.className = 'container';
    resultado.className = 'resultado';

    if (!peso || !altura || altura <= 0) {
      resultado.innerHTML = `<p style="color: #f77;">Por favor, preencha os campos corretamente.</p>`;
      resultado.classList.add('mostrar');
      return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';
    let classeFundo = '';

    
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classeFundo = 'abaixo';
      } else if (imc < 24.9) {
        classificacao = 'Peso normal';
        classeFundo = 'normal';
      } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
        classeFundo = 'sobrepeso';
      } else if (imc < 34.9) {
        classificacao = 'Obesidade grau 1';
        classeFundo = 'obesidade1';
      } else if (imc < 39.9) {
        classificacao = 'Obesidade grau 2';
        classeFundo = 'obesidade2';
      } else {
        classificacao = 'Obesidade grau 3';
        classeFundo = 'obesidade3';
      }

    resultado.innerHTML = `
    
      <p>Seu IMC é <strong>${imc}</strong></p>
      <p class="classificacao">${classificacao}</p>
    `;

    resultado.classList.add('mostrar');
    container.classList.add(classeFundo);
  }