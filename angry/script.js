var cube = document.getElementById('family-cube');

var options = document.querySelector('.maze-options');

var cubeclick = 0;

var spinthecube = () => {
    cubeclick++;
    if(cubeclick === 1){
        cube.classList.remove('cube-1');
        cube.classList.add('cube-2');
        options. innerHTML = "<p>Friends</p>";
    }else if (cubeclick === 2){
        cube.classList.remove('cube-2');
        cube.classList.add('cube-3');
        options. innerHTML = "<p>School</p>";
    }else {
        cube.classList.remove('cube-3');
        cube.classList.add('cube-1');
        options. innerHTML = "<p>Family</p>";
        cubeclick = 0;
    }
}

cube.addEventListener('click', spinthecube);

var maze = document.getElementById('maze');

var mazeball = document.getElementById('ball');

var wheelclick = 0;

var turnthemaze = () => {
    wheelclick++;

    if(wheelclick === 1){
        mazeball.classList.remove('maze-1');
        mazeball.classList.add('maze-2');
    } else if (wheelclick === 2){
        mazeball.classList.remove('maze-2');
        mazeball.classList.add('maze-3');
    } else if (wheelclick === 3){
        mazeball.classList.remove('maze-3');
        mazeball.classList.add('maze-4');
    } else if (wheelclick === 4){
        mazeball.classList.remove('maze-4');
        mazeball.classList.add('maze-5');
    } else {
        returnmaze();
    }
}

const returnmaze = () => {
    wheelclick = 0;
    mazeball.classList.remove('maze-5');
    mazeball.classList.add('maze-1');
}

maze.addEventListener('click', turnthemaze);

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