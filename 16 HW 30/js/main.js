const block = document.querySelector('.block');
const body = document.querySelector('body');

// як і у попереднбому завданні можно рухатись в рамках body (закоментовано)
// а можно по всій сторінці
// const maxTop = body.clientHeight - block.clientHeight;
// const  maxLeft = body.clientWidth - block.clientWidth;
const maxTop = document.documentElement.clientHeight - block.clientHeight;
const  maxLeft = document.documentElement.clientWidth - block.clientWidth;

function random (minValue, maxValue) {
    return Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
};

setInterval(function() {
    block.style.top = random(0, maxTop) + 'px';
    block.style.left = random(0, maxLeft) + 'px';
    block.style.background = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}, 500);