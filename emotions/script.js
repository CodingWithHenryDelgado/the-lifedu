const angry = document.getElementById('angry-svg')
const stressed = document.getElementById('stressed-svg')
const lif = document.getElementById('lif-svg')
const confused = document.getElementById('confused-svg')
const sad = document.getElementById('sad-svg')

const angrysite = () => {
    document.location.href = "../angry/index.html";
}

const stressedsite = () => {
    document.location.href = "../stressed/stressed.html";
}

const lifsite = () => {
    document.location.href = "../happy/happy.html";
}

const confusedsite = () => {
    document.location.href = "../confused/index.html";
}

const sadsite = () => {
    document.location.href = "#";
}

angry.addEventListener('click', angrysite);
stressed.addEventListener('click', stressedsite);
lif.addEventListener('click', lifsite);
confused.addEventListener('click', confusedsite);
sad.addEventListener('click', sadsite);


