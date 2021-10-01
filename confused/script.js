var sliderthings = document.querySelectorAll('.things');

var zero = document.querySelector('.zero');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');

console.log(sliderthings);

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