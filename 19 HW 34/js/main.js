const positionsArray = ['investor', 'manager', 'assistant', 'worker'];
let index = 0;
const refs = {
    table: document.querySelector('table'),
};

function getInfo(link) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `./files/${link}.json`);
    xhr.send();
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4) {
            const isStatus = xhr.status >= 200 && xhr.status < 400
            const result = isStatus ? JSON.parse(xhr.response) : [];
            addDataToTable(result);
            if (++index < positionsArray.length) {getInfo(positionsArray[index])};
        };
    });
};

function addDataToTable(row) {
    const tr = document.createElement('tr');
    for (const key in row) {
        addTd(tr, row[key]);
    };
    refs.table.appendChild(tr);
}

function addTd(parent, data) {
    const td = document.createElement('td');
    td.innerHTML = data;
    parent.appendChild(td);
};

getInfo(positionsArray[index]);