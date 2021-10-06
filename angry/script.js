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

var maze = document.getElementById('m');

var wheelclick = 0;

var turnthemaze = () => {
    wheelclick++;

    if(wheelclick === 1){
        maze.classList.remove('maze-1');
        maze.classList.add('maze-2');
    } else if (wheelclick === 2){
        maze.classList.remove('maze-2');
        maze.classList.add('maze-3');
    } else if (wheelclick === 3){
        maze.classList.remove('maze-3');
        maze.classList.add('maze-4');
    } else if (wheelclick === 4){
        maze.classList.remove('maze-4');
        maze.classList.add('maze-5');
    } else {
        returnmaze();
    }
}

const returnmaze = () => {
    wheelclick = 0;
    maze.classList.remove('maze-5');
    maze.classList.add('maze-1');
}

maze.addEventListener('click', turnthemaze);
