// decidere se onclick on btn cambia pagina ||
// allo scadere del timer se non hai risposto la risposto è una sbagliata
// allo scadere del timer si passa alla domanda successiva
// eventulmente dare possibilità di cambiare risp fino allo scadere del timer e affidare solo al timer il cambio della domanda

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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
//creo le variabili presumibilmente globali
let questionTitle = document.getElementById("question");
let questionINDX = 0;
let singleQuestion = questions[questionINDX];
// FUNZIONI
countDown();
concatAnswers();
printQuestion();

//

//creo l'array delle risp totali per ogni obj, indipendente dalle funzioni (per ora)
function concatAnswers() {
  questions.forEach((quest) => {
    quest.totAnswer = quest.incorrect_answers.concat(quest.correct_answer);
  });
}

function printQuestion() {
  questionTitle.innerText = questions[questionINDX].question;
  for (let i = 0; i < questions[questionINDX].totAnswer.length; i++) {
    const answerContainer = document.querySelector("#answers");
    const btnAnswer = document.createElement("button");
    btnAnswer.classList.add("btn-answer");
    let singleAnswer = [];
    sliceAnswers(singleAnswer);
    btnAnswer.innerHTML = singleAnswer[i][0];
    answerContainer.appendChild(btnAnswer);
    //*************da qui
    btnAnswer.addEventListener("click", () => {
      let resultData = {
        correctArr: [],
        wrongArr: [],
      };
      if (btnAnswer.innerText === questions[questionINDX].correct_answer) {
        resultData.correctArr.push(questions[questionINDX].correct_answer);
        console.log("correctArr", resultData.correctArr);
      } else {
        resultData.wrongArr.push(btnAnswer.innerText);
        console.log(resultData.wrongArr, "WRONG");
      }
    });
  }
}

function sliceAnswers(array) {
  for (let i = 0; i < questions[questionINDX].totAnswer.length; i++) {
    array.push(questions[questionINDX].totAnswer.slice(i, i + 1));
  }
}

function countDown() {
  let myTimer = document.getElementById("countdown");
  let countdown = 30; //se si cambia questo valore andare nel css e cambiare la durata dell'animazione dell'svg
  myTimer.innerHTML = countdown;
  if (countdown === 0) {
    console.log("ciao");
  }
  setInterval(function () {
    countdown = --countdown <= 0 ? 30 : countdown;
    myTimer.innerHTML = countdown;
  }, 1000);
}
