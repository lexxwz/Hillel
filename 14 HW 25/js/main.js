let index_value = 0;

function returnElement(findParametr) {
    return document.querySelector(findParametr);
};

function createElement(typeOfElement, id) {
    const element = document.createElement(typeOfElement);
    element.id = id;
    return element;
};

function addElement(elementForAdd) {
    this.appendChild(elementForAdd);
};

returnElement('div').appendChild(createElement('table', 'table'));

for (let i = 1; i <= 10; i++) {
    returnElement('table').appendChild(createElement('tr', `tr${i}`));
    for (let j = 1; j <= 10; j++) {
        index_value = (i - 1) * 10 + j;
        returnElement(`#tr${i}`).appendChild(createElement('td', `td${index_value}`));
        returnElement(`#td${index_value}`).textContent = index_value;
        returnElement(`#td${index_value}`).style.padding = '20px';
    };
};