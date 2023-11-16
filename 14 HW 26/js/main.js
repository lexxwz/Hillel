const setAllLastItemClassName = function() {
    const allLastLi = document.querySelectorAll('li:last-child');
    allLastLi.forEach (element => element.classList.add('last'));
};

const setFirstItemClassName = function(level) { // для будь якої кількості рівнів вкладеності
    let selector = 'ul.root > li';
    let iteration = 1;
    while (iteration < level) { 
        selector += ' > ul > li';
        iteration++;
    };
    selector += ':first-child';
    const allFirstLiOnLevel = document.querySelectorAll(selector);
    allFirstLiOnLevel.forEach (element => element.classList.add('first'));
}

setAllLastItemClassName();
setFirstItemClassName(2);