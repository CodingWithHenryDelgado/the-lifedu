
//CUBE ANIMATION

var cube = document.getElementById('happy-cube');

var cubeclick = 0;

var spinthecube = () => {
    cubeclick++;
    if(cubeclick === 1){
        cube.src = '../img/happy-cube-2.svg'; 
    }else if (cubeclick === 2){
        cube.src = '../img/happy-cube-3.svg';
    }else {
        cube.src = '../img/happy-cube.svg';
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