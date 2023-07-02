const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audio = new Audio('assets/game-over.wav');
const contadorPipesElement = document.getElementById('contador-pipes');
const gameOverDiv = document.getElementById('game-over');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Função para exibir o botão de reiniciar
function exibirBotaoReiniciar() {
  gameOverDiv.style.display = 'block';
  btnReiniciar.style.display = 'block';
}

let contadorPipes = 0; 
let contadorValendo = false;

const jump = ()=>{
  mario.classList.add('jump');

  setTimeout(() => {

    mario.classList.remove('jump');

  },500);
}

btnReiniciar.addEventListener('click', function() {
  location.reload();
});

const loop = setInterval(()=>{

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
  
pipe.style.animation = 'nome';
pipe.style.left = `${pipePosition}px`;

mario.style.animation = 'nome';
mario.style.bottom = `${marioPosition}px`;

mario.src = './assets/game-over.png';
mario.style.width = '75px';
mario.style.marginLeft = '50%';
audio.play();

  exibirBotaoReiniciar();
  clearInterval(loop);

clearInterval(loop);

}else if (pipePosition < 0 && !contadorIncrementado) {
  contadorPipes++;
  contadorIncrementado = true; // Define a variável de controle como true
  contadorPipesElement.textContent = contadorPipes;
  console.log(`Pipes passados: ${contadorPipes}`);
} else if (pipePosition > 0) {
  contadorIncrementado = false; // Reinicia a variável de controle quando o pipe não está mais visível
}

},10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);