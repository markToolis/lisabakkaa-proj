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

$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
