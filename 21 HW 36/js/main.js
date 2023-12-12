const refs = {
    select: document.querySelector('#jokesCategories'),
    jokesList: document.querySelector('#jokesList'),
}

const getFile = file => fetch(file).then(data => {
    return data.ok ? data.json() : Promise.reject(data.statusText)
})

const addElement = (type, innerText, parent) => {
    const newElement = document.createElement(type);
    newElement.innerHTML = innerText;
    parent.appendChild(newElement);
    return newElement;
}

const handlerClickButton = (event) => {
    if (event.target.tagName === 'BUTTON') {
        [...refs.select.options].find(element => element.value === event.target.parentElement.dataset.category).disabled = false;
        event.target.parentElement
        event.target.parentElement.remove();
    }
}

refs.jokesList.addEventListener('click', handlerClickButton);

const getCategories = getFile('https://api.chucknorris.io/jokes/categories')
    .then(data => data.forEach(value => {
        const option = addElement('option', value, refs.select);
        option.value = value;
    }))
    .catch(err => console.log(err))
    
refs.select.addEventListener('change', () => {
    const getJoke = getFile(`https://api.chucknorris.io/jokes/random?category=${refs.select.value}`)
        .then(data => {
            const li = addElement('li', '', refs.jokesList);
            li.dataset.category = refs.select.value;
            addElement('p', `Category: <b>${refs.select.value.toUpperCase()}</b>`, li);
            addElement('p', data.value, li);
            const button = addElement('button', 'Remove joke', li);
            [...refs.select.options].find(element => element.value === refs.select.value).disabled = true;
        })
        .catch(err => console.log(err))
})