// FIRST TEST
const main = document.getElementById('main');
main.remove();

//SECOND & THIRD TEST
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';

//FOURTH TEST
newHeader.innerHTML = 'Marquis is the champion';