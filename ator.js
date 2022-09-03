//código do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yAtor < 366){
    yAtor += 3;
      }
    }
}

function verificaColisao(){
   //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if(colisao){
       sonDaColisao.play();
       retornaPosicaoInicial();
      if(meusPontos > 0){
        meusPontos -=1;
      }
       }
  }
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
     sonDoPonto.play();
     meusPontos += 1;
     retornaPosicaoInicial();
     }
}

function pontosPositivos(){
  if (meusPontos > 0);
}

function retornaPosicaoInicial(){
  yAtor = 366;
}


















