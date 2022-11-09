let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let portfilio__btn = document.querySelector('.portfilio__btn');
let portfolio__box = document.querySelector('.portfolio__box');
let portfilio__btn2 = document.querySelector('.portfilio__btn-2');
let px = 0
let number = 0

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
})

portfilio__btn.addEventListener('click', function(){
  if(number <= 2){ 
      number = number + 1
      px = px -400
      portfolio__box.style.cssText = `transform: translate(${String(px)}px,0);`;
  }
  else{
    number = 0
    px = 0 
    portfolio__box.style.cssText = `transform: translate(${String(px)}px,0);`;
  };
} )
portfilio__btn2.addEventListener('click', function(){
  if(number >0 ){
    number = number - 1
    px = px +400
    portfolio__box.style.cssText = `transform: translate(${String(px)}px,0);`;
  }
  else{
    number = 0
    px = 0 
    portfolio__box.style.cssText = `transform: translate(${String(px)}px,0);`;
  }
})
// portfilio__btn2.addEventListener('click', function () {
// })
