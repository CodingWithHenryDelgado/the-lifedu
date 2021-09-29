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

cube.addEventListener('click', spinthecube)