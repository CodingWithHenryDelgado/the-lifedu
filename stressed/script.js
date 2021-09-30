var phonequestions = document.getElementById('question-1');

var openphone = () => {
    phonequestions.classList.remove('hide');
}

phonequestions.addEventListener('click', openphone);