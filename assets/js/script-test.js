// to fix:   ***************************
// se l'utente fa scadere il tempo a ogni domanda il risultato è NaN

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//creo le variabili globali
let questionTitle = document.getElementById("question");
let questionINDX = 0;
let singleQuestion = questions[questionINDX];
// let myTimer = document.getElementById("countdown");
let correct = 0;
let wrong;
let countdown = 30;
let intervalId;

// FUNZIONI
concatAnswers();
printQuestion();
//

//creo l'array delle risp totali per ogni obj in questions
function concatAnswers() {
  questions.forEach((quest) => {
    quest.totAnswer = quest.incorrect_answers.concat(quest.correct_answer);
  });
}

// genero le risposte in ordine casuale
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function sliceAnswers(array) {
  for (let i = 0; i < questions[questionINDX].totAnswer.length; i++) {
    array.push(questions[questionINDX].totAnswer.slice(i, i + 1));
  }
}

//stampo a schermo i valori dell'oggetto
function printQuestion() {
  countDown();
  questionTitle.innerText = questions[questionINDX].question;
  shuffleArray(questions[questionINDX].totAnswer);
  const answerContainer = document.querySelector("#answers");
  answerContainer.innerHTML = ""; // ----------printQuestion stampa le 4 risposte e si sommano sempre a quelle successive, cosi invece svuota i bottoni delle domande precedenti
  //creazione bottoni
  questions[questionINDX].totAnswer.forEach((answer) => {
    const btnAnswer = document.createElement("button");
    btnAnswer.classList.add("btn-answer");
    //accesso diretto alle risposte possibili
    btnAnswer.innerHTML = answer;
    btnAnswer.onclick = () => clicked(btnAnswer); //funzione che collega il progredire delle domande
    answerContainer.appendChild(btnAnswer);
  });
}

function clicked(btn) {
  //** quando clicco sulla risposta selezionata
  if (btn.innerText === questions[questionINDX].correct_answer) {
    correct += 1;
    wrong = questions.length - correct;
  } else {
    console.log("wrong");
  }
  localStorage.setItem("correct", correct);
  localStorage.setItem("wrong", wrong);
  ProgressiveQuestion();
}

// progressione delle questions
function ProgressiveQuestion() {
  let stepsEl = document.getElementById("steps");
  let steps = parseInt(stepsEl.innerHTML);
  if (steps !== questions.length) {
    stepsEl.innerHTML = ++steps;
    questionINDX++;
    printQuestion();
  } else {
    location.href = "result.html"; //cambio pagina
  }
}

function countDown() {
  let countdown = 30;
  let circle = document.querySelector("circle");
  let myTimer = document.getElementById("countdown");
  myTimer.innerHTML = countdown;
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(function timer() {
    countdown = --countdown <= 0 ? 30 : countdown;
    offset = countdown * 10.15;
    circle.style.strokeDashoffset = `${offset}`;
    circle.style.transition = "1s linear all";
    console.log(circle.style.strokeDashoffset);
    myTimer.innerHTML = countdown;
    if (countdown == 0) {
      ProgressiveQuestion();
    }
    // if (countdown == 0 || countdown > 28) {
    //   circle.style.strokeDashoffset = `310`;
    // }
  }, 1000);
}
