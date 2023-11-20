// variabili stelline
const stars = document.querySelectorAll(".starIcon");
let result = { feedBack: 0, comment: "" };
let selectedValutazione = null;
//variabili input
let input = document.querySelector("#input-comment");
let popup = document.querySelector("#popup");

document.addEventListener("click", function (el) {
  const clickedStar = el.target;
  if (clickedStar.classList.contains("starIcon")) {
    stars.forEach(function (star) {
      star.classList.remove("attivo");
    });
    clickedStar.classList.add("attivo");
    selectedValutazione = clickedStar.getAttribute("valutazione");
    result.feedBack = parseInt(selectedValutazione);
    console.log(`la tua valutazione: ${result}`);
    return result;
  }
});

if (input) {
  input.onblur = (e) => {
    e.preventDefault();
    let myComment = input.value;
    result.comment = myComment;
    console.log("il tuo feedback:", result);
    input.value = "";
    return result;
  };
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      popup.innerHTML = `<h3>Your feedback has been sand!</h3> <p>${e.target.value}</p>`;
      popup.classList.add("show");
      console.log(e.target.value, "input");
      let myComment = input.value;
      result.comment = myComment;
      console.log("il tuo feedback:", result);
      input.value = "";
      setTimeout(() => popup.classList.remove("show"), 2500);
      return result;
    }
  });
}
