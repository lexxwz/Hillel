const refs = {
    scores: document.querySelector('tr.score'),
    scoresArray: document.querySelectorAll('td.score'),
    resultsArray: document.querySelectorAll('td.result'),
};

function mouseclickHandler(event) {
    if (event.target.tagName !== 'IMG') {return}
    increaseScores([...refs.scoresArray].indexOf(event.target.parentNode));
};

function increaseScores(indexOfElement) {
    const currentResult = [...refs.resultsArray][indexOfElement];
    const currentResultValue = parseInt(currentResult.textContent);
    currentResult.textContent = currentResultValue + 1;
};

refs.scores.addEventListener('click', mouseclickHandler);