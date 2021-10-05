// Criar cartas dos personagens do jogo (15 personagens)
var carta1 = {
  nome: "Guile",
  imagem:
    "https://cdn.ome.lt/JpYWTabQW0J6dbAISu0T1g6zp_g=/770x0/smart/uploads/conteudo/fotos/Guile_Flash_Kick.gif",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 6
  }
};

var carta2 = {
  nome: "Ryu",
  imagem:
    "https://cdn.ome.lt/daLmQSa6aCQMjlozhN3XZSwv9H4=/770x0/smart/uploads/conteudo/fotos/Ryu_Tatsu.gif",
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 7
  }
};

var carta3 = {
  nome: "Ken",
  imagem:
    "https://cdn.ome.lt/SosEn9mDoyfPwKrc_p7DkVxE7yU=/770x0/smart/uploads/conteudo/fotos/Ken_Shoryuken.gif",
  atributos: {
    ataque: 8,
    defesa: 8,
    magia: 7
  }
};

var carta4 = {
  nome: "E. Honda",
  imagem:
    "https://cdn.ome.lt/i3UK0lwBfA3EMmhmTTK2F98Svt8=/480x270/smart/uploads/conteudo/fotos/Honda.gif",
  atributos: {
    ataque: 6,
    defesa: 4,
    magia: 3
  }
};

var carta5 = {
  nome: "Dhalsim",
  imagem:
    "https://cdn.ome.lt/BEkBsZXwCGEv67wzGiWu6b2lm5Q=/770x0/smart/uploads/conteudo/fotos/Dhalsim.gif",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 9
  }
};

var carta6 = {
  nome: "Sagat",
  imagem:
    "http://2.bp.blogspot.com/-WAVHINazTZo/VMjN2nFU4uI/AAAAAAAABtE/SVsN4GxLHnE/s1600/Sagat-ttigergenocide.gif",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 5
  }
};

var carta7 = {
  nome: "Chun-Li",
  imagem:
    "https://66.media.tumblr.com/08f81dcdee5a9b9a560d11b63a6a64a1/tumblr_mi1p7kAdcj1rfjowdo1_500.gif",
  atributos: {
    ataque: 7,
    defesa: 5,
    magia: 5
  }
};

var carta8 = {
  nome: "Bison",
  imagem: "https://www.fightersgeneration.com/characters/bison-animation.gif",
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 9
  }
};

var carta9 = {
  nome: "Blanka",
  imagem: "https://i.gifer.com/YQDo.gif",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 6
  }
};

var carta10 = {
  nome: "Vega",
  imagem: "https://thumbs.gfycat.com/PoorBelovedAtlasmoth-size_restricted.gif",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 10
  }
};

var carta11 = {
  nome: "Cammy",
  imagem: "https://www.fightersgeneration.com/characters/cammy-cannondrill.gif",
  atributos: {
    ataque: 9,
    defesa: 5,
    magia: 7
  }
};

var carta12 = {
  nome: "Zangief",
  imagem:
    "http://3.bp.blogspot.com/-DhGMwLIDsCk/VQnga6iYAVI/AAAAAAAAN44/IXF7dh-DP7E/s1600/Zangief%2B3.gif",
  atributos: {
    ataque: 6,
    defesa: 7,
    magia: 5
  }
};

var carta13 = {
  nome: "Dee Jay",
  imagem:
    "https://thumbs.gfycat.com/DesertedGrizzledAegeancat-size_restricted.gif",
  atributos: {
    ataque: 6,
    defesa: 7,
    magia: 3
  }
};

var carta14 = {
  nome: "Balrog",
  imagem: "https://www.fightersgeneration.com/characters/balrog-super1.gif",
  atributos: {
    ataque: 5,
    defesa: 5,
    magia: 2
  }
};

var carta15 = {
  nome: "Feilong",
  imagem:
    "https://www.fightersgeneration.com/nx9/char/sfa3/feilong/a/s/feilong-sfa3-super-level3.gif",
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 6
  }
};

// listar caratas (baralho)
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
  carta14,
  carta15
];

// inicar variáveis das cartas dos jogadores
var cartaMaquina;
var cartaJogador;

// sortear cartas
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  // verificar se cartas sorteadas são repetidas (iguais) e  sortear novamente se positivo
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];

  // deabilitar botao depois de sortear
  document.getElementById("btnSortear").disabled = true;
  // habilitar botao de jogar depois de sortear
  document.getElementById("btnJogar").disabled = false;
  // mostrar imagem personagem
  exibirCartaJogador();
  // posicionar página para melhor visualização das cartas
  window.scrollTo(0, 500);
}

// Pegar a informação selecionada no filtro (atributo)
function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

// comparar resultados do jogador e máquina
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador == null) {
    divResultado =
      "<p class='resultado-final'>Selecione um atributo, jogue novamente</p>";
  } else if (valorCartaJogador > valorCartaMaquina) {
    divResultado = "<p class='resultado-final'>You Win!</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    divResultado = "<p class='resultado-final'>You Lose!</p>";
  } else {
    divResultado = "<p class='resultado-final'>It´s a tie!</p>";
  }

  elementoResultado.innerHTML = divResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoes = document.getElementById("opcoes");

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    // console.log(atributo);
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p> `;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoes = document.getElementById("opcoes");

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    // console.log(atributo);
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p> `;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  document.getElementById("btnRun").disabled = false;
}

// Jogar novamente
function run() {
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnRun").disabled = true;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("opcoes").disabled = true;

  var reiniciarCartaJogador = document.getElementById("carta-jogador");
  reiniciarCartaJogador.style.backgroundImage = "";
  reiniciarCartaJogador.innerHTML = "";

  var reiniciarCartaMaquina = document.getElementById("carta-maquina");
  reiniciarCartaMaquina.style.backgroundImage = "";
  reiniciarCartaMaquina.innerHTML = "";

  var reiniciarResultado = document.getElementById("resultado");
  reiniciarResultado.innerHTML = "";

  window.scrollTo(0, 0);
}