const mainDiv = document.querySelector('div');
const textBlock = document.querySelector('.text');
const ghostBlock = document.createElement('div');
ghostBlock.classList.add('ghost');
ghostBlock.textContent = 'I am ghost div!';
ghostBlock.style.width = '500px';
ghostBlock.style.textAlign = 'center';
ghostBlock.style.fontSize = '1.3em';
ghostBlock.style.width = '500px';
mainDiv.style.display = 'flex';
mainDiv.style.padding = '10px';

textBlock.onmouseover = function() {
    mainDiv.appendChild(ghostBlock);
};
textBlock.onmouseout = function() {
    const ghostBlock2 = document.querySelector('.ghost');
    ghostBlock2.remove();
;}