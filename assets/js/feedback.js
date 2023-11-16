/* Stelle */

const stars = document.querySelectorAll('.starIcon'); 
let selectedValutazione = null;   
 
document.addEventListener('click', function(el) { 
  const clickedStar = el.target;  
  
  if (clickedStar.classList.contains('starIcon')) {      
    stars.forEach(function(star) {
      star.classList.remove('attivo');  
    });
        
     clickedStar.classList.add('attivo');    
    selectedValutazione = clickedStar.getAttribute('valutazione');
    
    console.log(`Valutazione selecionada: ${selectedValutazione}`);
  }
});