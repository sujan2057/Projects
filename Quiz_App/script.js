const obj = [
  {
    question: "What is the correct syntax for declaring a JavaScript variable?",
    options: {
      option1: "var = myVariable;",
      option2: " myVariable = var;",
      option3: "myVariable var;",
      option4: "var myVariable;",
    },
    answer: "var myVariable;",
  },
  {
    question: "Which of the following is not a valid JavaScript data type?",
    options: {
      option1: "Boolean",
      option2: "String",
      option3: "Float",
      option4: "Array",
    },
    answer: "Float",
  },
  {
    question: "Which of the following is not a JavaScript loop?",
    options: {
      option1: "for loop",
      option2: "while loop",
      option3: "do...while loop",
      option4: " if...else loop",
    },
    answer: " if...else loop",
  },
  {
    question: "Which of the following is not a JavaScript data structure?",
    options: {
      option1: "Array",
      option2: "Object",
      option3: "List",
      option4: "Map",
    },
    answer: "List",
  },
];

const startBtn = document.querySelector(".start");
const answers = document.querySelectorAll(".answers");
const question_container = document.querySelector(".question_container");
const question = document.querySelector("#question");
const answer_Wrapper = document.querySelector(".answer_Wrapper");
const opt1 = document.querySelector("#first");
const opt2 = document.querySelector("#second");
const opt3 = document.querySelector("#third");
const opt4 = document.querySelector("#fourth");
const skipBtn = document.querySelector(".skip");
const container = document.querySelector(".container");

var currentQuestionIndex = 0;
const correctAnswers = [];

const init = () => {
  answer_Wrapper.style.display = "none";
  question_container.style.display = "none";
  startBtn.style.display = "block";
  skipBtn.style.display = "none";
};
init();
const startGame = () => {
  answer_Wrapper.style.display = "block";
  question_container.style.display = "block";
  startBtn.style.display = "none";
  skipBtn.style.display = "block";
};

const checkRightAnswer = () => {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = obj[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;

  if (selectedAnswer === correctAnswer) {
    correctAnswers.push(selectedAnswer);
  }
};

const handleClick = () => {
  checkRightAnswer();
  if (currentQuestionIndex >= obj.length - 1) {
    container.innerHTML = `<h2>Thank you for completing the questions.Your score is ${correctAnswers.length} !</h2>`;
  } else {
    currentQuestionIndex++;
    showQuestion();
  }
};

const showAnswer = (currentQuestion) => {
  opt1.textContent = currentQuestion.options.option1;
  opt2.textContent = currentQuestion.options.option2;
  opt3.textContent = currentQuestion.options.option3;
  opt4.textContent = currentQuestion.options.option4;
};
const showQuestion = () => {
  var currentQuestion = obj[currentQuestionIndex];
  showAnswer(currentQuestion);
  question.textContent = currentQuestion.question;
};

startBtn.addEventListener("click", () => {
  startGame();
  showQuestion();
});

opt1.addEventListener("click", handleClick);
opt2.addEventListener("click", handleClick);
opt3.addEventListener("click", handleClick);
opt4.addEventListener("click", handleClick);

skipBtn.addEventListener("click", handleClick);
