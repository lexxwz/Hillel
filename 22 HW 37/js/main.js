const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input#idFromUser'),
    post: document.querySelector("div#post"),
    comments: document.querySelector("div#comments"),
};

const baseLink = 'https://jsonplaceholder.typicode.com';
let link;

async function getInformation(link) {
    try {
        const request = await fetch(link);
        const response = request.ok ? request.json() : Promise.reject(request.statusText);
        return response;
    }
    catch (error) {
        console.log(`Помилка запросу: ${error}`);
    }
};

function setPost(post) {
    refs.post.innerHTML = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    <button id="getComments" data-id="${post.id}">Показати коментарі</button>
    <br>`;
    const buttonGetComments = document.querySelector('button#getComments');
    buttonGetComments.addEventListener('click', handlerClickButtonGetComments);
    refs.comments.innerHTML = '';
};

function setComments(comments) {
    if (!comments) {refs.comments.innerHTML = 'Коментарів немає'} else {
        refs.comments.innerHTML += `
        <p>Коментар №${comments.id}</p>
        <h3>${comments.name}</h3>
        <p>Email:${comments.email}</p>
        <p>${comments.body}</p>
        <br>`;
        const buttonGetComments = document.querySelector('button#getComments');
        if (buttonGetComments) {buttonGetComments.remove()};
    };
};

function handlerFormSubmit(event) {
    event.preventDefault();
    if (Number(refs.input.value) >= 1 && Number(refs.input.value) <= 100) {
        link = `${baseLink}/posts/${refs.input.value}`;
        getInformation(link)
            .then(post => setPost(post))
            .catch(error => console.log(error));
    } else {
        console.log('Помилка вводу');
        refs.post.innerHTML = '';
        refs.comments.innerHTML = '';
    };
};

function handlerClickButtonGetComments(event) {
    link = `${baseLink}/posts/${event.target.dataset.id}/comments`;
    getInformation(link)
        .then(comments => {
            if(comments.length === 0) {setComments(0)} else {
                comments.forEach(comment => setComments(comment))
            };
        })
        .catch(error => console.log(error));
}

refs.form.addEventListener('submit', handlerFormSubmit);