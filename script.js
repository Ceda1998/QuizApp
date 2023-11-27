let questions = [
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    answer_1: "Straßburg",
    answer_2: "Berlin",
    answer_3: "Paris",
    answer_4: "Lyon",
    correct_answer: 3,
  },
  {
    question: "In welcher Stadt steht das Brandenburger Tor?",
    answer_1: "Melbourne",
    answer_2: "Berlin",
    answer_3: "Hannover",
    answer_4: "Bonn",
    correct_answer: 2,
  },
  {
    question: "Welches Land grenzt nicht an Deutschland?",
    answer_1: "Niederlande",
    answer_2: "Finnland",
    answer_3: "Österreich",
    answer_4: "Belgien",
    correct_answer: 2,
  },
  {
    question: "Was ist das größte Land der Welt?",
    answer_1: "China",
    answer_2: "Australien",
    answer_3: "Kanada",
    answer_4: "Russland",
    correct_answer: 4,
  },
  {
    question: "Welches Land hat keine Demokratie?",
    answer_1: "England",
    answer_2: "Deutschland",
    answer_3: "Süd-Korea",
    answer_4: "China",
    correct_answer: 4,
  },
];

let rightQuestions = 0;
let currentQuestion = 0;
let QuestionNumber = 1;
let correctAudio = new Audio("./sounds/correct.wav");
let wrongAudio = new Audio("./sounds/wrong.wav");

function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  showCurrentQuestion();
}

function showCurrentQuestion() {
  if (currentQuestion >= questions.length) {
    showEndScreen();
  } else {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100); //percent ist das gleiche wie percent * 100
    document.getElementById("progressBar").innerHTML = `${percent.toFixed(0)}%`;
    document.getElementById("progressBar").style.width = `${percent}%`;
    let question = questions[currentQuestion];
    let numberfield = document.getElementById("atCurrentQuestion");
    numberfield.innerHTML = QuestionNumber++;
    returnQuestions(question);
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["correct_answer"]}`;

  if (selectedQuestionNumber == question["correct_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
    correctAudio.play();
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
    wrongAudio.play();
  }
  document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
  currentQuestion++; //von 0 auf 1 erhöht
  showCurrentQuestion(); //zeigt die neue Frage an
  document.getElementById("nextButton").disabled = true;
  resetAnswerButtons();
}

function resetAnswerButtons() {
  for (let i = 1; i <= 4; i++) {
    const answerButton = document.getElementById("answer_" + i);
    const parentNode = answerButton.parentNode;

    parentNode.classList.remove("bg-danger");
    parentNode.classList.remove("bg-success");
  }
}

function resetGame() {
  rightQuestions = 0; //Variablen resetten
  currentQuestion = 0;
  QuestionNumber = 1;
  init();
  document.getElementById("imgCard").src = "./img/quizappfoto.jpg";
  document.getElementById("endScreen").style = "display:none";
  document.getElementById("questionBody").style = "";
}

function returnQuestions(question) {
  document.getElementById("questionText").innerHTML = `${question["question"]}`;
  document.getElementById("answer_1").innerHTML = `${question["answer_1"]}`;
  document.getElementById("answer_2").innerHTML = `${question["answer_2"]}`;
  document.getElementById("answer_3").innerHTML = `${question["answer_3"]}`;
  document.getElementById("answer_4").innerHTML = `${question["answer_4"]}`;
}

function showEndScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display:none";
  document.getElementById("finshedAllQuestions").innerHTML = questions.length;
  document.getElementById("amountRightQuestions").innerHTML = rightQuestions;
  document.getElementById("imgCard").src = "./img/pokal.jpg";
  let percent = 100;
  document.getElementById("progressBar").innerHTML = `${percent.toFixed(0)}%`;
  document.getElementById("progressBar").style.width = `${percent}%`;
}
