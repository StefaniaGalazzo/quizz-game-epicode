// salvare il valore dell'input text in un array da mostrare in console

/* Stelle */
const stars = document.querySelectorAll(".starIcon");
let selectedValutazione = null;
//input value
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
    console.log(`Valutazione selecionada: ${selectedValutazione}`);
  }
});

if (input) {
  // input.onblur = (e) => {
  //   popup.innerHTML = `<h3>Your feedback has been sand!</h3> <p>${e.target.value}</p>`;
  //   popup.classList.add("show");
  //   console.log(e.target.value, "input");
  //   input.value = "";
  //   setTimeout(() => popup.classList.remove("show"), 2500);
  // };
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      popup.innerHTML = `<h3>Your feedback has been sand!</h3> <p>${e.target.value}</p>`;
      popup.classList.add("show");
      console.log(e.target.value, "input");
      input.value = "";
      setTimeout(() => popup.classList.remove("show"), 2500);
    }
  });
}
