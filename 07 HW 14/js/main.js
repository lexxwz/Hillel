const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let inputKeyLenght, keyLength

const generateKey = (keyLength, agreeSymbols) => {
    let newKey = '';
    const maxIndexForGeneration = agreeSymbols.length;
    for (let i = 0; i < keyLength; i++) {
        const newSymbol = characters[Math.floor(Math.random() * (maxIndexForGeneration + 1))];
        newKey += newSymbol;
    };
    return newKey;
};

do {
    inputKeyLenght = prompt('Введіть довжину ключа:', 16);
    if (Number(inputKeyLenght)) {
        keyLength = Math.floor(inputKeyLenght);
    } else if (inputKeyLenght === null) {
        alert('Ви не можете відмовитись. Згенеровано ключ за замовчуванням.');
        keyLength = Math.floor(16);
    } else {
        alert('Ви ввели не число або 0.');
    };
} while (!keyLength);

const key = generateKey(keyLength, characters);

document.getElementById('key').innerHTML = `${keyLength}-розрядний ключ: ${key}`;
console.log(`${keyLength}-розрядний ключ: ${key}`);