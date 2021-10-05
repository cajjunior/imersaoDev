function Converter() {
  // Obter nome do aluno
  var elementoNome = document.getElementById("nome");

  var nome = elementoNome.value;

  // Pedir notas e armazenar
  var elementoPrimeiroBimestre = document.getElementById("nota1");

  var nota1 = elementoPrimeiroBimestre.value;
  var notaPrimeiroBimestre = parseFloat(nota1);

  var elementoSegundoBimestre = document.getElementById("nota2");

  var nota2 = elementoSegundoBimestre.value;
  var notaSegundoBimestre = parseFloat(nota2);

  var elementoTerceiroBimestre = document.getElementById("nota3");

  var nota3 = elementoTerceiroBimestre.value;
  var notaTerceiroBimestre = parseFloat(nota3);

  var elementoQuartoBimestre = document.getElementById("nota4");

  var nota4 = elementoQuartoBimestre.value;
  var notaQuartoBimestre = parseFloat(nota4);

  // calcular media final
  var notaFinal =
    (notaPrimeiroBimestre +
      notaSegundoBimestre +
      notaTerceiroBimestre +
      notaQuartoBimestre) /
    4;

  // arredondar 1 casa decimal
  var notaFixada = notaFinal.toFixed(1);

  // checar media no console
  console.log(notaFixada);
  var mediaFinal = document.getElementById("mediaFinal");
  var exibicaoFinal = "Sua média final é " + notaFixada;

  // exibir no html (troca de valores)
  mediaFinal.innerHTML = exibicaoFinal;

  // Condição de aprovado
  var aprovacaoFinal = document.getElementById("aprovacaoFinal");

  if (notaFixada >= 7)
    var exibicaoFinal = nome + ", você foi aprovado, parabéns!";
  else
    var exibicaoFinal =
      nome + ", você foi reprovado, não desanime e tente outra vez!";

  // checar condicao no console
  console.log(exibicaoFinal);
  // exibir no html
  aprovacaoFinal.innerHTML = exibicaoFinal;

  // limpar campo Insira seu endereço
  document.getElementById("nome").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("nota4").value = "";
}