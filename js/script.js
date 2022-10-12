let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1 
});
