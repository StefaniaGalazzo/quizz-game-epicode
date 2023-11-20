// prendo i miei elementi dall'html
let endGame = document.getElementById("end-game");
let correctResults = document.getElementById("correct-result");
let wrongResults = document.getElementById("wrong-result");
let pie = document.querySelector(".pie");
let endSpecificsTXT = document.getElementById("end-specifics");
let clearStorageBtn = document.getElementById("reset-storage");
let wrongQuestionNum = document.getElementById("wrong-questions-num");
let correctQuestionNum = document.getElementById("correct-questions-num");

// recupero i dati dal localstorage
let correct = localStorage.getItem("correct");
let wrong = localStorage.getItem("wrong");

// ricompongo il risultato totale e calcolo la percentuale
let total = Number(correct) + Number(wrong);
const correctPercentage = (correct / total) * 100;
const incorrectPercentage = (wrong / total) * 100;

//****verifico se i miei dati arrivano correttamente!!
console.log(correct, "correct");
console.log(wrong, "correct");

init();
function init() {
  //fallback
  if (isNaN(correct) || isNaN(wrong) || !correct || !wrong) {
    endGame.innerHTML =
      "<div class='zIndex1'>Sembra che qualcosa sia andato storto! Contatta l'assistenza.</div>";
    pie.classList.remove("pie");
  } else {
    // pie.style.display = "block";
    correctResults.innerHTML = `${parseFloat(correctPercentage)}%`;
    wrongResults.innerHTML = `${parseFloat(incorrectPercentage)}%`;
    // con l'operatore ternario setto i valori da popolare SE l'utente ha vinto o meno
    endGame.innerHTML =
      correctPercentage >= incorrectPercentage
        ? `<div class='zIndex1'>
    <p class="bold">
        Congratulations <br />
        <span class="light-blue mb-10px">You passed the exam!</span>
    </p>
    <p id="end-specifics" class="small">
         We'll send you the certificate in few minutes. Check your email (including promotions / spam folder)
    </p>
    </div>`
        : `<div class='zIndex1'>
     <p class="bold">
         Oh no! <br />
         <span class="fucsia mb-10px">You didn't passed the exam!</span>
     </p>
     <p id="end-specifics" class="small">
        We are sorry but you will not have access to our course!
     </p>
   </div>`;
    correctQuestionNum.innerHTML = `${correct}/${total} questions`;
    wrongQuestionNum.innerHTML = `${wrong}/${total} questions`;
    background = `background: conic-gradient(#c2128d ${incorrectPercentage}%, #00ffff 0deg)`;
    pie.setAttribute("style", background);

    //****verifico se i miei dati arrivano correttamente!!******
    console.log(correctPercentage, "correctPercentage");
    console.log(incorrectPercentage, "incorrectPercentage");
    console.log(pie.style);

    // svuoto il local storage quando l'utente esce dalla pagina
    clearStorageBtn.onclick = () => {
      localStorage.clear();
    };
  }
}
