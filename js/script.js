let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let portfilio__btn = document.querySelector('.portfilio__btn');
let portfolio__box = document.querySelector('.portfolio__box');
let px = -400

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
})

portfilio__btn.addEventListener('click', function () {
  
  portfolio__box.style.cssText = `transform: translate(${String(px)}px,0);`;
  px = px -400
})
