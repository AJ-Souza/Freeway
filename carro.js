//código do carro

//carros
let xCarros = [600, 600, 600,0, 0, 0];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);  
  }
}

// TODAS AS 6 PISTAS COM FLUXO NO MESMO SENTIDO, NESSE CASO, xCarros TEM QUE SER TUDO 600
//function movimentaCarro(){
//for (let i = 0; i < imagemCarros.length; i++){
//xCarros[i] -= velocidadeCarros[i];  
//}
//}

function movimentaCarro(){
  for (let i = 0; i <= 2; i++){
  xCarros[i] -= velocidadeCarros[i];  
  }
}

function movimentaCarroContrario(){
  for (let i = 3; i < 6; i++){
  xCarros[i] += velocidadeCarros[i];  
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i <= 2; i++){
    if (xCarros[i] < -50){
      xCarros[i] = 600;
      }  
  }
}

function voltaPosicaoInicialDoCarroContrario(){
  for (let i = 3; i <= 5; i++){
    if (xCarros[i] > 600){
      xCarros[i] = 0;
      }  
  }
}
