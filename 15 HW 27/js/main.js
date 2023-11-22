const body = document.querySelector('body');
const bodyChildren = [...body.children];
const imageDiv = bodyChildren.find(element => element.localName === 'div');

const imageImg = document.createElement('img');
imageImg.src = `./images/${random(1,9)}.jpg`;
imageImg.style.width = '100%';
imageDiv.appendChild(imageImg);

function random (minValue, maxValue) {
    return Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
};