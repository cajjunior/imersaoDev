// Função para pegar valor, calcular em dolar (taxa fixa) e exibir na tela resultado
function Converter() {
  //pegar elemento valor do usuario html
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  // calculo com taxa fixa
  var valorEmDolar = (valorEmRealNumerico / 5.3).toFixed(1);
  console.log(valorEmDolar);
  // exibir resutado convertido
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado aproximado em dolar é US$ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
  // limpar o campo de valor para usar novamente
  document.getElementById("valor").value = "";
}
// Função para pegar valor, calcular em bitcoin (taxa fixa) e exibir na tela resultado
function Converter1() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmBitcoin = (valorEmRealNumerico / 227583.1).toFixed(3);
  console.log(valorEmBitcoin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado aproximado em Bitcoin é BTC " + valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
  document.getElementById("valor").value = "";
}