const quizData = [
  {
    question: "Which Language runs in a web browser",
    a: "Java",
    b: "c",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "What is the primary purpose of HTML in web development?",
    a: "Styling web pages",
    b: "Programming server-side logic",
    c: "Defining the structure and content of web pages",
    d: "Creating database queries",
    correct: "c",
  },
  {
    question:
      "In object-oriented programming, what is the term for creating a new instance of a class?",
    a: "Inheritance",
    b: "Instantiation",
    c: "Abstraction",
    d: "Encapsulation",
    correct: "b",
  },
  {
    question:
      "What does the acronym API stand for in the context of web development?",
    a: "Application Programming Interface",
    b: "Advanced Program Interaction",
    c: "Automated Processing Interface",
    d: "Application Process Integration",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");

const c_text = document.getElementById("c_text");

const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;

  c_text.innerText = currentQuizData.c;

  d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
    <h2>You Answer Correctly at ${score}
    /${quizData.length} questions</h2>
    <button onClick="location.reload()">Reload</button>`;
    }
  }
});
