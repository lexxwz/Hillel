let actionType = prompt('Оберіть бажану дію (один з чотирьох варіантів - add, sub, mult, div).');
const actions = ['add', 'sub', 'mult', 'div'];
if (!actions.includes(actionType)){
    alert('Вы обрали невідому дію');
} else {
    let value1 = Number(prompt('Введіть число 1:'));
    let value2 = Number(prompt('Введіть число 2:'));
    if (value1 && value2) {
        if (actionType === 'add') {alert(`${value1} + ${value2} = ${value1 + value2}`)}
        else if (actionType === 'sub') {alert(`${value1} - ${value2} = ${value1 - value2}`)}
        else if (actionType === 'mult') {alert(`${value1} * ${value2} = ${value1 * value2}`)}
        else if (actionType === 'div') {alert(`${value1} / ${value2} = ${value1 / value2}`)};
    } else {
        alert('Ви ввели не два числа.');
    };
};