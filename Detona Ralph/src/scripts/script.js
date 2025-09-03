let tempoRestante = 30;
let pontos = 0;
let jogoAtivo = false;
let intervalo;

const janelas = document.querySelectorAll('.janela');
const tempoEl = document.getElementById('tempo');
const pontuacaoEl = document.getElementById('pontuacao');
const pontuacaoFinalEl = document.getElementById('pontuacaoFinal');

function iniciarJogo() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('jogo').style.display = 'block';

  tempoRestante = 30;
  pontos = 0;
  jogoAtivo = true;
  tempoEl.textContent = tempoRestante;
  pontuacaoEl.textContent = pontos;

  intervalo = setInterval(() => {
    if (tempoRestante <= 0) {
      clearInterval(intervalo);
      fimDeJogo();
      return;
    }
    tempoRestante--;
    tempoEl.textContent = tempoRestante;
    mostrarPersonagemAleatorio();
  }, 1000);
}

function mostrarPersonagemAleatorio() {
  janelas.forEach(j => j.className = 'janela');

  const aleatoria = Math.floor(Math.random() * janelas.length);
  const personagem = Math.random() < 0.7 ? 'ralph' : 'felix';

  janelas[aleatoria].classList.add(personagem);
}

janelas.forEach(janela => {
  janela.addEventListener('click', () => {
    if (!jogoAtivo) return;

    if (janela.classList.contains('ralph')) {
      pontos++;
    } else if (janela.classList.contains('felix')) {
      pontos = Math.max(0, pontos - 1);
    }

    pontuacaoEl.textContent = pontos;
    janela.className = 'janela';
  });
});

function fimDeJogo() {
  jogoAtivo = false;
  document.getElementById('jogo').style.display = 'none';
  document.getElementById('fim').style.display = 'flex';
  pontuacaoFinalEl.textContent = pontos;
}

function reiniciar() {
  document.getElementById('fim').style.display = 'none';
  document.getElementById('menu').style.display = 'flex';
}

function mostrarInstrucoes() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('instrucoes').style.display = 'flex';
}

function voltarMenu() {
  document.getElementById('instrucoes').style.display = 'none';
  document.getElementById('menu').style.display = 'flex';
}
