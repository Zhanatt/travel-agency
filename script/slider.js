let recallItems = document.querySelector('.recall-items');
let buttonNext = document.querySelector('.recall-slider__button-next');
let buttonPrev = document.querySelector('.recall-slider__button-prev');


buttonNext.addEventListener('click', ()=>{
  recallItems.style.left = "-1520px";
  buttonNext.removeAttribute('stroke')
  buttonNext.setAttribute('stroke', '#D4D4D4')
});

buttonPrev.addEventListener('click', ()=>{
  recallItems.style.left = "0px"; 
  buttonPrev.removeAttribute('stroke')
  buttonPrev.setAttribute('stroke', '#0499DD')
})


