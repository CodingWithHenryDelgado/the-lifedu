//CUBE ANIMATION

var cube = document.getElementById('happy-cube');

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

// WHEEL ANIMATION

var wheel = document.getElementById('spin');

var wheelquestions = document.getElementById('wheel-questions');

var wheelclick = 0;

var spinthewheel = () => {
    wheelclick++;
    if(wheelclick === 1){
        setTimeout(() => {wheelquestions.classList.remove('hide')}, 3000);
        wheel.classList.add('spin-wheel');
        setTimeout(() => {wheel.classList.remove('spin-wheel')}, 3000);
    } else if (wheelclick === 2){
        wheelquestions.classList.add('hide');
        wheelquestions.innerText = `Question 2`;
        wheel.classList.add('spin-wheel');
        setTimeout(() => {wheelquestions.classList.remove('hide')}, 3000);
        setTimeout(() => {wheel.classList.remove('spin-wheel')}, 3000);
    } else {
        wheelquestions.classList.add('hide');
        wheelquestions.innerText = `Question 1`;
        wheelclick = 0;
    }
}

wheel.addEventListener('click', spinthewheel);