var cube = document.getElementById('family-cube');

var options = document.querySelector('.maze-options');

var cubeclick = 0;

var spinthecube = () => {
    cubeclick++;
    if(cubeclick === 1){
        cube.src = '../img/family-cube-2.svg'; 
        options. innerHTML = "<p>Friends</p>";
    }else if (cubeclick === 2){
        cube.src = '../img/family-cube-3.svg';
        options. innerHTML = "<p>School</p>";
    }else {
        cube.src = '../img/family-cube.svg';
        options. innerHTML = "<p>Family</p>";
        cubeclick = 0;
    }
}

cube.addEventListener('click', spinthecube);

var maze = document.getElementById('m');

var wheelclick = 0;

var turnthemaze = () => {
    wheelclick++;

    if(wheelclick === 1){
        maze.src = '../img/maze-2.svg';
    } else if (wheelclick === 2){
        maze.src = '../img/maze-3.svg';
    } else if (wheelclick === 3){
        maze.src = '../img/maze-4.svg';
    } else if (wheelclick === 4){
        maze.src= "../img/maze-5.svg";
    } else {
        returnmaze();
    }
}

const returnmaze = () => {
    wheelclick = 0;
    maze.src = "../img/maze.svg";
}

maze.addEventListener('click', turnthemaze);
