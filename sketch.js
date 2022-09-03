function setup() {
  createCanvas(500, 400);
  sonDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaCarroContrario();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  voltaPosicaoInicialDoCarroContrario();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
