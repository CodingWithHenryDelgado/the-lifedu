const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
//Sliders for emotions
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
    if(n > slides.length - 1) {
        next.classList.add("isDisabled");
    } else {
        next.classList.remove("isDisabled");
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    if(n === 1){
        prev.classList.add("isDisabled");
    } else {
        prev.classList.remove("isDisabled");
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

//The family cube on the angry page
var angryCube = document.getElementById('angry-family-cube');

//Text under the maze 
var angryOptions = document.querySelector('.maze-options');

var angryCubeClick = 0;

//Maze found on the angry page
var angryMaze = document.getElementById('maze');

//Ball inside of the maze
var mazeball = document.getElementById('ball');

var wheelclick = 0;

//END OF ANGRY ELEMENTS

//FUNCTIONS FOR VARIOUS ELEMENTS 

var spinTheAngryCube = () => {
    angryCubeClick++;
    if(angryCubeClick === 1){
        angryCube.classList.remove('angry-cube-1');
        angryCube.classList.add('angry-cube-2');
        angryOptions.innerHTML = "<p>Friends</p>";
    }else if (angryCubeClick === 2){
        angryCube.classList.remove('angry-cube-2');
        angryCube.classList.add('angry-cube-3');
        angryOptions.innerHTML = "<p>School</p>";
    }else {
        angryCube.classList.remove('angry-cube-3');
        angryCube.classList.add('angry-cube-1');
        angryOptions.innerHTML = "<p>Family</p>";
        angryCubeClick = 0;
    }
}

angryCube.addEventListener('click', spinTheAngryCube);

var turnTheMaze = () => {
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

maze.addEventListener('click', turnTheMaze);

