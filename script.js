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

let currentQuestion = 0;
let number = 1;

function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  showCurrentQuestion();
}

function showCurrentQuestion() {
  if (currentQuestion >= questions.length) { //ist aktuelle Frage größer oder gleich die Array länge dann Endscreen
    console.log("End Screen");
  } else {
    let question = questions[currentQuestion];
    let numberfield = document.getElementById("atCurrentQuestion");
    numberfield.innerHTML = number++;
    document.getElementById(
      "questionText"
    ).innerHTML = `${question["question"]}`;
    document.getElementById("answer_1").innerHTML = `${question["answer_1"]}`;
    document.getElementById("answer_2").innerHTML = `${question["answer_2"]}`;
    document.getElementById("answer_3").innerHTML = `${question["answer_3"]}`;
    document.getElementById("answer_4").innerHTML = `${question["answer_4"]}`;
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["correct_answer"]}`;

  if (selectedQuestionNumber == question["correct_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
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
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}
