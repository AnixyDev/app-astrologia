const questions = [
  {
    question: "¿Cuál es tu signo?",
    options: ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"]
  }
];

let currentQuestion = 0;
let answers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const button = document.createElement("div");
    button.textContent = option;
    button.classList.add("option");
    button.onclick = (e) => selectOption(option, e); // PASAMOS 'e' y opcion
    optionsEl.appendChild(button);
  });

  // Deshabilitar el botón de siguiente hasta que se seleccione una opción
  nextBtn.disabled = true;
}

function selectOption(option, event) {
  answers[currentQuestion] = option;
  Array.from(optionsEl.children).forEach(btn => btn.classList.remove("selected"));
  event.target.classList.add("selected");

  // Habilitar el botón de siguiente después de seleccionar una opción
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  if (!answers[currentQuestion]) {
    alert("Selecciona tu signo antes de continuar 🪐");
    return;
  }
  showResult();
};

function showResult() {
  // Ocultar la sección de preguntas
  document.getElementById("quiz").style.display = "none";
  resultEl.style.display = "block"; // Mostrar el resultado

  const signo = answers[0];
  let resultado = "";

  // Aquí definimos las predicciones por signo
  switch(signo) {
    case "Aries":
    case "Leo":
    case "Sagitario":
      resultado = "🔥 ¡Necesitás una landing potente y dinámica!";
      break;
    case "Tauro":
    case "Virgo":
    case "Capricornio":
      resultado = "🌿 Un e-commerce sólido y confiable es ideal para ti.";
      break;
    case "Géminis":
    case "Libra":
    case "Acuario":
      resultado = "💡 ¡Un blog interactivo es tu mejor herramienta!";
      break;
    case "Cáncer":
    case "Escorpio":
    case "Piscis":
      resultado = "🌙 Una web emocional con portfolio sería mágica para ti.";
      break;
    default:
      resultado = "✨ Cualquier web hecha con amor te irá bien.";
  }

  resultEl.textContent = resultado;
}

showQuestion();
