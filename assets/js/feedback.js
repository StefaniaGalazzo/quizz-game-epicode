/* Stelle */
const stars = document.querySelectorAll('.starIcon');
                  
document.addEventListener('click', function(el) {  
    console.log('text');
  const classStar = el.target.classList;
  if(!classStar.contains('ativo')){
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });

    classStar.add('ativo');
    console.log(el.target.getAttribute('valutazione'));
  }
});
