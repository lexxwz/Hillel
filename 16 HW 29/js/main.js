const square = document.querySelector('#square');
// const body = document.querySelector('body');
const bems = document.querySelector('#bems');
const allDivs = document.querySelectorAll('div');

const size = 200;
const step = 10;

// за умовою неможна покидати body, але щоб можна було рушити блок по всьому екрану 
// я взяв за "кордони" розміри сторінки
// пробував збільшувати body та рухатить "всередині"

// body.style.height = document.documentElement.clientHeight + 'px';
// body.style.width = document.documentElement.clientWidth + 'px';
// body.style.margin = '0px';

allDivs.forEach(div => {
    div.style.position = 'absolute';
    // div.style.position = 'relative';
    div.style.height = size + 'px';
    div.style.width = size + 'px';
    // div.style.top = body.clientHeight / 2 - size / 2 + 'px';
    // div.style.left = body.clientWidth / 2 - size / 2 + 'px';
    div.style.top = document.documentElement.clientHeight / 2 - size / 2 + 'px';
    div.style.left = document.documentElement.clientWidth / 2 - size / 2 + 'px';
})

square.style.background = 'chocolate';

bems.style.lineHeight = '200px';
bems.style.visibility = 'hidden';

const squareComputedStyle = window.getComputedStyle(square);

function move(action){
    switch(action){
        case 'up':
            if (parseInt(squareComputedStyle.top) <= step) {
                square.style.top = 2 * step + 'px';
                veiwBems();
            } else {square.style.top = parseInt(square.style.top) - step + 'px'};
            break;
        case 'down':
            if (parseInt(squareComputedStyle.bottom) <= step) {
                square.style.top = document.documentElement.clientHeight - 200 - 2 * step + 'px';
                veiwBems();
            } else {square.style.top = parseInt(square.style.top) + step + 'px'};
            break;
        case 'left':
            if (parseInt(squareComputedStyle.left) <= step) {
                square.style.left = 2 * step + 'px';
                veiwBems();
            } else {square.style.left = parseInt(square.style.left) - step + 'px'};
            break;
        case 'right':
            if (parseInt(squareComputedStyle.right) <= step) {
                square.style.left = document.documentElement.clientWidth - 200 - 2 * step + 'px';
                veiwBems();
            } else {square.style.left = parseInt(square.style.left) + step + 'px'};
            break;
        case 'jump':
            square.style.transition = 'top 1s';
            square.style.top = parseInt(square.style.top) - 10 + 'px';
            setTimeout(function() {square.style.top = parseInt(square.style.top) + 10 + 'px'}, 1000);
            setTimeout(function() {square.style.transition = 'none'}, 2000);
            break;
        case 'sit':
            square.style.transition = 'height 1s, top 1s, width 1s, left 1s';
            const deltaHeight = parseInt(square.style.height) * 0.4;
            const deltaWidth = parseInt(square.style.width) * 0.25 / 2;
            square.style.height = parseInt(square.style.height) * 0.6 + 'px';
            square.style.top = parseInt(square.style.top) + deltaHeight + 'px';
            square.style.width = parseInt(square.style.width) * 1.25 + 'px';
            square.style.left = parseInt(square.style.left) - deltaWidth + 'px';
            setTimeout(function() {
                square.style.height = parseInt(square.style.height) * 5 / 3 + 'px';
                square.style.top = parseInt(square.style.top) - deltaHeight + 'px';
                square.style.width = parseInt(square.style.width) * 0.8 + 'px';
                square.style.left = parseInt(square.style.left) + deltaWidth + 'px';
            }, 1000);
            setTimeout(function() {square.style.transition = 'none'}, 2000);
            break;
    };
};

function action(e){
    if (e.keyCode == 37) {move('left')}
    else if (e.keyCode == 38) {move('up')}
    else if (e.keyCode == 39) {move('right')}
    else if (e.keyCode == 40) {move('down')}
    else if (e.keyCode == 32) {move('jump')}
    else if (e.keyCode == 17) {move('sit')}
    // else {e.preventDefault()};
};

function veiwBems() {
    bems.style.visibility = 'visible';
    setTimeout(function() {bems.style.visibility = 'hidden'}, 2000);
};

document.addEventListener('keydown', action);