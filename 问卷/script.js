const questions = [
  {
    scenario: "场景：五年级的班会，班主任希望同学们讨论评选三好学生的过程。",
    question: "你觉得在评选区三好学生的过程中，老师指定和同学选择哪个更好？",
  },
  {
    scenario: "场景：班主任想要明确时间表，要求准时交作业和严格遵守课堂表现。",
    question: "你觉得我们的班级更应该有明确的时间表，还是更随意一些，每个人自己安排好？",
  },
  {
    scenario: "场景：讨论学校规章制度的遵守情况。",
    question: "是否要遵守所有的学校规定？（比如校服）",
  },
  {
    scenario: "场景：如果有同学经常扰乱课堂纪律。",
    question: "如果同学经常在班级捣乱，影响大家上课，你觉得我们应该尝试和他沟通，还是一定要用更强硬的方法解决？",
  },
];

let currentQuestionIndex = 0;
const answers = [];

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const scenarioElement = document.getElementById("scenario");
  const answerInput = document.getElementById("answer");

  const currentQuestion = questions[currentQuestionIndex];

  scenarioElement.textContent = currentQuestion.scenario;
  questionElement.textContent = currentQuestion.question;
  answerInput.value = "";
}

function showResult() {
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const answersDisplay = document.getElementById("answers-display");

  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  answersDisplay.innerHTML = answers
    .map(
      (answer, index) =>
        `<p><strong>Q${index + 1}:</strong> ${questions[index].question}</p>
         <p><strong>Your Answer:</strong> ${answer}</p>`
    )
    .join("");
}

function handleNext() {
  const answerInput = document.getElementById("answer");

  if (answerInput.value.trim() === "") {
    alert("Please provide an answer before proceeding.");
    return;
  }

  answers.push(answerInput.value);

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  answers.length = 0;

  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");

  quizContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");

  showQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");

  nextButton.addEventListener("click", handleNext);
  restartButton.addEventListener("click", restartQuiz);

  showQuestion();
});
