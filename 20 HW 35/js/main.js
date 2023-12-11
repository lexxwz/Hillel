const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
};

const availableUserCurrency = Object.keys(userData);

function getMoney(message) {
    return new Promise(function (resolve,reject) {
        const question = confirm(message);
        question ? resolve() : reject();
    })
}

function chooseCurrency(message) {
    let question;
    return new Promise(function (resolve) {
        do {
            question = prompt(message);
        } while (question === null || !availableUserCurrency.includes(question.toUpperCase()));
        resolve(question.toUpperCase());
    })
}

function enterSum(currency) {
    return new Promise(function(resolve, reject) {
        const request = Number(prompt('Введіть потрібну сумму'));
        let message = '';
        if (!request) {message = 'Ви ввели не число або нуль'}
        else if (request > userData[currency] || request > bankData[currency].max) {
            message = `Введена сума більша за доступну. Максимальна сума зняття: ${Math.min(userData[currency], bankData[currency].max)}`
        }
        else if (request < bankData[currency].min) {
            message = `Введена сума менша за доступну. Мінімальна сума зняття: ${bankData[currency].min}`
        };
        message !== '' ?  reject(message) : resolve(request);
    })
}

function displayMessage(message) {
    return new Promise(function (resolve) {
        console.log(message);
        resolve();
    })
}

getMoney('Подивитися баланс карті?')
    .then(
        function(){
            chooseCurrency(`Введіть потрібну валюту для перегляду. Доступні: ${availableUserCurrency}`)
                .then(
                    function(key) {
                        displayMessage(`Баланс становить: ${userData[key]} ${key}`);
                    }
                )
        },
        function(){
            const availableBankCurrency = availableUserCurrency.filter((value) => {
                if (Object.keys(bankData).includes(value)) {
                    return bankData[value].max !== 0;
                }
            })
            chooseCurrency(`Введіть потрібну валюту для зняття. Доступні: ${availableBankCurrency}`)
                .then(
                    function(key) {
                        enterSum(key)
                            .then(
                                function(sum) {
                                    displayMessage(`От Ваші гроші: ${sum} ${key} ${bankData[key].img}`);
                                },
                                function(message) {
                                    displayMessage(message);
                                }
                            )
                    }
                )
        }
    )
    .catch(
        function() {displayMessage('Невідома помилка');}
    )
    .finally(
        function() {displayMessage('Дякую, гарного дня 😊');}
    )