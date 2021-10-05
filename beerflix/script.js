var listaCervejas = [
  "https://www.ocontadordecervejas.com.br/arquivos/uploads/2013/12/1465402_10152081794210586_1870808765_n.jpg",
  "https://loja.bodebrown.com.br/media/catalog/product/cache/1/image/850x850/9df78eab33525d08d6e5fb8d27136e95/a/t/atomga1.jpg",
  "https://cdn.dooca.store/2744/products/s9viej7yteewikfbdbb84avskljdhu8sfvhu_600x800+fill_ffffff.jpg",
  "https://www.ocontadordecervejas.com.br/arquivos/uploads/2016/11/dogmacitralover.jpg",
  "https://assets.betalabs.net/production/trilhacervejaria/item-images/066f4b22283fe0afd5425fab81faeac3.jpg",
  "https://lisakadane.files.wordpress.com/2014/02/fat-tire-and-glass.jpg",
  "https://www.prazeresdamesa.com.br/wp-content/uploads/2017/01/IMG_4112rjcastilho-540x405.jpg",
  "https://www.hofbraeu-muenchen.de/sites/www.hofbraeu-muenchen.de/files/styles/biere_uebersichtsseite/public/2019-03/oktoberfestbier_0.jpg?itok=nBX410Ko"
];

for (var i = 0; i < listaCervejas.length; i++) {
  document.write("<img src=" + listaCervejas[i] + ">");
}

function adicionarCerveja() {
  // pegar string do campo html
  var cervejaFavorita = document.getElementById("cerveja").value;
  // console.log(campoFilmeFavorito);
  // validar se filme termina com jgp
  if (cervejaFavorita.endsWith(".jpg")) {
    listarCervejasNaTela(cervejaFavorita);
  } else {
    // alerta de imagem no navegador
    alert("Endereço de imagem inválida");
  }

  //   // limpar campo Insira seu endereço
  document.getElementById("cerveja").value = "";
}

function listarCervejasNaTela(cerveja) {
  // console.log(filme);
  // pegar o elemento/tag imagem da url do adicionada
  var elementoCervejaFavorita = "<img src=" + cerveja + ">";
  // elemento id do html para exibir imagens
  var elementoListaCervejas = document.getElementById("listaCervejas");
  // exibir e adicionar imagem a vitrine
  elementoListaCervejas.innerHTML =
    elementoListaCervejas.innerHTML + elementoCervejaFavorita;
}