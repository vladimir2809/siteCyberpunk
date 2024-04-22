let currentIndex = 0;
let direction = 0;
let index = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
 
function goToSlide(/*index*/) {
  if (direction==0)
  {
      index++;
  }
  if (direction==1)
  {
      index--;
  }
  if (index <0)
  {
      index = 1;//carouselItems.length - 1;
      direction = 0;
  } 
  else if (index >= carouselItems.length) 
  {
     index = carouselItems.length - 2;//0;
     direction = 1;
  }
  currentIndex = index;
  document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 33.3333}%)`;
}
 
function goToNextSlide() {
  goToSlide(/*currentIndex + 1*/);
}
 
function goToPrevSlide() {
  goToSlide(/*currentIndex - 1*/);
}
window.addEventListener('load', function () {
    setInterval(goToNextSlide, 3000); // автоматическая прокрутка каждые 3 секунды
});