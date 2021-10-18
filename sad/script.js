var sliderthings = document.querySelectorAll('.things');

var zero = document.querySelector('.zero');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');

var slider = document.getElementById("myRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    if(this.value == 0){
        removeActiveClasses();
        zero.classList.add('active');
    } else if (this.value == 1){
        removeActiveClasses();
        one.classList.add('active');
    } else if (this.value == 2){
        removeActiveClasses();
        two.classList.add('active');
    } else if (this.value == 3){
        removeActiveClasses();
        three.classList.add('active');
    } else if (this.value == 4) {
        removeActiveClasses();
        four.classList.add('active');
    }
}

const removeActiveClasses = () => {
    sliderthings.forEach(thing => {
        thing.classList.remove('active');
    });
}

// const left = document.getElementById('left');

// const right = document.getElementById('right');

// const sad = document.getElementById('sad');

// const area = document.getElementById('area');

// var arrowclick = 0;

// const turnright = () => {
//     arrowclick++;
//     if (arrowclick === 1){
//         left.classList.remove('gone');
//         sad.classList.remove('active-slide');
//         area.classList.remove('inactive');
//         area.classList.add('active-slide');
//         console.log('cum');
//     }
// };

// const turnleft = () => {
//     arrowclick--;
//     if(arrowclick === 0){
//         left.classList.add('gone');
//         area.classList.remove('active-slide');
//         sad.classList.add('active-slide');
//     }
// }

// right.addEventListener('click', turnright);

// left.addEventListener('click', turnleft);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}