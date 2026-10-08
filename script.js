// CASOS CLINICOS PARA O JOGUINHO
const cases = [
  {
    patient: "Paciente D. Pedro: 'Doutor, não consigo enxergar a lousa nem as placas na rua de longe! De perto enxergo bem.'",
    options: [
      { text: "Miopia - Usar Lente Divergente", correct: true },
      { text: "Hipermetropia - Usar Lente Convergente", correct: false },
      { text: "Astigmatismo - Usar Lente Cilíndrica", correct: false }
    ],
    explanation: "Correto! A miopia faz a imagem focar antes da retina. A lente divergente afasta os raios para focar no lugar certo."
  },
  {
    patient: "Paciente Dona Maria: 'Sinto muita dificuldade para ler livros de perto, preciso esticar o braço para longe!'",
    options: [
      { text: "Miopia - Usar Lente Divergente", correct: false },
      { text: "Hipermetropia - Usar Lente Convergente", correct: true },
      { text: "Catarata - Fazer Cirurgia", correct: false }
    ],
    explanation: "Correto! Na hipermetropia a imagem se forma atrás da retina. A lente convergente ajuda a focar a imagem de perto."
  },
  {
    patient: "Paciente Lucas: 'O cristalino dos meus olhos ficou opaco e enxergo tudo como se estivesse embaçado ou enevoado.'",
    options: [
      { text: "Usar Lente Divergente", correct: false },
      { text: "Catarata - Substituição do Cristalino por Lente Intraocular", correct: true },
      { text: "Glaucoma - Pingar Colírio para Pressão", correct: false }
    ],
    explanation: "Correto! A catarata é a perda de transparência do cristalino, corrigida cirurgicamente."
  }
];

let currentCaseIndex = 0;

const dialogueBox = document.getElementById('patientDialogue');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackBox = document.getElementById('gameFeedback');
const nextBtn = document.getElementById('nextBtn');

function loadCase() {
  feedbackBox.hidden = true;
  nextBtn.style.display = 'none';
  optionsContainer.innerHTML = '';

  const currentCase = cases[currentCaseIndex];
  dialogueBox.innerText = currentCase.patient;

  currentCase.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-blue';
    btn.innerText = opt.text;
    btn.onclick = () => checkAnswer(opt.correct, currentCase.explanation);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(isCorrect, explanation) {
  feedbackBox.hidden = false;
  if (isCorrect) {
    feedbackBox.className = 'feedback-box feedback-correct';
    feedbackBox.innerText = "✨ " + explanation;
  } else {
    feedbackBox.className = 'feedback-box feedback-wrong';
    feedbackBox.innerText = "❌ Resposta incorreta. Tente analisar novamente os sintomas!";
  }
  nextBtn.style.display = 'block';
}

nextBtn.onclick = () => {
  currentCaseIndex = (currentCaseIndex + 1) % cases.length;
  loadCase();
};

// Inicializa o jogo ao carregar
loadCase();
