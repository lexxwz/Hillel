const refs = {
    category: document.querySelector('#category'),
    list: document.querySelector('#list'),
    item: document.querySelector('#item'),
};

const items = [
    {
        id: 1,
        category: 'Клавіатура',
        title: 'Клавіатура дротова Logitech K120 USB UKR OEM',
        price: 369,
    },
    {
        id: 2,
        category: 'Клавіатура',
        title: 'Клавіатура бездротова RZTK Keypad Wireless 2.4G',
        price: 699,
    },
    {
        id: 3,
        category: 'Клавіатура',
        title: 'Бездротова клавіатура Logitech Wave Keys Bluetooth/Wireless Black ',
        price: 2499,
    },
    {
        id: 4,
        category: 'Клавіатура',
        title: 'Бездротова клавіатура Logitech Pebble Keys 2 K380s Tonal White',
        price: 1999,
    },
    {
        id: 5,
        category: 'Миша',
        title: 'Миша Logitech M185 Wireless Grey',
        price: 799,
    },
    {
        id: 6,
        category: 'Миша',
        title: 'Миша Logitech M100 USB Black',
        price: 329,
    },
    {
        id: 7,
        category: 'Миша',
        title: 'Миша Rapoo 1620 Wireless Black',
        price: 299,
    },
    {
        id: 8,
        category: 'Миша',
        title: ' Миша A4Tech V8MA Bloody USB Black',
        price: 639,
    },
    {
        id: 9,
        category: 'Миша',
        title: 'Миша Rapoo M500 Silent Bluetooth Black',
        price: 899,
    },
    {
        id: 10,
        category: 'Монітор',
        title: ' Монітор 23.8" Acer Nitro VG240YM3bmiipx',
        price: 5699,
    },
    {
        id: 11,
        category: 'Монітор',
        title: 'Монітор 23.8" Asus TUF Gaming VG246H1A',
        price: 4999,
    },
    {
        id: 12,
        category: 'Монітор',
        title: 'Монітор 28" Samsung Odyssey G7 LS28BG702',
        price: 18999,
    },
    {
        id: 13,
        category: 'Монітор',
        title: 'Монітор 23.8" Asus VG249Q',
        price: 7099,
    },
];

const categories = [];

function getCategories() {
    items.forEach(item => {
        if(!categories.includes(item.category)) {categories.push(item.category)};
    });
};

function getList(category) {
    items.forEach(item => {
        if(item.category === category) {addChild('div', item, refs.list)};
    });
};

function viewInfo(item) {
    const currentItem = items.find(element => element.id == item.dataset.id);
    let text = `Категорія: ${currentItem.category}<br>Назва: ${currentItem.title}<br>Вартість: ${currentItem.price} грн<br>`;
    text += '<button>Купити</button>'
    addChild('div', text, refs.item);
    const button = document.querySelector('button');
    button.addEventListener('click', mouseclickButtonHandler);
};

function mouseclickCategoryHandler(event) {
    if (!event.target.classList.contains('created')) {return};
    removeChild('div', refs.list);
    removeChild('div', refs.item);
    getList(event.target.textContent);
};

function mouseclickListHandler(event) {
    if (!event.target.classList.contains('created')) {return};
    removeChild('div', refs.item);
    viewInfo(event.target);
};

function mouseclickButtonHandler(event) {
    if (event.target.tagName !== 'BUTTON') {return};
    removeChild('div', refs.list);
    removeChild('div', refs.item);
    alert('Обраний товар куплений. Дякуємо!');
};

function addChild(type, content, parent) {
    const newElement = document.createElement(type);
    newElement.classList.add('created');
    if (typeof(content) === 'string') {
        newElement.innerHTML = content;
    } else {
        newElement.innerHTML = content.title;
        newElement.dataset.id = content.id;
    };
    parent.appendChild(newElement);
};

function removeChild(type, parent) {
    const elementsForRemove = parent.querySelectorAll(type);
    elementsForRemove.forEach(element => element.remove())
};

refs.category.addEventListener('click', mouseclickCategoryHandler);
refs.list.addEventListener('click', mouseclickListHandler);
getCategories();
categories.forEach(category => addChild('div', category, refs.category));