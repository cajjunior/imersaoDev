// sortear número de 0 a 10
var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;
var chances = 2;

// Obter número do jogador e comparar com o sorteado
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  console.log(numeroSecreto);
  document.getElementById("valor").value = "";

  if (tentativas > 2) {
    elementoResultado.innerHTML =
      "Voce perdeu as chances. O número secreto era '" + numeroSecreto + "'.";
  } else if (chances == 0 && chute != numeroSecreto) {
    elementoResultado.innerHTML =
      "Voce perdeu as chances. O número secreto era '" + numeroSecreto + "'.";
  } else {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou!";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10.";
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "Errou, o número é MAIOR. Voce tem " + chances + " chance(s)";
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Errou, o número é MENOR. Voce tem " + chances + " chance(s)";
    }
    tentativas++;
    chances = chances - 1;
  }
}

// Jogar novamente
function run() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 0;
  chances = 2;
  document.getElementById("valor").value = "";

  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
}