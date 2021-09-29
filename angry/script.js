var cube = document.getElementById('family-cube');

var cubeclick = 0;

var spinthecube = () => {
    cubeclick++;
    if(cubeclick === 1){
        cube.src = '../img/family-cube-2.svg'; 
    }else if (cubeclick === 2){
        cube.src = '../img/family-cube-3.svg';
    }else {
        cube.src = '../img/family-cube.svg';
        cubeclick = 0;
    }
}

cube.addEventListener('click', spinthecube)