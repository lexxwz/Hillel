const refs = {
    list: document.querySelector('.list'),
}
const numArrey1 = [1, 2, 3];
const numArrey2 = [1, 2, [1, 2, 3]];
const numArrey3 = [1, [1, [1, 2], 2], 2, [1, 2, 3], 3, 4];

function generateList(array, parent) {
    const newUl = createAndAddElement('', 'ul', parent);
    array.forEach((element, index) => {
        if(Array.isArray(element)) {
            generateList(element, newUl);
        } else {
            createAndAddElement(element, 'li', newUl);
        };
    });
};

function createAndAddElement(element, typeElement, parent) {
    const newElement = document.createElement(typeElement);
    newElement.textContent = element;
    parent.appendChild(newElement);
    return newElement;
};

generateList(numArrey1, refs.list);
generateList(numArrey2, refs.list);
generateList(numArrey3, refs.list);