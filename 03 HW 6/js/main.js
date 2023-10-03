let birthYear; let inputBirthYear;
let yourCity; let inputYourCity;
let yourFavoriteSport; let inputYourFavoriteSport; 
let currentYear = new Date().getFullYear()

do {
    let inputBirthYear = prompt('Введіть Ваш рік народження:');
    if (Number(inputBirthYear)) {
        if (String(inputBirthYear).length != 4) {
            alert('Ви ввели не рік. Рік складається з 4-х цифр.');
        } else if (inputBirthYear < 1900) {
            alert('Ви не можете бути таким літнім!');
        } else if (inputBirthYear >= currentYear - 3) {
            alert('Ви гость з майбутнього або дуже замалі!');
        } else {
            birthYear = String(inputBirthYear);
        } 
    } else if (inputBirthYear === null) {
        alert('Шкода, що Ви не захотіли ввести рік народження.');
        break;
    } else {
        alert('Ви ввели не число або 0.');
    }
} while (!birthYear);

do {
    let inputYourCity = (prompt('Введіть Ваше місто:'));
    if (Number(inputYourCity) || inputYourCity === 0) {
        alert('Мабуть Ви ввели рік народження ще раз або просто помилились!');
    } else if (inputYourCity === null) {
        alert('Шкода, що Ви не захотіли ввести своє місто.');
        break;
    } else {
        yourCity = inputYourCity;
    }
} while (!yourCity);

do {
    let inputYourFavoriteSport = (prompt('Введіть Ваш улюблений вид спорту:'));
    if (Number(inputYourFavoriteSport) || inputYourCity === 0) {
        alert('Навряд чи э такий вид спорту!');
    } else if (inputYourFavoriteSport === null) {
        alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.');
        break;
    } else {
        yourFavoriteSport = inputYourFavoriteSport;
    }
} while (!yourFavoriteSport);

let resultMessage = 'Привіт!\n';

if (birthYear) {
    const yourAge = currentYear - birthYear;
    resultMessage += `Ваш вік - ${yourAge}.\n`;
} else {
    resultMessage += 'Ви не ввели свій вік.\n';
};

if (yourCity) {
    resultMessage += `Ви живете у місті ${yourCity}`
    switch (yourCity) {
        case 'Київ':
            resultMessage += ', столиці України.\n';
            break;
        case 'Вашингтон':
            resultMessage += ', столиці США.\n';
            break;
        case 'Лондон':
            resultMessage += ', столиці Англії.\n';
            break;
        default:
            resultMessage += '.\n';
    };
} else {
    resultMessage += 'Ви не ввели своє місто.\n';
};

if (yourFavoriteSport) {
    resultMessage += `Ви полюбляєте ${yourFavoriteSport}.`
    switch (yourFavoriteSport) {
        case 'футбол':
            resultMessage += ' Круто! Хочете стати як Андрій Шевченко?';
            break;
        case 'теніс':
            resultMessage += ' Круто! Хочете стати як Еліна Світоліна?';
            break;
        case 'бокс':
            resultMessage += ' Круто! Хочете стати як Александр Усік?';
            break;
        default:
            resultMessage += ' Гарний вибір!';
    };
} else {
    resultMessage += 'Ви не ввели свій улюблений вид спорту.';
};

alert(resultMessage);