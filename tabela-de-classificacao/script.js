// Jogadores de exemplo
var jogador1 = {
  nome: "Jogador1",
  vitorias: 3,
  empates: 1,
  derrotas: 1,
  pontos: 0
};
var jogador2 = {
  nome: "Jogador2",
  vitorias: 0,
  empates: 2,
  derrotas: 3,
  pontos: 0
};
var jogador3 = {
  nome: "Jogador3",
  vitorias: 1,
  empates: 2,
  derrotas: 2,
  pontos: 0
};

// Calculo de pontos por jogador
function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

jogador1.pontos = calculaPontos(jogador1);
jogador2.pontos = calculaPontos(jogador2);
jogador3.pontos = calculaPontos(jogador3);

// lista de jogadores exemplo
var jogadores = [jogador1, jogador2, jogador3];

// exibir na tela
function exibeJogadoresnaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='zerarJogador(" + i + ")'>Zerar</button></td>";
    elemento +=
      "<td><button onClick='removerJogador(" + i + ")'>Remover</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresnaTela(jogadores);

// botões
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresnaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresnaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresnaTela(jogadores);
}

function zerarJogador(i) {
  var jogador = jogadores[i];
  jogador.derrotas = 0;
  jogador.empates = 0;
  jogador.vitorias = 0;
  jogador.pontos = 0;
  exibeJogadoresnaTela(jogadores);
}

function adicionarJogador() {
  var nomeNovoJogador = document.getElementById("nomeNovoJogador").value;
  console.log(nomeNovoJogador);
  var novoJogador = {
    nome: nomeNovoJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var addJogador = jogadores.push(novoJogador);
  exibeJogadoresnaTela(jogadores);
  document.getElementById("nomeNovoJogador").value = "";
}

function removerJogador(i) {
  var jogador = jogadores[i];
  var removeJogador = jogadores.pop();
  exibeJogadoresnaTela(jogadores);
}