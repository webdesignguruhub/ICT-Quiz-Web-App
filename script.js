const quizData = [
  {
    question: "What does RAM stand for?",
    options: ["Read Access Memory", "Random Access Memory", "Run Active Memory", "None"],
    answer: "Random Access Memory"
  },
  {
    question: "Which is NOT a storage device?",
    options: ["SSD", "HDD", "CPU", "Flash Drive"],
    answer: "CPU"
  },
  {
    question: "What is the brain of the computer?",
    options: ["RAM", "CPU", "ROM", "Hard Drive"],
    answer: "CPU"
  }
];

let currentQ = 0;
let score = 0;

const questionBox = document.getElementById("questionBox");
const optionsList = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("scoreBox");

function loadQuestion() {
  questionBox.innerText = quizData[currentQ].question;
  optionsList.innerHTML = "";

  quizData[currentQ].options.forEach(opt => {
    const li = document.createElement("li");
    li.innerText = opt;
    li.addEventListener("click", () => {
      document.querySelectorAll("li").forEach(el => el.classList.remove("selected"));
      li.classList.add("selected");
    });
    optionsList.appendChild(li);
  });
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector("li.selected");
  if (!selected) return alert("Select an option!");

  if (selected.innerText === quizData[currentQ].answer) {
    score++;
  }

  currentQ++;
  if (currentQ < quizData.length) {
    loadQuestion();
  } else {
    questionBox.innerText = "Quiz Completed!";
    optionsList.innerHTML = "";
    nextBtn.style.display = "none";
    scoreBox.innerText = `Your Score: ${score} / ${quizData.length}`;
  }
});

loadQuestion();
