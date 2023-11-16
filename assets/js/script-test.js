let myTimer = document.getElementById("countdown");
let countdown = 30; //se si cambia questo valore andare nel css e cambiare la durata dell'animazione dell'svg

myTimer.innerHTML = countdown;

setInterval(function () {
  countdown = --countdown <= 0 ? 30 : countdown;
  myTimer.innerHTML = countdown;
}, 1000);

// function startCountdown() {
//   let seconds = 30;
//   const myTimer = document.querySelector("#countwodn");
//   console.log(myTimer, "mytimer");
//   let countdownInterval = setInterval(function () {
//     myTimer.innerHTML = seconds;
//     seconds--;
//     if (seconds < 0) {
//       clearInterval(countdownInterval);
//       startCountdown();
//     }
//   }, 1000);
// }
// startCountdown();
